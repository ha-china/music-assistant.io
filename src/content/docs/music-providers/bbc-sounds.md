---
title: "BBC Sounds"
---

# BBC Sounds <img src="/assets/icons/bbcsounds-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持从 BBC Sounds 进行流媒体播放。由 <a href="https://github.com/kieranhogg" target="_blank" rel="noopener noreferrer">Kieran Hogg</a> 贡献并维护

BBC Sounds 是 BBC 的免费音频服务。它提供 BBC 电台的直播节目、播出后可回听的往期节目、播客以及音乐混编内容。

此音源将所有这些内容引入 Music Assistant。它无需账户即可使用，不过登录后可以添加你的个性化内容以及一些仅在英国境内可用的节目。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Tracks, Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | AAC-LC 320kbps |
| Login Method | None or Password |

### Other

- Stream live BBC radio shows, podcast series and on-demand audio
- Access your personalised BBC Sounds content*
- Keeps your My Sounds listen history up to date with your Music Assistant activity*

*Requires a logged in BBC account

### Other

- Stream live BBC radio shows, podcast series and on-demand audio
- Access your personalised BBC Sounds content*
- Keeps your My Sounds listen history up to date with your Music Assistant activity*

*Requires a logged in BBC account

### Other

- Stream live BBC radio shows, podcast series and on-demand audio
- Access your personalised BBC Sounds content*
- Keeps your My Sounds listen history up to date with your Music Assistant activity*

*Requires a logged in BBC account

### 其他

- 播放 BBC 电台直播节目、播客系列和点播音频
- 访问你的个性化 BBC Sounds 内容*
- 根据你在 Music Assistant 中的活动，使你的 My Sounds 收听历史保持最新*

*需要已登录的 BBC 账户

## 使用方法

你可以导航到 *浏览 > BBC Sounds* 来访问 Sounds 主菜单。相关内容也会作为推荐项目显示在主页上，可用内容还可以通过搜索来访问。

## 配置

该提供程序无需登录即可工作，但你只能使用 Sounds 内容的基础版本。

### 设置
- <b>用户名和密码。</b>BBC Sounds 账户是可选的，但某些仅限英国的内容在未登录的情况下可能无法使用
- <b>高级 - 显示本地电台</b>。默认情况下，仅列出全国性电台。启用此选项后还会显示本地电台。
- <b>高级 - 首选流媒体格式</b> 选项为 `HLS [default]` 或 `MPEG-DASH`

## 已知问题 / 注意事项

只有当你身处英国并已登录 BBC 账户时，才能使用完整功能。BBC 正在逐步将非英国听众排除在其 Sounds 平台之外，更多详情请见<a href="https://www.bbc.co.uk/sounds/help/questions/listening-outside-the-uk/outside-uk-changes" target="_blank" rel="noopener noreferrer">此处</a>。目前，该提供程序通过 Sounds API 允许国际听众访问直播和回听电台，但此访问权限将来可能会受到限制。

## 尚不支持

- 暂停和跳转直播电台播放
- 国际账户可能可以使用，但目前不受支持
- 国际菜单应显示可用的播客，此功能尚未实现
- 显示电台和回听节目的当前播放曲目功能已实现，但尚未发布
- 对于已登录用户，尚不支持通过媒体库访问你订阅的内容，但已在计划之中
