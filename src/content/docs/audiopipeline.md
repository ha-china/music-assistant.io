---
title: 音频管线
description: 音频管线视图的描述
---

# 音频管线

音频管线视图精确展示了音频从音源传输到扬声器的过程中发生的每一步，以便您确认音质得到保留。这是一个只读视图；此处没有任何可配置的内容，如果您对细节不感兴趣，可以放心忽略它。您可以通过点击[播放器栏](/ui/#player-bar)或[正在播放视图](/ui/#now-playing-view)中的质量标签来打开它。

<video controls autoplay loop muted playsinline style="width: 100%; max-width: 800px;">
  <source src="/videos/audio-pipeline.mp4" type="video/mp4" />
</video>

## 基本视图
<img src="/assets/screenshots/audiopipeline-basic.png" alt="image" style="width: 500px;"  loading="lazy" />

此视图展示了音频经过的完整路径。

该视图分为三个部分：输入（Input）、处理（Processing）和输出（Output）。部分标题上的彩色圆点表示音频离开该部分时的质量：橙色（LQ，低质量）表示低于 256 kbps 的有损编解码器，浅绿色（SQ，标准质量）表示 256 kbps 或更高的有损编解码器，绿色（HQ，高质量）表示无损编解码器，青色（HR，Hi-Res）表示采样率高于 48kHz 或位深高于 16 的无损编解码器。

输入（Input）部分显示了流的来源和编解码器、<a href="https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth.html" target="_blank" rel="noopener noreferrer">采样率和位深</a>以及<a href="https://nottinghamhifi.co.uk/blogs/blog/understanding-audio-bitrate" target="_blank" rel="noopener noreferrer">比特率</a>。将鼠标悬停在 ⓘ 上可以查看有关原始文件的更多详细信息。

处理（Processing）部分显示所有曲目在 Music Assistant 内部都以原始 <a href="https://www.origin-ic.com/blog/what-you-need-to-know-about-pcm-audio-explained/48067" target="_blank" rel="noopener noreferrer">PCM</a> 格式进行处理，并以音源的采样率解码为 <a href="https://www.youtube.com/watch?v=4YRp-FIsNDA" target="_blank" rel="noopener noreferrer">32 位浮点</a>格式。

接下来显示的是音量归一化（Volume Normalization）值，以及响度值的来源：曲目自身的测量值、专辑值、播放时进行的实时测量值，或者当音源以自身设定的响度目标传送音频时的音源值。其应用方式在[技术信息](/faq/tech-info/#volume-normalization)页面中进行了描述，控制它的设置位于[**设置 → 系统 → 流 → 队列播放**](/settings/core/#queue-playback)。

然后显示的是输出（Output）部分，在本例中它比较简单，只显示输出限制器、输出编解码器和质量，最后显示输出协议的图标和播放器的名称。

MA 默认向播放器发送无损音频。发送到播放器的具体编解码器、采样率或位深取决于播放器/输出协议，并且始终会显示。如果在播放器设置中选择了 MP3 选项（请参阅下方的[分组](#groups)示例），或者音频被重采样以匹配播放器的最大或原生采样率或位深，原始音频质量可能会发生变化。PCM 可以直接发送到播放器，但通常使用 FLAC 以节省一些带宽。

可预期的最大采样率可以在[播放器提供商汇总表](/faq/stream-to/#comparing-players-side-by-side)中找到。如果对播放器的 `Sample Rates Supported by this Player` 高级设置的默认选项进行了更改，此采样率可能会受到进一步限制。

> [!NOTE]
> 由于与某些播放器存在不兼容问题，广播流的位深将被降低至 16

*********************************
## 数字信号处理
<img src="/assets/screenshots/audiopipeline-dsp.png" alt="image" style="width: 500px;"  loading="lazy" />

在此示例中已启用 [DSP](/dsp/)。会显示已应用的 DSP 滤波器的高层级信息。如果不支持 DSP，将会显示一条消息（请参阅下方[分组](#groups)中的示例）。

> [!NOTE]
> 如果滤波器对音频路径没有影响，则不会在音频管线中显示。例如，如果平衡（Balance）控件设置为中间位置，则它没有起任何作用，因此不会显示。

*********************************
## 分组
<img src="/assets/screenshots/audiopipeline-groups.png" alt="image" style="width: 500px;"  loading="lazy" />

该视图会根据需要展开，以显示所有[分组的播放器](/faq/groups/)。在上面的示例中显示了两个播放器，它们带有各种滤波器和不同的播放器类型。

当一组播放器具有相同的管线时，相同的输出阶段将被折叠起来，只显示一个播放器，其后是一个加号以及所代表的其他播放器的数量。请注意，对于 Squeezelite 或 AirPlay，每个播放器可以有各自不同的输出管线；而对于 Sonos 或 Snapcast 等其他播放器类型，则由主播放器决定发送给所有子播放器的流。

<img src="/assets/screenshots/audiopipeline-groups-collapsed.png" alt="image" style="width: 500px;"  loading="lazy" />
