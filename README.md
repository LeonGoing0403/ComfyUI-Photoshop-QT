

# ComfyUI-Photoshop-QTLeon 快图 PS 插件开源指南

中文 | [English](README_EN.md)

## 1. （必要）安装插件和依赖

首先，你需要将插件下载到 `custom_nodes` 文件夹中。

1. 打开终端，下载节点文件并进入节点的根目录：
   ```bash
   cd custom_nodes/qtLeon_ps_server
   ```

   <details>
   <summary>图示：查看节点目录结构图</summary>
   
   ![节点目录结构](images/nodes.png)
   </details>

2. 安装节点所需的依赖：
   ```bash
   pip install -r requirements.txt
   ```

3. 将插件文件放入 PS 的根目录文件夹，MacOS 案例:
   ```bash
   /Applications/Adobe Photoshop 2025/Plug-ins
   ```

## 2. （必要）修改前端项目代码

此步骤是为了修复前端代码中对于工作流状态管理逻辑中的一个潜在问题。对 `activeWorkflow` 和 `changeTracker` 状态进行空值判断，以确保其正常运行。具体代码逻辑如下：

```javascript
activeWorkflow?.changeTracker?.store();
```

1. 找到 ComfyUI 前端项目的静态文件目录。例如：
   ```bash
   /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/comfyui_frontend_package/static
   ```

2. 进入该目录：
   ```bash
   cd /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/comfyui_frontend_package/static
   ```

3. 删除此目录下的所有文件，并用插件提供的**前端内容**替换它们。

   <details>
   <summary>图示：查看前端静态文件目录</summary>
   
   ![前端静态文件目录](images/f_static.png)
   </details>

## 3. （必要）设置工作流显示状态

为了让 Photoshop 端能够正确运行和监控工作流状态，你需要将 ComfyUI 的工作流面板设置为侧边栏显示。

1. 启动 ComfyUI 的后端服务器。在 ComfyUI 根目录下运行：
   ```bash
   python main.py
   ```

2. 访问 ComfyUI Web 界面：`http://127.0.0.1:8188/`

3. 点击左上角的**Logo**后，在下拉菜单中点击**设置**按钮。

   <details>
   <summary>图示：查看设置按钮位置</summary>
   
   ![设置按钮位置](images/settings.png)
   </details>

4. 在设置菜单中的**Comfy**分栏中，找到**已打开工作流的位置**选项，并将其设置为**侧边栏**。

   <details>
   <summary>图示：查看工作流设置选项</summary>
   
   ![工作流设置选项](images/settings2.png)
   </details>

5. 如果此设置不正确，Photoshop 端将无法正确获取工作流数量，并可能报以下错误：
   ```json
   [ERROR_MESSAGES_COLLECTER] 错误来源：getWorkflowCountError [SID: EBwBoYDRg7v1_wiKAAAH] - Details: {"data": {"type": "getWorkflowCountError", "message": "获取工作流数量失败TypeError: null is not an object (evaluating '_0x4e817f['textContent']')"}}
   ```

### 4\. （可选）修改 Comfy 后端代码以监听错误信息

如果你想在 Photoshop 端接收 ComfyUI 的发送的弹窗错误信息，可以修改 `server.py` 文件。

1.  找到 ComfyUI 根目录下的 `server.py` 文件。

2.  修改第 668 行 `/prompt` 端点代码中的逻辑，在指定位置添加以下两段代码。

3.  **代码 1：** 在 705 行后添加以下代码，用于处理**工作流验证失败**的错误：

    ```python
    await self.send(
        "prompt_error",
        {"title": valid[1], "errors": valid[3]},
    )
    ```

4.  **代码 2：** 在 717 行后添加以下代码，用于处理**提交提示失败**的错误：

    ```python
    await self.send(
        "prompt_error",
        {"error": error},
    )
    ```

完整实例：

<details>
<summary>图示：查看服务器代码修改示例</summary>

![服务器代码修改](images/ServerCodeChaned.png)
</details>

<details>
<summary>图示：查看错误提示示例</summary>

![错误提示](images/error.jpg)
</details>

## 5. 启动并使用插件

启动 Comfyui，打开 PS，在增效工具中打开使用插件。

<details>
<summary>图示：查看插件界面预览</summary>

![插件主界面](images/home.jpg)
</details>
