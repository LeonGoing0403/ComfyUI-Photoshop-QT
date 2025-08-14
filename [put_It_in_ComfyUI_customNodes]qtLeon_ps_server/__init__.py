from . import socketioManager
from server import PromptServer
from .socketioManager import (
    LeonEmptyNode,
    LeonSaveImage,
    LeonPreviewImage,
    imageChooser,
    LeonRatioSelectNode,
    LeonIntInputNode,
    LeonFloatInputNode,
    Mask_Fill_Region,
    leon_slider_float_100,
    leon_slider_int_100,
    leon_slider_float_1,
)
from .seedSender import SeedSender

try:
    socketioManager.main(PromptServer)
    print("[Leon PS Debug] Socket.IO server started")
except Exception as e:
    print(f"[Leon PS Debug] Error starting socketio: {e}")

WEB_DIRECTORY = "./web"
NODE_CLASS_MAPPINGS = {
    "LeonEmptyNode": LeonEmptyNode,
    "PsSaveImage": LeonSaveImage,
    "PsPreviewImage": LeonPreviewImage,
    "PsImageChooser": imageChooser,
    "PsSeedSender": SeedSender,
    "PsRatioSelectNode": LeonRatioSelectNode,
    "PsIntInputNode": LeonIntInputNode,
    "PsFloatInputNode": LeonFloatInputNode,
    "MaskFillRegion": Mask_Fill_Region,
    "PsSliderFloat100": leon_slider_float_100,
    "PsSliderInt100": leon_slider_int_100,
    "PsSliderFloat1": leon_slider_float_1,
}
NODE_DISPLAY_NAME_MAPPINGS = {
    "LeonEmptyNode": "LeonEmptyNode",
    "PsSaveImage": "PsSaveImage",
    "PsPreviewImage": "PsPreviewImage",
    "PsImageChooser": "PsImageChooser",
    "PsSeedSender": "PsSeedSender",
    "PsRatioSelectNode": "PsRatioSelectNode",
    "PsIntInputNode": "PsIntInputNode",
    "PsFloatInputNode": "PsFloatInputNode",
    "MaskFillRegion": "MaskFillRegion",
    "PsSliderFloat100": "PsSliderFloat100",
    "PsSliderInt100": "PsSliderInt100",
    "PsSliderFloat1": "PsSliderFloat1",
}


# 将restart函数注册为路由
__all__ = ["WEB_DIRECTORY", "NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS"]
