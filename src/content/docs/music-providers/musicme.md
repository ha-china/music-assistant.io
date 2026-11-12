---
title: "MusicMe"
---

# MusicMe <img src="/assets/icons/musicme-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 [MusicMe](https://www.musicme.com)。由 [Julien Deveaux](https://github.com/JulienDeveaux) 贡献并维护。

MusicMe 是由 ApachNetwork 运营的法国音乐流媒体服务，拥有来自主流和独立唱片公司的 1300 万多首曲目。

此音源会将 Music Assistant 登录到你的 MusicMe 账户，并使曲库可供搜索和浏览。

> [!CAUTION]
> 这是非官方实现，与 MusicMe 无关联，也未获得其认可。

> [!NOTE]
> 需要 MusicMe 订阅才能使用完整的流媒体功能。
> MusicMe 主要在法国提供服务。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                     | 
| Maximum Stream Quality | AAC 320kbps |
| Login Method | Password |

### Other

- Searching the MusicMe catalogue is possible, with a fallback to the MusicMe web search for niche queries
- Browse is available to explore new releases (by genre), top artists, and thematic radios
- Personalized recommendations (featured content, new releases, top artists, radios) appear in the Recommendations section on the Home screen
- Top tracks per artist are derived from their most recent albums

### Other

- Searching the MusicMe catalogue is possible, with a fallback to the MusicMe web search for niche queries
- Browse is available to explore new releases (by genre), top artists, and thematic radios
- Personalized recommendations (featured content, new releases, top artists, radios) appear in the Recommendations section on the Home screen
- Top tracks per artist are derived from their most recent albums

### Other

- Searching the MusicMe catalogue is possible, with a fallback to the MusicMe web search for niche queries
- Browse is available to explore new releases (by genre), top artists, and thematic radios
- Personalized recommendations (featured content, new releases, top artists, radios) appear in the Recommendations section on the Home screen
- Top tracks per artist are derived from their most recent albums

### 其他

- 可以搜索 MusicMe 曲库，对于冷门查询会回退到 MusicMe 网页搜索
- 可通过浏览功能探索新发行（按流派）、热门艺术家和主题电台
- 个性化推荐（精选内容、新发行、热门艺术家、电台）会显示在主屏幕的“推荐内容”部分
- 每位艺术家的热门曲目源自其最近发行的专辑

## 配置

在配置中，你需要输入 MusicMe 账户的电子邮件和密码

## 已知问题 / 说明

- MusicMe 不允许多个设备同时播放；在使用 Music Assistant 的同时从 MusicMe 网站播放会中断其中一个会话
- MusicMe 的搜索 API 是一种自动补全，只返回热门/精确匹配的结果；冷门艺术家可能不会出现在搜索结果中，但可以通过浏览找到
- MusicMe 并不总是提供艺术家封面图片；缺失的封面会在 MA 日志中显示 404 警告（仅影响外观）
- 媒体库同步（收藏）不可用 — MusicMe 未通过其服务提供此功能
