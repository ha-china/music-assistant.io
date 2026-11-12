---
title: "KION Music"
---

# KION Music <img src="/assets/icons/kion-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant 支持 [KION Music](https://music.mts.ru)（MTS Music）。由 [TrudenBoy](https://github.com/TrudenBoy) 贡献并维护。

KION Music 是由 MTS（Mobile TeleSystems）运营的音乐流媒体服务，MTS 是俄罗斯和独联体（CIS）最大的电信公司之一。

连接你的账户后，你的 KION 媒体库以及更广泛的曲库将呈现在 Music Assistant 中。

> [!CAUTION]
> 这是一个非官方实现，与 MTS 或 KION 无关联，也未获得其认可。

> [!WARNING]
> 音源（source）的完整功能和无损（FLAC）音质需要 KION Music 订阅。
> 没有订阅时，无法保证音源的完整运行。

> [!NOTE]
> 完整音源文档（俄文/英文）：**[trudenboy.github.io/ma-provider-kion-music](https://trudenboy.github.io/ma-provider-kion-music/)**

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC |
| Login Method | Token |

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse is available to explore the KION Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Mix, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)
- Multiple KION Music accounts can be added simultaneously

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse is available to explore the KION Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Mix, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)
- Multiple KION Music accounts can be added simultaneously

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse is available to explore the KION Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Mix, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)
- Multiple KION Music accounts can be added simultaneously

### 其他

- 搜索 KION Music 曲库
- 你 KION Music 媒体库中的条目将同步到 Music Assistant
- 在 Music Assistant 媒体库中添加/移除条目会同步回 KION Music
- 可通过浏览功能探索 KION Music 曲库
- 有歌词时会显示歌词（服务提供时逐行同步显示，否则为纯文本）
- 个性化推荐（My Mix、Made for You、Chart、New Releases 等）显示在主屏幕的推荐内容区域
- 可从曲目上下文菜单访问相似曲目（供无尽混音使用）
- 可同时添加多个 KION Music 账户

## 配置

KION 不提供面向外部应用的登录方式，因此需要从浏览器中复制令牌（token）。

1. 在 [music.mts.ru](https://music.mts.ru) 登录你的账户
2. 按 Ctrl+Shift+I 打开浏览器的开发者工具
3. 在 Firefox 中打开 **Storage**（存储）标签页，或在 Chrome 中打开 **Application**（应用）标签页
4. 在 **Local Storage**（本地存储）下，选择 `https://music.mts.ru` 对应的条目
5. 找到名为 `ya_token` 的行并复制其值
6. 将其粘贴到 Music Assistant 中的 KION Music 音源并保存

> [!WARNING]
> **妥善保管你的令牌**
>
> 任何人拿到它都可以进入你的 KION 账户，因此求助时请不要分享它或将其粘贴到任何地方。

### 设置

- **音频质量**：选择首选的音频质量。选项：`Efficient (AAC ~64 kbps)`、`Balanced (AAC ~192 kbps)`（默认）、`High (MP3 320 kbps)`、`Lossless (FLAC)`（需要 KION Music 订阅）

## 已知问题 / 说明

- 令牌可能会过期，需要定期刷新
- 无损 FLAC 音质需要有效的 KION Music 订阅；没有订阅时，音源将回退到可用的最高音质
- KION Music 主要在俄罗斯和独联体国家可用
