---
title: "Rainy Mood"
---

# Rainy Mood <img src="/assets/icons/rainy-mood-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 Rainy Mood。该组件由 <a href="https://github.com/jlpouffier" target="_blank" rel="noopener noreferrer">jlpouffier</a> 贡献并维护。

该音源（source）将来自 <a href="https://rainymood.com" target="_blank" rel="noopener noreferrer">rainymood.com</a> 的雨声氛围作为音效提供。它可以像任何其他条目一样直接播放，也可以用作队列（queue）的[音频叠加（audio overlay）](#using-rainy-mood-as-audio-overlay)功能的音源，将雨声混合在音乐之下。

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
| Maximum Stream Quality | MP3 128kbps |
| Login Method | None |

### Included sounds

| Sound | Description |
|:------|:------------|
| Rain | Looping rain ambience from rainymood.com |

### Other

- The sound is streamed from rainymood.com, it is not generated or stored locally
- Can be used as the audio overlay source for a queue, mixing the sound of rain underneath the music

### Included sounds

| Sound | Description |
|:------|:------------|
| Rain | Looping rain ambience from rainymood.com |

### Other

- The sound is streamed from rainymood.com, it is not generated or stored locally
- Can be used as the audio overlay source for a queue, mixing the sound of rain underneath the music

### Included sounds

| Sound | Description |
|:------|:------------|
| Rain | Looping rain ambience from rainymood.com |

### Other

- The sound is streamed from rainymood.com, it is not generated or stored locally
- Can be used as the audio overlay source for a queue, mixing the sound of rain underneath the music

### 包含的音效

| 音效 | 描述 |
|:------|:------------|
| 雨声 | 来自 rainymood.com 的循环雨声氛围 |

### 其他

- 音效从 rainymood.com 串流获取，并非在本地生成或存储
- 可以用作队列的音频叠加音源，将雨声混合在音乐之下

## 配置：
- 前往**设置 → 音乐音源 → 添加音乐音源**并选择 `Rainy Mood`
- 没有任何需要配置的内容，也不需要账号

## 用法

雨声不会被添加到媒体库，也不会出现在搜索结果中。可以通过浏览找到它：

1. 在主菜单中前往**浏览**
2. 打开 **Rainy Mood**

从那里可以直接在任何播放器上播放它，就像播放曲目一样。

### 将 Rainy Mood 用作音频叠加

音频叠加（audio overlay）会在音乐持续播放的同时，将循环播放的音效混入队列的音频中。它通过“正在播放”（Now Playing）视图设置中的一个选项启用。选择 Rainy Mood 的雨声作为队列的叠加音源，并根据喜好设置叠加音量（相对于音乐而言）。更改会立即生效。当队列正在播放时，播放会从当前位置重新开始，因此更改能被立即听到，而不必等播放器的缓冲区耗尽后才生效。

请注意，启用叠加会强制队列进入流模式（flow mode），因为叠加必须在曲目切换时持续播放。

<img src="/assets/screenshots/audio-overlay.png" alt="Preview image" loading="lazy" />

## 已知问题 / 说明

- 对 Rainy Mood 的支持仍处于实验阶段，如果遇到任何问题或意外行为，请进行反馈
- 需要有连接到 rainymood.com 的互联网连接，该音效无法离线使用
- 雨声无法被收藏或添加到播放列表
- 当音频叠加处于激活状态时，队列始终以流模式播放，依赖逐条目播放功能的播放器会相应地表现
- 如果叠加音源无法解析或其串流失败，播放将在没有叠加的情况下继续，而不是停止音乐
- 关于本地生成的噪音和海浪循环音效，请参阅[环境音效（Ambient Sounds）](/music-providers/ambient-sounds/)
