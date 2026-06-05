# GT7 Track Atlas

一个可离线打开的 Gran Turismo 7 赛道训练助手，按 World Circuits 大陆分区整理赛道，提供布局图、目标圈速、车辆选择建议、本地训练记录、PS5 / GT7 遥测读取，以及面向驾照考试的 AI 教练复盘。

当前版本：`1.4.0`

当前工作进展包含 `V1.5 License AI Coach MVP`：在 V1.4 遥测归档能力上，新增驾照考试选择、教练模式页面、遥测尝试记录和基于真实跑圈 trace 的油门、刹车、入弯与出弯建议。

## Product Notes

- [V1.5 驾照 AI 教练](./docs/v1.5-license-ai-coach.md)：把已完成的遥测 trace 转成可执行复盘建议，面向驾照考试金牌目标分析刹车区、滑行、出弯给油延迟、全油比例和入弯速度损失。
- [V1.4 遥测训练闭环](./docs/v1.4-telemetry-training-loop.md)：把实时遥测升级为可日常使用的本地训练归档流程，支持状态中心、待归档遥测圈、layout 模板和冲突确认。
- [V1.3 遥测实时读取](./telemetry-agent/README.md)：验证 PS5 / GT7 UDP telemetry 链路，主站新增实时连接面板，显示车速、挡位、转速、油门、刹车和采样率。
- [V1.2 训练闭环路线](./docs/v1.2-training-loop-roadmap.md)：把平台升级为手动记录驱动的日常训练助手，重点优化“今天练什么”、多次练习记录、复盘反馈和车辆推荐联动。

## 当前版本

**V1.4.0 - 遥测归档与训练闭环**

本版本把训练仪表盘升级为可连接本机 `telemetry-agent` 的遥测训练助手：页面可以读取 PS5 / GT7 UDP 数据，显示实时车速、挡位、转速、油门、刹车和采样率；完成一圈后先保存为待归档 trace，再由用户确认 layout 后写入训练记录。

当前开发分支上已经加入 V1.5 驾照 AI 教练 MVP。它不会控制 PS5，也不会替玩家驾驶；它只读取用户真实跑圈数据，在用户选定驾照考试和赛段后，给出更快圈速所需的刹车点、入弯、滑行和出弯油门建议。

完整记录见 [CHANGELOG.md](./CHANGELOG.md)。

## 驾照教练模式

主站支持普通驾照与 Master 驾照数据，并把每个考试作为独立训练对象处理。选择驾照项目后进入教练模式页面，页面会显示：

- 驾照考试、车辆、目标金牌时间和当前目标差距。
- 对应赛道或考试赛段的布局信息。
- 本地 telemetry agent 状态和实时驾驶数据。
- 当前尝试记录、复盘摘要和 AI Coach 建议。

注意：GT7 UDP 遥测可以提供车速、油门、刹车、挡位、转速、位置和部分圈速事件，但驾照考试里的“游戏成绩/金牌判定时间”并不总是作为可靠字段暴露出来，尤其是 IA-9 这类短赛段考试。因此当前版本会自动记录驾驶 trace，但考试成绩仍需要从游戏结算画面录入，以避免把 trace 录制时长误当成游戏内成绩。

## 遥测测试

确保 PC 和 PS5 在同一局域网，并在 GT7 中进入实际驾驶画面后运行：

```powershell
npm run telemetry -- --ps5 192.168.3.78
```

启动后打开主站，页面会自动连接：

```text
ws://127.0.0.1:8787/live
```

状态体检地址：

```text
http://127.0.0.1:8787/health
```

默认端口：

- UDP 接收：`33740`
- PS5 心跳：`33739`
- 本地健康检查：`http://127.0.0.1:8787/health`
- WebSocket：`ws://127.0.0.1:8787/live`

如果主站显示没有连接上 PS5，优先检查：

- PS5 IP 是否正确。
- PC 与 PS5 是否在同一网段。
- GT7 是否已经进入驾驶画面，而不是主菜单。
- Windows 防火墙是否允许 Node.js 使用 UDP `33740/33739`。
- 是否有其他 GT7 telemetry 工具占用了端口。

## 使用

直接用浏览器打开：

```text
index.html
```

或在本机浏览器地址栏使用：

```text
file:///E:/GT7guidebook/index.html
```

主站仍是静态页面，不需要构建工具。遥测和教练复盘需要另行启动本机 `telemetry-agent`。

