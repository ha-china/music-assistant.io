---
title: "Spotify"
---

# Spotify <img src="/assets/icons/spotify-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 完全支持 Spotify 媒体浏览和播放。

Spotify 是规模最大的音乐流媒体服务，拥有约 1 亿首曲目的曲库，同时还提供播客和有声读物。

连接你的账户后，你保存的音乐和播放列表会被导入 Music Assistant，并且曲库可供搜索。

> [!NOTE]
> 需要 Spotify Premium 账户（包括 Duo 和 Family 套餐）。免费账户无法使用。

## 播放引擎

Spotify 音频可以通过两种不同的引擎播放。你在添加该提供商（provider）时选择其中一种，之后可以重新运行设置来切换。

**Spotify Soloist（官方）** — Spotify 自家的播放引擎，适用于无屏幕设备。它适用于**所有** Premium 账户，包括 2024 年 12 月及以后创建的账户，并可提供无损音频。设置它需要来自 Spotify 开发者网站的个人 API 密钥，并与你的 Spotify 应用进行一次性配对；设置流程会引导你完成这两步。

> [!NOTE]
> Music Assistant 可能不会将 Soloist 作为其自身安装的一部分进行分发，因此它会在你的名义下（经你在设置中同意后）从 Spotify 的服务器下载并自动更新。Spotify 的条款并未明确允许以这种方式使用 Soloist —— 通过 Music Assistant 使用它需自行承担风险。

**librespot（社区）** — 由社区构建的逆向工程引擎，也是默认选项。它的设置更简单一些，开始播放也更快，但它仅适用于**2024 年 12 月之前**创建的 Premium 账户，而且只要 Spotify 在其端上做出更改，它就可能随时停止工作。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | Lossless, up to 24-bit/44.1 kHz (Soloist) |
| Login Method | OAuth |

### Other

- Searching the Spotify catalogue is possible
- "New Releases" and "Genres and Moods" folders are available in the Browse view
- Items in your Spotify library (including the Liked Songs playlist) will be added to the Library in Music Assistant
- Adding an item from Spotify to the Music Assistant Library will also add it to "Your Library" in Spotify
- Marking an item as a favourite in Music Assistant will also add it to the MA Library and "Your Library" in Spotify
- Multiple Spotify accounts can be added. All playlists from all accounts will be shown. If a playlist is selected for playback the source Spotify account will be used

## 功能

