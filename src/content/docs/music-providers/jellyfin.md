---
title: "Jellyfin"
description: 关于使用 Jellyfin 音乐源的文档
---

# Jellyfin <img src="/assets/icons/jellyfin-logo.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 Jellyfin 服务器。该组件由 <a href="https://github.com/lokiberra" target="_blank" rel="noopener noreferrer">lokiberra</a> 贡献。

Jellyfin 是一款免费的开源媒体服务器，可在您自己的硬件上运行。它会为您已有的音乐、电影和其他媒体建立目录，并将它们流媒体传输到您设备上的应用，所有内容都不会保存在别人的服务器上。

此音乐源将 Music Assistant 连接到您 Jellyfin 服务器上的音乐库，您在其中整理的内容将成为 Music Assistant 音乐库的一部分。

> [!CAUTION]
> 请注意，此音乐源目前没有专门的开发人员负责。问题可能需要更长时间才能解决，因为它将以尽力而为的方式维护。请考虑改为直接与 MA 共享您的音乐

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | Password |

### Other

- Search from 'Music' libraries on the Jellyfin server

### Other

- Search from 'Music' libraries on the Jellyfin server

### 其他

- 可从 Jellyfin 服务器上的“音乐”库中进行搜索

## 配置：
您需要向 Music Assistant 提供以下信息：

- <b>服务器。</b>例如，https://music.domain.tld/ 或 http://192.168.1.4:8096/（本地服务器）
- <b>用户名。</b>Music Assistant 用于访问服务器的帐户的用户名
- <b>密码。</b>该帐户的密码

> [!NOTE]
> 建议使用 IP 地址而不是域名，以避免在 IPv6 名称解析失败时出现问题
### 设置

- <b>高级 - 验证 SSL。</b>启用后将验证 SSL/TLS 连接的证书。默认情况下已启用

## 尚不支持：
- 专辑类型元数据

## 已知问题 / 说明
- 如果某些功能无法正常工作，请先检查您提供给 Music Assistant 的帐户是否能通过 Jellyfin 自带的网页界面访问您的音乐。那里出现的问题也会在这里显现
