---
title: "DLNA"
description: DLNA/UPnP 播放器提供程序（Player Provider）的描述
---

# DLNA/UPnP <img src="/assets/icons/dlna-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持基于 uPnP/DLNA 的设备。这是一种（算是）向支持的设备流式传输音频的通用标准。由于各制造商对该协议的实现非常不一致，有些播放器工作良好，而另一些则完全无法工作或需要变通方法。除此之外，如果您的设备能够正常工作，您可以享受快速的本地控制、无损音频支持，并且在很多情况下还能显示正在播放媒体的元数据。

> [!NOTE]
> 由于各制造商对 DLNA 协议的实现参差不齐，最有可能正常工作的配置是开启 QUEUE FLOW MODE（队列流动模式）。如果在确保已启用此选项后仍有问题，请逐一尝试每种不同的流式传输配置文件

## 功能

- DLNA 设备会在 Music Assistant 中被自动检测到

## 配置

1. 在 Music Assistant 中，前往**设置 → 播放器提供程序**，检查 `DLNA` 是否已在列表中；新安装时会自动添加。如果没有，请点击**添加播放器提供程序**并选择 `DLNA`。
2. 您的 DLNA 设备将被自动发现并出现在播放器列表中。请注意，某些设备可能需要长达 5 分钟才能被发现。

如果设备未出现，请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐一排查。

## 设置

有关 MA 界面中所见设置的信息，请参阅[播放器提供程序设置](/settings/player-provider/)和[单个播放器设置](/settings/individual-player/)页面，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。与上述不同或 DLNA 特有的设置包括：

- <b>[启用队列流动模式](/settings/individual-player/#enable-queue-flow-mode)。</b> DLNA 默认开启此选项，因为大多数 DLNA 播放器无法自行将下一曲目加入队列
- <b>用停止替换暂停。</b> 一些较旧的 uPnP 播放器无法暂停流式音乐并会忽略该命令。如果出现这种情况，请启用此选项，这样暂停和停止都会发送停止命令
- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b> 采样率最高可达 192 kHz / 24 位
- <b>允许不同采样率的曲目之间进行交叉淡入淡出。</b> 如果在曲目切换期间出现音频故障，应禁用此选项。仅对支持无缝播放的播放器显示，且仅在流动模式关闭时显示

## 已知问题 / 说明

- 某些设备需要特殊的变通方法才能启用播放。如果播放不工作，请查看 Music Assistant 日志寻找线索，并提供这些日志报告问题。遗憾的是，由于解决这些问题比较困难，它们的优先级较低。如果您的设备支持其他协议，请使用该协议，而不要提交问题报告
- 如果未找到您的设备，请尝试开启 `allow network scan for discovery` 选项。请注意，播放器可能需要长达 5 分钟才能被发现（设备重新开机后也是如此）
- DLNA 扬声器不支持音频交叉淡入淡出。如果您需要交叉淡入淡出和/或完整的无缝播放支持，必须在播放器设置中启用[队列流动模式](/faq/tech-info/#track-queueing)。启用流动模式可能会解决播放问题，但可能会带来禁用设备上实际物理按钮和/或元数据显示的副作用
- 可以通过[通用分组](/faq/groups/#universal-groups)将 DLNA 播放器分组，但它们可能无法同步播放
- 虽然 Sonos 设备严格来说也基于 DLNA，但他们在此之上创建了自己的额外功能层，例如交叉淡入淡出支持和许多其他特性。因此建议在 Music Assistant 中使用 Sonos 播放器提供程序，而不是 DLNA 提供程序。MA 默认禁用所有发现的 Sonos DLNA 设备
- 为了支持更多的播放器，可以使用不同的流式传输配置文件。如果播放器不工作、流中途停止或有其他播放问题，请更改播放器设置 `HTTP Profile used for sending audio` 并逐一尝试每个选项，直到播放器正常工作
- 某些播放器（例如 JRiver Media Center、Naim NDX）不支持 FLAC 流，或仅支持特定质量设置的 FLAC（例如 44.1/16）。如果播放命令失败、没有声音或听到失真，请尝试将 `Output Codec to use for streaming audio to the player`（位于播放器设置中的 ADVANCED SETTINGS 下）更改为其他选项之一
