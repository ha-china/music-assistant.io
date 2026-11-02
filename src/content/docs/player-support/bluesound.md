---
title: "Bluesound"
---

# Bluesound <img src="/assets/icons/bluesound-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持基于 <a href="https://www.bluesound.com/" target="_blank" rel="noopener noreferrer">Bluesound</a>（BlueOS）的设备。该组件由 <a href="https://github.com/Cyanogenbot" target="_blank" rel="noopener noreferrer">Cyanogenbot</a> 贡献并维护。

## 功能

- Bluesound 设备会被 Music Assistant 自动检测

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序（Player Providers）**，点击 **添加播放器提供程序（Add a player provider）** 并选择 `Bluesound`。
2. 你的 Bluesound 设备将被自动发现并显示在播放器列表中，通常在一分钟内。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)进行排查。

## 设置

由于该提供程序在提供程序级别没有独有的设置，因此在设置此提供程序时，请参阅[播放器提供程序设置](/settings/player-provider/)。

Bluesound 播放器使用标准的[单个播放器设置（Individual Player Settings）](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。在 BluOS 上这些设置有所不同：

- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b>默认选中了所有高达 192 kHz / 24 bit 的采样率，而不仅仅是 44.1 kHz / 16 bit 和 48 kHz / 16 bit。如果你的播放器无法处理更高的采样率，请将其移除
- <b>[尝试将元数据注入到流中（ICY）](/settings/individual-player/#try-to-inject-metadata-into-stream-icy)。</b>默认为 Profile 2 - 完整信息，而不是像其他地方那样默认关闭

## 已知问题 / 注意事项

- 备用输入源可能无法被检测到
- 由于 API 的限制，专辑封面在 Bluesound 应用中或带有屏幕的设备上不可见
  
## 尚不支持

- 公告
- 同步播放
