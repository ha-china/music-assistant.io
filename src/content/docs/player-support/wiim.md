---
title: "WiiM"
---

# WiiM <img src="/assets/icons/wiim.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持将音乐流式传输到 [WiiM 设备](https://www.wiimhome.com/)。

## 功能

- WiiM 设备可被 Music Assistant 自动检测
- WiiM 设备可选择与 AirPlay 设备分组
- 支持高达 192khz / 24 bit

### AirPlay 功能

部分 WiiM 设备支持 AirPlay 1 的 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> 协议和/或 Airplay 2 协议，这在 Music Assistant 中带来了非常实用的功能。

如果 WiiM 设备与 AirPlay 设备分组，或者默认的[输出协议](/settings/individual-player/#output-protocols)被更改为 `AirPlay`，则将使用 AirPlay 协议进行播放。其他 WiiM 播放器（player）可以与此播放器同步（即使它们本身不支持 AirPlay，因为该连接将使用 WiiM 原生协议）。这意味着可以将相同的音频以完美同步的方式播放到 AirPlay 和 WiiM 扬声器的组合上。

> [!NOTE]
> 如果由于分组而需要切换到 AirPlay 协议，则由于流式传输重新开始，预计会出现短暂的静音。

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序（Settings → Player Providers）**，点击 **添加播放器提供程序（Add a player provider）** 并选择 `WiiM`。
2. 你的 WiiM 设备将被自动发现，并通常会在一分钟内出现在播放器列表中。

如果设备没有出现，请逐项排查[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，在设置此提供程序（provider）时还可以使用以下设置：

- <b>用于发现的手动 IP 地址。</b>不建议在正常使用中设置。详情请参考 MA 界面中的说明

WiiM 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。其中一项在此处有所不同：

- <b>[此播放器支持的采样率（sample rate）](/settings/individual-player/#sample-rates-supported-by-this-player)。</b>与通常情况不同，默认选中了所有高达 192 kHz / 24 bit 的选项。较旧的第一代设备仅支持高达 48 kHz / 16 bit，因此请在这类设备上移除更高的采样率
- <b>允许在不同采样率的曲目之间进行交叉淡入淡出（crossfade）。</b>如果在曲目切换时出现音频故障，应禁用此选项。仅在流模式（flow mode）关闭时生效，因此一旦启用流模式，该选项将被置灰

诸如 Edifier 之类的通用 LinkPlay 扬声器的处理方式与 WiiM 和 Audio Pro 设备不同。Music Assistant 会控制它们，但会将音频交给另一个输出协议，因此它们的音频设置会显示在该协议自己的设置部分下，而不是上面的列表中。

## 已知问题 / 说明

- 分组播放时没有声音：当多个 WiiM 设备属于一个 AirPlay 分组，而其中一个 WiiM 设备不支持 AirPlay 时，可能会导致静音。例如，将 Sonos 与一台 WiiM 功放（支持 AirPlay）和一台 WiiM 声音设备（不支持 AirPlay）进行分组。在高级设置中，将“桥接设备”（即支持 AirPlay 的那台设备）的 AirPlay 协议更改为 “Prefer Airplay 2”（优先使用 AirPlay 2）即可解决此问题
- 将 WiiM 设备分组时歌曲重新开始播放：WiiM 设备第一次与另一台 WiiM 设备分组时，歌曲会重新开始播放。这看起来是 WiiM 固件本身的行为——它（很可能）会切换到“分组播放模式”以确保采样率 / 位深兼容。后续的任何分组/取消分组操作应该都不会受到影响。我们正在为此寻找解决方法
- 专辑封面有时在 WiiM 应用中不可见：由于 WiiM 固件无法处理我们的 imageproxy 发送的长 URL，专辑封面有时不会显示在 WiiM 应用中。我们正在研究解决此问题的方法。
