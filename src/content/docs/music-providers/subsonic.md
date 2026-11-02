---
title: "Subsonic"
---

# Open Subsonic <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持符合 <a href="https://opensubsonic.netlify.app/" target="_blank" rel="noopener noreferrer">Open Subsonic API 定义</a>的音乐服务器。该实现已在 Gonic 和 Navidrome 上通过测试，但也应适用于任何其他实现。此组件由 <a href="https://github.com/khers" target="_blank" rel="noopener noreferrer">khers</a> 贡献并维护

Subsonic 最初是一个安装在自己硬件上、指向自己音乐文件的音乐服务器，并提供一个 API，供其他应用浏览和流式播放该音乐库。Open Subsonic 是该 API 的一个较新的、由社区维护的版本，由编写这些服务器以及使用该 API 的应用的人们共同维护。

此音乐源可以连接到任何支持 Open Subsonic 规范的服务器，因此已在其中建立索引的音乐无需重新编目即可使用。请注意，Open Subsonic 是独立于原始 Subsonic 规范的一个规范，仅实现原始规范的服务器将无法使用。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | Password |

### Other

- Searching the Subsonic catalogue
- All music tracks will be imported into MA

### Other

- Searching the Subsonic catalogue
- All music tracks will be imported into MA

### 其他

- 搜索 Subsonic 音乐目录
- 所有音乐曲目都将导入 MA

## 配置：
您需要向 Music Assistant 提供以下信息：

- <b>用户名。</b>您希望 Music Assistant 用来访问服务器的账户
- <b>密码。</b>上述账户的密码
- <b>API Token。</b>用于替代用户名和密码的 API 令牌
- <b>基础 URL。</b>以 http:// 或 https:// 开头的服务器 URL（例如 https://music.domain.tld）
- <b>端口。</b>通常，纯 http 为 80，https 为 443，但也可以是您的服务器可访问的任何端口
- <b>服务器路径。</b>如果您的服务器位于 `music.domain.tld/mypathroute/` 这样的地址而非顶级目录，则此处填写地址后面的部分。除非您确定需要，否则请将其留空

### 设置

- <b>启用播客。</b>此开关控制 Music Assistant 中播客的可用性（如果禁用后仍看到与播客同步相关的错误，请参见下文）
- <b>启用旧版身份验证。</b>某些 Subsonic 实现需要启用此项才能进行身份验证
- <b>启用电台。</b>此开关控制 Music Assistant 中电台的可用性
- <b>强制播放器提供者进行进度跳转。</b>某些 Subsonic 实现声称支持进度跳转（seek），但实际上并不支持。如果进度跳转无法正常工作，请启用此选项
- <b>推荐收藏。</b>是否将收藏（标星）的项目作为推荐内容？
- <b>推荐新专辑。</b>是否将新专辑作为推荐内容？
- <b>推荐最常播放。</b>是否将最常播放的专辑作为推荐内容？
- <b>推荐数量限制。</b>每种已启用的类型应包含多少条推荐？
- <b>每个服务器请求包含的项目数。</b>每个服务器请求的页面大小，默认为 200。低带宽连接应考虑调低。最高可调至 500。

## 已知问题 / 说明

- Music Assistant 2.10 引入了对同步内容的更细粒度控制，其中包括是否同步播客。该设置独立于上述提供者特定设置，也需要将其禁用。此设置可在提供者配置页面的底部找到。
- 规范允许在不输入任何内容的情况下进行搜索，但某些服务器会拒绝这种请求。如果搜索或曲目列表失败，值得向您的服务器的开发者反馈
- 此音乐源仅适用于遵循 Open Subsonic 规范的服务器。如果您的服务器不支持较新的规范，Music Assistant 将无法与其通信。您的服务器自身的文档中应说明它遵循的是哪个规范
- 如果您发现 Subsonic 兼容服务器显示的内容与 Music Assistant 显示的内容不一致，请参考并前往<a href="https://github.com/music-assistant/support/issues/2192" target="_blank" rel="noopener noreferrer">此处贡献，帮助寻找解决方案</a>
- 并非所有服务器都能很好地处理有多位参与艺人的曲目或专辑。如果您在 Music Assistant 中看到奇怪的艺人出现，这通常是原因所在。相关讨论请见<a href="https://github.com/music-assistant/support/issues/2965" target="_blank" rel="noopener noreferrer">此处</a>
- 某些文件可能完全无法播放，最常见的是 m4a 和 opus，以及任何以可变比特率编码的文件。这些格式可能将信息存储在文件的中部而非全部集中在开头，而 Music Assistant 无法通过 Subsonic 连接处理这种情况。您的选择是：避免使用这些格式、将服务器设置为在发送前将其转换为其他格式，或者将这些文件排除在 Subsonic 媒体库之外并通过其他方式访问
- 自动播放（<a href="https://www.music-assistant.io/usage/#the-queue" target="_blank" rel="noopener noreferrer">此处有说明</a>）需要您的服务器能够推荐相似歌曲，而这并非每个服务器开箱即支持。Gonic 和 Navidrome 都需要添加 Last.fm API 密钥才能实现此功能。请查阅您的服务器文档
- 需要明确的是，此功能不适用于原始 Subsonic 或基于它构建的任何软件（如 Airsonic 或 Airsonic-Advanced），除非该软件后来已迁移至 Open Subsonic 规范。
