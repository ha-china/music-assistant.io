---
title: "iTunes Podcast 搜索"
---

# iTunes Podcast 搜索 <img src="/assets/icons/itunes-podcast-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://podcasts.apple.com/us/browse" target="_blank" rel="noopener noreferrer">iTunes Podcast 搜索</a>。由 <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a> 贡献并维护

Apple 的播客目录是互联网上最大的播客索引，也是 iPhone 上的 Podcasts 应用所搜索的目录。任何发布 feed 的人都可以免费被收录其中。

此源让你可以在 Music Assistant 中搜索该目录，并将找到的任何内容添加到你的媒体库中。单集本身是从播客自己的 feed 流式播放的，而不是由 Apple 提供。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | None |

### Other

- Search for podcasts via the iTunes API

### Other

- Search for podcasts via the iTunes API

### Other

- Search for podcasts via the iTunes API

### 其他

- 通过 iTunes API 搜索播客

## 配置

- 配置你的国家/地区
- 指定要获取的单集最大数量（使用 0 表示全部）
- 可选择禁用包含露骨内容的结果

## 已知问题 / 说明

- 由于无法将其过滤掉，搜索结果中可能包含视频播客
- 如果希望某个播客成为 MA 媒体库的一部分，你必须添加它，或将其标记为收藏。此源仅支持搜索
- 如果某个播客没有出现在搜索结果中，但已知它在 Apple Podcast 上可免费获取，这可能是因为内容创作者可以在 Apple Podcast 的源中隐藏 RSS feed。没有 feed URL，此源将无法访问媒体信息（如果是这种情况，MA 日志中会出现一条 INFO 级别的日志消息）。一种解决办法是尝试在网络上搜索你特定播客的 RSS feed URL。如果存在，可以使用 <a href="https://www.music-assistant.io/music-providers/podcastfeed/" target="_blank" rel="noopener noreferrer">Podcast RSS Feed</a> 手动将其添加到 MA。另一种选择是尝试在其他播客源中找到它
- 在此提供程序上完成同步时，同步会更新单集列表。如果在同步期间某个播客 feed 无法访问，该播客将保持其之前的状态
