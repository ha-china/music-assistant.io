---
title: "Pandora"
---

# Pandora <img src="/assets/icons/pandora.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持来自 [Pandora](https://www.pandora.com/) 的个人电台。该组件由 [Gavin](https://github.com/ozgav) 贡献并维护

Pandora 提供个性化电台，可根据用户的音乐偏好播放源源不断的歌曲。

Pandora 官方仅在美国可用。此音源会将您账户中的电台引入 Music Assistant。

> [!NOTE]
> 免费和付费订阅选项均受支持

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | MP3 192kbps |
| Login Method | Password |

## 配置：
- 在配置中输入用户名和密码
- 如果您有付费账户，可选择您的音乐音质偏好
- 点击保存按钮。

## 设置
- <b>用户名和密码。</b>您的 Pandora 账户凭据
- <b>音质。</b>在标准音质（AAC 64kbps）和高品质音质（MP3 192kbps）之间选择偏好。高品质音质需要付费账户，免费账户尽管设置了此选项，仍将使用标准音质音频。
- <b>接管流播放。</b>请求 Pandora 断开正在播放流的其他设备，改为允许通过 MA 进行流播放（更多信息请参见[说明](#known-issues--notes)）
- 可使用[标准同步选项](../#library-import-control)

## 已知问题 / 说明

- 此音源仅限于电台，不支持搜索或电台创建。此限制是由于 Pandora 的 API 结构所致
- 用户必须继续在官方 Pandora 应用/网站上创建电台，同步之后这些电台将自动出现在 MA 中
- 提供流元数据，但偶尔会缺少专辑封面
- 与 MA 中的所有电台一样，曲目无法跳过
- Pandora 每个账户一次仅支持向一台设备进行流播放。此提供程序在最初开始播放流时会自动接管流，但如果在初始播放开始之后的任何时刻收到来自 Pandora 的并发流播放错误，则不会自动接管流。如有需要，可以使用提供程序配置中的按钮发出接管请求。
