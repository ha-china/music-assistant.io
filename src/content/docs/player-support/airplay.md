---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 AirPlay 设备。这包括 HomePod 和 Apple TV 等 Apple 设备，也包括接收机、智能音箱等种类繁多的第三方设备。AirPlay 以无损方式传输音频流，并能让各个播放器（player）保持彼此同步，因此特别适合在多个房间以完美同步的方式播放音乐。（从技术上讲，MA 同时支持该协议的两个版本：<a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">AirPlay 1，也称为 RAOP</a>，以及 <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay 2</a>。请参阅下方的[协议设置](#protocol-settings)。）

## 功能

- AirPlay 设备在 Music Assistant 中自动被发现，即插即用
- AirPlay 设备将同步播放，即使同步组中同时包含 AirPlay 1 (RAOP) 和 AirPlay 2 设备也是如此
- 音频无损：AirPlay 2 设备最高支持 48 kHz/24-bit，AirPlay 1 (RAOP) 设备最高支持 44.1 kHz/16-bit。请参阅[协议设置](#protocol-settings)中的 <b>24-bit 音频（高分辨率）</b>
- 播放器设置允许配置[立体声对](/faq/how-to/#create-a-stereo-pair)音箱

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序（Player Providers）**，检查 `AirPlay` 是否已列在其中；新安装时会自动添加该提供程序。如果没有，请点击 **添加播放器提供程序（Add a player provider）** 并选择 `AirPlay`。
2. 你的 AirPlay 设备将被自动发现，并通常会在一分钟内出现在播放器列表中。
3. Apple TV 还需要先进行配对才能使用；请参阅下方的[协议设置](#protocol-settings)。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐一排查。

## 协议设置

AirPlay 不通过 HTTP 进行流传输，因此在[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)中，这类播放器只显示**输出声道模式（Output Channel Mode）**。下方的设置则是 AirPlay 特有的。

某些设备（Apple TV、HomePod 以及其他 AirPlay 2 音箱）必须先完成配对（pairing），Music Assistant 才能使用它们。这类设备会在播放器设置中显示一个 Setup（设置）按钮——按下该按钮并按步骤操作，输入设备屏幕上显示的 PIN 码。受密码保护的设备则会改为要求输入密码。

Apple TV 在主配对步骤之外还提供两个额外的配对步骤。两者均为可选，之后可再次运行 Setup 来添加：

- <b>遥控（Remote control）。</b>让 Music Assistant 得知设备是否处于开机状态、在播放前唤醒设备，并控制设备正在播放的内容及其音量。
- <b>播放监控（Playback monitoring）。</b>显示设备上在 Music Assistant 之外正在播放的应用和媒体。

Music Assistant 会自动选择向每台设备进行流传输的方式，因此在正常情况下无需更改此处的设置。

- <b>24-bit 音频（高分辨率）。</b>以最高 48 kHz/24-bit 播放高分辨率音乐。对于报告支持 24-bit 的设备，此选项默认开启，但 HomePod 除外，因为在 Wi-Fi 上 24-bit 可能导致爆音。你也可以为其他 AirPlay 2 设备开启此选项，如果听到爆音或杂音则可再次关闭。使用 AirPlay 1 (RAOP) 或 AirPlay 2 - 兼容模式流传输的设备始终以 44.1 kHz/16-bit 播放，且不显示此设置。分组音箱各自遵循自己的设置，包含 16-bit 音箱的组将以 44.1 kHz 播放。
- <b>音频同步延迟校正。</b>相对于与其同步的其他播放器，调整此设备上听到音频的时间偏移，范围最高 ±500 ms。负值使其更早播放，正值则更晚。对于连接到电视、AV 接收机或放大器（这些设备会引入自身延迟）的设备，请使用负值——如果它比组内其他设备滞后约 100 ms，请将其设置为 -100。

### 高级协议设置

- <b>流传输模式。</b>将此设备固定为一种流传输方式。除非设备行为异常，否则请保持自动（推荐）——仅提供设备实际支持的模式：AirPlay 2 - PTP 计时、AirPlay 2 - NTP 计时、AirPlay 2 - 兼容模式和 AirPlay 1 (RAOP)。Music Assistant 绝不会自行更改此设置：当自动选择持续失败时，日志中的警告会指向此设置。将其设置回自动以再次尝试原始模式。
- <b>音频缓冲区深度。</b>音箱在播放前保持排队的音频量。如果音箱在 Music Assistant 显示正在播放时保持静音或中断，请增加此值——代价是跳过和暂停响应变慢。自动模式会根据设备选择合适的值。
- <b>忽略设备自身发送的音量报告。</b>某些设备报告自身音量水平不可靠，可能导致意外的音量变化。启用此选项可忽略这些报告。
- <b>启用加密。</b>仅对使用 AirPlay 1 (RAOP) 流传输的设备显示。某些第三方播放器要求关闭此选项。

### AirPlay 提供程序设置

- <b>PTP 守护进程详细日志（Verbose PTP daemon logging）。</b>在日志中添加详细的多房间时钟计时信息。仅在排查同步问题时被要求启用才启用——它每秒大约写入 10 行日志。

## 已知问题 / 注意事项

### 如果没有声音

一切看起来都在正常工作（音量会变化、歌曲信息会显示、设备也有响应），但就是没有声音发出。请按以下顺序依次尝试：

- 在高级播放器设置中启用加密。某些设备（如 Kodi 或某些第三方 AirPlay 接收器）需要此设置
- HomePod 用户：请检查 Apple HomeKit。在 HomeKit (iOS) 中 `AirPlay (Speaker & TV)` 的偏好设置里，确保未选择 `Only people in this home`；当选择此项时，Music Assistant 无法在 HomePod 上播放音频。请改为选择 `Everyone on the same network` 选项。更一般地，据报道 Apple HomeKit 会干扰播放；如果遇到问题，请尝试将设备从 HomeKit 中移除
- 如果设备需要密码，请在播放器设置中按下 Setup 并输入密码
- 三星设备似乎以不完全向后兼容的方式实现了 AirPlay 1，并恰好产生此症状。使用类似应用程序（如 Roon 以及任何基于 slimproto 的应用程序）的用户也遇到同样的问题

### 其他播放问题

- Apple TV 会被发现，但需要配对。请在播放器设置中按下 Setup；它会在 Apple TV 屏幕上显示一个代码
- 如果播放器在仍通电的情况下变为不可用，则可能未发送其保活消息。可以为每个播放器配置超时时间。一些用户报告说他们需要将其设置为长达一小时
- 如果 AirPlay 设备对音量更改命令响应不正确或随机更改音量，请尝试更改 `Player controls` 部分中的 `Volume Control` 选项，并将其设置为 `None`

### 技术说明

- Music Assistant 实现了 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> 和 <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>。支持 AirPlay 2 的设备使用 AirPlay 2 流传输，较旧的设备使用 RAOP。要将设备固定为其中一种，请使用[流传输模式](#advanced-protocol-settings)。
- Shairport Sync 使用 AirPlay 2 播放。当它与 Music Assistant 运行在同一主机上时（例如作为 Home Assistant 加载项），请将其[流传输模式](#advanced-protocol-settings)设置为 `AirPlay 2 - 兼容模式`，因为两者都需要相同的网络端口用于 AirPlay 2 计时。
- 由于移除了 RAOP 支持，无法向 Macbook 播放。
- AirPlay 2 协议比 AirPlay 1 (RAOP) 需要更多的设置交换，因此首次连接需要稍长的时间，这会增加播放开始前的等待时间。
