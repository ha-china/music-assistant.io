---
title: HEOS
---

# HEOS <img src="/assets/icons/heos-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 Denon 和 Marantz 的 [HEOS](https://www.denon.com/en-us/denon-heos.html) 设备。由 [Tommatheussen](https://github.com/Tommatheussen) 贡献并维护。

## 功能

- HEOS 设备会被 Music Assistant 自动检测到
- 分组后的 HEOS 设备能够完美同步播放
- 当分组在 HEOS 应用中被创建/更新/移除时，MA 会随之更新
- 当播放器播放非 MA 内容时，MA 会显示元数据

## 配置

1. 在 Music Assistant 中，前往**设置 → 播放器提供程序**，点击**添加播放器提供程序**并选择 `HEOS`。
2. 你的 HEOS 设备将被自动发现，并通常会在一分钟内出现在播放器列表中。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐步排查。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，在设置此提供程序时还可以使用以下设置：

- <b>主控制器主机名或 IP 地址。</b>这是将充当主控制器的 HEOS 设备，并非必需项。此设置可用于强制 MA 使用特定设备作为控制器
- <b>命令超时值。</b>Music Assistant 等待 HEOS 设备响应命令的时间，单位为秒。默认值为 25，可设置在 10 到 60 之间。如果你在日志中看到命令超时的消息，请将其调高

HEOS 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。

HEOS 播放器始终将队列作为一个连续的音频流进行播放，因此没有可更改的流模式（flow mode）设置。同样也没有采样率设置，因为 HEOS 播放器会自行报告其能力。第一代 HEOS 硬件仅支持最高 48kHz / 16 位，而 HS2 及更新的型号则可支持高达 192kHz / 24 位。

## 已知问题 / 注意事项

- 由于 HEOS API 的限制，当播放来自 Music Assistant 的任何内容时，设备内置显示屏和 HEOS 应用上的元数据都会显示“URL stream”。
- 具有多个区域（zone）的 HEOS AVR 在 Music Assistant 中表示为 1 个播放器，与它们在 HEOS 应用中的显示方式类似。向该播放器播放任何内容时，播放会在内部转发到所有输入源设置为 HEOS 的活动区域。管理这些区域（例如打开/关闭、更改输入源以及调节区域音量）需要在外部进行，例如通过 Home Assistant 或 Denon 应用（如果支持），这是 HEOS 协议的限制。你可以在[单个播放器设置](/settings/individual-player/#player-controls)中将 Home Assistant 实体（entity）映射为该播放器的电源控制，然后在该实体状态发生变化时，使用 Home Assistant 打开各区域并将其切换到正确的输入源。默认情况下，AVR 的行为如下：
  - 在 Music Assistant 播放器上调节音量会调整所有活动 HEOS 区域的音量。
  - 当至少有 1 个 HEOS 区域处于活动状态时，在 Music Assistant 播放器上开始播放流，将在这些活动区域上开始播放。
  - 当没有 HEOS 区域处于活动状态时，在 Music Assistant 播放器上开始播放流，将打开主区域，将其输入源设置为 HEOS，并开始在主区域上播放。
