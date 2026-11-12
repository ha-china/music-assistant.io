---
title: "Bandcamp"
---

# Bandcamp 音乐 <img src="/assets/icons/bandcamp.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 Bandcamp。由 [ALERTua](https://github.com/ALERTua) 和 [teancom](https://github.com/teancom) 贡献并维护

Bandcamp 是一个音乐商店和流媒体网站，艺术家和厂牌（label）可以在上面发布自己的音乐，并直接出售给听众。在决定购买之前，大部分曲库内容都可以免费试听。

通过此音乐源，您可以在 Music Assistant 中搜索并播放这些曲库内容。同时添加您的账户 Cookie 后，您购买过的专辑还会作为一个独立的媒体库导入。

> [!CAUTION]
> **免责声明**
> 请注意，Bandcamp 不提供用于获取数据和音频流的官方 API。这意味着所有功能都是在尽力而为（best-effort）的基础上构建的。

> [!NOTE]
> 您无需登录即可搜索和播放。要导入您购买过的专辑，则需要按照下文所述添加您的身份 Cookie（identity cookie）。

## Features

|                                                   |                         |
|:--------------------------------------------------|:-----------------------:|
| Subscription FREE                                 |           Yes           |
| Self-Hosted Local Media                           |           No            |
| Media Types Supported                             | Artists, Albums, Tracks |
| [Recommendations](/ui/#view---discover) Supported |           No            |
| Lyrics Supported                                  |           Yes           |
| [Endless Mix](/ui/#track-menu)                    |           No            |
| Artist Top Tracks Support                         |           Yes           |
| Similar Artists Support                           |           No            |
| Similar Tracks Support                            |           No            | 
| Maximum Stream Quality                            |       MP3 128kbps       |
| Login Method                                      |    None or Cookie       |

### Other
- Searching the Bandcamp catalogue
- The highest available stream from Bandcamp will be selected for playback
- Bandcamp Feed and Wishlist are available in the browse view

### Other
- Searching the Bandcamp catalogue
- The highest available stream from Bandcamp will be selected for playback
- Bandcamp Feed and Wishlist are available in the browse view

### Other
- Searching the Bandcamp catalogue
- The highest available stream from Bandcamp will be selected for playback
- Bandcamp Feed and Wishlist are available in the browse view

### 其他
- 搜索 Bandcamp 曲库
- 播放时将选择 Bandcamp 可用的最高音质音频流
- 浏览视图中可访问 Bandcamp Feed 和愿望清单（Wishlist）

## 配置

- 提供身份 Cookie 是可选的，但可以将您拥有的专辑导入为媒体库项目
- 启用“获取歌词”（Fetch song lyrics）可从 Bandcamp 获取歌词
- 调整“热门曲目上限”（Top Tracks Limit）以在搜索速度和搜索结果数量之间取得平衡

> [!NOTE]
> Cookie 可能会在一段时间后过期。这意味着，如果媒体库同步开始失败，您可能需要更换提供程序配置中的身份 Cookie。

### 获取身份 Cookie

- 在浏览器中打开 <a href="https://bandcamp.com/" target="_blank">Bandcamp</a>。
- 通过 View -> Developer -> Developer Tools -> (Application) -> Storage -> Cookies -> `https://bandcamp.com` 打开 Cookie 存储。请注意，根据您使用的浏览器不同，其名称可能有所差异。此时应会打开一个类似下图的窗口：
[![开发者工具](/assets/screenshots/bandcamp_storage.png)](/assets/screenshots/bandcamp_storage.png)

- 找到 `identity` Cookie
- 双击其值并复制其内容

### 配置提供程序
- 进入“设置”（Settings）
- 在“音乐源”（Music Sources）下，点击“添加音乐源”（Add a music source），选择"Bandcamp"，并按需填写身份 Cookie
- 修改可选设置
- 点击“保存”（Save）

## 已知问题 / 说明

- 此提供程序是对 Bandcamp 的模拟，请不要期望看到与直接使用 Bandcamp 时完全相同的搜索结果
- **大型厂牌加载缓慢**：拥有数百张专辑的厂牌可能需要几分钟才能加载出来，因为
  Bandcamp 限制了外部读取其内容的速度。Music Assistant 必须在请求之间暂停，否则
  Bandcamp 会将其完全屏蔽。在此期间，日志中会显示 "Bandcamp rate limit reached"，这属于
  预期行为而非故障。

### 艺术家、厂牌与搜索

Bandcamp 使用 **艺术家（artist）** 一词来指代 `bandcamp.com` 上的任何页面——可以是表演艺术家、乐队、厂牌或音乐团体。
一个厂牌的页面上托管着多位表演者的专辑，而这些表演者可能并没有自己的 Bandcamp 页面。
此提供程序直接沿用了这一设定。

实际使用中，这意味着：

- **艺术家搜索返回的是页面，而非表演者。**没有自己 Bandcamp 页面的表演者不会出现在艺术家搜索结果中。要查找他们的作品，请按 **专辑** 名称搜索，或搜索托管其作品的 **厂牌**
- **厂牌页面会列出其上的所有专辑**，无论署名表演者是谁
- **名称可能会重复。**同一个名称既可能作为一个独立的艺术家页面存在，也可能是厂牌专辑上署名的表演者（例如：*Apollo Brown* 自己的[页面](https://apollobrown.bandcamp.com/)与 [*Hip Dozer*](https://hipdozer.bandcamp.com/album/night-moves) 合辑中的署名）。这些在 Bandcamp 上是彼此独立的条目，会分别显示
- **曲目和专辑的元数据是正确的。**播放器中显示并提交 scrobble 记录的都是署名表演者，即使其所属页面是厂牌