## 内容

- 41 个 GT7 赛道地点，121 个官方布局基准。
- 普通驾照与 Master 驾照考试数据，支持按考试进入独立教练页面。
- 布局级赛道图，切换布局时同步切换地图、长度、弯角、最长直道和海拔差。
- 训练仪表盘：进行中、已达标、最近练习和下一条推荐练习。
- 布局级本地训练记录：多次练习 session、最佳圈速、目标难度、练习状态、收藏、车辆设置和复盘笔记。
- 遥测状态中心：明确显示 agent 未启动、等待 PS5、解密失败、实时在线和遥测中断。
- 待归档遥测圈：完成圈先保存 trace，再由用户确认 layout 后写入训练记录。
- 布局模板：把当前遥测圈绑定为当前 layout 模板，后续圈会给出推荐 layout、置信度和冲突提示。
- AI Coach：基于真实 trace 分析刹车区、滑行、出弯给油延迟、重刹保持、全油比例和入弯速度损失。
- 多布局赛道对比表，帮助判断当前赛道内的练习优先级。
- URL 深链支持，例如 `#track=Deep+Forest+Raceway&layout=0457d4&series=normal&license=IA-9&mode=coach`。
- 车辆推荐卡片与本地车辆缩略图。
- 真实赛道与 GT7 官方长度的双向校验说明。
- 搜索、区域筛选、难度筛选和训练状态筛选。

## 数据保存策略

- `localStorage`：训练摘要、偏好、待归档列表。
- `IndexedDB gt7-track-atlas-telemetry-v1`：降采样 trace、lap summary、归档 layout、布局模板。
- 所有数据默认只在本机浏览器中保存，不上传到 GitHub 或第三方服务。

## 版本区分

- **V1.0.0**：赛道资料库基线，重点是 GT7 赛道检索、布局资料、难度圈速和车辆建议。
- **V1.1.0**：训练助手版本，重点是 layout 级训练闭环、本地记录、布局对比和交互标注。
- **V1.1.1**：弯角校准 Bugfix，重点是停用错误猜点并加入本地校准工具。
- **V1.1.2**：纽北弯角名称库，重点是 Nürburgring layout 级自动命名和长赛道校准面板优化。
- **V1.1.3**：弯角点位校准，重点是 Nürburgring 点位与布局图弯道位置匹配。
- **V1.2.0**：手动训练闭环，重点是多次练习记录、最近复盘、今天练什么和车辆推荐联动。
- **V1.3.0**：遥测实时读取测试版，重点是验证 PS5 / GT7 UDP telemetry 链路和实时仪表。
- **V1.4.0**：遥测归档与训练闭环，重点是状态中心、待归档 trace、layout 模板和可靠归档。
- **V1.5 MVP**：驾照 AI 教练，重点是驾照考试目标、真实 trace 复盘、刹车/油门/入弯建议和短赛段手动成绩校准。

## 数据来源

- Gran Turismo 官方产品页与 GT7 Tracks List。
- GT Wiki Tracks in Gran Turismo 7，用于布局级赛道图。
- 真实赛道公开资料，用于现实长度参考。
- GTPlanet / GTPlus，用于社区整理参考。
- 游戏内驾照考试目标时间与车辆信息，用于教练模式目标展示；当前仍需要持续校准短赛段位置与官方金牌时间。

## 主要文件

- `index.html`：静态页面入口。
- `styles.css`：视觉与交互样式。
- `app.js`：赛道数据、筛选、布局切换、训练记录、驾照教练和渲染逻辑。
- `official-tracks-data.js`：GT7 官方布局数据。
- `layout-assets.js` / `layout-verification.js`：布局图片映射与校验数据。
- `vehicle-assets.js`：车辆缩略图映射。
- `telemetry-agent/index.js`：本机 PS5 / GT7 UDP 遥测读取和 WebSocket 推送。
- `docs/`：版本路线、遥测闭环和驾照 AI 教练说明。
- `assets/`：本地缓存图片资源。

## 维护脚本

- `download-layout-maps.js`：从 GT Wiki 重新生成布局图缓存与布局映射。
- `download-track-maps.js`：下载赛道地点级备用图。
- `download-thumbnails.js`：下载赛道缩略图。

## 验收命令

```powershell
node --check app.js
node --check telemetry-agent/index.js
npm run telemetry -- --self-test
```
