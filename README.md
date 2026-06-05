# GT7 Track Atlas

当前版本：`1.4.0`

GT7 Track Atlas 是一个面向进阶玩家的本地训练助手。主站仍然可以直接用 `file:///E:/GT7guidebook/index.html` 打开；遥测功能通过本机 `telemetry-agent` 读取 PS5 / GT7 UDP 数据，不上传、不需要账号、不依赖后端。

## 当前能力

- 按 GT7 World Circuits 地区整理 41 个赛道地点和 121 个官方布局。
- 每个 layout 独立显示赛道图、长度、弯角、最长直道、海拔差、车辆建议与训练目标。
- 本地训练记录保存在浏览器中，支持目标难度、最佳圈速、练习状态、收藏和练习笔记。
- V1.4 新增遥测状态中心：明确显示 agent 未启动、等待 PS5、解密失败、实时在线和遥测中断。
- V1.4 新增待归档遥测圈：完成圈先保存 trace，再由用户确认 layout 后写入训练记录。
- V1.4 新增布局模板：把当前遥测圈绑定为当前 layout 模板，后续圈会给出推荐 layout、置信度和冲突提示。

## 本地打开

直接打开：

```powershell
E:\GT7guidebook\index.html
```

或在浏览器地址栏使用：

```text
file:///E:/GT7guidebook/index.html
```

## 遥测测试

确保 PC 和 PS5 在同一局域网，并在 GT7 中进入实际驾驶画面后运行：

```powershell
npm run telemetry -- --ps5 192.168.3.78
```

默认端口：

- UDP 接收：`33740`
- PS5 心跳：`33739`
- 本地健康检查：`http://127.0.0.1:8787/health`
- WebSocket：`ws://127.0.0.1:8787/live`

如果主站显示没有连接上 PS5，优先检查：

- PS5 IP 是否正确。
- PC 与 PS5 是否在同一网段。
- GT7 是否已经进入驾驶而不是主菜单。
- Windows 防火墙是否允许 Node.js 使用 UDP `33740/33739`。
- 是否有其他 GT7 telemetry 工具占用了端口。

## 数据保存策略

- `localStorage`：训练摘要、偏好、待归档列表。
- `IndexedDB gt7-track-atlas-telemetry-v1`：降采样 trace、lap summary、归档 layout、布局模板。
- 所有数据默认只在本机浏览器中保存，不上传到 GitHub 或第三方服务。

## 维护说明

项目保持静态结构：

- `index.html`
- `styles.css`
- `app.js`
- `official-tracks-data.js`
- `layout-assets.js`
- `layout-verification.js`
- `vehicle-assets.js`
- `telemetry-agent/index.js`

语法检查：

```powershell
node --check app.js
node --check telemetry-agent/index.js
npm run telemetry -- --self-test
```
