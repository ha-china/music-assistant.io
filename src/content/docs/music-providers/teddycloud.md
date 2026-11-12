---
title: "TeddyCloud"
---

# TeddyCloud <img src="/assets/icons/teddycloud-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 <a href="https://github.com/toniebox-reverse-engineering/teddycloud" target="_blank" rel="noopener noreferrer">TeddyCloud</a>，它是儿童音频播放器 Toniebox 系列背后的自托管开源服务器。TeddyCloud 媒体库中的每个 Tonie 都会以有声读物的形式出现在 Music Assistant 中，并带有完整的章节。由 <a href="https://github.com/yoyixms" target="_blank" rel="noopener noreferrer">yoyixms</a> 贡献并维护

Toniebox 是一款专为儿童设计的音频播放器。它是一个没有屏幕的软质立方体，通过将一个名为 Tonie 的小玩偶放置在其顶部来进行控制，每个玩偶代表一个故事或专辑。

音频并不存储在玩偶中，而是存放在服务器上，TeddyCloud 就是这样的服务器，由你而不是制造商来运行。Music Assistant 连接的是服务器而不是盒子，因此你孩子已有的故事可以在完全不使用 Toniebox 的情况下通过你的扬声器播放。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Maximum Stream Quality | Opus 96kbps |
| Login Method | None |

### Other

- Each Tonie is imported into the Music Assistant library as an audiobook, with the series as the author and the episode as the title
- Chapters are taken from the Tonie's track marks and story names, so it is possible to skip between stories and seek within them
- Audio is streamed on demand directly from TeddyCloud in its original Opus quality, with no re-encoding
- Tonies are searchable and browsable alongside the rest of the Music Assistant content
- It is possible to add multiple TeddyCloud sources

### Other

- Each Tonie is imported into the Music Assistant library as an audiobook, with the series as the author and the episode as the title
- Chapters are taken from the Tonie's track marks and story names, so it is possible to skip between stories and seek within them
- Audio is streamed on demand directly from TeddyCloud in its original Opus quality, with no re-encoding
- Tonies are searchable and browsable alongside the rest of the Music Assistant content
- It is possible to add multiple TeddyCloud sources

### Other

- Each Tonie is imported into the Music Assistant library as an audiobook, with the series as the author and the episode as the title
- Chapters are taken from the Tonie's track marks and story names, so it is possible to skip between stories and seek within them
- Audio is streamed on demand directly from TeddyCloud in its original Opus quality, with no re-encoding
- Tonies are searchable and browsable alongside the rest of the Music Assistant content
- It is possible to add multiple TeddyCloud sources

### 其他

- 每个 Tonie 都会作为有声读物导入 Music Assistant 媒体库，系列名作为作者，剧集名作为标题
- 章节取自 Tonie 的音轨标记和故事名称，因此可以在不同故事之间跳转，也可以在故事内拖动进度
- 音频按需直接从 TeddyCloud 以原始 Opus 质量进行流式传输，无需重新编码
- Tonie 可以与 Music Assistant 的其他内容一起进行搜索和浏览
- 可以添加多个 TeddyCloud 源

## 配置

设置此提供程序（provider）需要以下内容：

- <b>服务器。</b>TeddyCloud 实例的服务器 URL（例如 `http://teddycloud.local`，或本地服务器的 `http://192.168.1.50:8080`）。如果不是 80 端口，请包含端口号

## 已知问题 / 注意事项

- 系列、剧集和封面图片来自 TeddyCloud 的 tonies.json 数据 —— 自定义或无法识别的 Tonie 仍可播放，但会显示通用标题且没有封面
- 配置为从外部直播源流式传输的 Tonie 会被跳过，因为没有可供播放的已存储文件
- 你在故事中的播放进度不会与 Toniebox 共享。Music Assistant 保留自己的进度，盒子也保留自己的进度，因此在一台上开始的故事不会在另一台上从上次中断的地方继续。不会向 TeddyCloud 回写任何内容
- Tonie 的章节标记和故事名称来自两个不同的来源。在无法确定二者对应关系的情况下，章节将使用编号而非名称，以避免名称对应到错误的故事
