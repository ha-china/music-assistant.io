---
title: 元数据
description: Music Assistant 可用的元数据来源说明
---

# 元数据 <img src="/assets/icons/metadata-general-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

元数据（metadata）是 Music Assistant 围绕你的音乐展示的一切内容：封面图片（artwork）、艺术家生平、流派、歌词等。如果你是因为缺少封面或艺术家信息而来到这里，简而言之就是：你自己的标签和文件始终优先，免费的在线服务会在后台慢慢填补空缺，而在标签或 `.nfo` 文件中添加 MusicBrainz ID 可以解决大多数匹配问题。

Music Assistant 依赖两层元数据。**源元数据（source metadata）**来自曲目实际所在之处——嵌入式文件标签、`.lrc` 和 [`.nfo` 文件](https://kodi.wiki/view/NFO_files)，以及 Plex、Jellyfin、Subsonic、Spotify 或 Tidal 等音乐提供程序（provider）。**在线元数据提供程序（online metadata providers）**是专门的第三方服务，仅在源未提供某些字段时才会查询它们来填补空缺；它们列在下方的[提供程序摘要](#provider-summary)中。

源元数据始终优先；在线元数据起补充作用。

本节介绍哪些提供程序会提供哪些字段，以及何时进行查询。

- [媒体项目](./media-items)：为艺术家、专辑、曲目、播放列表、有声读物和播客收集哪些内容
- [封面图片](./artwork)：缩略图、fanart、碟面图和电台流媒体封面的来源及优先顺序
- [歌词](./lyrics)：有哪些歌词可用

响度标签是在曲目首次扫描时从文件中读取的。如果之后添加或更改了这些标签，请使用曲目上的**刷新项目**（Refresh item）来获取新值。有关这些值的使用方式以及哪个来源优先，请参阅[响度分析](../audio-analysis/loudness-analysis)。

## 元数据如何获取

媒体库项目按 **90 天刷新周期**进行充实。刷新由以下操作触发：

- **每日后台扫描**：找出缺少元数据或元数据过期的项目，并分小批量刷新，以避免频繁请求免费 API
- **按需查询**：当某个项目在 UI 中被打开且其元数据已超过 90 天时，在后台安排查询
- **手动刷新**：通过“更新元数据”（Update metadata）操作进行，可绕过 90 天的限制并立即强制执行全新查询

对于每个项目，会先收集源元数据（经过排序，使文件系统、Plex、Jellyfin 和 Subsonic 等本地提供程序排在流媒体提供程序之前），然后在“从在线元数据提供程序启用元数据获取”（Enable metadata retrieval from online metadata providers）开启（默认）时查询在线元数据提供程序。

描述和生平所用的语言可在 [**设置 → 系统 → 元数据**](/settings/core/#metadata) → “首选语言”（Preferred language）下设置。始终以英语作为后备。

## Music Assistant 从本地文件媒体库中读取哪些内容

对于基于本地音乐收藏的媒体库项目，以下内容会在媒体库扫描期间自动读取：

- 音频文件中的**嵌入式标签**——标题、艺术家、专辑、流派、年份、MusicBrainz ID、ISRC、嵌入式封面图、嵌入式歌词、响度值（`R128_TRACK_GAIN`、`R128_ALBUM_GAIN`、`REPLAYGAIN_TRACK_GAIN`、`REPLAYGAIN_ALBUM_GAIN`）等。`genre` 标签仅应用于曲目；专辑和艺术家流派单独获取（见下文）。
- 与音频文件同名的 **`.lrc` 边车文件**，用作同步歌词。这是 LRCGET 等工具生成的格式
- 艺术家文件夹中的 **`artist.nfo`**（[Kodi NFO 格式](https://kodi.wiki/view/NFO_files)）——标题、排序名称、生平、流派、MusicBrainz 艺术家 ID
- 专辑文件夹中的 **`album.nfo`**——标题、排序名称、评论、年份、流派、MusicBrainz 发行组 / 专辑 / 专辑艺术家 ID
- **文件夹图片**（`cover.jpg`、`folder.jpg`、`artist.jpg`、[等](/music-providers/local-files/#artwork)）——用作专辑和艺术家的缩略图及其他封面图片

这些内容属于源元数据层，并且始终优先于在线查询。它们也是解决在线匹配问题最可靠的方式：在标签或 `.nfo` 文件中添加 MusicBrainz ID 后，该项目的其余在线提供程序会立即解锁。

### 专辑和艺术家流派

文件中的 `genre` 标签应用于曲目，但不会应用于专辑或艺术家。默认情况下，专辑的流派来自 `album.nfo`、提供流派的音乐提供程序，或在线元数据提供程序；艺术家的流派来自 `artist.nfo`、音乐提供程序，或在解析出 MusicBrainz 艺术家 ID 后来自在线元数据提供程序。

本地文件系统提供程序提供了可选启用的 `Propagate track genres to albums and artists` 设置，它通过从曲目的 `genre` 标签推导出专辑和艺术家的流派来填补这一空缺。传播只会填充仍然为空的流派；它绝不会覆盖来自 `NFO` 文件、音乐提供程序或在线元数据提供程序的流派。

除传播之外，各来源会将其流派合并到已有内容中，而不是替换已有流派或被抑制。`artist.nfo` 中的流派与 The Audio DB 返回的流派最终都会呈现在艺术家上。

## Music Assistant 会向本地文件写入哪些内容

按照设计，音乐收藏被视为**只读**：

- MusicBrainz ID 通常不会写回文件标签。当项目的标签中不含 MBID 时，会在 Music Assistant 自己的数据库中推导一个用于在线查询；如果启用了 AcoustID Lookup 提供程序，则通过该提供程序推导
- 生平、描述、流派、封面图片和歌词绝不会写回文件
- `.nfo` 文件绝不会被创建或修改

当具备写入权限时，例外情况如下：
- [响度分析](../audio-analysis/loudness-analysis)提供程序的可选设置“将 REPLAYGAIN_TRACK_GAIN 标签写回文件”（Write REPLAYGAIN_TRACK_GAIN tags back to files，默认**关闭**）；详情请参阅其页面
- [AcoustID Lookup](../audio-analysis/acoustid) 提供程序的可选设置“将 AcoustID/MusicBrainz 标签写回文件”（Write AcoustID/MusicBrainz tags back to files，默认**关闭**）；详情请参阅其页面

## 提供程序摘要

| 提供程序 | 用途 | 所需条件 |
| --- | --- | --- |
| **MusicBrainz** | 根据艺术家 / 专辑 / 曲目名称查找 MBID。无法禁用；它仅用于识别，绝不会替换已有的信息。 | 无 |
| **Fanart.tv** | 高质量的艺术家和专辑图片（缩略图、标志、横幅、fanart、CD 碟面图）。 | 艺术家或发行组 MBID |
| **The Audio DB** | 生平、描述、流派 / 风格 / 情绪、唱片公司、链接、图片。 | 艺术家元数据需要艺术家 MBID；专辑和曲目优先使用发行组 / 录音 MBID（以艺术家 + 名称作为后备）。 |
| **Cover Art Archive** | 来自 MusicBrainz 官方存档的专辑正面封面。 | 发行组 MBID |
| **iTunes Artwork** | 高分辨率专辑封面图片。 | 专辑条形码（UPC / EAN） |
| **LRCLIB** | 同步歌词和纯文本歌词（默认歌词提供程序）。 | 曲目名称、艺术家、专辑、时长 |
| **Genius Lyrics** | 非同步歌词的后备来源（可选）。 | 曲目名称 + 艺术家 |
| **Wikipedia** | 多语言艺术家生平，在可用时以你的首选语言提供。 | 艺术家 MBID（用于通过 Wikidata 解析对应的 Wikipedia 条目） |

各个元数据来源可以在 **设置 → 元数据提供程序** 中单独关闭，也可以通过[设置](/settings/core/#metadata)中的“从在线元数据提供程序启用元数据获取”一次性全部关闭。
