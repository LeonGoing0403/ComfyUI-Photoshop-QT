import asyncio
import urllib.parse
import os
import json
import logging
import datetime
import traceback
from PIL import Image
from comfy.cli_args import args
import numpy as np
from PIL.PngImagePlugin import PngInfo
from PIL import ImageOps
from folder_paths import (
    get_user_directory,
    get_output_directory,
    get_save_image_path,
    get_temp_directory,
    get_input_directory,
)
import random
from io import BytesIO
from server import PromptServer
import sys
from aiohttp import web
import glob
from datetime import datetime
import time
import os.path
import math
import io
import hashlib
import requests
from comfy import model_management
import base64

try:
    # 新版 5.0+ 的导入方式
    from socketio.asyncio import AsyncServer
except ImportError:
    # 旧版兼容
    from socketio import AsyncServer
import torch
import comfy.utils
import comfy.model_management
import folder_paths


# 新版导入方式
the_socket_map = {}
ppp_instances = {}
global upload_handler


async def restart(request):
    logging.info("\nRestarting...\n\n")
    sys_argv = sys.argv.copy()
    if "--windows-standalone-build" in sys_argv:
        sys_argv.remove("--windows-standalone-build")
    if sys_argv[0].endswith("__main__.py"):
        module_name = os.path.basename(os.path.dirname(sys_argv[0]))
        cmds = [sys.executable, "-m", module_name] + sys_argv[1:]
    elif sys.platform.startswith("win32"):
        cmds = ['"' + sys.executable + '"', '"' + sys_argv[0] + '"'] + sys_argv[1:]
    else:
        cmds = [sys.executable] + sys_argv

    logging.info(f"Command: {cmds}", flush=True)

    return os.execv(sys.executable, cmds)


