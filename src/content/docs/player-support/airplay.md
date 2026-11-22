---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 AirPlay 设备。这包括 HomePod 和 Apple TV 等 Apple 设备，也包括接收机、智能音箱等种类繁多的第三方设备。AirPlay 以无损方式传输音频流，并能让各个播放器（player）保持彼此同步，因此特别适合在多个房间以完美同步的方式播放音乐。（从技术上讲，MA 同时支持该协议的两个版本：<a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">AirPlay 1，也称为 RAOP</a>，以及 <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay 2</a>。请参阅下方的[协议设置](#protocol-settings)。）

## 功能

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync, even when there is a combination of AirPlay 1 (RAOP) and AirPlay 2 devices in the sync group
- Audio is lossless: up to 48 kHz/24-bit on AirPlay 2 devices and 44.1 kHz/16-bit on AirPlay 1 (RAOP) devices. See <b>24-bit audio (hi-res)</b> under [Protocol Settings](#protocol-settings)
- The player settings allow configuration of [stereo pairs](/faq/how-to/#create-a-stereo-pair) of speakers

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

- <b>24-bit audio (hi-res).</b> Plays hi-res music at up to 48 kHz/24-bit. It starts out on for devices that report 24-bit support, except HomePods, where 24-bit can cause crackling over Wi-Fi. You can switch it on for other AirPlay 2 devices too, and off again if you hear crackling or static. Devices streaming with AirPlay 1 (RAOP) or AirPlay 2 - compatibility mode always play 44.1 kHz/16-bit and do not show this setting. Grouped speakers each follow their own setting, and a group that includes a 16-bit speaker plays at 44.1 kHz.
- <b>Audio synchronization delay correction.</b> Shifts when audio is heard on this device compared to the other players it is synced with, up to ±500 ms. Negative values make it play earlier, positive values later. Use a negative value for a device connected to a TV, AV receiver or amplifier that adds its own delay — if it lags the group by about 100 ms, set it to -100.

### 高级协议设置

- <b>Streaming mode.</b> Pins this device to one way of streaming. Leave on Automatic (recommended) unless the device misbehaves — only the modes the device actually supports are offered: AirPlay 2 - PTP timing, AirPlay 2 - NTP timing, AirPlay 2 - compatibility mode and AirPlay 1 (RAOP). Music Assistant never changes it by itself: when the automatic choice keeps failing, a warning in the log points to this setting. Set it back to Automatic to try the original mode again.
- <b>Audio buffer depth.</b> How much audio the speaker keeps queued ahead of playback. Increase this if the speaker stays silent or drops out while Music Assistant shows it playing — at the cost of slower skipping and pausing. Automatic picks a value suited to the device.
- <b>Ignore volume reports sent by the device itself.</b> Some devices report their own volume level unreliably, which can cause unexpected volume changes. Enable this to ignore those reports.
- <b>Enable encryption.</b> Only shown for devices streaming with AirPlay 1 (RAOP). Some third party players require this to be turned off.

### AirPlay 提供程序设置

- <b>PTP 守护进程详细日志（Verbose PTP daemon logging）。</b>在日志中添加详细的多房间时钟计时信息。仅在排查同步问题时被要求启用才启用——它每秒大约写入 10 行日志。

## 已知问题 / 注意事项

### 如果没有声音

一切看起来都在正常工作（音量会变化、歌曲信息会显示、设备也有响应），但就是没有声音发出。请按以下顺序依次尝试：

- Enable encryption in the advanced player settings. Some devices (such as Kodi or some 3rd party AirPlay receivers) require it
- HomePod owners: check Apple HomeKit. In the HomeKit (iOS) preferences for `AirPlay (Speaker & TV)`, make sure `Only people in this home` is NOT selected; when it is, Music Assistant cannot play audio on the HomePod. Select the option `Everyone on the same network` instead. More generally, Apple HomeKit has been reported to interfere with playback; if problems are encountered, try removing the devices from HomeKit
- If the device requires a password, press Setup in the player settings and enter it
- Samsung devices seem to have implemented AirPlay 1 in a way that isn't fully backwards compatible and produce exactly this symptom. Users of similar applications such as Roon and anything based on slimproto have the same problem

### 其他播放问题

- Apple TVs will be discovered but require pairing. Press Setup in the player settings; it shows a code on the screen of the Apple TV
- If your player is going unavailable while still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try changing the `Volume Control` option in the `Player controls` section and set it to `None`

### 技术说明

- Music Assistant implements <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> and <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>. Devices that support AirPlay 2 stream with it, older devices with RAOP. To pin a device to one of them, use [Streaming mode](#advanced-protocol-settings).
- Shairport Sync plays with AirPlay 2. When it runs on the same host as Music Assistant (for example as a Home Assistant add-on), set its [Streaming mode](#advanced-protocol-settings) to `AirPlay 2 - compatibility mode`, because both need the same network ports for AirPlay 2 timing.
- Playback to Macbooks is not possible due to removal of RAOP support
- The AirPlay 2 protocol needs more setup exchanges than AirPlay 1 (RAOP), so the first connection takes a little longer, which adds to the time before playback starts.
