---
title: "Home Assistant 媒体播放器"
description: Music Assistant 中 HA 媒体播放器实体的功能与使用说明
---

# Home Assistant 媒体播放器<img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持向 Home Assistant 中的媒体播放器实体（entity）播放音乐。

这是 Home Assistant 三个组成部分中的最后一个；它需要 [Home Assistant 插件](/ha-plugin/)。如果你不确定自己需要哪一个，请参阅[各组成部分如何协同工作](/integration/#how-the-pieces-fit-together)。

> [!CAUTION]
> 此播放器提供程序（player provider）所依赖的上游 HA 集成（integration）未必是为音乐播放而编写或优化的。因此，只要有可能使用 MA 提供程序，你就应该这样做。HA 提供程序的问题将视资源情况予以处理。

## 功能

- HA 中所有可用的、且没有专用 MA 提供程序的媒体播放器实体，都将在 MA 中可用
- 所有可以在 HA 中分组的媒体播放器类型，都可以通过[播放器列表](/ui/#player-list)或 <a href="https://www.home-assistant.io/integrations/media_player/#action-media_playerjoin" target="_blank" rel="noopener noreferrer">HA 动作</a>在 MA 中进行分组

## 配置

在添加播放器提供程序之前，必须先安装[插件](/ha-plugin/)。下图展示了成功安装后的样子

![screenshot](/assets/screenshots/plugin-provider.png)

- 在 Music Assistant 中，前往**设置 → 播放器提供程序**，点击**添加播放器提供程序**，然后选择 `Home Assistant Media Players`
- 在提供程序设置中，选择想要使用的播放器。这些选择可以随时更改。

> [!CAUTION]
> 这些播放器的功能很可能受限。如果 MA 中存在原生播放器提供程序，请始终优先使用它，因为它是经过优化的

## 设置

Home Assistant 媒体播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。其中有一项在这里有所不同：

- <b>[用于向播放器串流音频的输出编解码器（codec）](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)</b> 此处默认为 MP3 而非 FLAC，因为它在各个 Home Assistant 播放器集成中具有最广泛的兼容性

流模式（Flow mode）以连续流的方式串流音频，而不是以单曲为单位，从而避免曲目之间出现间隙。对于 HA 媒体播放器，始终使用流模式，并且没有提供将其关闭的设置，因为 HA 播放器能力差异很大，这使其成为最可靠的播放方式。

### ESPHome 媒体播放器

较新的基于 ESPHome 的播放器（例如 Voice PE）会根据其报告的能力进行配置，因此上面的部分设置会自动为你设置且不会显示。输出编解码器固定为设备所请求的格式，HTTP 配置文件固定为 Profile 2，元数据注入已关闭，采样率来自设备而非上面的列表。输出声道模式和低延迟 WAV 设置仍然可用。

### MA 原生支持的媒体播放器

如果你导入的播放器还拥有原生的 Music Assistant 提供程序，其设置顶部会显示一条提示。强烈建议使用原生提供程序，而不是通用的 Home Assistant 提供程序，因为它能提供更好的控制和播放体验。

## 已知问题 / 注意事项

- 此播放器提供程序默认未启用，必须通过 MA 设置添加；但在其可用之前，你必须先设置 Home Assistant 插件提供程序
- 只有支持 `play_media` 的播放器才能使用，其他播放器将被过滤掉
- MA 播放器将被过滤掉
- 此播放器类型与其他任何播放器类型之间无法进行同步
- 为了支持更多播放器，系统提供了多种不同的串流配置文件。如果播放器无法工作、在串流中途停止或出现其他播放问题，请更改播放器设置 `HTTP Profile used for sending audio`，并逐个尝试每个选项，直到播放器正常工作为止
- HA 集成 `VLC Telnet` 和 `MPD` 存在问题的报告时有出现。如果可能，请避免使用由这些集成提供的播放器
