---
title: "Zvuk Music"
---

# Zvuk Music <img src="/assets/icons/zvuk-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant 支持 [Zvuk Music](https://zvuk.com)。由 [TrudenBoy](https://github.com/TrudenBoy) 贡献并维护。

Zvuk 是一家俄罗斯音乐流媒体服务，拥有庞大的俄语曲库以及国际发行的音乐，并为订阅用户提供无损音频。

连接你的账户后，你的 Zvuk 媒体库和播放列表将被导入 Music Assistant，并且可以在其中搜索曲库。

> [!CAUTION]
> 这是一个**非官方**的实现，与 [Zvuk](https://zvuk.com) 及其所有者没有任何关联。

> [!NOTE]
> 需要 Zvuk Prime 订阅才能使用此音源的完整功能并获得无损（FLAC）音质。
> 如果没有订阅，则无法保证此音源的完整运行。

> [!NOTE]
> 完整的音源文档（俄语/英语）：**[trudenboy.github.io/ma-provider-zvuk-music](https://trudenboy.github.io/ma-provider-zvuk-music/)**

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC |
| Login Method | Token |

### Other

- Searching the Zvuk Music catalogue is possible
- Items in a users Zvuk Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Zvuk Music
- Playlist creation and editing is supported
- Browse is available to explore the Zvuk Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized playlists ("Плейлисты для вас") appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)

### Other

- Searching the Zvuk Music catalogue is possible
- Items in a users Zvuk Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Zvuk Music
- Playlist creation and editing is supported
- Browse is available to explore the Zvuk Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized playlists ("Плейлисты для вас") appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)

### 其他

- 可以搜索 Zvuk Music 曲库
- 用户 Zvuk Music 媒体库中的条目将同步到 Music Assistant
- 在 Music Assistant 媒体库中添加/移除条目会同步回 Zvuk Music
- 支持创建和编辑播放列表
- 可以通过浏览功能探索 Zvuk Music 曲库
- 可用时显示歌词（如果服务提供逐行同步歌词则显示同步歌词，否则显示纯文本）
- 个性化播放列表（"Плейлисты для вас"）会显示在主屏幕的推荐部分
- 相似曲目可以从曲目上下文菜单中获取（供无尽混音使用）

### 其他

- 可以搜索 Zvuk Music 曲库
- 用户 Zvuk Music 媒体库中的条目将同步到 Music Assistant
- 在 Music Assistant 媒体库中添加/移除条目会同步回 Zvuk Music
- 支持创建和编辑播放列表
- 可以通过浏览功能探索 Zvuk Music 曲库
- 可用时显示歌词（如果服务提供逐行同步歌词则显示同步歌词，否则显示纯文本）
- 个性化播放列表（"Плейлисты для вас"）会显示在主屏幕的推荐部分
- 相似曲目可以从曲目上下文菜单中获取（供无尽混音使用）

## 配置

Zvuk 不提供面向第三方应用的登录方式，因此需要从浏览器中复制令牌（token）。

1. 在 [zvuk.com](https://zvuk.com) 登录你的账户
2. 在同一浏览器中打开 [zvuk.com/api/tiny/profile](https://zvuk.com/api/tiny/profile)。会显示一个包含你账户信息的文本页面
3. 在该文本中找到 `"token":`，然后复制紧随其后的引号之间的那串长字母和数字，注意不要包含引号本身
4. 在 Music Assistant 中，进入 **设置 → 音乐音源 → 添加音乐音源 → Zvuk Music**，将其粘贴到 **X-Auth-Token** 字段并保存

> [!TIP]
> 如果你的浏览器下载了一个文件而不是显示文本，请用任意文本编辑器打开该文件，并在其中查找 `"token":`。

> [!WARNING]
> **保管好你的令牌**
>
> 任何拥有该令牌的人都可以访问你的 Zvuk 账户，因此在寻求帮助时请不要分享它或将其粘贴到任何地方。

### 设置

- **音频音质**：选择首选音质
    - `High (320 kbps)` - 所有账户均可使用（默认）
    - `Lossless (FLAC)` - 需要 Zvuk Music 订阅

## 已知问题 / 注意事项

- 令牌会在一段时间后过期，需要更换。如果 Zvuk 停止工作，请重新执行上述步骤以获取新的令牌
- 如果第 2 步显示错误或空白页面，你可能尚未登录 zvuk.com。请先登录，然后重试
- 如果令牌被拒绝，请检查是否完整复制了令牌而没有多余内容，确保没有多余的空格、引号或换行符
- 如果没有订阅，则无法使用无损音质，Zvuk 将以你的账户所允许的最高音质（320 kbps）播放
