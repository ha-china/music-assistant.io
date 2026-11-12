---
title: "Deezer"
---

# Deezer <img src="/assets/icons/deezer-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://www.deezer.com/" target="_blank" rel="noopener noreferrer">Deezer</a>。最初由 <a href="https://github.com/arctixdev" target="_blank" rel="noopener noreferrer">arctixdev</a> 和 <a href="https://github.com/micha91" target="_blank" rel="noopener noreferrer">micha91</a> 贡献。目前由 <a href="https://github.com/jdaberkow" target="_blank" rel="noopener noreferrer">Julian</a> 维护。

Deezer 是一项源自法国的订阅制流媒体音乐服务，拥有约 1 亿首曲目的曲库，此外还提供播客和有声读物。它在大多数国家/地区均可使用，较高等级的订阅可提供无损音质的流媒体播放。

连接你的账户后，你的 Deezer 收藏和播放列表会与你的其他音乐一起出现在 Music Assistant 中，并且可以搜索整个曲库。播客和有声读物也会一并同步，你在其中的收听进度会与 Deezer 官方应用保持同步。

> [!NOTE]
> 根据 Deezer 的服务条款，此处只能使用 HiFi、Premium 和 Family 账户。免费账户将无法使用。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media  | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | FLAC 44.1kHz 16 bit |
| Login Method | Cookie (ARL) |

### Other

- Searching the Deezer catalogue
- Items in your Deezer Favourites will be imported into the MA Library and automatically marked as a "Favorite" in MA
- If you add an item from Deezer to the MA library then nothing will happen in Deezer unless you also mark it as a favourite (at which time the item will be added to the Deezer favourites)
- Artist, Album, Track, Playlist, Podcast and Audiobook metadata is fully supported
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Synchronized (LRC) and plain text lyrics
- Podcast and audiobook progress (bookmark/resume) is synced both ways
- Personal (user-uploaded) songs are available via the "My Uploads" playlist
- Recommendations: Made For You, Explore (charts, new releases, editorial playlists), Recently Played, Music Together and dynamic Flow/mood/genre mixes
- Paste a Deezer share link into the search box and it will take you straight to that album, track or playlist
- Podcasts, radio and audiobooks depend on availability in your country (audiobooks are currently limited to Germany, the Netherlands and Austria)
- Logging of played tracks in Deezer

### Other

- Searching the Deezer catalogue
- Items in your Deezer Favourites will be imported into the MA Library and automatically marked as a "Favorite" in MA
- If you add an item from Deezer to the MA library then nothing will happen in Deezer unless you also mark it as a favourite (at which time the item will be added to the Deezer favourites)
- Artist, Album, Track, Playlist, Podcast and Audiobook metadata is fully supported
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Synchronized (LRC) and plain text lyrics
- Podcast and audiobook progress (bookmark/resume) is synced both ways
- Personal (user-uploaded) songs are available via the "My Uploads" playlist
- Recommendations: Made For You, Explore (charts, new releases, editorial playlists), Recently Played, Music Together and dynamic Flow/mood/genre mixes
- Paste a Deezer share link into the search box and it will take you straight to that album, track or playlist
- Podcasts, radio and audiobooks depend on availability in your country (audiobooks are currently limited to Germany, the Netherlands and Austria)
- Logging of played tracks in Deezer

### Other

- Searching the Deezer catalogue
- Items in your Deezer Favourites will be imported into the MA Library and automatically marked as a "Favorite" in MA
- If you add an item from Deezer to the MA library then nothing will happen in Deezer unless you also mark it as a favourite (at which time the item will be added to the Deezer favourites)
- Artist, Album, Track, Playlist, Podcast and Audiobook metadata is fully supported
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Synchronized (LRC) and plain text lyrics
- Podcast and audiobook progress (bookmark/resume) is synced both ways
- Personal (user-uploaded) songs are available via the "My Uploads" playlist
- Recommendations: Made For You, Explore (charts, new releases, editorial playlists), Recently Played, Music Together and dynamic Flow/mood/genre mixes
- Paste a Deezer share link into the search box and it will take you straight to that album, track or playlist
- Podcasts, radio and audiobooks depend on availability in your country (audiobooks are currently limited to Germany, the Netherlands and Austria)
- Logging of played tracks in Deezer

### 其他

- 搜索 Deezer 曲库
- 你在 Deezer 收藏（Favourites）中的条目会被导入 MA 资料库，并自动在 MA 中标记为"收藏（Favorite）"
- 如果你将来自 Deezer 的条目添加到 MA 资料库，Deezer 中不会发生任何变化，除非你同时将其标记为收藏（此时该条目会被添加到 Deezer 收藏中）
- 完整支持艺术家、专辑、曲目、播放列表、播客和有声读物的元数据
- 同步（LRC）歌词和纯文本歌词
- 播客和有声读物的进度（书签/继续播放）双向同步
- 个人（用户上传）的歌曲可通过"My Uploads"播放列表获取
- 推荐：Made For You、Explore（排行榜、新发行、编辑精选播放列表）、Recently Played、Music Together 以及动态的 Flow/心情/流派混音
- 将 Deezer 分享链接粘贴到搜索框中，即可直接跳转到相应的专辑、曲目或播放列表
- 播客、电台和有声读物的可用性取决于你所在的国家/地区（有声读物目前仅限德国、荷兰和奥地利）
- 在 Deezer 中记录已播放的曲目

## 配置

Deezer 没有面向外部应用的登录方式，因此需要从浏览器中复制一个名为 ARL 令牌（ARL token）的值。以下说明以 Chrome 为例：

1. 在 Music Assistant 中，前往**设置 → 音乐来源 → 添加音乐来源**，然后选择 `Deezer`。
2. 在另一个浏览器标签页中访问 <a href="https://deezer.com/" target="_blank" rel="noopener noreferrer">https://deezer.com/</a> 并登录。
3. 右键点击浏览器窗口并选择 INSPECT（检查）。将会打开一个新窗口
4. 点击"Application"（应用）标签页。你可能需要扩大窗口，或者点击 `>>` 按钮
5. 在 Storage > Cookies（存储 > Cookie）下，点击 "https://www.deezer.com" 并找到标记为 "arl" 的条目
  [![Preview image](/assets/screenshots/deezer-arl.png)](/assets/screenshots/deezer-arl.png)
6. 复制该 Cookie 值，并将其作为"ARL TOKEN"粘贴到 Music Assistant 中

**如果以上方法无效，请确保你：**

- 与 Music Assistant 处于同一网络中
- 能够通过其 IP 地址访问 Music Assistant
- 拥有 Hifi/Premium/Family 账户
- 使用的是最新版本的 Music Assistant
- 尝试使用不同的浏览器
- 如果你使用的是 Deezer Family，已选择正确的个人资料（profile），参见 [Deezer Family](#deezer-family)

### Deezer Family

Deezer Family 的成员可以是个人资料（profile，使用所有者的电子邮箱和密码登录），也可以是拥有独立登录凭据的独立账户。

对于个人资料，请使用所有者的 ARL。随后 Music Assistant 会询问该音乐来源应使用哪个个人资料。如果要使用多个个人资料，请为每个个人资料分别添加一次 Deezer。如果以后想把某个音乐来源切换到另一个个人资料，请重新打开其设置，并将 ARL 字段留空以保留已保存的值。

独立账户拥有自己的 ARL，不会出现在该列表中。请使用其登录凭据登录 deezer.com，并按照上述步骤复制该 ARL。

### 设置

请参阅[资料库导入控制（Library Import Control）](/music-providers/#library-import-control)设置。
