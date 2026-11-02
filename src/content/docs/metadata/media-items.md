---
title: 媒体项目
---

# 媒体项目元数据 <img src="/assets/icons/metadata-mediaitem-icon.png" alt="预览图片" style="width: 70px; float: right;"  loading="lazy" />

本页面列出了针对每种媒体项目（艺术家、专辑、曲目、播放列表、有声书和播客）收集的元数据，以及每个字段的来源。与[其他页面](/metadata/)一样，源元数据始终具有最高优先级，在线提供者仅用于填补缺失的信息。

## 艺术家

| 元数据类型 | 来源 |
| --- | --- |
| 名称、排序名称 | 文件标签、`artist.nfo`、音乐提供者 |
| 流派 | `artist.nfo`、音乐提供者、**The Audio DB**，当文件系统提供者的 `Propagate track genres` 选项启用时，从曲目标签派生 |
| MusicBrainz ID (MBID) | 文件标签、`artist.nfo`、音乐提供者，缺失时通过 MusicBrainz 查询派生 |
| 简介 | `artist.nfo` (`<biography>`)、音乐提供者、**The Audio DB**、**Wikipedia** |
| 风格、情绪、厂牌 | **The Audio DB** |
| 图片（缩略图、徽标、横幅、粉丝艺术、抠图、横图、透明艺术图） | 嵌入标签、文件夹图片、音乐提供者、**Fanart.tv**、**The Audio DB** |
| 链接（网站、Facebook、Twitter、Last.fm） | **The Audio DB** |

MusicBrainz 艺术家 ID 是解锁所有在线艺术家丰富信息的关键。当无法确定艺术家的 MBID 时（通常是因为该艺术家的曲目或专辑均未匹配），将不会获取在线简介或图片。将 MBID 添加到文件标签或 `artist.nfo` 是最可靠的解决方法。

请注意，音频文件中嵌入的 `genre` 标签仅应用于曲目，而不适用于专辑或艺术家。有关专辑和艺术家流派如何派生、传播和合并的信息，请参阅[专辑和艺术家流派](/metadata/#album-and-artist-genres)。

## 专辑

| 元数据类型 | 来源 |
| --- | --- |
| 名称、排序名称、年份、专辑类型 | 文件标签、`album.nfo`、音乐提供者 |
| 流派 | `album.nfo`、音乐提供者、**The Audio DB**，当文件系统提供者的 `Propagate track genres` 选项启用时，从曲目标签派生 |
| MusicBrainz 发行组 / 专辑 ID | 文件标签、`album.nfo`、音乐提供者 |
| 描述 / 评论 | `album.nfo` (`<review>`)、音乐提供者、**The Audio DB** |
| 风格、情绪、厂牌 | **The Audio DB** |
| 链接（Wikipedia、AllMusic、Last.fm、社交） | **The Audio DB** |
| 封面、光盘艺术图 | 请参阅[艺术图](/metadata/artwork) |

## 曲目

| 元数据类型 | 来源 |
| --- | --- |
| 标题、版本、艺术家、专辑、光盘 / 曲目编号、时长、年份 | 文件标签、音乐提供者 |
| MusicBrainz Recording ID、ISRC、条形码 | 文件标签、音乐提供者 |
| 流派、情绪、风格、描述 | 文件标签、音乐提供者、**The Audio DB** |
| 脏标、版权、分组、注释 | 文件标签、音乐提供者 |
| 歌词 | 请参阅[歌词](/metadata/lyrics) |
| 音量标准化值 | 文件标签（`R128_*` 和 `REPLAYGAIN_*`，曲目和专辑）、音乐提供者（Plex、Subsonic），否则由[响度分析](/audio-analysis/loudness-analysis)测量 |

## 播放列表

播放列表本身没有丰富的元数据；相反，Music Assistant 会派生以下信息：

- **缩略图** 请参阅[艺术图](/metadata/artwork/#playlists)
- 播放列表曲目中存在的**热门流派**（最常见的八个，每个至少出现五次）。

## 有声书

有声书项目收集出版商、作者、朗读者、时长、描述和章节列表，这些信息来源于嵌入标签或有声书提供者（Audiobookshelf、Audible 等）。封面艺术图遵循与专辑相同的优先级。

## 播客

播客节目从播客提供者（Audiobookshelf、Podcast Index、RSS 订阅源等）跟踪出版商和总集数。每集的元数据（标题、描述、艺术图）直接来自节目的订阅源。
