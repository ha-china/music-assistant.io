---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 AirPlay 设备。这包括 HomePod 和 Apple TV 等 Apple 设备，也包括接收机、智能音箱等种类繁多的第三方设备。AirPlay 以无损方式传输音频流，并能让各个播放器（player）保持彼此同步，因此特别适合在多个房间以完美同步的方式播放音乐。（从技术上讲，MA 同时支持该协议的两个版本：<a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">AirPlay 1，也称为 RAOP</a>，以及 <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay 2</a>。请参阅下方的[协议设置](#protocol-settings)。）

## 功能

- AirPlay 设备在 Music Assistant 中会被自动检测，即插即用
- AirPlay 设备可以同步播放，即使同步组中同时存在 AirPlay 1（RAOP）和 AirPlay 2 设备
- 音质为无损的 44.1 kHz/16 位 PCM，并可选择压缩为（无损的）ALAC
- 播放器设置允许配置音箱的[立体声组合（stereo pair）](/faq/how-to/#create-a-stereo-pair)

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

- <b>音频同步延迟校正（Audio synchronization delay correction）。</b>调整此设备相对于与其同步的其他播放器听到音频的时间，最大可达 ±500 ms。负值使其提前播放，正值使其延后播放。对于连接到会额外引入自身延迟的电视、AV 接收机或功放的设备，请使用负值——如果它比同步组滞后约 100 ms，请将其设置为 -100。

### 高级协议设置

- <b>流传输模式（Streaming mode）。</b>将此设备固定为一种流传输方式。除非设备表现异常，否则请保持 Automatic（自动，推荐）——系统只会提供设备实际支持的模式：AirPlay 2 - PTP timing、AirPlay 2 - NTP timing、AirPlay 2 - compatibility mode 和 AirPlay 1（RAOP）。当设备反复失败后，Music Assistant 也会自行切换到更安全的模式；将其重新设置为 Automatic 即可再次尝试原先的模式。
- <b>音频缓冲深度（Audio buffer depth）。</b>音箱在播放之前保持排队的音频数量。如果 Music Assistant 显示正在播放，而音箱却保持静音或出现中断，可增大此值——代价是跳过和暂停的响应变慢。Automatic（自动）会选择适合该设备的值。
- <b>忽略设备自身发送的音量报告（Ignore volume reports sent by the device itself）。</b>某些设备对其自身音量级别的报告不可靠，可能导致意外的音量变化。启用此选项可忽略这些报告。
- <b>启用加密（Enable encryption）。</b>仅对使用 AirPlay 1（RAOP）进行流传输的设备显示。某些第三方播放器需要关闭此选项。

### AirPlay 提供程序设置

- <b>PTP 守护进程详细日志（Verbose PTP daemon logging）。</b>在日志中添加详细的多房间时钟计时信息。仅在排查同步问题时被要求启用才启用——它每秒大约写入 10 行日志。

## 已知问题 / 注意事项

### 如果没有声音

一切看起来都在正常工作（音量会变化、歌曲信息会显示、设备也有响应），但就是没有声音发出。请按以下顺序依次尝试：

- 在高级播放器设置中启用加密。某些设备（例如 Kodi 或某些第三方 AirPlay 接收端）需要启用它
- 在高级播放器设置中尝试开启和关闭压缩
- HomePod 用户：请检查 Apple HomeKit。在 HomeKit（iOS）中 `AirPlay (Speaker & TV)` 的偏好设置里，确保没有选中 `Only people in this home`；一旦选中，Music Assistant 将无法在 HomePod 上播放音频（除非已在提供程序的高级设置中设置了正确的密码）。请改为选中 `Everyone on the same network` 选项。更普遍地说，有报告称 Apple HomeKit 会干扰播放；如果遇到问题，可尝试将设备从 HomeKit 中移除
- 如果设备需要密码，请在高级设置中设置
- 三星设备对 AirPlay 1 的实现方式似乎并不完全向后兼容，并恰好会产生这种症状。使用类似应用（如 Roon 或任何基于 slimproto 的应用）的用户也遇到了同样的问题

### 其他播放问题

- Apple TV 能够被发现，但需要配对。播放器设置中有一个配对按钮，点击后会在 Apple TV 的屏幕上显示一个配对码
- 如果你的播放器在仍然开机的情况下变为不可用，那么它可能没有发送保活（keep alive）消息。可以为每个播放器配置超时时间。有用户反映需要将其设置为长达一小时
- 如果 AirPlay 设备对更改音量命令的响应不正确，或音量随机变化，请尝试更改 `Player controls` 部分中的 `Volume Control` 选项，并将其设置为 `None`

### 技术说明

- Music Assistant 实现了 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> 和 <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>。大多数设备会默认使用 RAOP，因为 AirPlay 2 设备默认应当向后兼容。如果设备的 AirPlay 1 实现不佳和/或仅支持不带 RAOP 的 AirPlay 2，则请选择 AirPlay2 作为协议版本。
- 由于 Shairport 缺少对 AirPlay 2 的 NTP 计时支持，Shairport 目前与 AirPlay 2 不兼容。要解决此问题，请在 MA 中前往 Shairport 设备的高级设置，并将输出协议更改为 `Airplay 1 RAOP` 或 `Airplay 2 - compatibility mode`。此外，如果 Music Assistant 和 Shairport 位于同一台主机上，则无法使用 Airplay 2。
- 由于移除了 RAOP 支持，无法向 MacBook 播放
- AirPlay 2 的实现较新，尚未经过广泛测试。已知基于密码的配对和 PTP 计时尚不支持。可能还存在其他尚未知晓的问题。由于需要进行更多的 RTSP 交互，AirPlay 2 协议建立初始连接所需的时间比 AirPlay 1（RAOP）更长。这增加了开始播放前所感受到的延迟。
