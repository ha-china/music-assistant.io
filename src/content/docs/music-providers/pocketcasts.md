---
title: "Pocketcasts"
---

# Pocket Casts <img src="/assets/icons/pocketcasts-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持访问 <a href="https://pocketcasts.com" target="_blank" rel="noopener noreferrer">Pocket Casts</a>，可以访问用户订阅的播客、播放进度和媒体库，并且更改会同步回 Pocket Casts 账户。由 <a href="https://github.com/yfhyou" target="_blank" rel="noopener noreferrer">yfhyou</a> 贡献并维护

Pocket Casts 是一款适用于手机、桌面端和网页端的播客应用。你订阅的内容、接下来排队播放的内容以及每集的收听进度都保存在你的账户中，而不是存储在某一台设备上，因此你的收听进度可以在这些设备之间无缝衔接。

Music Assistant 则成为这些设备中的另一员，从同一账户读取数据并向其写回数据。

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
| Maximum Stream Quality | Varies by feed |
| Login Method | Password |

### Other

- Subscribed podcasts and their episodes are available to browse and search
- Five special folders are exposed: Up Next, New Releases, In Progress, Starred, and History
- Podcasts can be subscribed to and unsubscribed from within Music Assistant, with changes synced back to Pocket Casts
- Playback progress is synced bidirectionally with Pocket Casts, and playback resumes from the saved position
- Seeking within episodes is supported

### Other

- Subscribed podcasts and their episodes are available to browse and search
- Five special folders are exposed: Up Next, New Releases, In Progress, Starred, and History
- Podcasts can be subscribed to and unsubscribed from within Music Assistant, with changes synced back to Pocket Casts
- Playback progress is synced bidirectionally with Pocket Casts, and playback resumes from the saved position
- Seeking within episodes is supported

### Other

- Subscribed podcasts and their episodes are available to browse and search
- Five special folders are exposed: Up Next, New Releases, In Progress, Starred, and History
- Podcasts can be subscribed to and unsubscribed from within Music Assistant, with changes synced back to Pocket Casts
- Playback progress is synced bidirectionally with Pocket Casts, and playback resumes from the saved position
- Seeking within episodes is supported

### 其他

- 已订阅的播客及其单集可供浏览和搜索
- 提供五个特殊文件夹：接下来播放（Up Next）、新发布（New Releases）、进行中（In Progress）、已加星标（Starred）和历史记录（History）
- 可以在 Music Assistant 中订阅和取消订阅播客，更改会同步回 Pocket Casts
- 播放进度与 Pocket Casts 双向同步，播放会从上次保存的位置继续
- 支持在单集内跳转播放位置

## 配置

在配置中必须提供 Pocket Casts 的电子邮件地址和密码

> [!NOTE]
> 免费的 Pocket Casts 账户即可满足需求；无需付费订阅。身份验证使用一个有效期长达数月的 bearer token（持有者令牌），过期后可能需要重新进行身份验证。

## 已知问题 / 注意事项

- 此提供程序（provider）使用非官方、无公开文档的 Pocket Casts API，如果该服务发生变化，可能会失效
- 播放期间，播放进度大约每 30 秒同步一次。完成一集会将其标记为已播放、从接下来播放中移除并归档。开始播放一集会将其加入接下来播放队列和历史记录中
- 流媒体音质由播客发布者的原始订阅源决定，不受 Pocket Casts 或 Music Assistant 控制
