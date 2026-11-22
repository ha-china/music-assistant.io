---
title: 技术信息
description: 有关 MA 部分功能的深入信息
---

# 技术信息

本节包含有关 Music Assistant 运行机制的更深入的技术信息，供有兴趣的读者参考。

## 音量标准化

根据这份官方文档 https://tech.ebu.ch/docs/r/r128.pdf，完全避免削波（clipping）的标准化（normalization）值应为 -23 LUFS，但各平台的数值有所不同，因此很难确定正确的值。

母带处理插件开发商 izotope 提供了一份很好的文档，比较了 YouTube、Spotify、Deezer、Tidal 等众多平台。<a href="https://www.izotope.com/en/learn/mastering-for-streaming-platforms.html#loudness-specifications-by-streaming-platform" target="_blank" rel="noopener noreferrer">该页面对这一主题作了非常透彻的讲解</a>

综上所述，默认值为 -14，在 99% 的情况下这应该是一个不错的折中方案。

In general, it is not recommended to turn off the volume normalization because there are so many different loudness levels, especially if music is played from different sources. MA uses an integrated loudness level based on the EBU-R128 standard and only adjusts gain of the entire track up or down so there is no compression of dynamic range as long as you use a value low enough to keep headroom. It's the user's responsibility to use sane values for the target level of the volume normalization, a value somewhere between -23 and -12 LUFS is recommended. The default value is set to -14 LUFS. Audio is processed internally as 32 bit floating point, so the gain adjustment has headroom to work in. When normalization raises a track's level, a limiter with a -2 dB ceiling follows that gain, so the peaks that would otherwise clip are turned down while the track still plays at the target loudness. When DSP is enabled for the player (and for every speaker in its group), the limiter is left out and the DSP settings are in charge; a [Safety Limiter](/dsp/#safety-limiter) filter can be added there to keep a hard ceiling on the output.

如果音频只来自单一音源（例如 Deezer），并且该音源已对其音频文件进行了标准化，那么在 MA 中禁用标准化是安全的。如果音频来自不同音源，或者音源未对音频进行标准化，则强烈建议保持标准化开启以获得最佳体验。有些音源（其中包括 Spotify）会按自己设定的响度目标交付音频，并将这一点告知 MA。这些流会保持原样不做处理，并且[音频流水线（Audio Pipeline）](/audiopipeline/)视图会将标准化显示为来自音源。

### 响度值的来源

MA 需要先获得某首曲目以 LUFS 为单位的集成响度值，才能计算出增益调整量。它按以下顺序查找：

1. 文件上的 `R128_TRACK_GAIN` 和 `R128_ALBUM_GAIN` 标签
2. 文件上的 `REPLAYGAIN_TRACK_GAIN` 和 `REPLAYGAIN_ALBUM_GAIN` 标签
3. 音乐提供方（provider）自行提供的响度值，Plex 和 Subsonic 都会报告此值
4. MA 自身的测量结果，由[响度分析（Loudness Analysis）](/audio-analysis/loudness-analysis/)提供方生成

标签和提供方提供的值优先于 MA 自身的测量结果，已经带有此类值的曲目完全不会被分析。标签会在曲目扫描入库时读取。如果之后添加或修改了标签，请对曲目使用**刷新条目**（Refresh item）来获取新值。

