---
title: "Sonos"
---

# Sonos <img src="/assets/icons/sonos-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 Sonos 设备。有两个可用的提供程序（provider）："Sonos" 适用于现代（S2）设备，"Sonos S1" 适用于较旧的 S1 一代。如果您的音箱使用当前的 Sonos 应用，那么它们就是 S2。

## 功能

- Music Assistant 会自动检测 Sonos 设备
- 同一系列（S1 或 S2）的 Sonos 设备在分组后将同步播放
- Sonos 设备可以选择与 AirPlay 设备分组

### AirPlay 功能

许多 Sonos 设备支持 AirPlay 1 的 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> 协议，这在 Music Assistant 中启用了非常实用的功能。<a href="https://support.sonos.com/en-au/article/stream-airplay-audio-to-sonos" target="_blank" rel="noopener noreferrer">Sonos 的 AirPlay 指南</a>列出了哪些设备支持 AirPlay。

如果 Sonos 设备与 AirPlay 设备分组，或者默认的[输出协议](/settings/individual-player/#output-protocols)被更改为 `AirPlay`，那么将使用 AirPlay 协议进行播放。其他 Sonos 播放器可以与此播放器同步（即使它们本身不支持 AirPlay，因为该连接将使用原生 Sonos 协议）。这意味着可以将相同的音频完美同步地播放到 AirPlay 和 Sonos 音箱的组合上。

> [!NOTE]
> 如果由于分组而需要切换到 AirPlay 协议，那么由于流重新启动，预计会出现短暂的静音。

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序**，检查 `Sonos` 是否已在列表中；新安装时会自动添加它。如果缺失，请点击 **添加播放器提供程序** 并选择 `Sonos`。
2. 如果您有较旧的 S1 一代设备，`Sonos S1` 提供程序永远不会被自动添加。请点击 **添加播放器提供程序** 并选择 `Sonos S1`。
3. 您的 Sonos 设备将被自动发现并出现在播放器列表中，通常在一分钟之内。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)进行排查。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，在设置此提供程序时还可以使用以下设置：

- <b>用于发现的手动 IP 地址。</b>在正常情况下，Music Assistant 会使用多播发现（mDNS/UPnP，[在此处说明](/faq/networking/)）自动发现网络上的所有播放器。在特殊网络设置的情况下，或者当遇到一个或多个播放器无法被发现的问题时，可以在此处手动添加 IP 地址。不建议在正常使用中使用此设置。此外，如果播放器与 Music Assistant 服务器不在同一子网中，流式传输可能会出现问题；在这种情况下，请确保播放器可以在网络上访问服务器，并仔细检查[设置中流服务器的 base URL 配置](/settings/core/#streams)

Sonos S1 提供程序还有两个额外的设置：

- <b>启用网络扫描以进行发现。</b>默认关闭。扫描网络以查找播放器，而不是等待它们自行公告。如果您的某些 S1 播放器未被自动发现，可以尝试此选项，不过通常应该不需要
- <b>家庭 ID（Household ID）。</b>您的 Sonos S1 系统的 ID。留空时会自动检测，因此除非有充分理由，否则无需填写

除了[单个播放器设置](/settings/individual-player/)和[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)之外，Sonos 播放器还有以下设置：

- <b>[对于实时源优先使用低延迟 WAV](/settings/individual-player/#prefer-low-latency-wav-for-live-sources)。</b>对于 Sonos 和 Sonos S1 默认开启。如果音箱无法播放连续的 WAV 流，请将其关闭
- <b>允许在不同采样率的曲目之间进行淡入淡出（crossfade）。</b>如果在曲目切换期间出现音频故障，应将其禁用。它仅在流模式（flow mode）关闭时生效，因此一旦启用流模式，该项就会变灰

Sonos 播放器没有采样率设置，因为每个音箱的能力都是已知的。当前的 Sonos 型号支持 16 或 24 位的 44.1kHz 和 48kHz，而较旧的型号仅限于 16 位。Sonos S1 播放器支持 16 位的 44.1kHz 和 48kHz。

如果 Music Assistant 还可以通过其他方式（例如通过 AirPlay）访问某个 Sonos 音箱，那么该音箱会在输出协议下为每个协议显示一个部分。上面的设置是 Sonos 部分中的设置，而其他协议有自己单独的一套设置，这就是为什么可用设置在不同音箱之间可能看起来不同的原因。

## 已知问题 / 注意事项

- Sonos Arc 与 Unifi 网络设备之间已有问题报告。如果您遇到问题，请确保在 UniFi 网络设置中 `Multicast DNS` 和 `IGMP snooping` 已开启。这些是控制音箱用于被发现的通知消息的路由器设置；有关说明和完整检查清单，请参见[网络基础](/faq/networking/)
- 已有关于 `Sonos Connect Amp` 和 `Play:1` 上播放无法开始的问题报告。如果遇到这种情况，请在[单个播放器设置](/settings/individual-player/)中将 `Enable Queue Flow Mode` 设置为开启
- S1 和 S2 设备无法在同一个同步组（Sync Group）中分组。S1 和 S2 设备可以通过通用组（Universal Group）分组，但无法同步播放
- 同时使用 Sonos HA 集成（integration）和 MA Sonos S1 播放器提供程序可能会导致问题。HA 提供程序和 Sonos S1 提供程序无法在同一主机上运行，而且这些音箱不喜欢来自太多源的过多请求。因此建议仅使用 MA Sonos S1 播放器提供程序
- Sonos 固件的更改导致在输出编解码器为无损格式（即 FLAC 或 WAV）时淡入淡出无法工作。用户可以禁用淡入淡出、切换到 MP3 编解码器或使用 AirPlay 模式
