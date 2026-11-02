---
title: "Plex"
---

# Plex <img src="/assets/icons/plex-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持使用 Plex（MusicLibrary）。由 <a href="https://github.com/micha91" target="_blank" rel="noopener noreferrer">micha91</a> 贡献，并由 <a href="https://github.com/anatosun" target="_blank" rel="noopener noreferrer">anatosun</a> 维护

Plex 是一款由你自己运行的媒体服务器，配有适用于手机、电视和浏览器的应用程序。它会为你自己存储中的音乐和视频建立索引，并随时随地串流给你。

此音乐源（source）将 Music Assistant 连接到你 Plex 服务器上的音乐库。你在其中整理好的所有内容都将成为 Music Assistant 媒体库的一部分。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Audiobooks, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | Password |

### Other

- Search the Plex server
- Track progress for audiobooks/podcasts across Plex clients

### Other

- Search the Plex server
- Track progress for audiobooks/podcasts across Plex clients

### 其他

- 搜索 Plex 服务器
- 跨 Plex 客户端跟踪有声读物/播客的播放进度

## 配置

[![Preview image](/assets/screenshots/plex/plex-config-opts.png)](/assets/screenshots/plex/plex-config-opts.png)

- 点击 `Use Plex GDM to discover local servers` 按钮，这**应该**能发现你的本地服务器，并自动填充 `local_server_ip` 和 `local_server_port` 字段
- 如果 GDM 发现失败，上述两个字段将被填充为 **"Discovery failed.... "**。在这种情况下，请填入你服务器的 IP 地址（不带任何 http:// 前缀），以及你为其对外开放的端口（通常为 32400）
- 如有需要，请开启 `SSL (HTTPS)` 开关。启用此设置后，高级设置中将激活一个要求验证证书的选项（默认开启）
- 如果你通过 MYPLEX.TV 登录 Plex，请点击 `Authenticate on MYPLEX.TV` 按钮，这可能会触发浏览器的 `pop-up`（弹出窗口）拦截提示，请留意这一点，然后像平时登录 Plex 那样完成身份验证
- 如果你已将 Plex 配置为允许无需身份验证的本地连接（见下文），请点击 `Authenticate Locally` 按钮
- 选择你想要使用的媒体库及其类型（音乐、有声读物或播客）；相关选项会根据你的现有配置自动选择，但你可以根据需要进行更改。
- 保存设置

### 高级设置

- <b>扩展推荐（Extended recommendations）。</b>默认启用。它会在 [发现（Discover）](/ui/#view---discover) 视图中添加额外的行，包括 <b>Mixes For You（为你推荐的混音）</b>（Plex 根据收听历史生成的个性化混音）、最近的媒体库播放列表以及 <b>On This Day（历史上的今天）</b>发行的内容，与 Plex 官方客户端显示的行保持一致。更改将在下一次推荐刷新时生效

## Plex 配置

- 如果你想允许 Music Assistant 在无需身份验证的情况下连接到 Plex，请进入你的 Plex 配置，即设置（Settings）/ 网络（Network）。在标记为 `List of IP addresses and networks that are allowed without auth` 的字段中填入运行 Music Assistant 的计算机的 IP 地址，然后点击 `Save Changes`

## 已知问题 / 注意事项

- 一个 Plex 音乐源总是绑定到一个用户账户和一个媒体库
- 如果你拥有多个媒体库和/或媒体库类型，则需要多次添加 Plex 提供程序（provider）
- 如果你拥有多个 Plex 账户，并且这些账户各自拥有自己的播放列表，你也可以将它们作为单独的提供程序实例添加
- 如果 Plex Media Server 与 MA 运行在同一台主机上，Plex Connect 插件将无法启动，因为两者都会尝试绑定 GDM 发现端口（32412）。这是一个已知的不兼容问题。要解决此问题，必须在 Docker 中运行 MA 并重新映射端口，或者将 Plex 和 MA 分别运行在不同的主机上
