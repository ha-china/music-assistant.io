---
title: "Music Player Daemon (MPD)"
description: MPD 播放器提供者的描述
---
# MPD 播放器 <img src="/assets/icons/mpd-icon.svg" alt="MPD icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持运行 <a href="https://www.musicpd.org/" target="_blank" rel="noopener noreferrer">Music Player Daemon (MPD)</a> 的设备。由 <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">Gavin</a> 贡献并维护

## 功能特性

- 将音乐从 Music Assistant 流式传输到任何运行 MPD 的设备
- 支持暂停、进度跳转和音量控制

## 配置

MPD 播放器不会被自动发现。每个 MPD 服务器都必须在提供者设置中手动添加。在 MPD SERVERS 字段中填入 IP 或 IP:PORT 即可完成录入。如果未填写端口，则默认使用 6600。每添加一台服务器后，请点击输入框外部，以使该条目被接受。

如果 MPD 服务器需要密码，播放器会被创建，但在为该播放器单独设置密码之前将处于未激活状态

MPD 可用于 Linux、Windows 和 macOS。安装说明请参见 <a href="https://www.musicpd.org/download.html" target="_blank" rel="noopener noreferrer">MPD 下载页面</a>。

### MPD 音频输出配置

Music Assistant 将音频发送给 MPD，但 MPD 仍需要知道接下来把音频发送到哪里。这意味着必须在 `mpd.conf` 中配置一个输出，通常是 ALSA。如果不配置，MPD 会接收音乐但不会播放到任何地方。一个最简示例：
```ini
audio_output {
    type        "alsa"
    name        "My Output"
    mixer_type  "software"
}
```

完整的配置选项请参阅 <a href="https://mpd.readthedocs.io/en/stable/user.html#configuring-audio-outputs" target="_blank" rel="noopener noreferrer">MPD 音频输出文档</a>。

## 设置

MPD 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。以下设置在 MPD 上有所不同：

- <b>[向播放器流式传输音频时使用的输出编解码器](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)。</b>此处默认为 MP3，也可以选择 AAC 和 WAV。MPD 不提供 FLAC
- <b>[对直播源优先使用低延迟 WAV](/settings/individual-player/#prefer-low-latency-wav-for-live-sources)。</b>对于 MPD 默认开启。如果服务器无法播放连续的 WAV 流，请将其关闭

## 已知问题 / 说明

- 此处无法使用 FLAC。MPD 需要先完整读取整个文件才能播放 FLAC，而这对于连续流是无法做到的
- MPD 播放器始终开启流模式（Flow mode），且无法关闭。这是 Music Assistant 向 MPD 供给音频的唯一方式
- 只有在 MPD 中设置了混音器（mixer）后才会显示音量控制。如果没有设置，Music Assistant 就没有可控制的对象
- MPD 会原样传递收到的内容，不会限制音质，因此最终效果取决于您的声音硬件以及上文选择的输出编解码器。WAV 音质最好，但会占用多得多的网络带宽
