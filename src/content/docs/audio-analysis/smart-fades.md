---
title: 智能淡入淡出（Smart Fades）
---

# 智能淡入淡出提供程序（Smart Fades Provider）  <img src="/assets/icons/smart-fades-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

**Smart Fades** 提供程序会分析每首曲目，找出其节拍、强拍、调性和能量曲线，并利用这些信息在曲目之间创建与节拍匹配、兼顾均衡器（EQ）的交叉淡入淡出——比单纯基于时间的淡入淡出平滑得多。

Smart Fades 是一个可选插件，但会被自动添加并启用，除非不满足[下文列出](#performance-notes)的最低资源要求。

## 它为播放带来了什么

当在播放器上启用 Smart Fades 时，曲目之间的过渡是：

- **节拍对齐（Beat-aligned）** —— 流出曲目与进入曲目在强拍（downbeat）上对齐，而不是在小节中间被生硬截断。
- **能量感知（Energy-aware）** —— 交叉淡入淡出的位置选在流出曲目正逐渐收尾、进入曲目已平稳展开之处，而不是固定的偏移位置。
- **EQ 混合（EQ-blended）** —— 高频和低频分别进行混合，以避免直接的音量交叉淡入淡出所产生的浑浊声音。

最终效果更接近 DJ 手动操作的结果，而不是系统自带的交叉淡入淡出。

## 选择交叉淡入淡出模式

交叉淡入淡出是一项队列设置。可以在[播放器队列设置](/settings/core/#player-queues)中为所有播放器进行设置，也可以仅在[该队列自身的设置](/usage/#the-queue)中为单个播放器设置：

| 模式 | 行为 |
| --- | --- |
| **标准交叉淡入淡出（Standard Crossfade）** | 一种简单的基于时间的交叉淡入淡出，时长可配置。当 Smart Fades 无法运行时用作后备。 |
| **智能交叉淡入淡出（Smart Crossfade）** | 使用该提供程序生成的节拍、调性和能量数据，构建与节拍匹配、兼顾均衡器的过渡。 |

标准交叉淡入淡出所使用的时长（也是智能交叉淡入淡出的后备时长）可以在同一位置通过 "Fallback crossfade duration"（后备交叉淡入淡出时长）进行设置。

有些播放器原生不支持无缝（gapless）或交叉淡入淡出播放。对于这些播放器，Music Assistant 会自动切换到流模式（flow mode，一种连续的重新编码流），以便仍然能够进行交叉淡入淡出。

## 分析如何运行

对于本地文件系统（即 SMB、NFS 或 WebDAV）提供的曲目，扫描作为后台任务完成；媒体库中的所有曲目则会在播放期间被扫描。
 
分析会在曲目通过流式传输管道播放的同时于后台运行。曲目首次播放时：

- 分析会被执行并与曲目一同存储。
- 如果到下一首曲目开始播放时分析尚未完成，Music Assistant 会在该次过渡中退回到标准交叉淡入淡出。

一旦某首曲目完成分析，其结果会在之后的每次播放中重复使用——因此媒体库被播放得越多，随着时间的推移就会有越多的过渡变为智能过渡。

## 性能说明

Smart Fades 会对音频流执行真正的机器学习推理，其 CPU 和内存开销比 Music Assistant 的其他部分更大。因此，为了保障用户体验，以下是硬性要求：

- x86 平台上需要支持 [AVX2](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions) 的 CPU（或使用 ARM64 CPU）。在虚拟化环境中，如果宿主机 CPU 支持 AVX2，请将宿主机 CPU 型号直通给虚拟机
- 至少 4GB 内存和 2 个 CPU 核心

如果在启用 Smart Fades 后服务器运行迟缓，将受影响的播放器切换为标准交叉淡入淡出（或禁用）即可恢复正常行为，同时保留已安装的提供程序。

## 同一专辑曲目之间的过渡

同一专辑中的曲目在母带处理时通常就被设计为相互衔接，因此默认情况下 Music Assistant 会跳过同一专辑曲目之间的交叉淡入淡出。该行为同时适用于标准交叉淡入淡出和智能交叉淡入淡出。如果更希望对专辑内部的曲目进行交叉淡入淡出，可以通过"[Allow crossfade between tracks from the same album"](/settings/core/#queue-playback)（允许同一专辑曲目之间的交叉淡入淡出）设置来覆盖此行为。