Once a value exists from any of these sources it is used, whichever method is selected under [**Settings → System → Streams → Queue Playback**](/settings/core/#queue-playback), unless that method is Dynamic, Fixed Gain or Disabled. The methods otherwise differ only in what happens while no value is available yet. Where no value exists and the method allows it, MA falls back to a dynamic normalizer, which is less accurate but will at least prevent a sudden drop or spike in the volume level. Because it adjusts the gain continuously, the volume can be heard to drift within a track until that track has been measured, which is covered under [the volume rises and falls during a track](/faq/troubleshooting/#the-volume-rises-and-falls-during-a-track).

### 曲目增益与专辑增益

专辑增益能保持专辑内各曲目之间的相对响度关系不变，因此一段安静的间奏曲仍然会低于紧随其后的曲目。当以下所有条件都满足时，MA 会使用专辑值来代替曲目值：

- 曲目是作为以专辑形式加入队列的专辑的一部分播放的。单独添加到队列的单曲，或恰好包含该曲目的播放列表，则使用曲目增益
- 重复模式未设置为单曲重复
- 该曲目有可用的专辑响度值
- 所使用的方法基于测量，而非动态或固定增益

专辑响度只可能来自文件标签或音乐提供方。MA 自身的测量仅针对单曲，因此没有专辑增益标签的媒体库会按曲目进行标准化。当前曲目使用了两者中的哪一个，可在[音频流水线](/audiopipeline/)视图中查看。

### 更多技术细节

所有曲目在内部都由 Music Assistant 作为原始 PCM 处理。因此，所有要播放的内容都会先被解码为采用原始采样率的 32 位浮点原始 PCM（除非显式启用/需要重采样，例如启用了流模式（flow mode）时），增益调整在提取原始源媒体的过程中完成，因此传入流媒体引擎的 PCM 数据块都已应用增益调整。这样，在（最终的）16 位或 24 位位深内应该有足够的动态余量。如果播放目标不支持高于 16 位的位深，则会应用抖动（dithering）处理，在不损失质量的情况下将信号重新降回 16 位。

MA 中的所有后续处理都在 PCM 原始音频层面进行，例如 DSP 设置——如果启用了“流模式”，交叉淡入淡出也会在原始 PCM 数据块上进行，但这会将所有音频重采样为单一的固定采样率和位深，从而形成发送给播放器的一条音频“流”。

链条中的最后一环是 MA 需要将音频发送给播放器。默认情况下，MA 将原始 PCM 编码为 FLAC，因为它是无损的，同时还能提供相当不错的压缩率。对于无法很好地处理 FLAC 的播放器，或者仅仅为了节省带宽，MA 提供了一个（按播放器设置的）选项，可改为编码为 MP3。

[**设置 → 系统 → 流 → 队列播放**](/settings/core/#queue-playback)设置中包含标准化方法和目标电平，两者均适用于所有播放。标准化的开关位于 [**设置 → 系统 → 播放器队列**](/settings/core/#player-queues) 下，并且可以在[单个队列](/usage/#the-queue)层面进行覆盖。

## 流选择

当同一首曲目可从多个来源获取时——比如 Spotify 流和磁盘上的 FLAC 文件——Music Assistant 会在您按下播放时自动选择其中一个。它总是选择可用的最高质量来源。

质量的评判依据依次为**采样率、位深和编解码器**。当两个来源质量相当时，本地来源优先于云端来源。

您可以在该条目的[提供方详情](/ui/#provider-details)部分查看哪些来源拥有某个条目，以及它们之间是如何关联的。

## 曲目排队

MA 有两种将曲目排入播放器队列的方式：

**原生排队支持**

播放器具有原生排队支持，因此 MA 会在当前曲目结束之前告知它下一首曲目是什么。这是一项并非所有播放器都支持的特殊功能。例如 Squeezelite、Google Cast 和 Sonos 播放器就支持此功能（且默认启用）。一些 DLNA 播放器支持它而另一些不支持，因此 MA 提供了一个播放器设置来启用它，用户可以尝试看看播放器是否接受。这样做的好处是完全支持无缝播放（gapless playback），而且对于 Squeezelite 和 Sonos，还支持交叉淡入淡出（crossfade）。完整的元数据也会发送给当前正在播放的播放器。

**流模式**

作为原生排队的替代方案，可以向播放器发送单一路音频流，由 Music Assistant 将歌曲拼接在一起（无缝或交叉淡入淡出）。AirPlay、Snapcast 以及从 Home Assistant 导入的任何媒体播放器默认使用此模式；如果启用了交叉淡入淡出，DLNA 和 Cast 也会使用流模式。这种方法的缺点是大多数播放器会失去元数据显示（在音箱本身上）。不过，一些 DLNA 播放器支持“ICY 元数据”（ICY metadata），MA 发送的正是这种元数据，用于告知正在播放的内容。

关于播放器支持的说明：在 Music Assistant 中，请始终优先使用原生播放器提供方，而不要使用从 Home Assistant 导入的通用播放器！
Home Assistant 中的媒体播放器在设计上着眼于播放器/音乐的自动化，而非提供最佳的流媒体播放体验本身。
Music Assistant 中的原生播放器提供方经过了精心调优，可提供最佳的（音频）质量和体验，同时还支持分组和排队等导入的功能。

## 播放器完美同步

只有在准确掌握播放器播放每个音频帧的确切（毫秒级精度）时间戳的情况下，音箱之间才可能实现音频同步。在实践中，常用的音频同步策略有两种：

1) 向每个播放器发送带时间戳的帧——由一个主时钟统一计时，音频帧连同时间戳一起发送给同步组中的每个接收设备。因此，每个播放器都知道应该在何时播放每一帧，并且可以通过丢弃或注入帧来保持同步。这种策略常用于专有协议，例如 Google Cast、Sonos、Roon RAAT、BluOS，甚至 Apple AirPlay（RAOP）。
这是目前为止最佳（最精确）的同步方法，因为由每个播放器负责向 DAC（或数字传输设备）发送正确的音频帧。

2) 服务器端校正同步。每个播放器都从集中式源接收音频流，然后服务器跟踪每个播放器的延迟，并通过暂停/快进、加速/减速播放或注入帧来进行校正。这种方式更容易实现，因为客户端唯一需要做的是准确报告其播放进度（播放了多少毫秒），而服务器则包含维持同步的所有集中式逻辑。例如，Squeezelite 和 Snapcast 就采用这种方式。

时间同步的效果取决于多种因素，但常常会发现策略 1 优于策略 2，并且/或者策略 2 需要经过调整才能达到理想效果。例如，在 Snapcast 上可能会听到跳帧现象（在调整期间声音出现轻微扰动），而 Squeezelite 在基于 WiFi 的设备上由于播放器延迟不断变化，表现不够理想。

建议：为了获得最佳的播放器同步音频体验，请尽量固定使用一个生态系统，如果可能的话，请选择实现策略 1（专有协议）的方案之一。

AirPlay 受到青睐，因为它是一个非常优秀的同步协议，最初为专有协议，后来被逆向工程破解。如今，AirPlay 目标设备既存在于市售音频设备（甚至是高端设备）中，也存在于 DIY 设备中。它以巨大优势超越所有策略 2 的流协议。搭载 Google Cast 协议、售价 $35 的 Chromecast Audio 也是如此。它开箱即用，效果非常好。
