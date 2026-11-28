---
title: "Squeezelite"
---

# Squeezelite <img src="/assets/icons/slim-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://github.com/ralph-irving/squeezelite" target="_blank" rel="noopener noreferrer">Squeezelite</a> 播放器：涵盖从桌面应用程序到 <a href="https://www.picoreplayer.org">Raspberry Pis</a> 以及 <a href="https://github.com/sle118/squeezelite-esp32" target="_blank" rel="noopener noreferrer">基于 ESP32 的设备</a> 等各类软件和硬件。此外，还对 <a href="https://lyrion.org/players-and-controllers/hardware-comparison/" target="_blank" rel="noopener noreferrer">Logitech 品牌的原始 Squeezebox 系列硬件播放器（前身为 SlimDevices）</a> 提供了一定程度的旧版支持，例如 Squeezebox Duet 和 Squeezebox Radio。

这些播放器通常需要与一台 Logitech Media Server（现称为 <a href="https://lyrion.org" target="_blank" rel="noopener noreferrer">Lyrion Music Server</a>）通信。Music Assistant 会将自身模拟成这样一台服务器，因此你的播放器可以像连接其他任何服务器一样连接到它，中间无需任何其他组件。控制是双向的：播放器上的按钮可以操控 Music Assistant，就像它们操控 Lyrion 一样。其他同类软件也是如此，例如 SqueezeSlave、SoftSqueeze 和 SqueezePlay。

## 功能

- Music Assistant 会自动检测 Squeezelite 客户端设备
- 单个播放器的 [DSP 设置](/dsp/) 将用于 [分组](/faq/groups/) 播放
- 支持 Squeezelite 客户端设备按钮
  - 只要未启用 [流模式（flow mode）](/faq/tech-info/#track-queueing)，设备上的任何物理控制按钮都应受到支持

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序（Player Providers）**，点击 **添加播放器提供程序** 并选择 `Squeezelite`。
2. 你的 Squeezelite 播放器将被自动发现，并通常会在一分钟内出现在播放器列表中。

如果某个播放器没有出现，请首先检查它是否连接到了另一台服务器。这些设备通常一次只能连接一台服务器，因此绑定到其他服务器（例如现有的 LMS/Lyrion 安装）的播放器不会被 MA 发现。否则，请按照 [发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered) 逐项排查。

## 设置

除了 [播放器提供程序设置](/settings/player-provider/) 之外，在设置此提供程序时还可以使用以下设置：

- <b>Slimproto 端口。</b> slimproto 服务器运行所用的 TCP 和 UDP 端口。默认值为 3483，硬件 Squeezebox 播放器不支持其他任何端口。仅当你想在此服务器之外为软件播放器再运行一个 slimproto 服务器时才更改它
- <b>经典 Squeezebox CLI 端口。</b> 一些 slimproto 播放器使用 telnet CLI 来请求额外信息。它默认运行在 9090 端口。将其设为 0 可将其关闭，如果你的播放器都不依赖它，这样做是安全的
- <b>JSON-RPC CLI/API 端口。</b> 一些 slimproto 播放器使用 LMS 风格的 JSON-RPC API 来获取专辑封面和其他元数据。它默认运行在 9000 端口。将其设为 0 可将其关闭
- <b>启用发现服务器。</b> 默认开启。广播发现数据包，使 slimproto 客户端能够自行找到并连接到此服务器。如果你的网络上运行着不止一个 slimproto 服务器，或者你不希望客户端自动连接，请将其关闭

除了 [单个播放器设置](/settings/individual-player/) 和 [大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols) 之外，Squeezelite 提供程序还有以下自身的设置：

- <b>预设。</b> 真正的 Squeezebox 硬件或基于 jive(lite) 的模拟器支持预设。此部分允许你将媒体库中的播放列表或电台分配给十个预设中的每一个
- <b>音频同步延迟校正。</b> 将此播放器的音频最多偏移 ±500 毫秒，以使其与其他播放器保持同步。请参阅播放器概览表以确定哪些类型支持同步校正
- <b>启用显示屏支持。</b> 一些 Squeezelite 硬件带有显示屏，此设置可启用对它的支持
- <b>可视化类型。</b> 播放期间显示屏上显示的可视化效果。只有在启用显示屏支持后此选项才会可用
- <b>[直播源优先使用低延迟 WAV](/settings/individual-player/#prefer-low-latency-wav-for-live-sources)。</b> 对 Squeezelite 默认开启。如果播放器无法播放连续的 WAV 流，请将其关闭
- <b>允许在不同采样率的曲目之间进行交叉淡入淡出。</b> 仅在播放器支持时才启用此选项。它在流模式关闭时生效，因此一旦启用流模式，它将变为灰色不可用

Squeezelite 播放器没有采样率设置，因为每个播放器都会报告其所能支持的最高采样率，Music Assistant 会据此进行工作。同样也没有 HTTP 配置文件设置，因为在 slimproto 中它固定为 Profile 2。

## 已知问题 / 注意事项

- 此提供程序在 MA 中的重点是支持软件 Squeezelite 客户端（例如 <a href="https://www.picoreplayer.org/" target="_blank" rel="noopener noreferrer">piCorePlayer</a>）的使用。据报告，旧的原始 Squeezebox 硬件可以工作，但在分组方面存在已知问题。MA 核心团队无法投入资源来进一步改善这些设备的工作效果。不过，欢迎向 <a href="https://github.com/home-assistant-libs/aioslimproto" target="_blank" rel="noopener noreferrer">aioslimproto 库</a> 和/或 MA 中的 squeezelite 提供程序提交增强支持的 PR
- 在 MA 所在的同一台服务器上运行 LMS 并启用 MA Squeezelite 提供程序可能会产生不良影响。Slimproto 所用端口的默认设置为 3483。这可以在该提供程序的设置中更改，但非默认端口不适用于较旧的硬件 Squeezebox 播放器
- 确保你没有在 Home Assistant 中运行 “slimproto”（Squeezebox 播放器）集成
- 通常不要使用队列流模式，除非你使用的是在曲目切换时存在问题的较旧 Squeezebox 硬件播放器。启用队列流模式可能会解决播放问题，但副作用可能是设备上的实际物理按钮被禁用。在带有显示屏的设备上，元数据（标题、艺术家和封面）以及位置跟踪（已播放时间、剩余时间和进度条）仅对第一首曲目正确：一旦流继续播放到下一首曲目，设备会继续显示第一首曲目的详细信息，并且显示的位置是错误的
- Squeezelite 设备没有原生的静音功能。如果需要，可以使用 “假静音” 控制选项，该选项位于每个单独播放器的 `Player Controls` 部分
- Squeezelite 同步组会向所有成员发送一个流式流。主格式根据主播放器的流模式采样率设置（受主播放器支持速率的限制）选择；然后每个成员接收该速率，如果其自身支持的最大速率较低，则接收该较低速率