# 错误日志配置
class ErrorLogger:
    def __init__(self, log_dir="logs"):
        # 确保日志目录存在
        self.log_dir = log_dir
        os.makedirs(self.log_dir, exist_ok=True)

        # 创建日志文件名（基于日期）
        current_date = datetime.now().strftime("%Y-%m-%d")
        self.log_file = os.path.join(self.log_dir, f"error_log_{current_date}.json")

        # 初始化错误列表
        self.error_list = self._load_existing_errors()

        # 配置文件日志
        self.file_logger = logging.getLogger("error_file_logger")
        self.file_logger.setLevel(logging.ERROR)

        # 添加文件处理器
        file_handler = logging.FileHandler(
            os.path.join(self.log_dir, f"error_{current_date}.log")
        )
        file_handler.setLevel(logging.ERROR)
        formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
        file_handler.setFormatter(formatter)

        # 避免重复添加处理器
        if not self.file_logger.handlers:
            self.file_logger.addHandler(file_handler)

    def _load_existing_errors(self):
        """加载已存在的错误记录"""
        if os.path.exists(self.log_file):
            try:
                with open(self.log_file, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                logging.info(f"加载错误日志文件失败: {e}")
                return []
        return []

    def log_error(self, error_type, message, details=None, sid=None):
        """记录一个错误到错误列表和日志文件"""
        timestamp = datetime.now().isoformat()
        # message = json.loads(message)
        # 创建错误记录
        error_record = {
            "timestamp": timestamp,
            "type": error_type,
            "message": message,
            "sid": sid,
            "details": details or {},
        }

        # 添加到错误列表
        self.error_list.append(error_record)

        # 保存到JSON文件
        try:
            with open(self.log_file, "w", encoding="utf-8") as f:
                json.dump(self.error_list, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logging.info(f"保存错误日志失败: {e}")

        # 写入日志文件
        log_message = f"[{error_type}] {message}"
        if sid:
            log_message += f" [SID: {sid}]"
        if details:
            log_message += f" - Details: {json.dumps(details)}"

        self.file_logger.error(log_message)


# 创建错误日志记录器实例
error_logger = ErrorLogger()


def attach_to_comfyui(PromptServer):
    PromptServer.sio = AsyncServer(
        async_mode="aiohttp", cors_allowed_origins="*", max_http_buffer_size=524288000
    )
    PromptServer.sio.attach(PromptServer.instance.app, socketio_path="/leon-ps/")
    global upload_handler
    for route in PromptServer.instance.routes:
        if (
            isinstance(route, web.RouteDef)
            and route.method == "POST"
            and route.path == "/upload/image"
        ):
            upload_handler = route.handler
            break

    PromptServer.loop = PromptServer.instance.loop

    @PromptServer.sio.event
    async def cmdRestart(sid, data):
        await restart(data)

    @PromptServer.sio.event
    async def make_image_selection(sid, payload):
        ChooserMessage.addMessage(payload.get("id"), payload.get("message"))

    @PromptServer.sio.event
    async def connect(sid, environ, auth):
        try:
            # 正确解析查询字符串
            query_string = environ.get("QUERY_STRING", "")

            # 解析查询参数
            query_params = {}
            if query_string:
                query_params = dict(urllib.parse.parse_qsl(query_string))
            # test error

            device_type = query_params.get("deviceType")

            if device_type == "cf_web":
                web_type = auth.get("webType")
                if web_type == "cf_web_normal":
                    logging.info(
                        f"\033[92m### cf_web_normal连接成功，sid: {sid}\033[0m"
                    )
                    ppp_instances[sid] = {"machine": device_type, "web_type": "normal"}
                elif web_type == "cf_web_uxp":
                    ppp_instances[sid] = {"machine": device_type, "web_type": "uxp"}
                    logging.info(f"\033[92m### cf_web_uxp连接成功，sid: {sid}\033[0m")
                    await PromptServer.sio.emit("callWebSetSid", {"data": sid}, to=sid)
                else:
                    logging.info(f"未知设备连接，sid: {sid}")
                    error_logger.log_error(
                        "CONNECT",
                        "未知web_type的cf_web设备",
                        {"web_type": web_type},
                        sid,
                    )
            elif device_type == "ps_plugin":
                ppp_instances[sid] = {"machine": device_type, "web_type": "notWeb"}
                logging.info(f"\033[92mps_plugin连接成功，sid: {sid}\033[0m")
                # 发送sid给web端
                await PromptServer.sio.emit("setPluginSid", {"data": sid}, to=sid)

            else:
                logging.info(f"未知设备连接，sid: {sid}")
                error_logger.log_error(
                    "CONNECT", "未知设备类型连接", {"device_type": device_type}, sid
                )
            logging.info(f"连接后的the_socket_map: {the_socket_map}")
            logging.info(f"连接后的ppp_instances: {ppp_instances}")
        except Exception as e:
            error_logger.log_error(
                "CONNECT",
                f"连接处理异常: {str(e)}",
                {"traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def listenIOMessage(sid, data):
        """通用消息监听器，接收所有客户端发送的消息"""
        try:
            device_type = getSidDeviceType(sid)
            source = f"{device_type}({sid})"
            logging.info(f"\033[96m 收到消息{source} : {data}\033[0m")

            # 检查消息中是否包含错误信息
            if isinstance(data, dict) and data.get("error"):
                error_logger.log_error(
                    "CLIENT_REPORTED",
                    data.get("message", "客户端报告错误"),
                    data.get("error"),
                    sid,
                )
        except Exception as e:
            error_logger.log_error(
                "MESSAGE_HANDLING",
                f"消息处理异常: {str(e)}",
                {"data": data, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def setSocketMap(sid, data):
        try:
            # 将pluginSid和webSid存储到the_socket_map中

            # 变化前的the_socket_map
            logging.info(f"\033[93m变化前的 the_socket_map: {the_socket_map}\033[0m")

            # 验证数据完整性
            if not data.get("pluginSid"):
                error_logger.log_error(
                    "SOCKET_MAP", "缺少pluginSid参数", {"data": data}, sid
                )
                return

            if not data.get("webSid"):
                error_logger.log_error(
                    "SOCKET_MAP", "缺少webSid参数", {"data": data}, sid
                )
                return

            if not data.get("windowName"):
                error_logger.log_error(
                    "SOCKET_MAP", "缺少windowName参数", {"data": data}, sid
                )
                return

            logging.info(f"data.get('pluginSid'): {data.get('pluginSid')}")
            logging.info(f"data.get('webSid'): {data.get('webSid')}")
            logging.info(f"data.get('windowName'): {data.get('windowName')}")

            # 删除具有相同windowName的旧记录
            keys_to_remove = []
            for key, value in the_socket_map.items():
                if value.get("windowName") == data.get("windowName"):
                    keys_to_remove.append(key)

            for key in keys_to_remove:
                logging.info(
                    f"\033[93m删除旧的socket映射, key: {key}, windowName: {the_socket_map[key]['windowName']}\033[0m"
                )
                del the_socket_map[key]

            # 添加新记录
            the_socket_map[data.get("pluginSid")] = {
                "windowName": data.get("windowName"),
                "webSid": data.get("webSid"),
            }

            # 变化后的the_socket_map
            logging.info(f"\033[93m变化后的 the_socket_map: {the_socket_map}\033[0m")
            # 发送消息给web端
            await PromptServer.sio.emit(
                "setSocketMapReady", {"data": True}, to=data.get("webSid")
            )
        except Exception as e:
            await PromptServer.sio.emit(
                "setSocketMapReady", {"data": False}, to=data.get("webSid")
            )
            error_logger.log_error(
                "SOCKET_MAP",
                f"设置Socket映射异常: {str(e)}",
                {"data": data, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def errorMessagesCollecter(sid, data):
        try:
            error_logger.log_error(
                "ERROR_MESSAGES_COLLECTER",
                f"错误来源：{data.get('type')}",
                {
                    "data": data,
                },
                sid,
            )
        except Exception as e:
            error_logger.log_error(
                "ERROR_MESSAGES_COLLECTER",
                f"错误来源：{data.get('type')}",
                {"data": data, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    # 设置工作流数量
    async def setWorkflowCount(sid, data):
        try:
            logging.info(f"\033[93msetWorkflowCount: sid={sid}, data={data}\033[0m")
            # 获取pluginSid
            # time.sleep(2)
            pluginSid = getPluginSid(sid)
            if pluginSid:
                # logging.info(f"\033[93m1111111pluginSid: {pluginSid}\033[0m")
                # 发送消息给web端
                await PromptServer.sio.emit(
                    "setPluginWorkflowCount", {"data": data}, to=pluginSid
                )
            else:
                error_logger.log_error(
                    "SET_WORKFLOW_COUNT",
                    f"未找到对应的pluginSid",
                    {"data": data, "traceback": traceback.format_exc()},
                    sid,
                )
        except Exception as e:
            error_logger.log_error(
                "SET_WORKFLOW_COUNT",
                f"设置工作流数量处理异常: {str(e)}",
                {"data": data, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def disconnect(sid):
        try:
            logging.info(f"客户端断开连接: {sid}")
            # 从 ppp_instances 中移除断开连接的客户端
            if sid in ppp_instances:
                del ppp_instances[sid]
            # 从 the_socket_map 中移除断开连接的客户端
            if sid in the_socket_map:
                del the_socket_map[sid]

            # 检查所the_socket_map中的所有pluginSid是否还在连接状态
            logging.info(f"清理后的 ppp_instances: {ppp_instances}")
            logging.info(f"清理后的 the_socket_map: {the_socket_map}")
        except Exception as e:
            error_logger.log_error(
                "DISCONNECT",
                f"断开连接处理异常: {str(e)}",
                {"traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def workflow_loaded_State(sid, payload):
        try:
            PSid = getPluginSid(sid)
            if PSid:
                await PromptServer.sio.emit(
                    "workflowLoadedSuccessToWeb", {"data": payload}, to=PSid
                )
            else:
                error_logger.log_error(
                    "WORKFLOW_LOADED_STATE",
                    f"未找到对应的pluginSid",
                    {"payload": payload, "traceback": traceback.format_exc()},
                    sid,
                )
        except Exception as e:
            error_logger.log_error(
                "WORKFLOW_LOADED_STATE",
                f"工作流加载状态处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def workflow_loaded(sid, payload):
        try:
            logging.info(
                f"\033[94mworkflow_loaded: sid={sid}, payload={payload}\033[0m"
            )
        except Exception as e:
            error_logger.log_error(
                "WORKFLOW_LOADED",
                f"工作流加载处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def closeAllWorkflows(sid, payload):
        try:
            logging.info(f"\033[94mcloseWorkflow: sid={sid}, payload={payload}\033[0m")
            from_device_type = getSidDeviceType(sid)
            # 检查必要参数
            if not from_device_type:
                logging.info(f"\033[91m无法识别的设备类型，sid={sid}\033[0m")
                error_logger.log_error("DEVICE_TYPE", "无法识别的设备类型", {}, sid)
                await PromptServer.sio.emit(
                    "error", {"message": "无法识别的设备类型"}, to=sid
                )
                return

            if from_device_type != "ps_plugin":
                logging.info(
                    f"\033[91m非插件设备尝试调用closeWorkflow: {from_device_type}\033[0m"
                )
                error_logger.log_error(
                    "PERMISSION",
                    "非插件设备尝试调用closeWorkflow",
                    {"device_type": from_device_type},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "只有Photoshop插件可以使用此功能"}, to=sid
                )
                return

            # 获取窗口名称
            # 获取目标WebView的sid
            PSid = payload.get("pluginSid")
            to_sid = the_socket_map[PSid].get("webSid")
            if not to_sid:
                logging.info(f"\033[91m未找到对应的webSid: {to_sid}\033[0m")
                error_logger.log_error(
                    "MAPPING",
                    "未找到对应的webSid",
                    {"plugin_sid": PSid, "socket_map": the_socket_map},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error",
                    {"message": f"未在the_socket_map中找到对应的pluginSid: {PSid}"},
                    to=sid,
                )
                return
            logging.info(f"\033[93m目标WebView的closeWorkflow的sid: {to_sid}\033[0m")

            # 检查目标是否是WebView
            to_device_info = ppp_instances.get(to_sid, {})
            if to_device_info.get("machine") != "cf_web":
                logging.info(f"\033[91m目标不是WebView: {to_device_info}\033[0m")
                error_logger.log_error(
                    "TARGET",
                    "目标不是WebView",
                    {"to_sid": to_sid, "device_info": to_device_info},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "目标不是WebView"}, to=sid
                )
                return

            # 转发消息到WebView
            try:
                logging.info(f"\033[92m转发closeWorkflow到WebView: {to_sid}, \033[0m")
                # 发送数据到WebView
                await PromptServer.sio.emit("close_all_workflows", {}, to=to_sid)

            except Exception as e:
                logging.info(f"\033[91m转发消息失败: {e}\033[0m")
                error_logger.log_error(
                    "FORWARDING",
                    "转发消息失败",
                    {"error": str(e), "to_sid": to_sid},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": f"消息转发失败: {str(e)}"}, to=sid
                )
        except Exception as e:
            error_logger.log_error(
                "CLOSE_WORKFLOW",
                f"关闭工作流处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def closeWorkflow(sid, payload):
        try:
            logging.info(f"\033[94mcloseWorkflow: sid={sid}, payload={payload}\033[0m")
            from_device_type = getSidDeviceType(sid)
            # 检查必要参数
            if not from_device_type:
                logging.info(f"\033[91m无法识别的设备类型，sid={sid}\033[0m")
                error_logger.log_error("DEVICE_TYPE", "无法识别的设备类型", {}, sid)
                await PromptServer.sio.emit(
                    "error", {"message": "无法识别的设备类型"}, to=sid
                )
                return

            if from_device_type != "ps_plugin":
                logging.info(
                    f"\033[91m非插件设备尝试调用closeWorkflow: {from_device_type}\033[0m"
                )
                error_logger.log_error(
                    "PERMISSION",
                    "非插件设备尝试调用closeWorkflow",
                    {"device_type": from_device_type},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "只有Photoshop插件可以使用此功能"}, to=sid
                )
                return

            if not payload.get("workflowPath"):
                logging.info("\033[91m缺少参数: workflowPath\033[0m")
                error_logger.log_error(
                    "PARAMETER", "缺少workflowPath参数", {"payload": payload}, sid
                )
                await PromptServer.sio.emit(
                    "error", {"message": "缺少参数: workflowPath"}, to=sid
                )
                return

            # 获取窗口名称
            workflow_path = payload.get("workflowPath")
            # 获取目标WebView的sid
            PSid = payload.get("pluginSid")
            to_sid = the_socket_map[PSid].get("webSid")
            if not to_sid:
                logging.info(f"\033[91m未找到对应的webSid: {to_sid}\033[0m")
                error_logger.log_error(
                    "MAPPING",
                    "未找到对应的webSid",
                    {"plugin_sid": PSid, "socket_map": the_socket_map},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error",
                    {"message": f"未在the_socket_map中找到对应的pluginSid: {PSid}"},
                    to=sid,
                )
                return
            logging.info(f"\033[93m目标WebView的closeWorkflow的sid: {to_sid}\033[0m")

            # 检查目标是否是WebView
            to_device_info = ppp_instances.get(to_sid, {})
            if to_device_info.get("machine") != "cf_web":
                logging.info(f"\033[91m目标不是WebView: {to_device_info}\033[0m")
                error_logger.log_error(
                    "TARGET",
                    "目标不是WebView",
                    {"to_sid": to_sid, "device_info": to_device_info},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "目标不是WebView"}, to=sid
                )
                return

            # 转发消息到WebView
            try:
                logging.info(
                    f"\033[92m转发closeWorkflow到WebView: {to_sid}, 工作流路径: {workflow_path}\033[0m"
                )
                # 发送数据到WebView
                await PromptServer.sio.emit(
                    "close_workflow_web", {"data": payload}, to=to_sid
                )

            except Exception as e:
                logging.info(f"\033[91m转发消息失败: {e}\033[0m")
                error_logger.log_error(
                    "FORWARDING",
                    "转发消息失败",
                    {"error": str(e), "to_sid": to_sid},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": f"消息转发失败: {str(e)}"}, to=sid
                )
        except Exception as e:
            error_logger.log_error(
                "CLOSE_WORKFLOW",
                f"关闭工作流处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def openWorkflow(sid, payload):
        try:
            logging.info(f"\033[94mopenWorkflow: sid={sid}, payload={payload}\033[0m")
            print("the_socket_map:", the_socket_map)
            # 为空
            if not the_socket_map:
                logging.info(f"\033[91mthe_socket_map为空\033[0m")
                error_logger.log_error("SOCKET_MAP", "the_socket_map为空", {}, sid)
                await PromptServer.sio.emit(
                    "restart_from_plugin_server",
                    {
                        "message": "the_socket_map为空",
                        "actionID": "reStartedBackendServer",
                    },
                    to=sid,
                )
                return

            from_device_type = getSidDeviceType(sid)
            # 检查必要参数
            if not from_device_type:
                logging.info(f"\033[91m无法识别的设备类型，sid={sid}\033[0m")
                error_logger.log_error("DEVICE_TYPE", "无法识别的设备类型", {}, sid)
                await PromptServer.sio.emit(
                    "error", {"message": "无法识别的设备类型"}, to=sid
                )
                return

            if from_device_type != "ps_plugin":
                logging.info(
                    f"\033[91m非插件设备尝试调用openWorkflow: {from_device_type}\033[0m"
                )
                error_logger.log_error(
                    "PERMISSION",
                    "非插件设备尝试调用openWorkflow",
                    {"device_type": from_device_type},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "只有Photoshop插件可以使用此功能"}, to=sid
                )
                return

            if not payload.get("cdk"):
                logging.info("\033[91m缺少参数: cdk\033[0m")
                error_logger.log_error(
                    "PARAMETER", "缺少cdk参数", {"payload": payload}, sid
                )
                await PromptServer.sio.emit(
                    "error", {"message": "缺少参数: cdk"}, to=sid
                )
                return

            if not payload.get("workflowName"):
                logging.info("\033[91m缺少参数: workflowName\033[0m")
                error_logger.log_error(
                    "PARAMETER", "缺少workflowName参数", {"payload": payload}, sid
                )
                await PromptServer.sio.emit(
                    "error", {"message": "缺少参数: workflowName"}, to=sid
                )
                return
            if not payload.get("mode"):
                logging.info("\033[91m缺少参数: mode\033[0m")
                error_logger.log_error(
                    "PARAMETER", "缺少mode参数", {"payload": payload}, sid
                )
                await PromptServer.sio.emit(
                    "error", {"message": "缺少参数: mode"}, to=sid
                )
                return

            # 获取窗口名称
            window_name = payload.get("windowName")
            # 获取目标WebView的sid
            PSid = payload.get("pluginSid")
            to_sid = the_socket_map[PSid].get("webSid")
            if PSid not in the_socket_map:
                # 需要重启ps插件
                logging.info(
                    f"\033[91mPSid不在the_socket_map中: PSid={PSid}, 现有键={list(the_socket_map.keys())}\033[0m"
                )
                error_logger.log_error(
                    "MAPPING",
                    "PSid不存在于会话映射中",
                    {
                        "plugin_sid": PSid,
                        "socket_map_keys": list(the_socket_map.keys()),
                    },
                    sid,
                )
                await PromptServer.sio.emit(
                    "error",
                    {"message": f"未找到对应的会话记录，请重试（PSid: {PSid}）"},
                    to=sid,
                )
                return
            if not to_sid:
                logging.info(f"\033[91m未找到对应的webSid: {to_sid}\033[0m")
                error_logger.log_error(
                    "MAPPING",
                    "未找到对应的webSid",
                    {"plugin_sid": PSid, "socket_map": the_socket_map},
                    sid,
                )
                await PromptServer.sio.emit(
                    "restart_from_plugin_server",
                    {
                        "message": f"未在the_socket_map中找到对应的pluginSid: {PSid}",
                        "actionID": "reStartedBackendServer",
                    },
                    to=sid,
                )
                return
            logging.info(f"\033[93m目标WebView的openWorkflow的sid: {to_sid}\033[0m")

            # 检查目标是否是WebView
            to_device_info = ppp_instances.get(to_sid, {})
            if to_device_info.get("machine") != "cf_web":
                logging.info(f"\033[91m目标不是WebView: {to_device_info}\033[0m")
                error_logger.log_error(
                    "TARGET",
                    "目标不是WebView",
                    {"to_sid": to_sid, "device_info": to_device_info},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": "目标不是WebView"}, to=sid
                )
                return

            # 转发消息到WebView
            try:
                logging.info(
                    f"\033[92m转发openWorkflow到WebView: {to_sid}, 窗口名称: {window_name}\033[0m"
                )
                # 发送数据到WebView
                await PromptServer.sio.emit(
                    "open_workflow", {"data": payload}, to=to_sid
                )

            except Exception as e:
                logging.info(f"\033[91m转发消息失败: {e}\033[0m")
                error_logger.log_error(
                    "FORWARDING",
                    "转发消息失败",
                    {"error": str(e), "to_sid": to_sid},
                    sid,
                )
                await PromptServer.sio.emit(
                    "error", {"message": f"消息转发失败: {str(e)}"}, to=sid
                )
        except Exception as e:
            error_logger.log_error(
                "OPEN_WORKFLOW",
                f"打开工作流处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def workflowNodesToServer(sid, payload):
        try:
            WebSid = getWebSidByPluginSid(sid)
            if WebSid:
                await PromptServer.sio.emit(
                    "workflowNodesToWeb", {"data": payload}, to=WebSid
                )
                logging.info(f"\033[92m转发workflowNodesToWeb到web: {WebSid}\033[0m")
            else:
                error_logger.log_error(
                    "WORKFLOW_NODES_TO_WEB",
                    f"未找到对应的webSid: {WebSid}",
                    {"payload": payload, "traceback": traceback.format_exc()},
                    sid,
                )
        except Exception as e:
            error_logger.log_error(
                "WORKFLOW_NODES_TO_WEB",
                f"工作流节点信息处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def prompt_error(sid, payload):
        try:
            logging.info(f"\033[94mprompt_error: sid={sid}, payload={payload}\033[0m")
        except Exception as e:
            error_logger.log_error(
                "PROMPT_ERROR",
                f"提示错误处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def workflowInfo(sid, payload):
        try:
            # 获取pluginSid
            PSid = getPluginSid(sid)
            if PSid:
                await PromptServer.sio.emit(
                    "wfInfoToPlugin", {"data": payload}, to=PSid
                )
                logging.info(f"\033[92m转发workflowInfo到plugin: {PSid}\033[0m")
            else:
                error_logger.log_error(
                    "WORKFLOW_INFO",
                    f"未找到对应的pluginSid",
                    {"payload": payload, "traceback": traceback.format_exc()},
                    sid,
                )
        except Exception as e:
            error_logger.log_error(
                "WORKFLOW_INFO",
                f"工作流信息处理异常: {str(e)}",
                {"payload": payload, "traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def upload_image_from_plugin(sid, payload):
        try:
            # logging.info(f"\033[94mupload_image: sid={sid}, payload={payload}\033[0m")
            image = payload.get("fileData")
            filename = payload.get("fileName")
            nodeId = payload.get("nodeId")
            wfName = payload.get("wfName")
            result = await upload_image(image, filename)
            resDic = {"nodeId": nodeId, "wfName": wfName, "result": result}
            await PromptServer.sio.emit(
                "upload_image_result_from_backend", {"data": resDic}, to=sid
            )
        except Exception as e:
            error_logger.log_error(
                "UPLOAD_IMAGE",
                f"上传图片处理异常: {str(e)}",
                {"traceback": traceback.format_exc()},
                sid,
            )

    @PromptServer.sio.event
    async def send_preview_image_to_plugin(sid, payload):
        try:
            logging.info(
                f"\033[94msend_preview_image_to_plugin: sid={sid}, payload={payload}\033[0m"
            )
            # 获取pluginSid
            PSid = getPluginSid(sid)
            if PSid:
                await PromptServer.sio.emit(
                    "sendPreviewImageToPlugin", {"data": payload}, to=PSid
                )
        except Exception as e:
            error_logger.log_error(
                "SEND_PREVIEW_IMAGE_TO_PLUGIN",
                f"发送预览图片处理异常: {str(e)}",
                {"traceback": traceback.format_exc()},
                sid,
            )


def getPluginSidByWindowName(cname):
    logging.info(f"\033[93m尝试通过windowName获取pluginSid, wfname={cname}\033[0m")
    for pluginSid, info in the_socket_map.items():
        window_name = info.get("windowName", "")
        logging.info(
            f"\033[93m对比: 传入的cname={cname}, map中的windowName={window_name}\033[0m"
        )
        if info.get("windowName") == cname:
            logging.info(f"\033[92m找到精确匹配的pluginSid: {pluginSid}\033[0m")
            return pluginSid
    logging.info(f"\033[91m未找到匹配的pluginSid，cname={cname}\033[0m")
    return None


# 获取wsid的pluginSid
def getPluginSid(sid):
    # 遍历the_socket_map，找到对应的pluginSid中·
    for pluginSid, info in the_socket_map.items():
        if info.get("webSid") == sid:
            return pluginSid
    return None


def getWebSidByPluginSid(PSid):
    logging.info(f"the_socket_map22222: {the_socket_map}")
    for pluginSid, info in the_socket_map.items():
        if pluginSid == PSid:
            return info.get("webSid")
    return None


# 获取sid的设备类型
def getSidDeviceType(sid):
    if sid in ppp_instances:
        return ppp_instances[sid].get("machine")
    else:
        return None


# 添加API获取错误日志列表
@PromptServer.instance.routes.get("/leon-ps/error-logs")
async def get_error_logs(request):
    from aiohttp import web

    """返回所有错误日志记录"""
    try:
        return web.json_response(error_logger.error_list)
    except Exception as e:
        return web.json_response({"error": f"获取错误日志失败: {str(e)}"}, status=500)


async def upload_image(image, filename):
    from aiohttp import web

    # 找到 image_upload 处理函数
    global upload_handler
    if upload_handler is None:
        return {"error": "Upload handler not found"}

    # 创建模拟请求对象
    class MakeFile:
        def __init__(self, data):
            self.file = BytesIO(data)
            self.filename = filename

    class MakePost:
        def __init__(self, image):
            self.data = {}
            self.data["image"] = MakeFile(image)
            self.data["overwrite"] = "true"
            self.data["subfolder"] = "leon_ps"

        async def post(self):
            return self

        def get(self, key, default=None):
            return self.data.get(key, default)

    # 调用上传处理函数
    post = MakePost(image)
    result = await upload_handler(post)

    # 如果返回是 JSON 响应，获取实际数据
    if isinstance(result, web.Response):
        return json.loads(result.text)
    pass


def main(PromptServer):
    attach_to_comfyui(PromptServer)


class LeonEmptyNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
        }

    RETURN_TYPES = ()
    FUNCTION = "gogogo"

    CATEGORY = "leon_ps_used"
    DESCRIPTION = "fuck_image"

    def gogogo(
        self,
    ):
        logging.info("passNode")
        return ""


class LeonRatioSelectNode:
    @classmethod
    def INPUT_TYPES(s):
        # 1024x1024, 1536x1024 (landscape), 1024x1536 (portrait), or auto
        return {
            "required": {
                "ratio": (
                    [
                        "1024x1024",
                        "1536x1024",
                        "1024x1536",
                        "auto",
                    ],
                )
            },
        }

    RETURN_TYPES = ()
    FUNCTION = "gogogo"

    CATEGORY = "leon_ps_used"
    DESCRIPTION = "fuck_image"

    def gogogo(
        self,
        ratio,
    ):
        return ratio


class LeonSaveImage:
    def __init__(self):
        self.output_dir = get_output_directory()
        self.type = "output"
        self.prefix_append = "l"
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE", {"tooltip": "The images to save."}),
                "filename_prefix": (
                    "STRING",
                    {
                        "default": "ComfyUI",
                        "tooltip": "The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.",
                    },
                ),
            },
            "optional": {
                "mask": ("MASK", {"tooltip": "The mask to save."}),
            },
            "hidden": {
                "prompt": "PROMPT",
                "extra_pnginfo": "EXTRA_PNGINFO",
                "id": "UNIQUE_ID",
            },
        }

    RETURN_TYPES = ()
    FUNCTION = "leon_save_images"

    OUTPUT_NODE = True

    CATEGORY = "leon_ps_used"
    DESCRIPTION = "fuck_image"

    def leon_save_images(
        self,
        images,
        id,
        filename_prefix="Leon",
        mask=None,
        prompt=None,
        extra_pnginfo=None,
    ):
        # print("prompt111:", prompt)
        # print("extra_pnginfo111:", extra_pnginfo)
        # # 保存prompt
        # with open("prompt.txt", "w") as f:
        #     f.write(json.dumps(prompt))
        # with open("extra_pnginfo.txt", "w") as f:
        #     f.write(json.dumps(extra_pnginfo))
        # # import torch

        client_id = extra_pnginfo["workflow"].get("leonId")
        if client_id is None:
            error_logger.log_error(
                "LEON_SAVE_IMAGE",
                f"client_id not found in data",
                {"payload": extra_pnginfo["workflow"]},
            )
            raise Exception("client_id not found in data")

        # 获取当前工作流节点信息
        current_node_info = extra_pnginfo["workflow"].get("currentWFInputNodes")
        if current_node_info is None:
            error_logger.log_error(
                "LEON_SAVE_IMAGE",
                f"current_node_info not found in data",
                {"payload": extra_pnginfo["workflow"]},
            )
            raise Exception("current_node_info not found in data")

        # 准备要保存的元数据
        metadata_dict = {
            "workflow_info": {
                "nodes": current_node_info,
            }
        }

        filename_prefix += self.prefix_append
        full_output_folder, filename, counter, subfolder, filename_prefix = (
            get_save_image_path(
                filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0]
            )
        )
        results = list()
        imgs_data_list = list()
        # logging.info("mask:", mask)
        # 检查mask是否存在并进行预处理
        has_mask = mask is not None
        if has_mask and mask.dtype == torch.float16:
            mask = mask.to(torch.float32)

        for batch_number, image in enumerate(images):
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))

            # 创建元数据对象
            metadata = PngInfo()
            # 将字典转换为JSON字符串并保存
            metadata.add_text("workflow_info", json.dumps(metadata_dict))

            # 如果有mask，处理mask作为alpha通道
            if has_mask:
                alpha = mask[batch_number].cpu().numpy()
                # 反转alpha值：1变为0，0变为1，因为在mask中1通常表示不透明区域，但在alpha通道中0表示完全透明
                alpha = 1.0 - alpha
                a = 255.0 * alpha

                # 将alpha通道调整为与图像相同大小
                a_resized = Image.fromarray(a).resize(img.size, Image.LANCZOS)
                a_resized = np.clip(a_resized, 0, 255).astype(np.uint8)

                # 添加alpha通道到图像
                img.putalpha(Image.fromarray(a_resized, mode="L"))

            buffered = BytesIO()
            img.save(
                buffered,
                format="PNG",
                pnginfo=metadata,  # 使用包含元数据的PngInfo对象
                compress_level=self.compress_level,
            )
            image_bytes = buffered.getvalue()
            filename_with_batch_num = filename.replace(
                r"%batch_num%", str(batch_number)
            )
            file = f"{filename_with_batch_num}_{counter:05}_.png"
            with open(os.path.join(full_output_folder, file), "wb") as f:
                f.write(image_bytes)
            results.append(
                {"filename": file, "subfolder": subfolder, "type": self.type}
            )
            imgs_data_list.append(image_bytes)
            counter += 1
        thePluginSid = getPluginSidByWindowName(client_id)
        if thePluginSid is None:
            thePluginSid = ""

        # 通过Socket.IO发送图片信息
        try:
            # 发送图片数据

            # 使用已导入的PromptServer实例
            if hasattr(PromptServer, "sio") and hasattr(PromptServer, "loop"):
                import asyncio

                first_image = images[0]
                width, height = first_image.shape[1], first_image.shape[0]
                currentWFName = extra_pnginfo.get("workflow", {}).get("currentWFName")
                # 使用正确的对象发送事件
                theListenName = f"listen_image_result_from_plugin_server"
                asyncio.run_coroutine_threadsafe(
                    PromptServer.sio.emit(
                        theListenName,
                        {
                            "id": id,
                            "images": imgs_data_list,
                            "pluginSid": thePluginSid,
                            "height": height,
                            "width": width,
                            "hasMask": has_mask,
                            "file_info": results,
                            "currentWFName": currentWFName,
                        },
                    ),
                    PromptServer.loop,
                )
                logging.info("图片信息已通过Socket.IO发送")
            else:
                logging.info("PromptServer不包含必要的属性，无法发送Socket.IO消息")

        except Exception as e:
            logging.info(f"通过Socket.IO发送图片信息失败: {e}")

        return {"ui": {"images": results}}

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        # 强制重新执行
        return float("NaN")


class LeonIntInputNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "int": (
                    "INT",
                    {
                        "default": 20,
                        "min": -999999,
                        "max": 999999,
                    },
                )
            },
        }

    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("int",)
    FUNCTION = "get_int"

    CATEGORY = "leon_ps_used"
    DESCRIPTION = "fuck_int"

    def get_int(self, int):
        return (int,)


class LeonFloatInputNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "float": (
                    "FLOAT",
                    {
                        "default": 10.11,
                        "step": 0.01,
                        "min": -0xFFFFFFFFFFFFFFFF,
                        "max": 0xFFFFFFFFFFFFFFFF,
                    },
                )
            },
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("float",)
    FUNCTION = "get_float"

    CATEGORY = "leon_ps_used"
    DESCRIPTION = "fuck_float"

    def get_float(self, float):
        # 限制最多两位小数
        return (round(float, 2),)


class leon_slider_float_100:
    CATEGORY = "leon_ps_used"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "the_value": (
                    "FLOAT",
                    {
                        "display": "slider",
                        "default": 50,
                        "min": 0,
                        "max": 100,
                        "step": 0.1,
                    },
                )  # 定义输出类型
            }
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("FLOAT",)
    FUNCTION = "run"  # 处理函数名

    def __init__(self):
        pass

    def run(self, the_value):
        return (the_value,)


class leon_slider_int_100:
    CATEGORY = "leon_ps_used"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "the_value": (
                    "INT",
                    {
                        "display": "slider",
                        "default": 50,
                        "min": 0,
                        "max": 100,
                        "step": 1,
                    },
                )  # 定义输出类型
            }
        }

    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("INT",)
    FUNCTION = "run"  # 处理函数名

    def __init__(self):
        pass

    def run(self, the_value):
        return (the_value,)


class leon_slider_float_1:
    CATEGORY = "leon_ps_used"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "the_value": (
                    "FLOAT",
                    {
                        "display": "slider",
                        "default": 0.50,
                        "min": 0,
                        "max": 1,
                        "step": 0.01,
                    },
                )  # 定义输出类型
            }
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("FLOAT",)
    FUNCTION = "run"  # 处理函数名

    def __init__(self):
        pass

    def run(self, the_value):
        return (the_value,)


class LeonPreviewImage(LeonSaveImage):
    def __init__(self):
        super().__init__()
        self.output_dir = get_temp_directory()
        self.type = "temp"
        self.prefix_append = "_temp_" + "".join(
            random.choice("abcdefghijklmnopqrstupvxyz") for x in range(5)
        )
        self.compress_level = 1

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
            },
            "hidden": {
                "prompt": "PROMPT",
                "extra_pnginfo": "EXTRA_PNGINFO",
                "id": "UNIQUE_ID",
            },
        }


class ChooserCancelled(Exception):
    pass


class ChooserMessage:
    stash = {}
    messages = {}
    cancelled = False

    @classmethod
    def addMessage(cls, id, message):
        if message == "__cancel__":
            cls.messages = {}
            cls.cancelled = True
        elif message == "__start__":
            cls.messages = {}
            cls.stash = {}
            cls.cancelled = False
        else:
            cls.messages[str(id)] = message

    @classmethod
    def waitForMessage(cls, id, period=0.1, asList=False):
        sid = str(id)
        while not (sid in cls.messages) and not ("-1" in cls.messages):
            model_management.throw_exception_if_processing_interrupted()

            if cls.cancelled:
                cls.cancelled = False
                raise ChooserCancelled()
            time.sleep(period)
        if cls.cancelled:
            cls.cancelled = False
            raise ChooserCancelled()
        message = cls.messages.pop(str(id), None) or cls.messages.pop("-1")
        try:
            if asList:
                return [int(x.strip()) for x in message.split(",")]
            else:
                return int(message.strip())
        except ValueError:
            logging.info(
                f"ERROR IN IMAGE_CHOOSER - failed to parse '${message}' as ${'comma separated list of ints' if asList else 'int'}"
            )
            return [1] if asList else 1


# PIL to Mask
def pil2mask(image):
    image_np = np.array(image.convert("L")).astype(np.float32) / 255.0
    mask = torch.from_numpy(image_np)
    return 1.0 - mask


class Tools_Class:
    """
    Contains various tools and filters for WAS Node Suite
    """

    class Masking:
        @staticmethod
        def fill_region(image):
            from scipy.ndimage import binary_fill_holes

            image = image.convert("L")
            binary_mask = np.array(image) > 0
            filled_mask = binary_fill_holes(binary_mask)
            filled_image = Image.fromarray(filled_mask.astype(np.uint8) * 255, mode="L")
            return ImageOps.invert(filled_image.convert("RGB"))


class imageChooser(LeonPreviewImage):
    @classmethod
    def INPUT_TYPES(self):
        return {
            "required": {
                "mode": (
                    ["Always Pause", "Keep Last Selection"],
                    {"default": "Always Pause"},
                ),
            },
            "optional": {
                "images": ("IMAGE",),
            },
            "hidden": {
                "prompt": "PROMPT",
                "my_unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "chooser"
    OUTPUT_NODE = True
    INPUT_IS_LIST = True
    CATEGORY = "leon_ps_used/Image"

    last_ic = {}

    @classmethod
    def IS_CHANGED(cls, my_unique_id, **kwargs):
        return cls.last_ic[my_unique_id[0]]

    def tensor_bundle(self, tensor_in: torch.Tensor, picks):
        if tensor_in is not None and len(picks):
            batch = tensor_in.shape[0]
            return torch.cat(
                tuple([tensor_in[(x) % batch].unsqueeze_(0) for x in picks])
            ).reshape([-1] + list(tensor_in.shape[1:]))
        else:
            return None

    def save_images(
        self, images, filename_prefix="leon", prompt=None, extra_pnginfo=None
    ):
        from PIL.PngImagePlugin import PngInfo
        import json

        filename_prefix += self.prefix_append
        full_output_folder, filename, counter, subfolder, filename_prefix = (
            folder_paths.get_save_image_path(
                filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0]
            )
        )
        results = list()
        for batch_number, image in enumerate(images):
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            metadata = None
            if not args.disable_metadata:
                metadata = PngInfo()
                if prompt is not None:
                    metadata.add_text("prompt", json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))

            filename_with_batch_num = filename.replace("%batch_num%", str(batch_number))
            file = f"{filename_with_batch_num}_{counter:05}_.png"
            img.save(
                os.path.join(full_output_folder, file),
                pnginfo=metadata,
                compress_level=self.compress_level,
            )
            results.append(
                {"filename": file, "subfolder": subfolder, "type": self.type}
            )
            counter += 1

        return {"ui": {"images": results}}

    def chooser(
        self,
        filename_prefix="Leon",
        prompt=None,
        my_unique_id=None,
        extra_pnginfo=None,
        **kwargs,
    ):
        """
        功能：
        1. 获取图片数据
        2. 保存图片数据
        3. 发送图片数据到客户端
        4. 等待用户选择
        5. 返回选择结果
        """
        # logging.info("extra_pnginfo:",extra_pnginfo)
        # 修复 extra_pnginfo 的访问方式
        client_id = None
        if extra_pnginfo and isinstance(extra_pnginfo, list) and len(extra_pnginfo) > 0:
            workflow_data = extra_pnginfo[0].get("workflow", {})
            client_id = workflow_data.get("leonId")

        logging.info(f"获取到的 client_id: {client_id}")
        id = my_unique_id[0]
        id = id.split(".")[len(id.split(".")) - 1] if "." in id else id
        if id not in ChooserMessage.stash:
            ChooserMessage.stash[id] = {}
        my_stash = ChooserMessage.stash[id]

        # enable stashing. If images is None, we are operating in read-from-stash mode
        if "images" in kwargs:
            my_stash["images"] = kwargs["images"]
        else:
            kwargs["images"] = my_stash.get("images", None)

        if kwargs["images"] is None:
            return (None, None, None, "")
        results = list()
        imgs_data_list = list()

        full_output_folder, filename, counter, subfolder, filename_prefix = (
            get_save_image_path(
                filename_prefix,
                self.output_dir,
                my_stash["images"][0].shape[1],
                my_stash["images"][0].shape[0],
            )
        )
        filname_prefix = "Leon" + self.prefix_append

        # logging.info("my_stash['images'].shape:",my_stash['images'].shape)
        for batch_number, image in enumerate(my_stash["images"]):
            # logging.info("batch_number:",batch_number)
            # logging.info("image:",image)
            # logging.info("image.shape:",image.shape)
            # 确保图像格式正确 [height, width, channels]
            i = 255.0 * image.cpu().numpy()
            # 处理每个batch中的所有图片
            images_to_process = []
            if len(i.shape) == 4:
                # 如果是batch数据，处理所有帧
                for batch_idx in range(i.shape[0]):
                    images_to_process.append(i[batch_idx])
            else:
                # 单张图片直接处理
                images_to_process.append(i)

            # 处理每一帧图片
            for idx, img_data in enumerate(images_to_process):
                img = Image.fromarray(np.clip(img_data, 0, 255).astype(np.uint8))
                metadata = ""

                buffered = BytesIO()
                img.save(
                    buffered,
                    format="PNG",
                    pnginfo=metadata,
                    compress_level=self.compress_level,
                )
                image_bytes = buffered.getvalue()

                current_batch_num = batch_number * len(images_to_process) + idx
                filename_with_batch_num = filename.replace(
                    "%batch_num%", str(current_batch_num)
                )
                file = f"{filename_with_batch_num}_{counter:05}_.png"

                with open(os.path.join(full_output_folder, file), "wb") as f:
                    f.write(image_bytes)
                results.append(
                    {"filename": file, "subfolder": subfolder, "type": self.type}
                )
                imgs_data_list.append(image_bytes)
                counter += 1

        images_in = torch.cat(kwargs.pop("images"))
        self.batch = images_in.shape[0]
        for x in kwargs:
            kwargs[x] = kwargs[x][0]
        result = self.save_images(images=images_in, prompt=prompt)

        images = result["ui"]["images"]
        PromptServer.instance.send_sync(
            "easyuse-image-choose", {"id": id, "urls": images}
        )

        first_img = my_stash["images"][0]
        # logging.info("my_stash['images'][0]:",my_stash['images'][0])
        width, height = first_img.shape[2], first_img.shape[1]
        # logging.info("width,height:", first_img.shape[1], first_img.shape[0])
        import asyncio

        # print("extra_pnginfo:", extra_pnginfo)
        wfName = extra_pnginfo[0].get("workflow", {}).get("currentWFName")

        theListenName = f"listen_chooser_image_result_from_plugin_server"
        thePluginSid = getPluginSidByWindowName(client_id)
        asyncio.run_coroutine_threadsafe(
            PromptServer.sio.emit(
                theListenName,
                {
                    "id": id,
                    "images": imgs_data_list,
                    "pluginSid": thePluginSid,
                    "height": height,
                    "width": width,
                    "hasMask": False,
                    "currentWFName": wfName,
                },
            ),
            PromptServer.loop,
        )
        # 获取上次选择
        mode = kwargs.pop("mode", "Always Pause")
        last_choosen = None
        if mode == "Keep Last Selection":
            if not extra_pnginfo:
                logging.info("Error: extra_pnginfo is empty")
            elif (
                not isinstance(extra_pnginfo[0], dict)
                or "workflow" not in extra_pnginfo[0]
            ):
                logging.info(
                    "Error: extra_pnginfo[0] is not a dict or missing 'workflow' key"
                )
            else:
                workflow = extra_pnginfo[0]["workflow"]
                node = next((x for x in workflow["nodes"] if str(x["id"]) == id), None)
                if node:
                    last_choosen = node["properties"]["values"]

        # wait for selection
        try:
            selections = (
                ChooserMessage.waitForMessage(id, asList=True)
                if last_choosen is None or len(last_choosen) < 1
                else last_choosen
            )
            logging.info(f"selections: {selections}")
            choosen = [x for x in selections if x >= 0] if len(selections) > 1 else [0]
        except ChooserCancelled:
            raise comfy.model_management.InterruptProcessingException()

        return {
            "ui": {"images": images},
            "result": (self.tensor_bundle(images_in, choosen),),
        }


class Mask_Fill_Region:
    def __init__(self):
        self.WT = Tools_Class()

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "masks": ("MASK",),
            }
        }

    CATEGORY = "leon_ps_used"

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("MASKS",)

    FUNCTION = "fill_region"

    def fill_region(self, masks):
        if masks.ndim > 3:
            regions = []
            for mask in masks:
                mask_np = np.clip(255.0 * mask.cpu().numpy().squeeze(), 0, 255).astype(
                    np.uint8
                )
                pil_image = Image.fromarray(mask_np, mode="L")
                region_mask = self.WT.Masking.fill_region(pil_image)
                region_tensor = pil2mask(region_mask).unsqueeze(0)
                regions.append(region_tensor)
            regions_tensor = torch.cat(regions, dim=0)
            return (regions_tensor,)
        else:
            mask_np = np.clip(255.0 * masks.cpu().numpy().squeeze(), 0, 255).astype(
                np.uint8
            )
            pil_image = Image.fromarray(mask_np, mode="L")
            region_mask = self.WT.Masking.fill_region(pil_image)
            region_tensor = pil2mask(region_mask).unsqueeze(0)
            return (region_tensor,)


@PromptServer.instance.routes.get("/leon-ps/thumbnail/{filename:.*}")
async def serve_thumbnail(request):
    """提供缩略图访问服务"""
    try:
        filename = request.match_info["filename"]
        output_dir = get_output_directory()
        file_path = os.path.join(output_dir, filename)

        # 生成缩略图
        thumb_size = (150, 150)  # 设置更小的缩略图尺寸

        # 创建缩略图缓存目录
        cache_dir = os.path.join(get_temp_directory(), "thumbnails")
        os.makedirs(cache_dir, exist_ok=True)

        # 生成缓存文件名
        file_hash = hashlib.md5(file_path.encode()).hexdigest()
        thumb_path = os.path.join(cache_dir, f"{file_hash}_thumb.jpg")

        # 如果缩略图不存在或原图有更新，重新生成
        if not os.path.exists(thumb_path) or os.path.getmtime(
            file_path
        ) > os.path.getmtime(thumb_path):
            with Image.open(file_path) as img:
                # 转换为RGB模式
                if img.mode in ("RGBA", "LA"):
                    background = Image.new("RGB", img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                elif img.mode != "RGB":
                    img = img.convert("RGB")

                # 生成缩略图
                img.thumbnail(thumb_size, Image.Resampling.LANCZOS)
                img.save(thumb_path, "JPEG", quality=85, optimize=True)

        return web.FileResponse(thumb_path)
    except Exception as e:
        error_logger.log_error(
            "SERVE_THUMBNAIL",
            f"提供缩略图访问服务失败: {str(e)}",
            {"filename": filename, "traceback": traceback.format_exc()},
        )
        return web.Response(status=500)


@PromptServer.instance.routes.get("/leon-ps/get-output-images")
async def get_output_images(request):
    """获取输出文件夹中的所有图片信息，支持分页和搜索"""
    try:
        # 获取分页、搜索和图片类型参数
        try:
            page = int(request.query.get("page", "1"))
            page_size = int(request.query.get("pageSize", "30"))
            search_query = request.query.get("search", "").lower()
            image_types_str = request.query.get("imageTypes", "[]")
            image_types = json.loads(image_types_str)
        except (TypeError, ValueError, json.JSONDecodeError) as e:
            logging.error(f"参数解析错误: {str(e)}")
            page = 1
            page_size = 30
            search_query = ""
            image_types = []

        output_dir = get_output_directory()
        all_images = []

        # 构建文件匹配模式
        if image_types and len(image_types) > 0:
            # 使用提供的图片类型构建匹配模式
            file_patterns = [f"**/*.{ext.lower()}" for ext in image_types]
        else:
            # 默认只搜索 png 文件
            file_patterns = ["**/*.png"]

        # 获取所有符合条件的图片文件
        for pattern in file_patterns:
            for file_path in glob.glob(
                os.path.join(output_dir, pattern), recursive=True
            ):
                file_stat = os.stat(file_path)
                relative_path = os.path.relpath(file_path, output_dir)

                # 如果有搜索查询，先检查文件名是否匹配
                if search_query and search_query not in relative_path.lower():
                    continue

                # 获取图片信息
                try:
                    with Image.open(file_path) as img:
                        width, height = img.size
                        resolution = f"{width}x{height}"

                        # 读取基本的元数据信息
                        metadata = {}
                        if "workflow_info" in img.info:
                            try:
                                workflow_info = json.loads(img.info["workflow_info"])
                                metadata = {
                                    "node_info": workflow_info.get(
                                        "workflow_info", {}
                                    ).get("nodes", [])
                                }
                            except json.JSONDecodeError:
                                pass

                        image_info = {
                            "filename": relative_path,
                            "path": relative_path,
                            "url": f"/leon-ps/output/{relative_path}",
                            "thumbnail_url": f"/leon-ps/thumbnail/{relative_path}",
                            "date": datetime.fromtimestamp(file_stat.st_mtime).strftime(
                                "%Y-%m-%d %H:%M:%S"
                            ),
                            "size": f"{file_stat.st_size / 1024:.1f} KB",
                            "resolution": resolution,
                            "metadata": metadata,  # 添加基本元数据信息
                        }
                        all_images.append(image_info)
                except Exception as e:
                    logging.error(f"读取图片信息失败: {e}")
                    continue

        # 按修改时间倒序排序
        all_images.sort(
            key=lambda x: datetime.strptime(x["date"], "%Y-%m-%d %H:%M:%S"),
            reverse=True,
        )

        # 计算分页信息
        total = len(all_images)
        total_pages = math.ceil(total / page_size)
        start_idx = (page - 1) * page_size
        end_idx = start_idx + page_size

        # 获取当前页的图片
        current_page_images = all_images[start_idx:end_idx]

        return web.json_response(
            {
                "images": current_page_images,
                "pagination": {
                    "current": page,
                    "pageSize": page_size,
                    "total": total,
                    "totalPages": total_pages,
                },
            }
        )
    except Exception as e:
        logging.error(f"获取输出图片列表失败: {str(e)}")
        error_logger.log_error(
            "GET_OUTPUT_IMAGES",
            f"获取输出图片列表失败: {str(e)}",
            {"traceback": traceback.format_exc()},
        )
        return web.json_response(
            {
                "images": [],
                "pagination": {
                    "current": 1,
                    "pageSize": 30,
                    "total": 0,
                    "totalPages": 0,
                },
            }
        )


@PromptServer.instance.routes.post("/leon-ps/delete-output-image")
async def delete_output_image(request):
    """删除指定的输出图片"""
    try:
        data = await request.json()
        filename = data.get("filename")
        # print(f"删除的文件名: {filename}")
        if not filename:
            return web.json_response({"error": "未提供文件名"}, status=400)

        output_dir = get_output_directory()
        file_path = os.path.join(output_dir, filename)

        # 安全检查：确保文件路径在输出目录内
        if not os.path.abspath(file_path).startswith(os.path.abspath(output_dir)):
            return web.json_response({"error": "非法的文件路径"}, status=400)

        if os.path.exists(file_path):
            os.remove(file_path)
            return web.json_response({"success": True})
        else:
            return web.json_response({"error": "文件不存在"}, status=404)
    except Exception as e:
        error_logger.log_error(
            "DELETE_OUTPUT_IMAGE",
            f"删除输出图片失败: {str(e)}",
            {"filename": filename, "traceback": traceback.format_exc()},
        )
        return web.json_response({"error": str(e)}, status=500)


@PromptServer.instance.routes.post("/leon-ps/image_get_preview")
async def image_get_preview(request):
    """获取图片预览"""
    try:
        data = await request.json()
        image_path = data.get("filePath")
        input_dir = get_input_directory()
        # print("image_path:", image_path)
        # print("input_dir:", input_dir)
        image_path = os.path.join(input_dir, image_path)
        if not os.path.abspath(image_path).startswith(os.path.abspath(input_dir)):
            return web.json_response({"status": "error", "content": "图片路径不存在"})
        if os.path.exists(image_path):
            # 转换为base64
            with open(image_path, "rb") as image_file:
                image_data = image_file.read()
                base64_image = base64.b64encode(image_data).decode("utf-8")
                # `data:${mimeType};base64,${base64Data}`
                mime_type = "image/png"
                base64_image = f"data:{mime_type};base64,{base64_image}"
            return web.json_response({"status": "success", "content": base64_image})
        else:
            return web.json_response({"status": "error", "content": "图片路径不存在"})
    except Exception as e:
        # print("image_get_preview error:", e)
        return web.json_response({"status": "error", "content": str(e)})


@PromptServer.instance.routes.get("/leon-ps/output/{filename:.*}")
async def serve_output_image(request):
    """提供输出图片的访问服务"""
    try:
        filename = request.match_info["filename"]
        output_dir = get_output_directory()
        file_path = os.path.join(output_dir, filename)

        # 安全检查：确保文件路径在输出目录内
        if not os.path.abspath(file_path).startswith(os.path.abspath(output_dir)):
            return web.Response(status=403)

        if os.path.exists(file_path):
            return web.FileResponse(file_path)
        else:
            return web.Response(status=404)
    except Exception as e:
        error_logger.log_error(
            "SERVE_OUTPUT_IMAGE",
            f"提供图片访问服务失败: {str(e)}",
            {"filename": filename, "traceback": traceback.format_exc()},
        )
        return web.Response(status=500)


def get_version_from_server():
    # 开源版本不再从服务器获取版本信息
    return {
        "status": "error",
        "version": "1.0.0",
        "content": "获取版本信息失败",
        "date": datetime.now().strftime("%Y-%m-%d"),
    }


@PromptServer.instance.routes.post("/leon-ps/get-wf")
async def get_workorder(request):
    try:
        # First await the JSON data
        data = await request.json()

        the_user_paths = get_user_directory()
        the_wf_paths = os.path.join(the_user_paths, "default", "workflows")

        if not data or "file" not in data:
            return web.Response(
                status=400,
                text=json.dumps({"error": "Missing file parameter"}),
                content_type="application/json",
            )

        file_name = data["file"]

        full_path = os.path.join(the_wf_paths, file_name)

        if not os.path.isfile(full_path):
            return web.Response(
                status=404,
                text=json.dumps({"error": "File not found"}),
                content_type="application/json",
            )

        with open(full_path, "r", encoding="utf-8") as file:
            file_content = json.load(file)
            return web.Response(
                text=json.dumps(file_content, ensure_ascii=False),
                content_type="application/json",
            )

    except json.JSONDecodeError as e:
        return web.Response(
            status=400,
            text=json.dumps({"error": "Invalid JSON in request"}),
            content_type="application/json",
        )
    except Exception as e:
        error_msg = f"get_workorder error: {str(e)}"
        return web.Response(
            status=500,
            text=json.dumps({"error": error_msg}),
            content_type="application/json",
        )


# 获取文件数据
@PromptServer.instance.routes.get("/leon-ps/get-version")
async def get_version_route(request):
    """服务版本号"""
    try:
        return web.json_response(get_version_from_server())
    except Exception as e:
        return web.json_response(
            {
                "status": "error",
                "version": "1.0.0",
                "content": f"获取版本信息失败: {str(e)}",
                "date": datetime.now().strftime("%Y-%m-%d"),
            }
        )


if __name__ == "__main__":
    asyncio.run(main())
