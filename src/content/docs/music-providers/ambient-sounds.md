---
title: "环境音"
---

# 环境音 <img src="/assets/icons/waves-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持环境音（Ambient Sounds）。此组件由 <a href="https://github.com/music-assistant" target="_blank" rel="noopener noreferrer">Music Assistant</a> 核心团队贡献并维护。

该音源为 Music Assistant 用户提供了一个小型的环境音循环目录，包括白噪声、粉红噪声、棕色噪声以及海浪声，所有声音均在服务器上本地生成。它们可以像其他条目一样直接播放，也可以用作队列的[音频叠加（audio overlay）](#using-ambient-sounds-as-audio-overlay)功能的音源，在音乐下方混合出一层环境音背景。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Sound Effects |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | FLAC 44.1kHz 16 bit |
| Login Method | None |

### Included sounds

| Sound | Description |
|:------|:------------|
| White noise | Bright, steady hiss with equal energy across all frequencies |
| Pink noise | Softer noise with reduced high frequencies, similar to steady rainfall |
| Brown noise | Deep, low rumble similar to a distant waterfall or heavy surf |
| Ocean waves | Deep rolling noise with a slow, wave-like swell |

### Other

- Every sound is a 30 second loop that is built to repeat seamlessly, so it can play indefinitely without audible seams
- All sounds are calibrated to the same loudness (-14 LUFS), so switching between them does not change the perceived volume
- Can be used as the audio overlay source for a queue, mixing ambient sound underneath the music

### Included sounds

| Sound | Description |
|:------|:------------|
| White noise | Bright, steady hiss with equal energy across all frequencies |
| Pink noise | Softer noise with reduced high frequencies, similar to steady rainfall |
| Brown noise | Deep, low rumble similar to a distant waterfall or heavy surf |
| Ocean waves | Deep rolling noise with a slow, wave-like swell |

### Other

- Every sound is a 30 second loop that is built to repeat seamlessly, so it can play indefinitely without audible seams
- All sounds are calibrated to the same loudness (-14 LUFS), so switching between them does not change the perceived volume
- Can be used as the audio overlay source for a queue, mixing ambient sound underneath the music

### Included sounds

| Sound | Description |
|:------|:------------|
| White noise | Bright, steady hiss with equal energy across all frequencies |
| Pink noise | Softer noise with reduced high frequencies, similar to steady rainfall |
| Brown noise | Deep, low rumble similar to a distant waterfall or heavy surf |
| Ocean waves | Deep rolling noise with a slow, wave-like swell |

### Other

- Every sound is a 30 second loop that is built to repeat seamlessly, so it can play indefinitely without audible seams
- All sounds are calibrated to the same loudness (-14 LUFS), so switching between them does not change the perceived volume
- Can be used as the audio overlay source for a queue, mixing ambient sound underneath the music

### 包含的声音

| 声音 | 描述 |
|:------|:------------|
| 白噪声 | 明亮、平稳的嘶声，在所有频率上能量均匀分布 |
| 粉红噪声 | 更柔和的噪声，高频成分较少，类似于持续的降雨声 |
| 棕色噪声 | 低沉的隆隆声，类似于远处的瀑布或汹涌的海浪 |
| 海浪声 | 低沉的滚动噪声，带有缓慢的波浪式起伏 |

### 其他

- 每个声音都是一个 30 秒的循环，专为无缝重复而设计，因此可以无限期播放而不会出现可听见的接缝
- 所有声音都校准为相同的响度（-14 LUFS），因此在它们之间切换不会改变感知到的音量
- 可以用作队列的音频叠加音源，在音乐下方混合环境音

## 配置：
- 该提供程序（provider）会自动设置，无需进行任何配置。
- 可以在**设置 → 音乐源**中禁用或移除该提供程序。

## 使用

环境音不会被添加到媒体库中，也不会出现在搜索结果里。可以通过浏览来找到它们：

1. 在主菜单中前往**浏览**
2. 打开**环境音**

在那里可以直接在任何播放器上播放某个声音，就像播放曲目一样。

### 将环境音用作音频叠加

音频叠加会在音乐继续播放的同时，将一个循环播放的音效混入队列的音频中。它通过“正在播放”（Now Playing）视图设置中的一个选项来启用。选择一种环境音作为队列的叠加音源，并按照个人喜好设置叠加音量（相对于音乐）。更改会立即生效。当队列正在播放时，播放会从当前位置重新开始，因此更改能立即被听到，而不必等播放器的缓冲区耗尽之后。

请注意，启用叠加会强制队列进入流模式（flow mode），因为叠加必须跨越曲目边界持续播放。

<img src="/assets/screenshots/audio-overlay.png" alt="Preview image" loading="lazy" />

## 已知问题 / 说明

- 这些声音是合成的，并非真实的实地录音。对于真实雨声录音等自然风格的内容，请使用专门的提供程序
- 首次播放某个声音时会使用 ffmpeg 进行渲染，这可能需要几秒钟。渲染结果会存储在 Music Assistant 的缓存目录中（每个声音几 MB），此后会被重复使用，因此后续播放可以立即开始
- 删除缓存目录并无大碍——声音只会在下次使用时重新渲染
- 环境音无法被收藏或添加到播放列表
- 当音频叠加处于激活状态时，队列始终以流模式播放。依赖逐条目播放功能的播放器也会相应地表现
- 如果叠加音源无法解析或其流失败，播放将在没有叠加的情况下继续，而不会停止音乐
