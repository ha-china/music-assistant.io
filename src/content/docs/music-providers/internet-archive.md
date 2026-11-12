---
title: "Internet Archive"
---

# Internet Archive <img src="/assets/icons/internet-archive-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 Internet Archive（互联网档案馆）。此组件由 <a href="https://github.com/ozgav" target="_blank" rel="noopener noreferrer">Gavin</a> 贡献并维护

Internet Archive 是一个非营利性的数字图书馆。自 1996 年以来，它一直致力于保存网页、书籍、影片和音频，并将所有内容免费向公众开放，无需注册账户。

此音源让 Music Assistant 用户可以免费访问数百万条音频录音，包括现场音乐会、历史内容、LibriVox 有声读物，以及来自 Internet Archive 的珍稀档案资料。

> [!TIP]
> **捐赠**
>
> Internet Archive 是一个非营利组织，其收藏的所有内容均可免费使用，运营费用依靠捐赠维持。如果您正在使用此音源，请考虑通过 https://archive.org/donate 支持他们

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Audiobooks, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | FLAC 44.1kHz 16 bit |
| Login Method | None |

### Other

- Search across all Internet Archive audio content
- Artist browsing with albums and top tracks
- Full album track listings with individual track playback
- Audiobook streaming with chapter navigation
- LibriVox audiobook library browsing

### Other

- Search across all Internet Archive audio content
- Artist browsing with albums and top tracks
- Full album track listings with individual track playback
- Audiobook streaming with chapter navigation
- LibriVox audiobook library browsing

### Other

- Search across all Internet Archive audio content
- Artist browsing with albums and top tracks
- Full album track listings with individual track playback
- Audiobook streaming with chapter navigation
- LibriVox audiobook library browsing

### 其他

- 可搜索所有 Internet Archive 音频内容
- 可浏览艺术家及其专辑和热门曲目
- 完整专辑曲目列表，并可单独播放各曲目
- 有声读物流媒体播放，支持章节导航
- 可浏览 LibriVox 有声读物库

## 配置：

在配置中，您只需点击保存按钮即可。

## 已知问题 / 注意事项

- 音频文件数量庞大且分类不够理想，因此通常需要使用较为具体的搜索词才能找到感兴趣的内容
- Internet Archive 的“项目”（item）通常会创建为专辑。例如，现场音乐会会在相应艺术家下创建为一张专辑
- Internet Archive “项目”中的单个文件通常会被映射为曲目
- Internet Archive 的“创建者”（creator）会被映射为艺术家
- 系统使用元数据启发式方法对内容进行分类，以便将项目正确归类为音乐或有声读物
- 结果数量有上限。每次查询最多返回 200 个项目（受 Internet Archive API 限制）
- 搜索针对音乐和有声读物进行了优化，但其他音频内容也可能出现在结果中
- “曲目”搜索实际返回的是下载次数最多的录音/音乐会
- 此音源会尝试过滤这种情况，但完整音乐会仍可能显示为单独的“曲目”
- 支持有声读物，但用户只能在章节之间跳转，无法在章节内拖动进度
- 这项免费服务的 API 调用未经优化，浏览和搜索时可能会出现延迟。系统使用长期缓存来加快后续浏览速度
- 请注意，文件命名不一致，并非总能获得清晰的标题，而且相同的标题可能用于不同的项目
- 音质差异很大
