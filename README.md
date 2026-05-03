# GT7 Track Atlas

一个可离线打开的 Gran Turismo 7 赛道攻略平台，按 World Circuits 大陆分区整理赛道，提供布局图、难度圈速指南、车辆选择建议和真实赛道参考校验。

## 使用

直接用浏览器打开：

```text
index.html
```

项目不需要构建工具，也不依赖后端服务。

## 内容

- 41 个 GT7 赛道地点，121 个官方布局基准
- 布局级赛道图，切换布局时同步切换地图、长度、弯角、最长直道和海拔差
- 车辆推荐卡片与本地车辆缩略图
- 真实赛道与 GT7 官方长度的双向校验说明
- 搜索、区域筛选和难度筛选

## 数据来源

- Gran Turismo 官方产品页与 GT7 Tracks List
- GT Wiki Tracks in Gran Turismo 7，用于布局级赛道图
- 真实赛道公开资料，用于现实长度参考
- GTPlanet / GTPlus，用于社区整理参考

## 主要文件

- `index.html`：静态页面入口
- `styles.css`：视觉与交互样式
- `app.js`：赛道数据、筛选、布局切换和渲染逻辑
- `official-tracks-data.js`：GT7 官方布局数据
- `layout-assets.js` / `layout-verification.js`：布局图片映射与校验数据
- `vehicle-assets.js`：车辆缩略图映射
- `assets/`：本地缓存图片资源

## 维护脚本

- `download-layout-maps.js`：从 GT Wiki 重新生成布局图缓存与布局映射
- `download-track-maps.js`：下载赛道地点级备用图
- `download-thumbnails.js`：下载赛道缩略图
