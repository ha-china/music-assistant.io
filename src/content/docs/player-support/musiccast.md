---
title: "MusicCast"
description: MusicCast 播放器提供程序的说明
---

# MusicCast <img src="/assets/icons/musiccast-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://au.yamaha.com/en/products/contents/audio_visual/musiccast/index.html" target="_blank" rel="noopener noreferrer">MusicCast</a> 设备。由 <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a> 贡献并维护

## 功能特性

- MusicCast 设备可被 Music Assistant 自动检测
- MusicCast 设备分组后播放时可保持完美同步
- 支持交叉淡入淡出（crossfading）和元数据
- 可指定播放器退出群组时切换到的音源
- 播放器播放非 MA 内容时，MA 会显示元数据
- 可以选择 MusicCast 设备的音源

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序**，点击 **添加播放器提供程序**，然后选择 `MusicCast`。
2. 您的 MusicCast 设备将被自动发现，并通常会在一分钟内出现在播放器列表中。

如果设备未出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)进行排查。

## 设置

除了[单个播放器设置](/settings/individual-player/)和[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)之外，MusicCast 提供程序还在播放器的 `Output Protocol(s)` 部分中提供了一些独有的设置：

- <b>完全禁用区域（zone）处理。</b>当播放切换到其他音源时，此选项会禁用自动音源切换。建议先在禁用此开关的情况下试用提供程序。但是，如果播放过程中遇到问题，请开启此开关，这会使下方另外两个区域设置失效。此设置仅适用于多区域播放器
- <b>退出群组时切换到此非网络音源。</b>播放器退出群组时必须切换输入。此选项定义选择哪个输入。它必须是不需要网络连接的输入，并且建议选择一个未使用的音源，以免切换输入时产生意外的声音输出。此设置仅适用于多区域播放器
- <b>退出群组时关闭该区域。</b>此开关定义播放器退出群组时的电源行为。此设置仅适用于多区域播放器
- <b>设备在曲目末尾停止时自动推进队列。</b>默认开启。Yamaha 接收机偶尔会丢弃队列中的下一首曲目并停止播放，该选项可让 Music Assistant 检测到这种情况并继续推进队列。副作用是，如果您在曲目最后几秒自行停止播放，也会推进到下一项，因此如果您希望始终遵循设备自身的停止操作，请将其关闭
- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b>采样率最高可达 192 kHz / 24 位。请将其设置为与您的设备所支持的规格相匹配

## 播放器选项

MusicCast 支持[播放器选项](/player-support/#player-options)。有关可用选项的信息，请参阅 MA 界面和设备的使用手册

## 已知问题 / 说明

- 支持的设备为 2015 年左右及之后的产品
- 如果设备具有多个区域（即主区域 + 最多 3 个其他区域），则只能向其中一个区域进行流式播放。不过，如果是向主区域播放，其他区域可以加入该播放器。这是 Yamaha 设备的局限性。同一时间只能建立一个网络连接，因此同一时间只能有一个网络输入处于活动状态。这意味着当设备退出群组时，MA 必须选择另一个非网络音源。这也意味着，尝试使用 `Select Source` 选项设置两个不同的网络音源会导致意外行为
- 主区域无法成功加入非主区域。尝试这样做会导致意外行为
- 在将多个具有多区域功能的设备分组，且希望将某台设备的两个或更多区域加入时，必须先添加该设备的主区域，然后才能加入其非主区域。如果只需将另一台设备的单个区域加入分组，则可以随时进行
- HA 集成（integration）和 MA 集成可以同时使用，但不建议这样做，因为会不必要地创建重复的播放器实体
- 如果接收机在跳过曲目时切换了输入音源，请尝试在播放器设置中禁用区域处理
