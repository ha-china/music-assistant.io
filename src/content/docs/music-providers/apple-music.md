---
title: "Apple Music"
---

# Apple Music <img src="/assets/icons/apple-music.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 已支持 <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">Apple Music</a>！由 <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener noreferrer">MarvinSchenkel</a> 贡献并维护

Apple Music 是 Apple 推出的订阅制流媒体服务，拥有约 1 亿首歌曲的曲库，以及精选播放列表（playlist）和电台。它与你在 iPhone、iPad 或 Mac 上的“音乐”应用中获得的媒体库完全相同。

此来源会将 Music Assistant 登录到你的 Apple Music 账户，因此你保存的艺人、专辑和播放列表将与其余音乐并列显示，完整曲库也可供搜索和浏览。

> [!NOTE]
> - 添加此音乐来源需要付费订阅。
> - 音频播放未得到 Apple 官方支持，使用风险自负

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | AAC 256kbps |
| Login Method | OAuth or Cookie |

### Other

- Searching the Apple Music catalogue
- Browsing playlists organised in folders
- Artist radio stations available via Browse and the [Discover view](/ui/#view---discover); live broadcast stations are not supported
- Similar tracks are supported, shown in the track detail view and available for Endless Mix
- Similar artists are supported and shown in the artist detail view

### Other

- Searching the Apple Music catalogue
- Browsing playlists organised in folders
- Artist radio stations available via Browse and the [Discover view](/ui/#view---discover); live broadcast stations are not supported
- Similar tracks are supported, shown in the track detail view and available for Endless Mix
- Similar artists are supported and shown in the artist detail view

### Other

- Searching the Apple Music catalogue
- Browsing playlists organised in folders
- Artist radio stations available via Browse and the [Discover view](/ui/#view---discover); live broadcast stations are not supported
- Similar tracks are supported, shown in the track detail view and available for Endless Mix
- Similar artists are supported and shown in the artist detail view

### 其他

- 搜索 Apple Music 曲库
- 浏览按文件夹整理的播放列表
- 可通过“浏览”（Browse）和[发现视图](/ui/#view---discover)使用艺人电台；不支持直播广播电台
- 支持相似曲目，会显示在曲目详情视图中，并可用于无尽混音（Endless Mix）
- 支持相似艺人，并显示在艺人详情视图中

## 配置

点击**通过 Apple Music 进行身份验证**按钮，然后在弹出的窗口中使用你的 Apple ID 登录，并授予 Music Assistant 访问你的 Apple Music 媒体库的权限。所需的一切都会自动为你收集好。

> [!IMPORTANT]
> 要让 Apple 在操作完成后将你带回 Music Assistant，你在执行此操作时必须处于 Music Assistant 自身的网址上——也就是 `http://<YOUR_MA_IP>:8095`。如果你是将 Music Assistant 作为应用安装的，则必须先开放该端口，具体参见[核心设置](/settings/core/#webserver)。待 Apple Music 正常工作后，你可以再次将其关闭。

[![Preview image](/assets/screenshots/apple-music-auth-0.png)](/assets/screenshots/apple-music-auth-0.png)

> [!NOTE]
> 此令牌将会过期，需要在 180 天后手动重新进行身份验证。
    
### 设置

- <b>手动音乐用户令牌（Manual Music User Token）。</b>如果正常的身份验证流程不可用，则可以在此处手动添加令牌

<details>
<summary>手动获取令牌的说明</summary>
<div>

该令牌需要通过浏览器获取。以下说明以 Chrome 为例编写：

1. 前往 <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">https://music.apple.com/</a>
2. 转到“查看 > 开发者 > 开发者工具”。将会打开一个新的侧边窗口。
3. 点击“应用（Application）”标签页。你可能需要展开窗口，或点击 `>>` 按钮

   [![Preview image](/assets/screenshots/apple-music-auth-1.jpg)](/assets/screenshots/apple-music-auth-1.jpg)

4. 在“存储（Storage）> Cookie”下方，点击"https://music.apple.com"并找到名为"media-user-token"的条目
5. 点击它并复制该 Cookie 值，然后在 Music Assistant 中将其用作“音乐用户令牌（Music user token）”

   [![Preview image](/assets/screenshots/apple-music-auth-2.jpg)](/assets/screenshots/apple-music-auth-2.jpg)

**注意：**请顺便查看"Expires / Max-Age"列。到了该日期，Apple Music 将在 Music Assistant 中停止工作，届时你需要重新执行此操作。

</div>
</details>

另请参阅[媒体库导入控制](/music-providers/#library-import-control)设置。

    
## 已知问题 / 说明
- 此处不提供无损（Lossless）和杜比全景声（Dolby Atmos）版本。Apple 使用自有加密技术保护这些内容，Music Assistant 无法将其打开
- 将内容标记为收藏仅会针对专辑、播放列表和曲目同步回 Apple Music。对艺人执行此操作则仅保存在 Music Assistant 中
- 曲目之间可能出现最长五秒的间隔，因为 Apple 没有为其他应用提供合适的接入方式
- 只有你自己创建的播放列表才能编辑。Apple 官方的播放列表以及与你共享的播放列表均为只读
