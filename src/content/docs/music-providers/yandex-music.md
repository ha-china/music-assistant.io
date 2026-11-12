---
title: "Yandex Music"
---

# Yandex Music <img src="/assets/icons/yandex-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant 支持 [Yandex Music](https://music.yandex.ru)。由 [TrudenBoy](https://github.com/TrudenBoy) 贡献并维护。

Yandex Music 是俄罗斯互联网公司 Yandex 旗下的流媒体服务。它拥有庞大的俄语曲库，同时也收录国际发行的音乐，其 My Wave 个性化电台是许多人收听它的方式。

连接你的账户后，你的 Yandex Music 媒体库、更广泛的曲库以及 My Wave 本身都会呈现在 Music Assistant 中。

> [!CAUTION]
> 这是一个非官方实现，与 Yandex 无关联，也未获得其认可。

> [!NOTE]
> 无损（FLAC）音质以及此处所有功能的正常使用都需要 Yandex Music Plus 订阅。
> 没有订阅时，下文描述的部分功能将无法使用。

> [!NOTE]
> 完整源码文档（俄语/英语）：**[trudenboy.github.io/ma-provider-yandex-music](https://trudenboy.github.io/ma-provider-yandex-music/)**

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC |
| Login Method | Device Flow / QR Code / Token |

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Wave, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- **My Wave** personalised radio. Likes, dislikes, skips and tracks you hear all the way through are sent back to Yandex, so the wave keeps learning from what you do in Music Assistant
- **Wave Modes** — 11 one-click presets for My Wave (Discover / Favorites / Popular, Calm / Active / Fun / Sad, Russian / Non-Russian / Without Words)
- **My Presets** — save your own named combinations of diversity, mood and language, re-launch them from Browse without fiddling with settings
- Similar tracks are available from the track context menu (used by Endless Mix); when a wave track plays, Endless Mix continues the same Yandex-curated session instead of branching into an unrelated similar-tracks stream
- **Podcasts** are synced from your Yandex library, browsable with episodes, and stream natively
- **Audiobooks** are synced, browsable with chapters, and stream natively. Playback position round-trips between Music Assistant and Yandex's own apps, so resume points stay in sync
- Multiple Yandex Music accounts can be added simultaneously

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Wave, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- **My Wave** personalised radio. Likes, dislikes, skips and tracks you hear all the way through are sent back to Yandex, so the wave keeps learning from what you do in Music Assistant
- **Wave Modes** — 11 one-click presets for My Wave (Discover / Favorites / Popular, Calm / Active / Fun / Sad, Russian / Non-Russian / Without Words)
- **My Presets** — save your own named combinations of diversity, mood and language, re-launch them from Browse without fiddling with settings
- Similar tracks are available from the track context menu (used by Endless Mix); when a wave track plays, Endless Mix continues the same Yandex-curated session instead of branching into an unrelated similar-tracks stream
- **Podcasts** are synced from your Yandex library, browsable with episodes, and stream natively
- **Audiobooks** are synced, browsable with chapters, and stream natively. Playback position round-trips between Music Assistant and Yandex's own apps, so resume points stay in sync
- Multiple Yandex Music accounts can be added simultaneously

### 其他

- 可以搜索 Yandex Music 曲库
- 用户 Yandex Music 媒体库中的条目会同步到 Music Assistant
- 向 Music Assistant 媒体库添加或移除条目会同步回 Yandex Music
- 可通过浏览（Browse）功能探索 Yandex Music 曲库
- 有歌词时会显示歌词（服务提供逐行同步歌词时显示同步歌词，否则显示纯文本）
- 个性化推荐（My Wave、为你推荐、排行榜、新发行等）会显示在主页的“推荐内容”区域
- **My Wave** 个性化电台。你的喜欢、不喜欢、跳过以及完整听完的曲目都会反馈给 Yandex，因此该电台会不断从你在 Music Assistant 中的行为中学习
- **Wave 模式** — 为 My Wave 提供 11 种一键预设（发现 / 收藏 / 热门，平静 / 活跃 / 欢乐 / 忧伤，俄语 / 非俄语 / 无人声）
- **我的预设** — 保存你自己命名的多样性、情绪和语言组合，之后无需费力调整设置即可从浏览（Browse）中重新启动
- 相似曲目可从曲目的上下文菜单中获取（无尽混播即使用该功能）；当播放电台曲目时，无尽混播会延续同一个由 Yandex 策划的会话，而不是分支到无关的相似曲目流
- **播客**会从你的 Yandex 媒体库同步，可按单集浏览，并以原生方式串流播放
- **有声书**会同步，可按章节浏览，并以原生方式串流播放。播放进度会在 Music Assistant 与 Yandex 官方应用之间双向同步，因此续播位置保持一致
- 可同时添加多个 Yandex Music 账户

## 配置

有三种登录方式。第一种最简单，而且能自行持续正常工作，因此除非它失效，否则请使用这种方式。

### 方式 1：使用代码登录（推荐）

1. 在 Music Assistant 中添加 Yandex Music 音乐源，然后点击**使用设备代码登录**
2. 此时会出现一个简短的网址和一个代码。在任意设备（例如你的手机）上打开该网址，并输入代码
3. 在你的 Yandex 账户中批准该请求
4. Music Assistant 会自行完成设置。它将保持登录状态，因此之后无需任何续期操作

### 方式 2：二维码

1. 在 Music Assistant 中添加 Yandex Music 音乐源，然后点击**使用二维码登录**
2. 在手机上打开已登录你想要使用账户的 Yandex 应用，并扫描该二维码
3. 在应用中批准该请求，剩下的交给 Music Assistant 完成

### 方式 3：手动粘贴令牌（高级）

仅在前两种方式都无法使用时才需要：

1. 在浏览器中打开[这个 Yandex 登录链接](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d)
2. 如果系统要求，请登录你的 Yandex 账户
3. 你会来到一个页面，其网址中包含 `access_token=`，后面跟着一长串字符
4. 复制这串字符 — 即 `access_token=` 之后、下一个 `&` 之前的全部内容
5. 将其粘贴到 Music Assistant 中 Yandex Music 音乐源的高级设置下

请注意，以这种方式粘贴的令牌会过期，必须手动更换。

### 设置

- **音质**：选择首选音频音质。选项：`Efficient (AAC ~64 kbps)`、`Balanced (AAC ~192 kbps)`（默认）、`High (MP3 320 kbps)`、`Lossless (FLAC)`（需要 Yandex Music Plus 订阅）
- **记住会话**：保持登录状态并自动续期连接。使用代码或二维码登录时默认开启
- **My Wave 自定义预设**：高级设置中的构建器，用于保存已命名的电台组合（名称 + 最多三个下拉菜单）。保存的条目会显示在浏览（Browse）中的**电台 → 我的预设**下

## 已知问题 / 说明

- 手动粘贴的令牌会过期，必须更换。使用代码或二维码登录可以避免这一问题
- 无损 FLAC 需要有效的 Yandex Music Plus 订阅。没有订阅时，Yandex Music 会以你账户所允许的最高音质播放
- 通过 Music Assistant 播放的曲目**不会**出现在你的 Yandex 收听历史中。如果希望它们出现，请改用 Yandex 应用本身播放，或添加 [Yandex Music Connect (Ynison)](/plugins/yandex-ynison/) 插件
