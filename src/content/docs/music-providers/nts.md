---
title: "NTS Radio"
---

# NTS Radio <img src="/assets/icons/nts-icon.svg" alt="NTS logo" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 [NTS Radio](https://www.nts.live/)。此组件由 <a href="https://github.com/mike-sheppard" target="_blank" rel="noopener noreferrer">Mike Sheppard</a> 贡献并维护。这是一个非官方的、尽力而为的实现。NTS 与此提供者（provider）无任何隶属关系，也未经其认可。

NTS 是一家从伦敦播出的免费在线电台。其节目由 DJ、艺术家和唱片收藏者主持，他们播放自己喜欢的任何音乐，因此偏重于你在商业电台中听不到的音乐。

此音源将 NTS 流以电台的形式添加到 Music Assistant 中。

> [!TIP]
> **支持 NTS**
>
> NTS 免费收听且没有任何广告，其运营资金来自听众通过 NTS Supporters 计划提供的资助。如果你正在使用此音源，请考虑在 https://www.nts.live/supporters 加入

## Features

|||
|:-|:-:|
|Subscription FREE|Yes|
|Self-Hosted Local Media|No|
|Media Types Supported|Radio|
|[Recommendations](/ui/#view---discover) Supported|No|
|Lyrics Supported|No|
|[Endless Mix](/ui/#track-menu)|No|
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
|Maximum Stream Quality| AAC 256kbps |
|Login Method|None|

### What's included

- **NTS 1 and NTS 2**: the two live channels with now-playing show metadata (show name, description, artwork, location) that updates every 60 seconds during playback
- **16 Infinite Mixtapes**: themed 24/7 music streams curated from the NTS archive (Poolside, Slow Focus, Low Key, 4 To The Floor, Expansions, etc.)

### What's included

- **NTS 1 and NTS 2**: the two live channels with now-playing show metadata (show name, description, artwork, location) that updates every 60 seconds during playback
- **16 Infinite Mixtapes**: themed 24/7 music streams curated from the NTS archive (Poolside, Slow Focus, Low Key, 4 To The Floor, Expansions, etc.)

### 包含内容

- **NTS 1 和 NTS 2**：两个直播频道，带有正在播放的节目元数据（节目名称、描述、封面图、位置），在播放期间每 60 秒更新一次
- **16 个无尽混音带（Infinite Mixtapes）**：从 NTS 档案中精选的 24/7 主题音乐流（Poolside、Slow Focus、Low Key、4 To The Floor、Expansions 等）

## 配置

在配置中，你只需点击保存按钮。

## 使用

在 *浏览 > NTS Radio* 中浏览电台：

- **直播频道**：播放 NTS 1 或 NTS 2
- **无尽混音带**：从 16 个主题音乐流中任选一个

可以从电台菜单中将电台添加到你的资料库。

## 已知问题 / 注意事项

- NTS 档案（托管在 Mixcloud/SoundCloud 上的过往节目）无法通过其 API 进行流式播放，因此不会在此提供者中显示
- 曲目列表时间戳（NTS 网页播放器中的支持者功能）未通过 API 提供，此提供者也不支持该功能
