---
title: "Tidal"
---

# Tidal <img src="/assets/icons/tidal-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://tidal.com" target="_blank" rel="noopener noreferrer">Tidal</a>。由 <a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener noreferrer">jozefKruszynski</a> 贡献并维护。

Tidal 是一项订阅制流媒体服务，所有内容均以无损音质串流，许多专辑还提供高解析度和沉浸式版本。

登录后，你的 Tidal 收藏和播放列表会出现在 Music Assistant 中，其余曲库内容可供搜索。

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
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | OAuth |

### Other

- Searching the Tidal catalogue
- Items in your Tidal library will be marked as "Favourites" in Music Assistant
- Marking an item as a "Favourite" from the Music Assistant interface will also mark it as favourite in Tidal
- On playback, the highest quality FLAC HiFi version will be selected
- Multiple Tidal accounts can be added.

### Other

- Searching the Tidal catalogue
- Items in your Tidal library will be marked as "Favourites" in Music Assistant
- Marking an item as a "Favourite" from the Music Assistant interface will also mark it as favourite in Tidal
- On playback, the highest quality FLAC HiFi version will be selected
- Multiple Tidal accounts can be added.

### 其他

- 搜索 Tidal 曲库
- Tidal 资料库中的项目在 Music Assistant 中会被标记为“收藏”（Favourites）
- 在 Music Assistant 界面中将项目标记为“收藏”，也会同时在 Tidal 中将其标记为收藏
- 播放时，将选择最高音质的 FLAC HiFi 版本
- 可添加多个 Tidal 账户

## 配置

1. 添加 Tidal 提供程序。Music Assistant 会显示你的代码和一个 `Open` 按钮，并处于等待状态。

   [![预览图片](/assets/screenshots/tidal-device-login.png)](/assets/screenshots/tidal-device-login.png)

2. 点击 `Open` 前往 `link.tidal.com`，代码已自动填入，在已登录 Tidal 的状态下批准该请求。如果想改用手机批准，请在手机上打开 `link.tidal.com`，并输入 Music Assistant 中显示的代码。

   [![预览图片](/assets/screenshots/tidal-approve.png)](/assets/screenshots/tidal-approve.png)

3. 一旦 Tidal 报告已批准，设置会自动完成。代码的有效期较短，如果代码在你批准之前就已过期，请重新开始设置。

### 设置

- <b>Tidal 音质设置。</b>选项为 `Max [default]` 或 `High`。Max 最高为 24-bit、192 kHz，High 最高为 16-bit、44.1 kHz。

另请参阅[资料库导入控制](/music-providers/#library-import-control)设置。

## 已知问题 / 注意事项

- 添加提供程序时如果没有打开任何窗口，该窗口很可能已被浏览器拦截。请使用设置界面上的 `Click here if the window did not open` 链接。
- 批准链接可以在任何设备上打开，而不只是运行 Music Assistant 的那台设备。
