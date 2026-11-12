---
title: "Emby"
description: 使用 Emby 音乐源的文档
---

# Emby <img src="/assets/icons/emby-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持访问托管在 [Emby Server](https://emby.media/) 上的音乐。此组件由 [hatharry](https://github.com/hatharry) 贡献并维护。

Emby 是一个可以自行部署的媒体服务器。它会为存储在你自己存储空间中的音乐、电影和其他媒体建立索引，并将它们流媒体传输到你设备上的应用。

此音乐源将 Music Assistant 连接到你 Emby 服务器上的音乐库，因此你已经在那里整理好的音乐收藏无需二次编目即可使用。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | Password |

### Other

- Searching the 'Music' libraries on an Emby server is possible
- Scrobbling is sent back to the Emby server

### Other

- Searching the 'Music' libraries on an Emby server is possible
- Scrobbling is sent back to the Emby server

### Other

- Searching the 'Music' libraries on an Emby server is possible
- Scrobbling is sent back to the Emby server

### 其他

- 可以搜索 Emby 服务器上的 'Music' 库
- Scrobbling（收听记录）会发送回 Emby 服务器

## 配置：
配置此提供程序（provider）需要提供以下信息：

- <b>服务器（Server）。</b>例如，https://music.domain.tld/ 或 http://192.168.1.4:8096/（本地服务器）
- <b>用户名（Username）。</b>Music Assistant 用于访问服务器的帐户用户名
- <b>密码（Password）。</b>该帐户的密码

## 已知问题 / 说明
- Music Assistant 实例必须能够访问 Emby 服务器，媒体库扫描和播放功能才能正常运行。
