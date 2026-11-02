---
title: DSP 音调控制
description: 对 DSP 音调控制滤波器的用途和效果的说明
---

# 音调控制

音调控制提供简单的频率调整功能，可以对发送到播放器的音乐中的低音和高音区域进行提升或衰减。

此滤波器可在[播放器的 DSP 设置](/settings/individual-player/#dsp-settings)中添加和配置。完整的滤波器路径请参阅[数字信号处理概述](/dsp/)。

## 用法

共有三个控制项可用：低音（Bass）、中音（Mid）和高音（Treble）。它们分别对应以 100Hz、900Hz 和 9000Hz 为中心的一段频率范围。通过调整这三个滑块，即可提升或衰减音频信号在这些中心频率附近的音量。

## 技术细节

音调控制采用峰值（Peak，又称 Bell）滤波器类型，对音频信号应用一个基本的三频段[参量均衡器](/dsp/parametriceq/)滤波器。下图显示了将全部三个控制项设置为 +4.0dB 时产生的效果

![音调控制](/assets/screenshots/tone-controls.jpg)
