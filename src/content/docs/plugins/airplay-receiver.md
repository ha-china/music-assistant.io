---
title: AirPlay 接收器插件
description: 让你的播放器显示为 AirPlay 设备，从而任何可以向 AirPlay 发送内容的应用都能在其上播放。
pluginGroup: incoming
---

# AirPlay 接收器 <img src="/assets/icons/airplay-receiver-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 可以为任何 MA 播放器添加 <a href="https://www.apple.com/au/airplay/" target="_blank" rel="noopener noreferrer">AirPlay 接收器</a>音频支持。

> [!NOTE]
> 此插件仍处于开发的早期阶段。功能有限，且可能会出现 bug
    
## 功能

- 允许任何 MA 播放器在支持 AirPlay 的其他应用程序中显示为 AirPlay 设备
- 任何 MA 播放器都可以被公开，包括分组（group）

## 配置

1. 通过 **设置 → 插件 → 添加插件** 添加该插件。该插件只需添加一次。
2. 在 **已连接的播放器** 下，选择所有应显示为 AirPlay 设备的播放器。每个被选中的播放器都会作为其自己的 AirPlay 接收器对外广播，而音频始终会在你在发送端应用中所选接收器对应的播放器上播放。此选择稍后可以在插件设置中更改。
3. 可以选择更改 **广播的设备名称**，该设置控制接收器如何根据其播放器来命名：`Player name | Music Assistant`（默认）、`Player name only` 或 `Music Assistant | Player name`。重命名播放器会同时重命名其接收器。

## 已知问题 / 注意事项

- 要使用 AirPlay，所有设备必须连接到同一网络
- 由于缓冲，在播放、暂停和恢复时出现大约 5 秒的延迟属于正常现象
