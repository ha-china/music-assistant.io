---
title: "播客 RSS 订阅源"
---

# 播客 RSS 订阅源 <img src="/assets/icons/rss-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持从 RSS 订阅源（feed）流式播放播客。由 <a href="https://github.com/saeugetier" target="_blank" rel="noopener noreferrer">saeugetier</a> 贡献并维护

每个播客都以 RSS 订阅源的形式发布，它其实就是一个网址，其中列出了各集节目以及每集音频所在的地址。播客应用都基于这些订阅源工作，大多数播客都会公开自己的订阅源。

该音源只关注一个订阅源，也就是说只对应一个播客。要关注多个播客，请为每个播客分别添加一次该音源，并各自填入其订阅源地址。如果您更希望直接搜索播客，而不是自己寻找订阅源地址，可以使用 [Podcast Index](/music-providers/podcast-index/) 和 [iTunes Podcast Search](/music-providers/itunes-podcast/) 来完成这项工作。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |    
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | None |

### Other

- Reads a standard podcast RSS feed from a web address you provide

### Other

- Reads a standard podcast RSS feed from a web address you provide

### 其他

- 从您提供的网址读取标准的播客 RSS 订阅源

## 配置

在通用设置（Generic Settings）中添加播客 RSS 订阅源的完整地址，包括 `https://`。

大多数播客会在自己的网站上公布其订阅源地址，播客目录中通常也会列出。

## 已知问题 / 注意事项

- 不遵循标准播客订阅源格式的订阅源可能无法工作
- 没有任何机制阻止同一订阅源被重复添加，这将导致该播客显示两次
