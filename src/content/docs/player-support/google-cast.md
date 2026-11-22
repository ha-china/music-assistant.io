---
title: "Google Cast"
---

# Google Cast <img src="/assets/icons/chromecast-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 完全支持基于 Google Cast 的设备。这包括 Google 自己的硬件（如 Google Nest 扬声器），此外许多其他品牌的产品也具备 "Chromecast builtin"（内置 Chromecast）支持，例如 Harman Kardon、JBL、Canton 等众多品牌。

## 功能

- Music Assistant 会自动检测 Cast 扬声器
- Music Assistant 支持向在 Google Home 应用中创建的 cast 群组播放
- 使用 Google cast 群组时，群组内的各播放器之间可以实现完美同步
- 设备上的所有物理控制按钮都应受支持，语音控制亦然
- Cast 扬声器可以与其他 Sendspin 客户端同步。此功能为实验性功能且默认关闭，参见 [Cast 设备上的 Sendspin](#sendspin-on-cast-devices)

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序（Player Providers）**，检查 `Google Cast` 是否已在列表中；全新安装时会自动添加。如果列表中没有，请点击 **添加播放器提供程序** 并选择 `Google Cast`。
2. 你的 Cast 设备以及在 Google Home 应用中创建的任何扬声器群组都会被自动发现，并显示在播放器列表中，通常在一分钟之内。

如果某个设备没有出现，请按照 [发现排查清单](/faq/networking/#checklist-my-players-are-not-being-discovered) 逐项检查。

## 设置

除了 [播放器提供程序设置](/settings/player-provider/) 之外，在设置此提供程序时，启用高级开关后还可以使用以下设置：

- <b>用于发现的手动 IP 地址（Manual IP addresses for discovery）。</b> 正常情况下，Music Assistant 会通过（L2）本地网络上的组播发现（例如 mDNS 或 UPNP）自动发现网络中的所有播放器（这些术语的含义参见 [网络基础](/faq/networking/)）。在网络配置比较特殊，或者遇到一个或多个播放器无法被发现的问题时，可以手动添加 IP 地址。请注意，不建议在正常使用中启用此设置，仅应由具备高级网络知识的用户使用。此外，如果播放器与 Music Assistant 服务器不在同一子网中，串流可能会出现问题。在这种情况下，请确保播放器能够在网络中访问到服务器，并仔细检查 [设置中的流服务器](/settings/core/#streams) 的 base URL 配置。

除了 [单个播放器设置](/settings/individual-player/) 和 [大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols) 之外，Google Cast 提供程序还具有以下设置：

- <b>[HTTP Profile used for sending audio](/settings/individual-player/#http-profile-used-for-sending-audio).</b> Defaults to `Profile 2 - no content length` on every Cast device, group and stereo pair, because several devices stop each stream after 10 to 24 MiB of audio when a content length is sent, which can be only a few minutes of playback. If you have changed this setting yourself, your choice is kept. If playback stops part way through a track, see [playback stops part way through a track](#playback-stops-part-way-through-a-track) below
- <b>Use Music Assistant Cast App.</b> On by default and enables the use of a special MA Cast Receiver app to play media on cast devices. It has been optimised to provide better metadata and for future expansion. If issues are experienced with playback then try disabling this option.
- <b>[Sample rates supported by this player](/settings/individual-player/#sample-rates-supported-by-this-player).</b> Rates go up to 192 kHz / 24 bit for a single player, and up to 96 kHz for a Cast group. Only 44.1 kHz / 16 bit and 48 kHz / 16 bit are selected by default, because the higher ones are unreliable on some devices despite being officially supported. Add them and test rather than assume
- <b>[Prefer low-latency WAV for live sources](/settings/individual-player/#prefer-low-latency-wav-for-live-sources).</b> On by default for Cast devices. Turn it off if the device cannot play continuous WAV streams
- <b>[Enable queue flow mode](/settings/individual-player/#enable-queue-flow-mode).</b> On by default, as these devices handle one continuous stream more reliably than being fed tracks one at a time

## Cast 设备上的 Sendspin

Cast 扬声器也可以通过 [Sendspin](/player-support/sendspin/) 驱动，从而使其能够与 Sendspin、AirPlay 和 Sonos 播放器在同一群组中同步播放。此功能为实验性功能且默认关闭，因此除非你希望将 Cast 扬声器加入混合群组，否则无需进行任何操作。此外，该功能在许多 Cast 设备上（尤其是较新的设备）无法使用，因为 Google 当前的 Cast 软件不再允许 Sendspin 等应用控制音频时序，而这是实现同步播放所必需的。

要启用它，请打开该播放器的设置，在 **输出协议（Output Protocols）** 部分找到 Sendspin，并勾选 **在此播放器上启用此协议（实验性）**。

同时支持 AirPlay 的扬声器则不需要此功能：它们可以通过 AirPlay 加入混合群组，这比通过 Cast 使用 Sendspin 效果更好。为此，需要在 Music Assistant 中开启 AirPlay。

Sendspin 也不会在 Google Home 应用中创建的扬声器群组（立体声组合除外）上提供，也不会在已知无法工作的型号上提供。

之后预计需要进行一些调整。播放很少能立即同步，因此你可能需要手动为该扬声器设置 **静态播放延迟（ms）**，直到其与其他扬声器对齐。

## 已知问题 / 注意事项

- Cast speakers do not support gapless playback or crossfading of audio themselves. While crossfade is enabled, Music Assistant always sends a Cast speaker the queue as one continuous [flow mode](/faq/tech-info/#track-queueing) stream, regardless of the flow mode setting. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- Most Cast speakers get MP3 by default, because several models (such as Samsung's Music Frame and soundbars, the Google Nest Mini and the Nest Audio) stop playing a long FLAC stream after a while. The Chromecast Audio and Nest Hub play FLAC reliably and keep FLAC as their default. You can choose another codec per speaker with **Output codec to use for streaming audio to the player** in the advanced settings
- If your Chromecast speakers are not auto detected or randomly unavailable then make sure that your Cast enabled speakers are on the same network as your Music Assistant server; guest Wi-Fi networks and VPNs are common causes of this. Additionally, ensure your router is not blocking the announcement messages (mDNS/multicast) that speakers use to be discovered. See the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered) for what to check in plain language
- After re-enabling a disabled speaker, it can take a while before the speaker is rediscovered, the process can be sped up by restarting Music Assistant
- It is possible to group cast players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- TV/Video devices (not the AV dongles) are disabled by default
- Cast Groups containing only a stereo pair will not work
- Problems have been reported with battery powered devices. The most likely working configuration in the individual player settings is queue flow mode on (generic settings), with `Profile 2 - no content length`, Output Codec MP3, and sample rates set to 44.1 kHz and 48 kHz at 16 bit (advanced settings)
- MA serves all audio streams over a plain HTTP URL. Any device or software that requires HTTPS URLs will not work. For example, the Android app Castreceiver does not work
- Google's current Cast software no longer gives apps like Sendspin any control over audio timing, which they need to play in sync. Devices that run it cannot use Sendspin, and a software update can stop Sendspin working on a speaker where it worked before. There is no way to tell in advance, so you find out the first time you play something: Music Assistant then says Sendspin does not work with the device and stops offering it for that speaker. There is nothing to do, playback continues over the standard Cast protocol

## 排查播放问题

### 首先将采样率恢复为默认值

无论出现什么症状，如果你更改过 **此播放器支持的采样率**，请在单个播放器设置中将其恢复为 16 bit 的 44.1 kHz 和 48 kHz，然后重试。

在判断结果之前，有两点需要了解：

- **测试时间要长于你以为需要的时长。** 如果问题属于下文所述的情况，降低采样率并不能解决它，只会让问题出现得更晚。如果播放以前会在 30 秒后失败，请至少听上两三分钟，再判断更改是否奏效。
- **如果使用默认采样率仍然失败，请保持默认值并继续下一步。** 采样率本身并不是问题的根源，但可能有影响，因此在找到可正常工作的配置之前，请将它们保持在默认值。

### 播放中途停止

你可能会遇到以下任意一种情况：

- 曲目播放到一半停止，几秒后 Music Assistant 将该播放器显示为已暂停
- 歌曲从头自动重新开始播放
- 播放器短暂变为不可用，约 15 秒后恢复

在单个播放器设置中：

1. If **HTTP Profile used for sending audio** is set to `Profile 3 - forced content length` and playback stops after a few minutes, set it to `Profile 2 - no content length`.
2. Set **Output codec to use for streaming audio to the player** to `MP3`, if it isn't already. MP3 is the default for most Cast speakers.
3. If changing to MP3 makes playback last longer but it still fails eventually, set **HTTP Profile used for sending audio** to `Profile 1 - chunked`.

Once playback is reliable you can try `FLAC` as the output codec, and raising the sample rates again, if you want the higher quality. Change one at a time, as more than one setting may be contributing.

> [!IMPORTANT]
> **对于 Cast 群组，请在所有地方都进行更改。** 群组中实际执行播放的是其中某一个成员，由群组决定由哪一个来播放，而且这个选择在设备重启后可能会改变。请在群组以及其中的每个扬声器上设置相同的配置文件。只更改其中一处看似已经生效，但直到下一次重启才会显露出问题。

### 扬声器未被发现或随机掉线

这是另一个问题。请按照 [发现排查清单](/faq/networking/#checklist-my-players-are-not-being-discovered) 逐项检查；如果扬声器能被发现但不稳定，请按照 [掉线排查清单](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while) 逐项检查。

### 收集真正有帮助的日志

如果以上方法都无法解决问题，以下设置可以让 Cast 问题变得可诊断。两者都需要，而且它们位于不同的位置。

1. 将 Google Cast 提供程序的日志级别设置为 **verbose（详细）**。这会记录与设备的通信过程，包括设备返回的任何错误。
2. 在 [系统设置](/settings/core/) 中将 Streams 控制器的日志级别设置为 **debug（调试）**。这会记录每一次音频请求以及发起请求的设备，据此你可以判断设备是重新启动了流，而不是简单地停止了播放。
3. 重启 Music Assistant，这会开始一份全新的日志。
4. 复现问题，并记录音频停止时的具体时间。
5. 在再次重启之前，从 [诊断](/settings/core/#diagnostics) 下载日志。

保持录制时间简短，最好在五分钟以内，因为 verbose 级别的日志非常冗长嘈杂。

在复现问题的同时，对该设备运行 [持续 ping](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while) 也值得一试。如果音频停止时 ping 依然完全正常，就可以排除网络方面的原因。
