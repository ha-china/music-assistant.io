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

- <b>[用于发送音频的 HTTP 配置文件（HTTP Profile）](/settings/individual-player/#http-profile-used-for-sending-audio)。</b> 默认值取决于设备。大多数 Cast 设备默认使用 `Profile 3 - forced content length`。这包括 Google 自己的设备（如 Nest Mini、Nest Audio、Nest Hub、Google Home、Chromecast 和 Chromecast Audio），以及其他品牌内置 Chromecast 的扬声器，因为在没有内容长度的情况下，其中一些设备会在播放 5 到 10 分钟后停止。2026 款 Google Home Speaker 以及其他品牌的 Android TV 设备（如 Nvidia Shield）默认使用 `Profile 2 - no content length`，因为在发送内容长度时，它们会在收到约 24 MiB 音频后停止每个流，这可能只相当于几分钟的播放。Cast 群组和立体声组合默认使用 `Profile 2 - no content length`。如果你自己更改过此设置，则会保留你的选择。如果播放中途停止，请参见下方的 [播放中途停止](#playback-stops-part-way-through-a-track)。
- <b>使用 Music Assistant Cast 应用（Use Music Assistant Cast App）。</b> 默认开启，允许使用特殊的 MA Cast Receiver 应用来在 cast 设备上播放媒体。该应用经过优化，可提供更好的元数据并为未来的扩展做好准备。如果播放出现问题，请尝试禁用此选项。
- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b> 单个播放器的采样率最高可达 192 kHz / 24 bit，Cast 群组最高可达 96 kHz。默认仅选中 44.1 kHz / 16 bit 和 48 kHz / 16 bit，因为尽管更高的采样率是官方支持的，但在某些设备上并不可靠。请添加后实际测试，而不要想当然。
- <b>[实时源优先使用低延迟 WAV](/settings/individual-player/#prefer-low-latency-wav-for-live-sources)。</b> 对 Cast 设备默认开启。如果设备无法播放连续的 WAV 流，请将其关闭。
- <b>[启用队列流模式](/settings/individual-player/#enable-queue-flow-mode)。</b> 默认开启，因为这些设备处理单个连续流比逐个接收曲目更加可靠。

## Cast 设备上的 Sendspin

Cast 扬声器也可以通过 [Sendspin](/player-support/sendspin/) 驱动，从而使其能够与 Sendspin、AirPlay 和 Sonos 播放器在同一群组中同步播放。此功能为实验性功能且默认关闭，因此除非你希望将 Cast 扬声器加入混合群组，否则无需进行任何操作。此外，该功能在许多 Cast 设备上（尤其是较新的设备）无法使用，因为 Google 当前的 Cast 软件不再允许 Sendspin 等应用控制音频时序，而这是实现同步播放所必需的。

要启用它，请打开该播放器的设置，在 **输出协议（Output Protocols）** 部分找到 Sendspin，并勾选 **在此播放器上启用此协议（实验性）**。

同时支持 AirPlay 的扬声器则不需要此功能：它们可以通过 AirPlay 加入混合群组，这比通过 Cast 使用 Sendspin 效果更好。为此，需要在 Music Assistant 中开启 AirPlay。

Sendspin 也不会在 Google Home 应用中创建的扬声器群组（立体声组合除外）上提供，也不会在已知无法工作的型号上提供。

之后预计需要进行一些调整。播放很少能立即同步，因此你可能需要手动为该扬声器设置 **静态播放延迟（ms）**，直到其与其他扬声器对齐。

## 已知问题 / 注意事项

- Cast 扬声器不支持音频交叉淡化。如果你需要交叉淡化和/或完整的无缝播放支持，请在播放器的高级设置中启用 "[流模式](/faq/tech-info/#track-queueing)"。启用流模式可能会解决播放问题，但可能会带来副作用，即禁用设备上的实际物理按钮和/或元数据显示
- 如果你的 Chromecast 扬声器无法自动发现或随机不可用，请确保支持 Cast 的扬声器与 Music Assistant 服务器位于同一网络中；访客 Wi-Fi 网络和 VPN 是常见原因。此外，请确保路由器没有阻止扬声器用于被发现所发送的公告消息（mDNS/组播）。有关以通俗语言说明的检查事项，请参见 [发现排查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)
- 重新启用已禁用的扬声器后，可能需要一段时间才能重新发现该扬声器，重启 Music Assistant 可以加快此过程
- 可以通过 [通用群组](/faq/groups/#universal-groups) 对 cast 播放器进行分组，但可能无法同步播放
- 电视/视频设备（非 AV 加密狗）默认处于禁用状态
- 仅包含立体声组合的 Cast 群组将无法工作
- 已报告电池供电设备存在问题。在单个播放器设置中，最可能有效的配置是：队列流模式开启（通用设置），使用 `Profile 2 - no content length`，输出编解码器为 MP3，采样率设置为 44.1 kHz 和 48 kHz / 16 bit（高级设置）
- MA 通过普通 HTTP URL 提供所有音频流。任何需要 HTTPS URL 的设备或软件都将无法工作。例如，Android 应用 Castreceiver 无法工作
- Google 当前的 Cast 软件不再允许 Sendspin 等应用控制音频时序，而这是实现同步播放所必需的。运行该软件的设备无法使用 Sendspin，并且软件更新可能会使原本可用的扬声器上的 Sendspin 停止工作。无法提前判断，因此你会在首次播放时发现：Music Assistant 会提示 Sendspin 与该设备不兼容，并停止为该扬声器提供该选项。无需进行任何操作，播放将继续通过标准 Cast 协议进行

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

1. 根据设备设置 **用于发送音频的 HTTP 配置文件**：
   - 在 2026 款 Google Home Speaker 或非 Google 的 Android TV 设备上，如果使用 `Profile 3 - forced content length` 时播放几分钟后（约 24 MiB 音频）停止，请将其设置为 `Profile 2 - no content length`。
   - 在任何其他 Cast 设备（如 Nest Mini）上，如果使用 `Profile 2 - no content length` 时播放 5 到 10 分钟后停止，请将其设置为 `Profile 3 - forced content length`。
2. 将 **向播放器串流音频所使用的输出编解码器** 设置为 `MP3`。
3. 如果改为 MP3 后播放持续时间变长但最终仍然失败，请将 **用于发送音频的 HTTP 配置文件** 设置为 `Profile 1 - chunked`。

一旦播放稳定可靠，如果你想要更高的音质，可以尝试将输出编解码器改回 `FLAC`，并再次提高采样率。请一次只更改一项设置，因为可能有不止一项设置在起作用。

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
