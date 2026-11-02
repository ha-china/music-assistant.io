---
title: Bose SoundTouch
---

# Bose SoundTouch <img src="/assets/icons/bose-soundtouch-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 [Bose SoundTouch](https://www.bose.com/) 扬声器。在 Bose 的 SoundTouch 平台生命周期终止之后，该提供程序（provider）通过提供原生控制并将其物理预设按钮映射到 Music Assistant 内容，使这些扬声器在 Music Assistant 中仍然可用。由 [Odn0](https://github.com/Odn0) 贡献并维护。

!!! note
    该提供程序目前处于 `alpha` 阶段。它本身不进行音频流传输：Music Assistant 对扬声器进行原生控制，而音频播放则委托给关联的播放协议（见下方的[音频播放](#audio-playback)）。

## 功能

- SoundTouch 扬声器会被 Music Assistant 自动检测
- 原生控制电源、音量、静音、播放/暂停、上一首/下一首曲目以及音源选择
- 扬声器上的物理预设按钮（1-6）可以映射到任意 Music Assistant 媒体项目
- 分组后，SoundTouch 扬声器使用原生 SoundTouch zone API 进行多房间同步播放
- MA 会跟随从 SoundTouch 应用中创建/更新/移除的多房间分组
- 当扬声器播放非 MA 内容（例如蓝牙、AUX 或内置流媒体服务）时，MA 会显示元数据
- 可选的原生播报（announcements），以覆盖层形式播放，会压低当前播放并在结束后恢复

## 配置

1. 在 Music Assistant 中，前往**设置 → 播放器提供程序**，点击**添加播放器提供程序**并选择 `Bose SoundTouch`。
2. 您的 SoundTouch 扬声器将被自动发现，并通常在一分钟内出现在播放器列表中。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐项排查。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，设置此提供程序时还可以使用以下设置：

- <b>手动定义的 IP 地址。</b> SoundTouch 扬声器通常会被自动发现。当您的网络上自动发现不起作用时，可以使用此设置通过 IP 地址添加扬声器
- <b>Bose SoundTouch 应用密钥。</b> 可选。Bose SoundTouch 开发者应用密钥可用于以覆盖层的形式向扬声器发送播报，压低当前音乐并在之后恢复播放。将此项留空可禁用原生播报（此时播报将改为通过关联的播放协议播放）
- <b>预设 1-6。</b> 六个物理预设按钮中的每一个都可以映射到一个 Music Assistant 媒体项目。该映射由此提供程序下的每个 SoundTouch 扬声器共享，因此预设 4 会在所有扬声器上播放相同的内容。要进行设置，请使用 <b>搜索引擎预设</b> 部分：选择<b>媒体类型</b>，输入关键词并点击<b>搜索</b>，选择一个<b>结果</b>，在<b>选择用于预设</b>下选择该结果所属的按钮，然后点击<b>将结果分配给预设</b>。所选项目会显示在<b>预设</b>下方的 <b>要播放的预设 1-6</b> 中，您也可以在其中手动输入 Music Assistant URI（provider://media_type/identifier），而不使用搜索流程

除了[单个播放器设置](/settings/individual-player/)和[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)之外，SoundTouch 播放器还有以下设置：

- <b>覆盖预设 1-6。</b> 按下这些按钮之一，即可将该扬声器上对应的物理预设按钮移交给 Music Assistant。对于想要使用的每个按钮，需要在每个扬声器上执行一次此操作。按钮的标签会提示您该扬声器在该预设上是否已存储了内容。按钮播放的内容在上方的提供程序设置中设定
- <b>[用于向播放器流式传输音频的输出编解码器](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)。</b> 在 SoundTouch 扬声器上默认为 MP3，这是迄今为止最可靠的播放方式。其他编解码器也可用，但在这里更容易出现问题
- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b> 采样率最高可达 192 kHz / 24 bit

## 已知问题 / 说明

- 该提供程序处于早期（`alpha`）阶段。Bose SoundTouch 平台已达到生命周期终点，不再由 Bose 维护，因此不同固件版本和型号之间的行为可能有所不同。
- 原生播报需要 Bose SoundTouch 开发者应用密钥。如果没有密钥，播报将改为通过关联的播放协议播放。
