


<div align="center">
    <h2>ComfyUI-Photoshop-QTLeon 快图 PS 插件开源指南</h2>
    <h3>ComfyUI-Photoshop-QTLeon Plugin Open Source Guide</h3>
</div>


### 1\. （必要）安装插件和依赖  
**1. (Required) Install Plugin and Dependencies**


首先，你需要将插件下载到 `custom_nodes` 文件夹中。  
First, download the plugin to the `custom_nodes` folder.


1.  打开终端，下载节点文件并进入节点的根目录：  
    Open terminal, download node files and enter the root directory:

    ```bash
    cd custom_nodes/qtLeon_ps_server
    ```


2.  安装节点所需的依赖：  
    Install required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3.  将插件文件放入 PS 的根目录文件夹，MacOS 案例:  
    Put the plugin files into the PS root directory, e.g. on MacOS:

    ```
    /Applications/Adobe Photoshop 2025/Plug-ins
    ```



### 2\. （必要）修改前端项目代码  
**2. (Required) Modify Frontend Project Code**

此步骤是为了修复前端代码中对于工作流状态管理逻辑中的一个潜在问题。  
This step is to fix a potential issue in the workflow state management logic in the frontend code.
对 `activeWorkflow` 和 `changeTracker` 状态进行空值判断，以确保其正常运行。  
Check for null values in `activeWorkflow` and `changeTracker` to ensure normal operation.  
具体代码逻辑如下 / Example code:

```javascript
activeWorkflow?.changeTracker?.store();
```


1.  找到 ComfyUI 前端项目的静态文件目录。例如，我的地址是：  
    Find the static directory of the ComfyUI frontend project. For example:

    ```bash
    /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/comfyui_frontend_package/static
    ```


2.  进入该目录：  
    Enter this directory:

    ```bash
    cd /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/comfyui_frontend_package/static
    ```


3.  删除此目录下的所有文件，并用插件提供的**前端内容**替换它们。  
        Delete all files in this directory and replace them with the frontend content provided by the plugin.
        <div align="center">
            <img src="images/f_static.png" width="400" alt="前端静态目录 Frontend static directory"/>
            <br/>
            <sub>前端静态目录 / Frontend static directory</sub>
        </div>


### 3\. （必要）设置工作流显示状态  
**3. (Required) Set Workflow Display Status**

为了让 Photoshop 端能够正确运行和监控工作流状态，你需要将 ComfyUI 的工作流面板设置为侧边栏显示。  
To ensure the Photoshop side can correctly run and monitor workflow status, set the ComfyUI workflow panel to display as a sidebar.


1.  启动 ComfyUI 的后端服务器。在 ComfyUI 根目录下运行：  
    Start the ComfyUI backend server. In the ComfyUI root directory, run:

    ```bash
    python main.py
    ```


2.  访问 ComfyUI Web 界面：`http://127.0.0.1:8188/`。  
    Visit the ComfyUI web interface: `http://127.0.0.1:8188/`


3.  点击左上角的**Logo**后，在下拉菜单中点击**设置**按钮。  
        Click the **Logo** in the upper left, then click the **Settings** button in the dropdown menu.
        <div align="center">
            <img src="images/settings.png" width="400" alt="设置菜单 Settings menu"/>
            <br/>
            <sub>设置菜单 / Settings menu</sub>
        </div>


4.  在设置菜单中的**Comfy**分栏中，找到**已打开工作流的位置**选项，并将其设置为**侧边栏**。  
        In the **Comfy** tab of the settings menu, find the **Workflow location** option and set it to **Sidebar**.
        <div align="center">
            <img src="images/settings2.png" width="400" alt="工作流位置设置 Workflow location setting"/>
            <br/>
            <sub>工作流位置设置 / Workflow location setting</sub>
        </div>


5.  如果此设置不正确，Photoshop 端将无法正确获取工作流数量，并可能报以下错误：  
    If this setting is incorrect, the Photoshop side will not be able to get the workflow count correctly and may report the following error:

    ```json
    [ERROR_MESSAGES_COLLECTER] 错误来源：getWorkflowCountError [SID: EBwBoYDRg7v1_wiKAAAH] - Details: {"data": {"type": "getWorkflowCountError", "message": "获取工作流数量失败TypeError: null is not an object (evaluating '_0x4e817f['textContent']')"}}
    ```


### 4\. （可选）修改 Comfy 后端代码以监听错误信息  
**4. (Optional) Modify Comfy Backend Code to Listen for Error Messages**

如果你想在 Photoshop 端接收 ComfyUI 的发送的弹窗错误信息，可以修改 `server.py` 文件。  
If you want to receive popup error messages sent by ComfyUI on the Photoshop side, you can modify the `server.py` file.


1.  找到 ComfyUI 根目录下的 `server.py` 文件。  
    Find the `server.py` file in the ComfyUI root directory.


2.  修改第 668 行 `/prompt` 端点代码中的逻辑，在指定位置添加以下两段代码。  
    Modify the logic of the `/prompt` endpoint at line 668 and add the following two code snippets at the specified positions.


3.  **代码 1：** 在 705 行后添加以下代码，用于处理**工作流验证失败**的错误：  
    Code 1: Add the following code after line 705 to handle workflow validation failure errors:

    ```python
    await self.send(
        "prompt_error",
        {"title": valid[1], "errors": valid[3]},
    )
    ```


4.  **代码 2：** 在 717 行后添加以下代码，用于处理**提交提示失败**的错误：  
    Code 2: Add the following code after line 717 to handle prompt submission failure errors:

    ```python
    await self.send(
        "prompt_error",
        {"error": error},
    )
    ```

完整实例：  
Full example:
<div align="center">
    <img src="images/ServerCodeChaned.png" width="400" alt="后端代码修改 Backend code change"/>
    <br/>
    <sub>后端代码修改 / Backend code change</sub>
</div>
<div align="center">
    <img src="images/error.jpg" width="400" alt="错误弹窗 Error popup"/>
    <br/>
    <sub>错误弹窗 / Error popup</sub>
</div>



### 5\. 启动，打开 Comfyui，打开 PS，在增效工具中打开使用插件。  
**5. Start, open ComfyUI, open PS, and use the plugin in the extension panel.**
<div align="center">
    <img src="images/home.jpg" width="400" alt="插件首页 Plugin home"/>
    <br/>
    <sub>插件首页 / Plugin home</sub>
</div>
