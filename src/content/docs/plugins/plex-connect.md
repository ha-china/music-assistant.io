---
title: Plex Connect 插件
description: 将您的播放器添加到 Plexamp 等 Plex 客户端的设备列表中。需要 Plex 音乐源。
pluginGroup: incoming
---

# Plex Connect <img src="/assets/icons/plex-connect-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 能够将 MA 播放器暴露给 Plexamp 等 Plex 客户端，以便进行发现和控制。

> [!NOTE]
> 此插件需要先配置 Plex 音乐源。

## 功能特性

- 任何 MA 播放器都可以作为 Plex Connect 目标暴露，包括分组播放器
- 播放器通过局域网内的 GDM（Good Day Mate）广播被 Plex 客户端自动发现
- 标准播放控制：播放、暂停、跳过、跳转
- 队列管理：添加曲目、重新排序、清空队列
- 访问 Plex 功能：Sonic Adventures、Radio、DJs、Mixes
- 播放状态、当前曲目、进度和队列实时同步
- 音量控制适用于分组和同步分组，可统一调整成员音量，同时保持各成员之间的音量平衡
- 如果插件启动时播放器已有队列，该队列会被发送到 Plex，以便您立即查看和控制
- 播放活动会上报给 Plex 服务器
- 收听历史和 scrobble 记录可在 Plex 仪表盘（dashboard）中查看
- 支持"Continue Listening"等 Plex 功能

## 配置

要使每个播放器在 Plex 客户端中显示为 Plex Connect 目标，需要为每个播放器单独添加 Plex Connect 插件。插件通过 **设置 → 插件 → 添加插件** 添加。

### 配置选项

- **Plex Music Provider**：此实例连接的 Plex 音乐源（必填）。
- **Music Assistant Player**：要作为 Plex 远程客户端暴露的 MA 播放器。
- **Player Name in Plex**：在 Plex 应用中显示的此播放器的名称。留空则使用播放器的名称。
- **Device Class**：播放器在 Plex 应用中的显示类型。可选 Speaker、Phone、Tablet、Set-Top Box、TV、PC 或 Cloud。
- **Network Port**（高级）：此播放器可访问的 TCP 端口。留空则由 Music Assistant 自动选择一个空闲端口并记住它，这样实例在重启后仍保持相同的端口。

## 已知问题 / 说明

- 要使用 Plex Connect，所有设备必须连接到同一网络
- 向 Plex 服务器上报时间线是按每个播放器单独进行的
- 从 Plex 加载的队列上限为 100 首曲目，以保证加载和同步的响应速度
- 每个插件实例在重启后都会保持相同的网络端口。如果您运行多个实例，请为每个实例指定不同的端口，或者将端口留空，让 Music Assistant 为每个实例自动选择并记住一个空闲端口
- Plex 没有提供用于控制 Plex 播放器的公开协议，因此此插件基于他人的逆向工程成果构建。Plex 的一次更新可能会使其一夜之间失效，且不保证能够修复
- 播放由 Music Assistant 驱动，而非由 Plex 驱动，因此各项功能由 MA 镜像实现，与在真实 Plex 客户端上播放并不完全相同。例如，The Sweet Fades（Plexamp 的淡入淡出功能）和随机播放都是在 MA 端处理的
