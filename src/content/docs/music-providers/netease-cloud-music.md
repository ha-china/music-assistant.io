---
title: "网易云音乐"
---

# 网易云音乐 <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

**语言：** **English** | [中文](/music-providers/netease-cloud-music-zh/)

Music Assistant 支持<a href="https://music.163.com/" target="_blank" rel="noopener noreferrer">网易云音乐（NetEase Cloud Music）</a>。网易云音乐是中国大陆主流的流媒体平台，拥有庞大的华语曲库、推荐功能和歌词支持。
由 <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a> 贡献并维护。

此音乐来源会使用你的网易账号登录 Music Assistant，因此你在该账号中收藏的音乐和播放列表会显示在 Music Assistant 中，并且可以搜索其曲库。它需要在你自己的网络上运行一个额外的 API 服务，具体说明见下文。

> [!NOTE]
> - 需要一个网易云音乐账号
> - 你还需要在 Music Assistant 之外自行运行一个小软件，详见[配置](#configuration)
> - 此音乐来源仅播放你的账号有权播放的内容，不会绕过网易的任何限制

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                     | 
| Maximum Stream Quality | Hi-Res FLAC |
| Login Method | NetEase App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked/favorited content and user playlists
- Dynamic recommendation/radio entries include Daily songs, Daily playlists, Private FM, and Heart Mode
- Library sync is currently one-way (NetEase Cloud Music -> Music Assistant)

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked/favorited content and user playlists
- Dynamic recommendation/radio entries include Daily songs, Daily playlists, Private FM, and Heart Mode
- Library sync is currently one-way (NetEase Cloud Music -> Music Assistant)

### 其他

- 支持搜索曲目、艺术家、专辑和播放列表
- 可同步喜欢/收藏的内容以及用户播放列表
- 动态推荐/电台条目包括每日歌曲、每日歌单、私人FM 和心动模式
- 目前媒体库同步是单向的（网易云音乐 -> Music Assistant）

## 配置

### 你需要额外运行的服务

网易没有为其他应用提供合适的接入方式，因此此音乐来源通过一个名为 NeteaseCloudMusicApi 的独立软件与网易通信，该软件由你自己运行。除非你另行指定，Music Assistant 默认会在 `http://127.0.0.1:3000` 查找它。

Home Assistant 用户现在可以直接在 Home Assistant 内的应用商店中搜索 `NetEase Cloud Music API` 来安装配套应用。

### 扫码登录流程（网易云音乐 App）

1. 打开 **设置 → 音乐来源 → 添加音乐来源 → 网易云音乐**
2. 将 **API 基础 URL** 设置为你的本地 API 服务
3. 点击 **扫码登录**，将会打开一个新的二维码页面
4. 使用**网易云音乐 App** 扫码，并在应用中确认登录
5. 关闭二维码页面
6. 点击 **保存**

## 合规性 / 说明

- 你只能播放网易账号允许你播放的内容，除此之外别无其他
- 账号无权播放的曲目可能只能播放试听片段，或者完全无法播放
- 本页面所描述的内容不会绕过任何订阅限制
