---
title: "Local Audio Out（已退役）"
description: Local Audio Out 播放器提供程序（player provider）已退役，由 Local Audio 应用取代
---

# Local Audio Out <img src="/assets/icons/loudness-analysis-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

> [!CAUTION]
> **此提供程序已退役。** 它已无法再被添加；而对于已经配置好的实例，它会加载失败，并显示指向此页面的提示。对它唯一能做的操作，就是在其设置中按 **移除**。

在运行 Music Assistant 的机器上，向声卡、USB DAC 和内置音频输出播放的任务现在由 **Local Audio** 应用负责，该应用与 Music Assistant 并行运行，而不是运行在其内部。

## Local Audio 应用

该应用向其所在机器的音频硬件播放，并以 [Sendspin](/player-support/sendspin/) 播放器的形式出现在 Music Assistant 中，可通过 mDNS 自动被发现。Music Assistant 中无需添加任何提供程序。

- **在 Home Assistant 上**，从 Music Assistant 应用仓库安装 **Local Audio**，Music Assistant 本身也来自同一个仓库。在该应用自己的 **Audio** 面板中选择它的播放输出；它的配置中没有任何选项用于选择输出。
- **在其他任何地方**，使用 Docker Compose 运行该容器。它和该应用都基于 <a href="https://github.com/music-assistant/local-audio-addon" target="_blank" rel="noopener noreferrer">music-assistant/local-audio-addon</a> 构建，其 README 介绍了环境变量以及如何命名 ALSA 输出。

> [!NOTE]
> 该应用仍处于实验阶段。它可以正常工作，但尚未在真实硬件上进行广泛测试。
