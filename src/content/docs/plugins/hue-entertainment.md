---
title: Hue Lights Sync 插件
description: 让你的 Philips Hue 灯光随播放内容同步变换颜色。
pluginGroup: visuals
---

# Hue Lights Sync <img src="/assets/icons/hue-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

此插件会让你的 <a href="https://www.philips-hue.com/" target="_blank" rel="noopener noreferrer">Philips Hue</a> 灯光对正在播放的内容做出反应，随音乐同步变换颜色。你在 Hue bridge 上设置的每个娱乐区域（entertainment area）都会像扬声器一样出现在 Music Assistant 中，你可以将其与正在播放音乐的播放器组成一组。

> [!CAUTION]
> 此插件被标记为实验性功能。它已在 Hue Bridge V2 和 Hue Bridge Pro 上经过测试，但功能可能会发生变化，并且可能出现 bug。

## 功能

- 灯光随音乐变化，速度足够快，能够跟上音乐
- 四种风格可供选择：平滑（Smooth）、氛围（Ambient）、闪烁（Flashing）和活力（Energetic）
- 在 Music Assistant 能够判断出节拍位置时，颜色随节拍变化；在无法判断时，则跟随音乐中的响亮片段
- 你网络中的 Hue bridge 会被自动发现
- 支持多个 bridge。每个 bridge 都需要重新添加一次该插件
- bridge 上的每个娱乐区域都会成为 Music Assistant 中独立的灯光播放器

## 配置

- 灯光只能跟随 [Sendspin](/player-support/sendspin/) 播放器，因此你至少需要有一个这样的播放器。Sendspin 内置于 Music Assistant，你浏览器中的网页播放器就是其中之一
- 在添加插件之前，先在 Philips Hue 应用中创建一个娱乐区域（`SETTINGS >> ENTERTAINMENT AREAS`）
- 在 Music Assistant 中，前往**设置 → 插件 → 添加插件**并选择 **Hue Lights Sync**
- 输入 Hue bridge 的 IP 地址，也可以留空让 Music Assistant 自动查找
- 按下 Hue bridge 上的物理配对按钮，然后在 MA 界面中点击 `Pair`
- 点击 SAVE 完成配置。bridge 上的每个娱乐区域都会显示为一个灯光播放器（Light player）
- 将 Hue 灯光播放器加入任意处于活跃状态的 Sendspin 播放器或分组，灯光便会开始随音乐产生反应

### 设置

- <b>亮度（Brightness）。</b>整体灯光亮度（0-100）。默认值为 `100`。
- <b>模式（Mode）。</b>选择可视化风格：
    - <b>Smooth</b>（平滑）（默认）- 亮度由频谱柔和驱动，调色板缓慢漂移并随节拍循环变换颜色。
    - <b>Ambient</b>（氛围）- 颜色随节拍循环变换，饱和度随低音起伏，不调节亮度。最适合悠闲聆听。
    - <b>Flashing</b>（闪烁）- 每个节拍都有强烈的亮度脉冲，在强拍上更为强烈。
    - <b>Energetic</b>（活力）- 亮度随节拍大幅波动，同时调色板和色调快速轮转。
- <b>灯光延迟（Light latency，ms）。</b>提前于音频渲染灯光更新的毫秒数，用于补偿 Hue bridge 和网络延迟（0-3000）。默认值为 `20`。如果灯光滞后于音乐，请调高该值；如果灯光超前于音乐，请调低该值。

> [!CAUTION]
> **Flashing**（闪烁）和 **Energetic**（活力）模式会产生快速闪烁的灯光。如果你或在场任何人对闪烁灯光敏感，请避免使用这两种模式。

## 已知问题 / 注意事项

- Hue 灯光播放器是使用 Sendspin 可视化数据流的虚拟 `LIGHT` 播放器；它们只能被加入 Sendspin 播放器或分组
- 节拍效果在可用时会使用 [Smart Fades](/audio-analysis/smart-fades) 提供程序对曲目的节拍分析结果，否则灯光会退回到峰值和起音检测。当分析尚未计算完成，或在性能较低、无法及时计算节拍的设备上，节拍信息可能不可用
- 娱乐区域会在插件（重新）加载时被发现，因此在 Hue 应用中新添加的娱乐区域需要重新加载插件后，才会作为 MA 播放器出现
- Hue bridge 同一时间只允许一个娱乐区域进行串流，因此每个 bridge 在任一时刻只能有一个 Hue 灯光播放器处于活跃状态
