# GT7 Track Atlas

一个可离线打开的 Gran Turismo 7 赛道训练助手，按 World Circuits 大陆分区整理赛道，提供布局图、目标圈速、车辆选择建议、本地训练记录和真实赛道参考校验。

## Product Notes

- [V1.3 遥测实时读取](./telemetry-agent/README.md)：本版先验证 PS5 / GT7 UDP telemetry 链路，主站新增实时连接面板，显示车速、挡位、转速、油门、刹车和采样率。
- [V1.2 训练闭环路线](./docs/v1.2-training-loop-roadmap.md)：本版把平台升级为手动记录驱动的日常训练助手，重点优化“今天练什么”、多次练习记录、复盘反馈和车辆推荐联动。

## 当前版本

**V1.3.0 - 遥测实时读取测试版**

本版本把训练仪表盘升级为“今天练什么”，每个 layout 支持多次练习记录、最近 5 次复盘、车辆与设置记录、目标任务提示和车辆推荐联动。

完整记录见 [CHANGELOG.md](./CHANGELOG.md)。

## 遥测测试

```powershell
npm run telemetry -- --ps5 192.168.3.78
```

启动后打开主站，页面会自动连接 `ws://127.0.0.1:8787/live`，并显示实时车速、挡位、转速、油门、刹车和采样率。完成一圈后会生成“待归档遥测圈”，确认赛道布局后可写入当前 layout 的训练记录。状态体检地址为 `http://127.0.0.1:8787/health`。

## 使用

直接用浏览器打开：

```text
index.html
```

项目不需要构建工具，也不依赖后端服务。

## 内容

- 41 个 GT7 赛道地点，121 个官方布局基准
- 布局级赛道图，切换布局时同步切换地图、长度、弯角、最长直道和海拔差
- 训练仪表盘：进行中、已达标、最近练习和下一条推荐练习
- 布局级本地训练记录：多次练习 session、最佳圈速、目标难度、练习状态、收藏、车辆设置和复盘笔记
- 多布局赛道对比表，帮助判断当前赛道内的练习优先级
- URL 深链支持，例如 `#track=Nurburgring&layout=2066d9`
- 车辆推荐卡片与本地车辆缩略图
- 真实赛道与 GT7 官方长度的双向校验说明
- 搜索、区域筛选、难度筛选和训练状态筛选

## 版本区分

- **V1.0.0**：赛道资料库基线，重点是 GT7 赛道检索、布局资料、难度圈速和车辆建议。
- **V1.1.0**：训练助手版本，重点是 layout 级训练闭环、本地记录、布局对比和交互标注。
- **V1.1.1**：弯角校准 Bugfix，重点是停用错误猜点并加入本地校准工具。
- **V1.1.2**：纽北弯角名称库，重点是 Nürburgring layout 级自动命名和长赛道校准面板优化。
- **V1.1.3**：弯角点位校准，重点是 Nürburgring 点位与布局图弯道位置匹配。
- **V1.2.0**：手动训练闭环，重点是多次练习记录、最近复盘、今天练什么和车辆推荐联动。

## 数据来源

- Gran Turismo 官方产品页与 GT7 Tracks List
- GT Wiki Tracks in Gran Turismo 7，用于布局级赛道图
- 真实赛道公开资料，用于现实长度参考
- GTPlanet / GTPlus，用于社区整理参考

## 主要文件

- `index.html`：静态页面入口
- `styles.css`：视觉与交互样式
- `app.js`：赛道数据、筛选、布局切换、训练记录和渲染逻辑
- `official-tracks-data.js`：GT7 官方布局数据
- `layout-assets.js` / `layout-verification.js`：布局图片映射与校验数据
- `vehicle-assets.js`：车辆缩略图映射
- `assets/`：本地缓存图片资源

## 维护脚本

- `download-layout-maps.js`：从 GT Wiki 重新生成布局图缓存与布局映射
- `download-track-maps.js`：下载赛道地点级备用图
- `download-thumbnails.js`：下载赛道缩略图
