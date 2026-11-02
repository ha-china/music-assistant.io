---
title: "SoundCloud"
---

# SoundCloud <img src="/assets/icons/soundcloud-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 SoundCloud。由 <a href="https://github.com/gieljnssns" target="_blank" rel="noopener noreferrer">gieljnssns</a> 贡献。由 <a href="https://github.com/robsonke" target="_blank" rel="noopener noreferrer">robsonke</a> 维护

SoundCloud 是一个任何人都可以上传和分享音频的网站，因此站上的大量内容直接来自艺术家本人。DJ 混音集、重混音（remix）、小样（demo）以及未在其他任何地方发行的音乐往往会出现在这里。

连接你的账户后，你在 SoundCloud 上喜欢和关注的内容会同步到 Music Assistant 中，同时还可以搜索其更为丰富的曲库。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | AAC 256kbps |
| Login Method | Cookie |

## 配置

SoundCloud 没有提供面向外部应用的登录方式，因此需要在登录时从浏览器中复制两个值。你需要一个 **Client id** 和一个 **Authorization**。

1. 清除你的 SoundCloud cookies，以便重新登录时能够看到你需要查看的请求
2. 访问 <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">SoundCloud</a>，但先不要登录
3. 按 F12 打开浏览器的开发者工具，并切换到 **Network**（网络）标签页
4. 现在登录。此时会出现一长串条目
5. 在筛选框中输入 `auth` 以缩小列表范围
6. 在这些条目中查找 `client_id`。它是一串由 32 个字母和数字组成的字符串。将其复制下来
7. 现在找到 soundcloud.com 的 `oauth_token` cookie 并复制其值。在 Music Assistant 中，将其填入 **Authorization** 字段，并在其前面加上 `OAuth `（包括那个空格）

下面的截图展示了这些值各自出现的位置。

### Client id
<img src="/assets/screenshots/soundcloud-clientid.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

### OAuth token
<img src="/assets/screenshots/soundcloud-token.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

填写完成后，这两个字段应如下所示。这些值是虚构的——请使用你自己的值：

```
client_id = 5Hvc9wa0Ejf092wj3f3920w3F920asuL
Authorization = OAuth 2-26432-21446-asdif2309fQ
```
> [!IMPORTANT]
> 请确保在令牌开头添加 `OAuth `，否则登录将失败并出现 `unexpected mimetype` 错误
## 已知问题 / 注意事项

- SoundCloud 所谓的“艺术家”实际上就是账户的持有者，因此 Music Assistant 中显示的艺术家就是这个账户的持有者。如果其他人上传了某位艺术家的曲目，该曲目会被归类到上传者名下，而不是艺术家名下。
