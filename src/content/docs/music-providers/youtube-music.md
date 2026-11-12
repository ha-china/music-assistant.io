---
title: "YouTube Music"
---

# YouTube Music <img src="/assets/icons/ytm-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 YouTube Music，由 <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener noreferrer">MarvinSchenkel</a> 贡献并维护。

YouTube Music 是 Google 的流媒体服务，构建于 YouTube 之上。除了常规曲库之外，它还能访问上传到 YouTube 的内容，因此其他服务不提供的现场演出、翻唱曲目和稀有资源通常都能在这里找到。

连接您的账户后，您的媒体库和播放列表将显示在 Music Assistant 中，并且可以搜索曲库。

> [!WARNING]
> **免责声明**
>
> 请注意，YouTube 不提供用于获取数据和流的官方 API，这意味着一切均基于尽力而为（best-effort）的原则构建。在使用此音源时会出现意外行为。因此，如果您还有其他流媒体音源，使用那个可能会比使用这个更方便。

> [!NOTE]
> 不支持免费账户。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | AAC 256kbps |
| Login Method | Token + Cookie |

### Other
- Searching the YouTube Music catalogue
- The highest available stream from Youtube Music will be selected for playback (similar to configuring 'high' in the web-app)

### Other
- Searching the YouTube Music catalogue
- The highest available stream from Youtube Music will be selected for playback (similar to configuring 'high' in the web-app)

### 其他
- 搜索 YouTube Music 曲库
- 播放时会选择 YouTube Music 可用的最高音质流（类似于在网页应用中将音质配置为 'high'）

## 配置

Cookie 身份验证是让 YT Music 正常工作的**唯一**方式；Google 不为第三方应用提供任何其他登录方式。这个过程有些繁琐，但只有在 Cookie 过期时才需要重复操作。设置分为三个部分：安装 PO Token 应用、获取您的登录 Cookie，然后配置该音源。

> [!NOTE]
> Cookie 会在一段时间后过期。如果 YT Music 停止工作，并且在 MA 日志中看到 `401: Unauthorized` 或 `Unable to fetch PO Token for web_music client`，请重新执行获取 Cookie 的步骤

> [!NOTE]
> 如果您使用的是家庭账户（Family Account），为 MA 设置一个专用账户将有助于最大限度延长 Cookie 的有效期

### 第 1 步：安装 PO Token 应用

在获得"来源证明"（Proof of Origin）令牌之前，Google 不会让任何内容开始播放，这是 Google 用来检查请求是否来自真实 YouTube 应用的方式。这款小软件会在后台为 Music Assistant 生成这些令牌，一旦它运行起来，您就再也不需要去管它了。请在添加 YT Music 音源之前先安装它：

1. 在 Home Assistant 中，前往 `Settings >> Apps >> Install app`。
2. 向下滚动到 'Music Assistant' 部分。
3. 安装名为 'YT Music PO Token Generator' 的应用，并确保它已启动。

> [!NOTE]
> 如果您自行托管 Music Assistant，请<a href="https://github.com/Brainicism/bgutil-ytdlp-pot-provider" target="_blank" rel="noopener noreferrer">在此处</a>下载 PO Token 服务器的 Docker 文件。您必须运行 MA 目前支持的版本，即 1.2.1。安装并运行正确的版本，然后在第 3 步配置 YT Music 音源时添加其 URL。

### 第 2 步：获取您的登录 Cookie

作为一项安全措施，YouTube 会在打开的浏览器标签页中频繁轮换账户 Cookie。要导出一个能持续有效的 Cookie，需要以永远不会轮换它的方式导出。方法之一是通过隐私浏览/无痕窗口：

1. 在无痕窗口中用浏览器打开 <a href="http://music.youtube.com/" target="_blank">YT Music</a>，并登录您的账户。
2. 通过 View -> Developer -> Developer Tools 打开开发者工具。请注意，该菜单的名称可能因浏览器而异。它应该会打开一个类似下图的窗口：
[![Dev tools](/assets/screenshots/ytmusic-developer-tools.png)](/assets/screenshots/ytmusic-developer-tools.png)
3. 前往 'Network'（网络）标签页。
4. 在筛选栏中输入 "/browse"。如果没有显示任何结果，请刷新页面。
5. 现在前往 YT Music 中一个需要身份验证的页面，例如您媒体库中的某个播放列表。
6. 一个请求将出现在表格中：

[![Auth request](/assets/screenshots/ytmusic-auth-request.png)](/assets/screenshots/ytmusic-auth-request.png)

