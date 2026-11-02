---
title: "Samsung WAM"
---

# Samsung WAM <img src="/assets/icons/samsung-wam.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持三星（Samsung）的 Wireless Audio Multiroom（WAM）扬声器。此提供程序（provider）由 [Oliver Stevens](https://github.com/Oliver-Stevens) 贡献并维护。

## 功能

- Music Assistant 会自动检测 Samsung WAM 扬声器
- 完整的播放控制：播放、暂停和停止
- 音量和静音可通过 MA 或扬声器的物理按钮进行控制，且音量和静音状态保持同步
- 可从 MA 选择物理输入源：Wi-Fi、蓝牙、AUX、光纤和 TV SoundConnect（可用输入源因设备而异）
- 原生多房间分组：可直接在 Music Assistant 中创建、修改和解散扬声器分组，外部分组更改（例如通过官方 Samsung 应用进行的更改）会被自动检测并反映出来
- 无缝播放（gapless playback）、交叉淡入淡出（crossfade）、随机播放和重复播放
- 支持播报（announcement）功能
- 在 Music Assistant 中更改播放器名称也会同时更新设备上的友好名称（friendly name）

## 配置

1. 在 Music Assistant 中，前往**设置 → 播放器提供程序**，点击**添加播放器提供程序**并选择 `Samsung WAM`。
2. 您的 Samsung WAM 扬声器将被自动发现，通常会在一分钟内出现在播放器列表中。

如果设备没有出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐步排查。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，在设置此提供程序时还可以使用以下设置：

- <b>用于发现的手动 IP 地址。</b>指定一个或多个 IP 地址，以添加未被自动发现的扬声器。仅在非标准网络环境下才需要此设置，例如，您的扬声器与 MA 服务器不在同一子网时。

Samsung WAM 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。

WAM 扬声器总是将播放队列作为一个连续的流进行播放，因为它们无法自行将下一首曲目加入队列。该流以第一首曲目的采样率开始，且只会将后续曲目向上重采样，没有可以更改此行为的设置。此外也没有采样率设置，因为 WAM 扬声器会自行报告其支持 44.1kHz 至 192kHz、16 或 24 位的采样率。

HTTP 配置文件（profile）和元数据注入设置由提供程序设定并处于隐藏状态，因此不会显示在 WAM 播放器上。

## 已知问题 / 注意事项

- 由于 WAM API 不支持原生的 URL 入队，WAM 播放器始终处于 Flow 模式。所有曲目都以连续流的形式发送，这正是能够实现无缝播放和交叉淡入淡出的原因。
- MA 无法显示非由其发起的音频的曲目元数据。蓝牙、AUX、光纤、TV SoundConnect 以及由外部发起的 Wi-Fi 流会显示为活动状态，但没有正在播放信息。所有来源的音量和静音状态均会正常跟踪。
- WAM API 没有用于 URL 播放的独立停止命令。停止是以暂停的方式实现的，因此在执行停止命令后，播放器显示为已暂停而非空闲。
- 暂停或停止播放后，MA 会将播放器显示为已静音。恢复播放时会自动取消静音。
- 如果在 Music Assistant 进行流式传输期间使用物理按钮更改了输入源（例如按下蓝牙按钮），提供程序会在切换到新来源之前自动终止该流。
