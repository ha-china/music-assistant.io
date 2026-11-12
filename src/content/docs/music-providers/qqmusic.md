---
title: "QQ Music"
---

# QQ Music <img src="/assets/icons/qqmusic-icon.svg" alt="QQ Music icon" style="width: 70px; float: right;"  loading="lazy" />

**语言：** **English** | [中文](/music-providers/qqmusic-zh/)

Music Assistant 支持 <a href="https://y.qq.com/" target="_blank" rel="noopener noreferrer">QQ Music</a>。  
由 <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a> 贡献并维护。

QQ Music 是中国大陆使用最广泛的流媒体音乐平台之一，提供海量的中文及国际曲库、播放列表和个性化推荐。

此音源会让 Music Assistant 登录你的 QQ Music 账号，因此你收藏在其中的曲目、专辑、歌手和播放列表会显示在 Music Assistant 中，并且可以搜索其曲库。

> [!NOTE]
> - 需要 QQ Music 账号。
> - 需要订阅的曲目和音质在此处仍然需要订阅。
> - 此音源只播放你的账号有权访问的内容，不会绕过 QQ Music 的任何限制。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC up to 192kHz 24 bit |
| Login Method | QQ Music App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked tracks, followed artists, liked albums, and playlists
- Library sync is currently one-way (QQ Music → Music Assistant)
- If a track is not available at the quality you asked for, the next best is played instead

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked tracks, followed artists, liked albums, and playlists
- Library sync is currently one-way (QQ Music → Music Assistant)
- If a track is not available at the quality you asked for, the next best is played instead

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked tracks, followed artists, liked albums, and playlists
- Library sync is currently one-way (QQ Music → Music Assistant)
- If a track is not available at the quality you asked for, the next best is played instead

### 其他

- 支持搜索曲目、歌手、专辑和播放列表
- 资料库同步：喜欢的曲目、关注的歌手、喜欢的专辑和播放列表
- 资料库同步目前是单向的（QQ Music → Music Assistant）
- 如果所请求音质的曲目不可用，将播放次佳音质的版本

## 配置

### 扫码登录流程

1. 打开**设置 → 音乐源 → 添加音乐源 → QQ Music**。
2. 使用 **QQ Music** 应用扫描显示的二维码，并在应用中确认登录。
3. 等待设置完成。

> [!NOTE]
> 此二维码只能使用 QQ Music 应用扫描，无法使用 QQ 或微信扫描。

### 设置

- <b>首选音质。</b>选项包括 `MP3 128kbps (most compatible)`、`MP3 320kbps [Default]`、`FLAC (fallback to MP3)` 和 `Hi-Res (Master, fallback to FLAC/MP3)`。

## 已知问题 / 注意事项

- 可用性取决于你所在的位置，在中国大陆效果最佳。
- QQ Music 没有为其他应用提供正规的接入方式，因此此音源采用与网页浏览器相同的登录方式。这意味着 QQ Music 端的任何更改都可能在毫无预警的情况下使其失效。
- 推荐或电台列表中出现的内容，可能在你尝试播放时已经不可用了。
- 你的账号无权播放的曲目可能只播放试听片段，或完全无法播放。