7. 点击该请求，并确保您位于 'Headers'（标头）标签页。
8. 找到名为 'Request Headers'（请求标头）的部分。
9. 找到名为 'Cookie' 的条目并复制其**值**。复制完全准确的值**非常**重要。请仔细检查，确保没有在值的开头/结尾包含任何多余的空格或字符。
[![Cookie value](/assets/screenshots/ytmusic-cookie-value.png)](/assets/screenshots/ytmusic-cookie-value.png)
10. 请立即关闭无痕窗口。不要先注销登录，因为那样会终止该 Cookie 所属的会话。保持窗口开启会不断轮换 Cookie，导致 MA 中的副本失效。

> [!NOTE]
> 如果您的 Cookie 仍然很快过期，yt-dlp 项目文档中记录了一种旨在最大限度延长 Cookie 有效期的<a href="https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies" target="_blank" rel="noopener noreferrer">替代导出方法</a>。它是为 yt-dlp 工具的用户编写的，因此内容会更加偏技术化

### 第 3 步：配置音源

1. 在 Music Assistant 中，前往**设置 → 音乐源 → 添加音乐源**，然后选择 'Youtube Music'。
2. 按照如下方式填写通用设置（Generic Settings）部分中的字段：
    - <b>用户名（Username）。</b>使用您的 Gmail 地址，或使用品牌账户（参见[品牌账户](#using-brand-accounts)）
    - <b>登录 Cookie（Login Cookie）。</b>粘贴您在第 2 步中复制的值
    - <b>PO Token 服务器 URL（PO Token Server URL）。</b>如果您将 PO 服务器作为应用（App）运行在与 MA 应用相同的主机上，请将此设置保留为默认值。如果您单独运行 PO Token 服务器，请相应调整 IP 地址和端口
3. 点击 'Save'（保存）。

> [!CAUTION]
> **保存时出错？**
>
> 如果错误信息中提到 `__Secure-3PAPISID`，说明您的 Cookie 并非来自已登录（经过身份验证）的请求。请返回无痕窗口，多打开几个需要您账户的页面（例如您的媒体库），然后重新复制 Cookie。您可以在保存之前检查 Cookie：将其粘贴到文本编辑器中并搜索 `__Secure-3PAPISID`；正确的 Cookie 应包含此值。如果您无法获得包含此值的 Cookie，请尝试使用其他浏览器。

### 设置

请参阅[媒体库导入控制（Library Import Control）](/music-providers/#library-import-control)设置。

## 使用品牌账户
品牌账户（brand account）是位于您主 Google 账户下的一个子账户。如果您想使用品牌账户登录，则需要找到您的品牌账户 ID。

- 前往 <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/</a>
- 在右上角的菜单中，选择您的品牌账户
- 查看 URL 并复制其中的 21 位数字
- 在设置音源时，将此数字填入 'Username'（用户名）字段

## 已知问题 / 注意事项

- 此音源是对 YouTube Music 的模拟实现。不要期望看到与使用 YouTube 时相同的搜索结果
- 无法同时进行超过三个并发流
- YouTube Music 不会告知 Music Assistant 曲目位于哪张碟片上，因此曲目只是按到达顺序进行编号。这通常是正确的，但多碟专辑可能会以错误的顺序出现
- 是否选择音乐视频进行播放完全取决于您正在播放的内容。如果您在媒体库中保存了某张特定专辑，那么该确切版本将显示在 MA 中，因此您获得的将是专辑版本。但是，如果您基于某个播放列表等开始播放电台，那么将由 YouTube Music 决定在"动态电台"（dynamic radio）播放列表中播放哪些歌曲，其中可能包含视频
- 已上传的音乐如果位于某个播放列表中，应该能够被找到。如果只是搜索单个曲目，则可能无法找到，因为这些上传的歌曲通常没有正确的元数据。很难通过 MA 的界面找到它们
- 请对部分模糊的封面图有所预期。当 Music Assistant 请求整张专辑或整个播放列表时，YouTube Music 会发送低质量图片，只有在请求单个曲目时才会发送高质量图片。Music Assistant 会通过提前获取下一曲目的封面图来尽可能规避此问题，但部分封面图看起来仍会比较糟糕
- 默认情况下，只有"喜欢的音乐"和"稍后观看的剧集"（episodes for later）这两个播放列表会被添加到 YTM 媒体库中，因此会显示在 MA 中。要在 MA 媒体库中查看其他个人播放列表，您需要进入 YT Music 网页应用，并将这些个人播放列表添加到您的媒体库中
- "其他版本"（Other Versions）基于尽力而为的原则填充，可能不包含某个项目通过手动搜索所能找到的全部或任何版本
