---
title: "Nico Nico 视频"
---

# Nico Nico <img src="/assets/icons/niconico-logo.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 [Nico Nico 视频](https://www.nicovideo.jp/)，这是一个类似于 YouTube 的日本视频分享网站，以覆盖在视频画面上的滚动弹幕评论而闻名。由 <a href="https://github.com/Shi-553" target="_blank" rel="noopener noreferrer">柴田 Shi-553</a> 贡献并维护

Nico Nico 上的许多内容都由其社区用户上传，因此这里有大量从未登上主流流媒体平台的原创歌曲、混音作品和 Vocaloid 作品。

通过此音乐源，您可以搜索这些曲库内容，并通过 Music Assistant 播放其中的音频。登录后，您创建的 Mylist（收藏夹）以及您关注的艺术家也会一并同步过来。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | AAC up to 576kbps |
| Login Method | Cookie |

### Other

- Allows searching, playback, and library integration
- Keyword search for Tracks, Playlists (Mylist), and Albums (Series)
- Recommendations based on history and follow activity
- Library support
    - Playlists: your own Mylist (read/write)
    - Artists: your following artists

### Other

- Allows searching, playback, and library integration
- Keyword search for Tracks, Playlists (Mylist), and Albums (Series)
- Recommendations based on history and follow activity
- Library support
    - Playlists: your own Mylist (read/write)
    - Artists: your following artists

### 其他

- 支持搜索、播放和媒体库集成
- 支持对曲目、播放列表（Mylist）和专辑（系列）进行关键词搜索
- 基于历史记录和关注活动的推荐
- 媒体库支持
    - 播放列表：您自己的 Mylist（可读/可写）
    - 艺术家：您关注的艺术家

## 配置

Music Assistant 支持无需登录即可在 Niconico 上进行播放和搜索。
登录后可启用个性化功能，例如推荐、Mylist 读写以及观看历史。

登录使用您的 Niconico `user_session` cookie。目前已不再支持使用电子邮件和密码登录，因为 Niconico 现在对此要求额外的验证步骤。

### Cookie 认证（user_session）

以 Chrome 为例：

1. 访问 https://www.nicovideo.jp/
2. 前往“查看（View）> 开发者（Developer）> 开发者工具（Developer Tools）”。将会打开一个新的侧边窗口。
3. 点击“应用（Application）”标签页。您可能需要拉大窗口，或点击 >> 按钮
 [![Preview image](/assets/screenshots/niconico-auth1.png)](/assets/screenshots/niconico-auth1.png)
4. 在“存储（Storage）> Cookie”下，点击 "https://www.nicovideo.jp"，然后找到名为 "user_session" 的条目
 [![Preview image](/assets/screenshots/niconico-auth2.png)](/assets/screenshots/niconico-auth2.png)
5. 点击该条目并复制其 cookie 值，然后在 Music Assistant 中将其作为“User Session”填写
    - 请注意“Expires / Max-Age”（过期时间/最长有效期）一列。会话将在该日期过期，且不会自动续期。届时 Music Assistant 将提示该 cookie 无效或已过期，并且在您重复上述步骤并在提供商设置中输入新的 `user_session` 值之前，个性化功能将不可用

## 已知问题 / 注意事项

- 如果您为曲目指定了专辑，该曲目专属的缩略图将不会被使用

## 尚不支持

- 无