|           |                     |
|:-----------------------|:---------------------:|
| 免费订阅 | 否 |
| 自托管本地媒体 | 否 |
| 支持的媒体类型 | 艺术家、专辑、曲目、播放列表、播客、有声读物 |
| [推荐](/ui/#view---discover)支持 | 否 |
| 歌词支持 | 否 |
| [无限混音（Endless Mix）](/ui/#track-menu) | 是 |
| 艺术家热门曲目支持                       |            是                     |
| 相似艺术家支持                         |            否                      |
| 相似曲目支持                          |            是                      |
| 最高流媒体音质 | 无损，最高 24-bit/44.1 kHz（Soloist） |
| 登录方式 | OAuth |

### 其他

- 可以搜索 Spotify 曲库
- 浏览（Browse）视图中提供"新发行"（New Releases）和"流派与心情"（Genres and Moods）文件夹
- 你 Spotify 资料库中的项目（包括 Liked Songs 播放列表）将被添加到 Music Assistant 的资料库（Library）中
- 将 Spotify 中的项目添加到 Music Assistant 资料库时，也会同时将其添加到 Spotify 的"你的资料库"（Your Library）中
- 在 Music Assistant 中将某个项目标记为收藏，也会将其添加到 MA 资料库以及 Spotify 的"你的资料库"中
- 可以添加多个 Spotify 账户。所有账户的播放列表都会显示。如果选择某个播放列表进行播放，则会使用其所属的源 Spotify 账户

## 配置

### 基本设置

1. 通过**设置 → 音乐源 → 添加音乐源**添加 Spotify 音乐源。
2. 按照屏幕上的说明操作，它会引导你完成如下所示的初始流程
<a href="/assets/screenshots/spotify-phase1.png"><img src="/assets/screenshots/spotify-phase1.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

3. 选择 Spotify 音频的播放方式。`librespot (community)` 将继续执行下文的一次性播放授权；`Spotify Soloist (official)` 则继续执行[其专属步骤](#setting-up-spotify-soloist)。

### librespot：一次性播放授权

播放音频除了需要你刚完成的登录之外，还需要 Spotify 的单独授权。

**请使用 Spotify 应用完成此操作。**只需点按几下，是两种方式中更顺畅的一种。网页浏览器方式适用于你的手机无法访问 Music Assistant 服务器的网络环境，但操作更为繁琐。

<details>
<summary>我点击了 - 使用 Spotify 应用（推荐）</summary>
<div>

> [!NOTE]
> 你的移动设备必须与 MA 服务器处于同一网络，此方式才能正常工作

<a href="/assets/screenshots/spotify-phase2a.png"><img src="/assets/screenshots/spotify-phase2a.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>
</div>
</details>

<details>
<summary>我点击了 - 改用网页浏览器（仅当应用方式无法使用时）</summary>
<div>

> [!NOTE]
> 第 3 步中显示的网页错误属于正常现象。接下来，你需要从该浏览器标签页复制完整的 URL，并粘贴到 MA 界面所显示的对话框中

<a href="/assets/screenshots/spotify-phase2b.png"><img src="/assets/screenshots/spotify-phase2b.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>
</div>
</details>

现在 Spotify 已经可以使用了，但可以考虑下文的可选步骤，或者点击 `Finish`，然后点击 `Done`。

### 设置 Spotify Soloist

选择 Soloist 后，上文中的播放授权将被以下三个专属步骤取代：

1. **阅读并接受条款。**Soloist 会从 Spotify 的服务器下载并以你的名义运行，而 Spotify 的条款并未明确允许这样做。你必须先同意，设置才能继续。
2. **创建你的 API 密钥。**打开 <a href="https://developer.spotify.com/dashboard/soloist" target="_blank" rel="noopener noreferrer">Soloist API 密钥页面</a>，登录，如被要求则接受 Spotify 的条款，选择 `Generate API Key`，然后将密钥粘贴到 Music Assistant 中。创建密钥需要 Premium 账户。Music Assistant 会加密存储该密钥，并且只与 Soloist 应用共享 —— 绝不会要求你提供 Spotify 密码。
3. **与你的 Spotify 应用配对。**Music Assistant 会以 `Music Assistant Pairing` 的名称对外显示。在 Spotify 应用中，随便播放一些内容，点击扬声器图标并选择 `Music Assistant Pairing`。之后设置会自动继续进行，你可以立即切换回平时使用的扬声器。

> [!IMPORTANT]
> 请从登录了与你第一步中所连接**相同账户**的 Spotify 应用进行配对，这样你的音乐库和音频才会来自同一个地方。Music Assistant 会对此进行检查，如果账户不匹配，会要求你重新配对。

> [!NOTE]
> 看不到 `Music Assistant Pairing`？请确保运行 Spotify 应用的设备与 Music Assistant 服务器处于同一网络。

### 可选：添加个人 Client ID

Music Assistant 与所有其他用户共享来自 Spotify 的同一个配额，而 Spotify 会限制该配额的使用速度。注册你自己的免费 Client ID 可以让你拥有独立配额，这可能会让一切更快，但也存在一些潜在问题，详见已知问题部分。

1. 完成上方的基本设置，然后勾选 `Use my own Spotify developer key (advanced, optional)` 并点击完成。
2. 将会打开一个新的对话框，你需要在其中添加自己的 Client ID。 
3. 在 Spotify 的<a href="https://developer.spotify.com/documentation/web-api/concepts/apps" target="_blank" rel="noopener noreferrer">开发者控制台</a>上创建一个应用。填写应用详情时，唯一重要的字段是 `Redirect URL`。请将其精确设置为 `https://music-assistant.io/callback`。
4. 在完成第 2 步后看到的对话框中输入你新应用的 Client ID，然后点击 `Finish`，再点击 `Done`。

### 设置

请参阅[资料库导入控制](/music-providers/#library-import-control)设置。

当播放引擎为 Spotify Soloist 时，会出现两个额外设置：

- **流媒体音质** — 要求 Spotify 使用的最高流式传输音质，默认为 `Lossless`。这只是上限而非保证：当网络连接较慢、歌曲没有该音质的文件，或者你的订阅套餐不包含该音质时，Spotify 仍会选择较低的音质。播客和有声读物始终为 Ogg Vorbis。将在下一次播放开始时生效。
- **启用 Spotify 音量标准化** — 默认开启。Spotify 会使用针对其整个曲库计算出的数值来均衡歌曲之间的响度，Music Assistant 随后将不再对音量进行调整，以避免二次校正，这也使歌曲开始播放时明显更快。关闭它则改由 Music Assistant 执行，方式与对所有其他音乐源相同。无论哪种方式，都仅在队列启用了音量标准化时生效。

此处不设置交叉淡入淡出（crossfade）—— 照常为播放器启用即可，其工作方式与对所有其他音乐源相同。

## 已知问题 / 注意事项

- 需要 Premium 订阅，包括 Duo 和 Family 套餐。免费账户无法使用
- 2024 年 12 月左右及之后创建的账户通常无法通过 librespot 播放，一些较旧的账户也会受到影响。如果播放失败且日志中出现 `Key Error` 消息，那就是该问题的症状 —— 请改用 Spotify Soloist
- Spotify Soloist 无法在带有 Docker 桥接（bridge）网络的主机上使用  
- 每个 Spotify Soloist 账户一次只能播放一个内容。在第二个播放器上启动 Spotify 时会要求你停止第一个播放器；将第二个 Spotify 账户作为单独的音乐源添加，则它会拥有自己的会话
- 在 Spotify Soloist 播放期间，Music Assistant 会在你的 Spotify 应用中显示为一个名为 `Music Assistant Playback` 的设备。在该设备上暂停或跳过曲目会干扰播放，因此请使用 Music Assistant 自带的控制功能
- 使用 Spotify Soloist 时，启动队列或进度跳转比使用 librespot 稍慢
- 首次保存该音乐源时，Music Assistant 会检查你的账户是否包含有声读物。如果包含，下次打开设置时会出现有声读物相关选项
- Spotify 不会向 Music Assistant 提供任何推荐内容，因此"发现"（Discover）视图中不会出现任何来自 Spotify 的内容
- Spotify 不会告知 Music Assistant 任何内容的流派信息
