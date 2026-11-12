---
title: "本地文件"
description: 文件系统音乐源的功能、配置、问题及更多内容
---

# 文件系统源 <img src="/assets/icons/localfiles-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 完全支持读取磁盘或远程服务器上的本地音乐文件，并将其编目到资料库（library）中，从而使 Music Assistant 支持的所有播放器提供方（player provider）都能播放这些文件。网络支持仅限于 SMB/CIFS、NFS 和 WebDAV，以及云存储服务 Google Drive 和 Microsoft OneDrive。

当 MA 中还有流媒体源可用时，只有当相同条目出现在该流媒体源的"资料库"（Library）中时才会建立链接。不过，额外的曲目和专辑仍会出现在各种视图中，或可通过全局搜索找到，之后可单独添加到 MA 资料库中。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Audiobooks, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes with Sonic Similarity Plugin                      | 
| Maximum Stream Quality | FLAC, Unlimited |
| Login Method | None or Password |

### Other

- Searching for tracks is possible
- Local music is automatically included in the MA Library
- Files are not favourited by default. All items can be seen if the "favourite" filter (the heart) is deselected. Items can then be favourited as desired
- If streaming sources are also connected, then the media will be automatically linked and completed with info from those streaming source(s)
- On playback, when tracks are linked across sources (or within the same source) the highest quality version is used automatically
- It is possible to add multiple filesystem sources

### Other

- Searching for tracks is possible
- Local music is automatically included in the MA Library
- Files are not favourited by default. All items can be seen if the "favourite" filter (the heart) is deselected. Items can then be favourited as desired
- If streaming sources are also connected, then the media will be automatically linked and completed with info from those streaming source(s)
- On playback, when tracks are linked across sources (or within the same source) the highest quality version is used automatically
- It is possible to add multiple filesystem sources

### 其他

- 可以搜索曲目
- 本地音乐会自动包含在 MA 资料库中
- 文件默认不会被收藏。取消选择"收藏"筛选器（心形图标）即可看到所有条目，然后可按需收藏条目
- 如果还连接了流媒体源，媒体将自动与来自这些流媒体源的信息进行链接和补全
- 播放时，当曲目跨源（或在同一源内）链接时，会自动使用质量最高的版本
- 可以添加多个文件系统源

## 配置

音乐、有声读物和播客必须分别添加单独的源。

**音频文件位于运行 Music Assistant 服务器的设备的磁盘/文件夹上**

如果文件存储在运行 Music Assistant 的设备上，例如 Home Assistant OS 中的 `/media` 文件夹，则应选择"文件系统（本地磁盘）"（Filesystem (local disk)）源，然后提供文件的路径。

> [!NOTE]
> 在 Home Assistant OS 上只能访问 /media 文件夹，且无法将 Home Assistant 中的文件夹挂载到该路径。Docker 用户可以挂载自己的文件夹路径。

> [!CAUTION]
> Music Assistant 假定你的 NFS 或 SMB 服务器位于本地网络中。它自身不提供任何加密或访问控制，因此不应通过互联网访问这些共享。

**音频文件位于通过 SMB/CIFS 提供服务的远程共享上**

Music Assistant 支持 SMB（也称为 samba 或 CIFS）共享和 DFS。选择音乐源"文件系统（远程共享）"（Filesystem (remote share)），并配置服务器的（fqdn）主机名（或 IP 地址）、共享名称以及可选的子文件夹。高级选项包括：

- <b>SMB 版本。</b>要使用的 SMB 协议版本。为获得更好的性能和安全性，建议使用 SMB 3.0 或更高版本。使用 Auto 可让系统自动协商。可选值为 `Auto`、`SMB 1.0`、`SMB 2.0`、`SMB 2.1`、`SMB 3.0 [default]` 和 `SMB 3.1.1`
- <b>缓存模式。</b>缓存模式会影响性能和一致性。"Loose"（宽松）可为读取密集型工作负载提供更好的性能，推荐用于音乐资料库。可选值为 `Strict`、`Loose (Recommended) [default]` 和 `None`

**音频文件位于通过 NFS 提供服务的远程共享上**

Music Assistant 支持 NFS 共享。选择音乐源"文件系统（NFS 共享）"（Filesystem (NFS share)），并配置服务器的 IP 地址（不带前导 `http://`）、共享的绝对导出路径（例如 `/volume1/music`）以及可选的子文件夹。

**音频文件位于通过 WebDAV 提供服务的远程共享上**

Music Assistant 支持 WebDAV 共享。选择音乐源 "WebDAV"，并配置 WebDAV 共享的完整网址，包括内容文件夹的完整路径（例如 `https://example.com/webdav/music`）。如果需要身份验证，请提供用户名和密码。SSL 证书验证是可选的，默认处于禁用状态。

**音频文件位于通过 Google Drive 提供服务的远程共享上**

Music Assistant 支持 Google Drive。按照 Home Assistant 文档[获取客户端 ID 和机密](https://www.home-assistant.io/integrations/google_drive/)，但使用 `https://music-assistant.io/callback` 作为 `Authorized redirect URI`（授权重定向 URI）。然后添加音乐源 `Google Drive`，将客户端 ID 和机密填入必填字段，再按 `AUTHORIZE WITH GOOGLE`。最后，添加 `Drive Folder ID to Scan`（要扫描的云端硬盘文件夹 ID），即用浏览器访问云端硬盘文件夹时 URL 末尾的字符串。例如：`https://drive.google.com/drive/u/0/folders/`<b>abcfJhfIilxCtMj6rItMmAdA3rDz1ab1c</b>

> [!CAUTION]
> 确保将 OAuth 同意屏幕设置为 `In production`（生产状态，而非 `Testing` 测试状态），否则 Google 会在 7 天后撤销访问权限，你将需要每周重新授权。

**音频文件位于通过 One Drive 提供服务的远程共享上**

Music Assistant 支持 Microsoft One Drive 个人账户（不支持商业账户）。设置说明如下。

<details>
<summary><b>为 Music Assistant 设置 OneDrive</b></summary>
<div>
<br>
你需要从 Microsoft 获得两样东西：<b>客户端 ID</b>（Client ID）和<b>客户端机密</b>（Client Secret）。设置大约需要 15 分钟。

#### 1. 获取 Azure 目录（仅首次需要）

没有目录，Microsoft 就不允许你注册应用。

- 访问 https://azure.microsoft.com 并**注册免费的 Azure 账户**
- 免费层就足够了。可能会要求你提供银行卡进行身份验证，但不会向你收费

#### 2. 注册应用程序

1. 进入 **Microsoft Entra 管理门户** > **应用注册** > **新注册**。
2. **名称：**任意名称，例如 `Music Assistant`。
3. **受支持的账户类型：**选择 **"任何组织目录中的账户和个人 Microsoft 账户"**。
4. **重定向 URI：**将类型设置为 **Web**，URL 设置为 `https://music-assistant.io/callback`
5. 点击**注册**。

#### 3. 修正清单（重要 - 两项设置）

必须更改两个值，个人 Microsoft 账户才能正常工作。

1. 在你的应用中，打开**清单**（Manifest，左侧菜单）。
2. 设置以下两个属性：
   ```json
   "signInAudience": "AzureADandPersonalMicrosoftAccount",
   "requestedAccessTokenVersion": 2
   ```
3. **保存。**等待约 2 分钟让更改生效。

> 如果跳过此步骤，你会遇到：*"unauthorized_client: The client does not exist or is not enabled for consumers."*

#### 4. 复制客户端 ID

- 在应用的**概述**（Overview）页面，复制**应用程序（客户端）ID**。
- 这就是你的**客户端 ID**。

#### 5. 创建客户端机密

1. 左侧菜单 > **证书和机密**（Certificates & secrets） > **新建客户端机密**。
2. 添加描述，选择一个过期时间（最长约 2 年）。
3. **立即复制"值"（Value）列** - 而不是机密 ID。离开该页面后"值"将被隐藏。这就是你的**客户端机密**。

> 机密会**过期**。过期时，请创建新的机密并在 Music Assistant 中重新授权。

#### 6. （可选）选择文件夹

将文件夹保留为 `root` 可扫描整个云端硬盘，或者输入文件夹**路径**来限制扫描范围，例如 `Music` 或 `Documents/Music`

请使用文件夹在 OneDrive 中的显示名称。

#### 7. 在 Music Assistant 中设置提供方

1. 添加 OneDrive 提供方。
2. 粘贴**客户端 ID** 和**客户端机密**，设置**要扫描的文件夹**（或 `root`）。
3. 点击**通过 Microsoft 授权**（Authorize with Microsoft），登录并批准访问。
4. 保存。

#### 常见错误

| 错误 | 解决方法 |
|---|---|
| "unable to create app outside a directory" | 注册 Azure（步骤 1） |
| "unauthorized_client ... not enabled for consumers" | 清单设置（步骤 3），等待 2 分钟 |
| "Property api.requestedAccessTokenVersion is invalid" | 将 `requestedAccessTokenVersion` 设置为 `2`（步骤 3） |
| "Folder not found" | 检查文件夹路径拼写（步骤 6），或使用 `root` |
| 授权显示回调但 MA 不保存 | 再次尝试点击 `Authorize with Microsoft` |
</div>
</details>

### 设置

除了上述用于配置此源的设置之外，还有其他可用设置（注意，某些选项会根据所选内容类型而变灰不可用）：

- <b>媒体文件夹中的内容类型。</b>此设置定义源的内容类型，是正确识别音乐、有声读物和播客所必需的
- <b>曲目缺少专辑艺术家 ID3 标签时的操作。</b>首先应[正确标记文件](#tagging-files)。MA 需要定义专辑艺术家，才能将条目正确添加到数据库。此设置定义了应如何处理这种情况，而不是直接跳过缺少该信息的曲目。默认将使用 `Various Artists`，其他可用选项为 `Track Artist` 和 `Folder name (if possible)`。
- <b>忽略专辑文件夹中包含专辑曲目的播放列表。</b>有些用户为每张专辑创建一个播放列表。对于大型收藏，这会导致播放列表视图无法使用。为避免这种情况，此设置（默认启用）将忽略位于源根文件夹下超过一层深度的播放列表
- <b>将此源中的资料库艺术家/专辑同步到 Music Assistant。</b>是否同步本地源中的所有艺术家/专辑。
- <b>将曲目/文件导入 Music Assistant 资料库。</b>定义是否需要导入曲目/文件。如果不导入资料库，仍可使用浏览（Browse）功能手动浏览曲目。请注意，将曲目添加到 Music Assistant 资料库时，曲目艺术家和专辑也会始终一并被导入
- <b>将播放列表（m3u 文件）导入 Music Assistant 资料库。</b>定义是否需要导入播放列表（m3u 文件）。如果不导入资料库，仍可使用浏览（Browse）功能手动浏览。
- <b>将播客/有声读物导入 Music Assistant 资料库。</b>定义是否需要导入播客/有声读物。如果不导入资料库，仍可使用浏览（Browse）功能手动浏览条目。
- <b>将曲目流派传播到专辑和艺术家。</b>当专辑/艺术家自身没有流派元数据时，从其曲目派生专辑和艺术家的流派

## 已知问题 / 注意事项

- 需要对共享的写入权限才能编辑或创建存储在本地的播放列表。如果只授予读取权限，播放列表仍可保存到 MA 内置提供方
- 使用远程共享连接时，请注意不建议使用 SMB1（已非常老旧）。如果连接一直失败，请查看 NAS 设置，看是否可以禁用 SMB1
- WebDAV、Google Drive 和 OneDrive 是通过互联网而非你自己的网络访问的，因此资料库同步比本地、SMB 或 NFS 更慢，对于大型资料库尤其如此。云源的首次同步会通过互联网读取每个文件的标签
- 不支持写入 WebDAV、Google Drive 和 OneDrive 源。播放列表可以读取，但无法创建或编辑。请使用 MA 内置提供方进行播放列表管理

> [!NOTE]
> **云源（Google Drive / OneDrive）**
>
> - 播放开始或拖动进度时预计会有 1-2 秒的延迟，因为音频需要按需从云服务获取
> - 文件夹列表会缓存最多五分钟以保持浏览流畅，因此在云服务上所做的更改可能需要长达五分钟才会显示在 BROWSE（浏览）视图中。资料库同步始终读取最新列表，因此同步绝不会遗漏新内容

- 关于文件夹和文件名，请注意以下几点：
    - 以下划线开头的文件夹将被忽略
    - Music Assistant 要求所有文件和文件夹名称均为有效的 UTF-8。名称中包含非 UTF-8 字符的文件将在资料库同步期间被跳过，并会记录一条警告以指明受影响的文件。这最常影响最初在 Windows 上使用 Windows-1252 等旧编码进行标记或命名的文件，其中弯引号或带重音的字母等字符可能已被写入为非 UTF-8 字节
    - SMB/CIFS 网络共享不支持文件夹或文件名中的表情符号及其他特殊字符。包含这些字符的条目将在资料库同步期间被跳过
 
## 整理你的文件

文件夹的命名和排列方式决定了 Music Assistant 能对你的收藏了解多少。下面的章节涵盖每种内容类型以及封面图片。

### 音乐

- 本地曲目和专辑将与任何源（本地或流媒体）上相同的曲目或专辑建立链接。请注意，"相同"不只是名称相同。系统会检查标签以确认是否确实是同一曲目。在没有标签信息的情况下，MA 会尝试根据它所掌握的其他信息（如艺术家名称、专辑和曲目长度）来识别相同的曲目。不过，糟糕的标签信息可能导致糟糕的匹配
- 如果你的文件没有标签，MA 将退而根据文件名读取 `Artist - Title.ext`。确切规则及其限制请参见[无标签文件](#files-without-tags)。为文件添加标签始终是更好的解决办法
- 支持包含歌词的文本文件。这些文件必须与曲目文件名相同，并位于同一文件夹中，但文件扩展名为 `.lrc`。播放开始时会加载歌词
- 为尽量减少问题，音乐文件夹应遵循 /artist/album 结构，文件夹名称应与标记的艺术家和专辑名称一致，并去掉其中所有非[字母数字字符](https://en.wikipedia.org/wiki/Alphanumericals)（例如 AC/DC 应放在名为 ACDC 的文件夹中）
- 放在随意结构中的文件也会被导入，但无法从文件夹名称获取其他数据，并且可能会出现其他问题

### 有声读物

- 支持的文件格式包括：`.aa`、`.aax`、`.m4b`、`.m4a`、`.mp3`、`.mp4`、`.flac`、`.ogg`、`.opus`
- 有声读物放在自己的文件夹中始终受支持，这也是首选方式。对于没有标签的文件，这是强制要求，并且文件名必须按字母顺序排列以符合章节顺序
- 带有内嵌章节的单个文件（例如 `.m4b`）放在任何文件夹中都可以使用
- 如果每个文件都有专辑标签（用作书名以对章节进行分组）和曲目编号标签，多本书可以共用一个文件夹。多碟书籍还需要碟片编号标签。如果存在标题标签，则会将其用作章节名称
- 作者从 writer、专辑艺术家或艺术家标签中读取（按此顺序）。可选，但建议提供
- 封面图片将从内嵌图像或文件夹中的图像文件（`.jpg`、`.jpeg`、`.png`、`.gif`）获取
- 文件夹中的 `.txt` 文件将用作书籍描述

### 播客

- 支持的文件格式包括：`.aa`、`.aax`、`.m4b`、`.m4a`、`.mp3`、`.mp4`、`.flac`、`.ogg`、`.opus`
- 播客必须放在自己的文件夹中。文件夹中的每个文件都是该播客的一集
- 播客名称从各集的 `album` 标签获取；如果不存在，则使用文件夹名称
- 单集名称从 `title` 标签获取。单集顺序由曲目编号标签决定
- 支持单个单集文件中的内嵌章节
- 文件夹中的 `metadata.json` 文件可提供额外的播客级元数据：标题（title）、排序标题（sorttitle）、描述（description）、发布者（publisher）、流派（genres）和图片 URL。
- 封面图片将从内嵌图像或文件夹中的图像文件（`.jpg`、`.jpeg`、`.png`、`.gif`）获取

### 封面图片

支持音频文件中内嵌的封面图片并将其提取出来。也支持以单独图像的形式与文件存放在一起的封面图片，这是更好的选择。

- 本地封面图片请使用以下命名规则
    - 艺术家缩略图：cover.jpg、folder.jpg 或 artist.jpg（或 jpeg/png）
    - 专辑缩略图：cover.jpg、folder.jpg 或 album.jpg（或 jpeg/png）
    - 粉丝艺术图（用作横幅背景）：fanart.jpg（或 jpeg/png）
    - 标志（用于艺术家视图）：logo.png
    - 播放列表缩略图：将图像文件命名为与播放列表文件相同（例如 rock.m3u 和 rock.jpg）
- 艺术家缩略图、粉丝艺术图和标志应放在以艺术家名称命名的文件夹中。专辑缩略图应放在以专辑名称命名的文件夹中或其下方的碟片文件夹中。有关封面图片文件类型的更多信息，请参见 https://kodi.wiki/view/Artwork_types
- 需要下载的封面图片会在后台非常缓慢地完成下载。可以通过在视图顶部横幅的 ⋮ 菜单中选择"更新元数据"（Update Metadata）来强制下载

> [!TIP]
> **本地封面图片是最佳选择**
>
> 在同一张专辑的每首曲目上都使用内嵌图像，对磁盘空间和性能而言都不是最优的。请改用专辑文件夹中的单个 folder.jpg

## 标记文件 

- 所有音频文件都包含正确且（理想情况下）丰富的标签信息非常重要。标记越全面，使用 MA 时得到的结果就越好。请注意以下几点：
    - 通用标签支持：Music Assistant 可从所有常见文件格式读取标签
    - 你的标签优先：内嵌标签被视为艺术家、专辑和曲目名称的权威来源。外部元数据提供方（如 MusicBrainz 或 Fanart.tv）仅用于补充缺失的信息，例如高分辨率封面图片或艺术家简介
    - 跨平台链接：MA 使用标识符标签（如 MusicBrainz ID（MBID）和 ISRC 代码）将本地文件与 Spotify 或 Tidal 等流媒体服务上的匹配曲目无缝链接
    - 推荐的标记工具：为了在 Music Assistant 中获得最佳效果，强烈建议使用 <a href="https://picard.musicbrainz.org" target="_blank" rel="noopener noreferrer">MusicBrainz Picard</a>，以确保文件包含资料库链接所需的特定 ID。其他程序（如 <a href="https://www.mp3tag.de/en/" target="_blank" rel="noopener noreferrer">Mp3Tag</a>）通常也基于 Musicbrainz 目录，只要包含 [MA 使用的标签](#tags-used-by-ma)表中所示的标签，也可以正常使用。如果 Picard 找不到专辑，请参见[改进 MusicBrainz 数据](/help/musicbrainz/)

- 包含多个值的字段可按以下方式处理：
    - 对于 ID3v2.3 和 MP4 标签，多个条目应以分号分隔（这是唯一支持的标签拆分方式）。在 Picard 中，这是 OPTIONS >> TAGS >> ID3 中的一个选项。
    - 对于 Vorbis（FLAC、OGG），按照 [Vorbis 规范](https://xiph.org/vorbis/doc/v-comment.html)使用多个字段
    - 对于 ID3v2.4 和 APEv2 标签，多个艺术家和专辑艺术家可以用空字符（null character）分隔
- MA 要求设置专辑艺术家（Album Artist）标签。如果未设置该标签，那么在扫描提供方时这些曲目会如何处理，取决于本地提供方的 `Action when a track is missing the Albumartist ID3 tag` 设置
- 支持包含增强元数据的 `.nfo` 文件
- 对于多碟专辑，建议（但非必需）在专辑名称文件夹下添加名为"Disc 1"、"Disc 2"等的文件夹。专辑的封面图片可以添加到顶层的专辑文件夹或碟片文件夹中
- 如果碟片标签中未填写任何内容，则碟片编号不会显示在界面上

![image](/assets/screenshots/no-disc-tag.png)

- 为尽量减少 MA 出现问题，应遵循 <a href="https://kodi.wiki/view/Music_tagging" target="_blank" rel="noopener noreferrer">Kodi 指南</a>。该页面上的几乎所有技巧和建议都适用于 MA，如果严格遵守，用户体验会好得多

### 多艺术家曲目

对于包含多个艺术家的曲目，简单的总结是：使用 MusicBrainz Picard 标记文件，让它写入 ARTISTS 标签和 MusicBrainz ID，MA 便会正确链接艺术家。如果你的艺术家被错误拆分（或完全没有拆分），下面的细节将准确说明 MA 如何针对每种文件格式读取多艺术家标签。

<details>
<summary>MA 如何解析多艺术家标签（按文件格式）</summary>

对于包含多个艺术家的曲目，MA 支持多种方式。最可靠的方法是在艺术家标签之外，为 ARTIST ID 和 RELEASE ARTIST ID 提供以分号分隔的 MusicBrainz ID 列表。当 MBID 数量与解析出的艺术家数量一致时，将按原样使用标签中的名称。如果数量不一致（例如某艺术家的真实名称中包含分隔符字符），MA 将改为查询 MusicBrainz，根据 ID 解析出规范名称。

无论是否存在 MBID，艺术家名称本身都需要在标签中使用以下方式之一进行编码：

1. ID3v2.3 和 MP4：使用 ARTISTS 标签 - 一个专用的多值字段，列出以分号分隔的每个艺术家。（使用此方法时，无法表示名称中带分号的艺术家）
2. FLAC/OGG/Opus：使用多个 ARTIST 字段。Vorbis comment 规范允许多个 ARTIST 字段（每个艺术家一个）。MA 会读取所有这些字段。（注意，标记工具可能会添加多个 ARTISTS（复数）字段。这不符合 Vorbis 规范，但 MA 会处理这种情况）
3. ID3v2.4 和 APEv2：在 ARTIST 标签中使用以空字符分隔的名称列表
4. ARTIST 标签解析 - 如果以上方式均不存在，MA 将尝试解析 ARTIST 字符串。分号被视为主要分隔符。合作类分隔符（例如 feat.、vs.、presents 等）始终会被拆分。其他分隔符（&、逗号、+、"with"）仅在 MusicBrainz Artist ID 表明预期有多个艺术家时才会使用

> [!NOTE]
> - 如果艺术家标签被不合需要地拆分，请使用 ARTISTS 标签、多个 ARTIST 字段或 Musicbrainz 标识符来精确控制艺术家添加到数据库的方式
>
> - 专辑艺术家标签的解析方式与 ARTIST 相同 - 相同的多值规则、相同的分隔符（包括合作类和 MBID 引导的分隔符），以及解析数量与 MBID 数量不匹配时相同的 MusicBrainz 回退机制

> [!NOTE]
> 由于分号是多值标签的标准分隔符，名称中带分号的艺术家需要特殊处理。必须使用以下选项之一：
> - 所有格式：单个 MusicBrainz Artist ID
> - Vorbis（FLAC、OGG）：多个（多于 1 个）ARTIST 字段（每个艺术家一个）
> - ID3v2.4（MP3）：TPE1 中多个（多于 1 个）以空字符分隔的值
> - APEv2（WavPack、Musepack 等）：Artist 字段中多个（多于 1 个）以空字符分隔的值

</details>

### MA 使用的标签

<div class="tag-table">

| 标签 | 重要性 | 为什么重要 |
|:--|:--|:--|
| Title<br />Artist<br />Album<br />Album Artist<br />Track number | 必需 | Music Assistant 基本功能所必需 |
| Artists | 强烈建议<br />（针对 ID3 标签） | ID3 标签需要它来区分同一条目上的多个艺术家名称 |
| Album Artist Sort Order<br />Artist Sort Order | 强烈建议 | UI 中的某些排序选项需要 |
| ISRC | 强烈建议 | 将相同的流媒体提供方条目与流媒体和本地条目进行链接时需要 |
| Barcode<br />Catalogue Number | 建议 | 可用于将相同的流媒体提供方条目与流媒体和本地条目进行链接 |
| Genre | 强烈建议 | UI 中的流派视图需要 |
| MusicBrainz Artist ID<br />MusicBrainz Recording ID<br />MusicBrainz Release Artist ID<br />MusicBrainz Release Group ID<br />MusicBrainz Release ID<br />MusicBrainz Track ID | 强烈建议 | 在本地提供方之间链接相同曲目所必需。避免同名的曲目、艺术家或专辑被错误地链接在一起 |
| Release Type | 强烈建议 | 用作筛选器并显示在 UI 中 |
| Disc Number<br />Total Discs | 强烈建议 | 在 UI 中使用 |
| Date | 建议 | 用作专辑日期并在曲目日期缺失时作为回退，在 UI 中使用 |
| Original Release Date<br />Original Release Year | 建议 | 用作曲目日期并在专辑日期缺失时作为回退，在 UI 中使用 |
| Record label<br />Release country<br />Release status | 可选 | 可在未来的 UI 更新中用作排序或搜索选项 |

</div>

<style>
  /* Keep each tag name and each importance level on one line. That sets a
     minimum width, so the table scrolls inside its own box on a narrow
     screen rather than being cut off or dragging the page sideways. */
  .tag-table { overflow-x: auto; }
  .tag-table table { min-width: 34rem; }
  .tag-table td:nth-child(1),
  .tag-table td:nth-child(2) { white-space: nowrap; }
</style>

左栏对应 <a href="https://picard-docs.musicbrainz.org/en/latest/_static/MusicBrainz_Picard_Tag_Map.html" target="_blank" rel="noopener noreferrer">MusicBrainz Picard 标签映射</a>表中显示的 TAG NAME（标签名称）。请根据被标记文件的格式参考相应的标签名称

响度标签也会被读取。如果文件标记了 ReplayGain 或 R128 响度值，Music Assistant 会将其用于[音量归一化](/faq/tech-info/#volume-normalization)，而不是自行测量曲目。曲目值和专辑值都会被读取，而专辑值是将整张专辑作为整体进行归一化的唯一方法。曲目扫描之后添加或更改的标签，可通过曲目上的**刷新条目**（Refresh item）来获取。

### 手动调整标签

> [!WARNING]
> 手动编辑标签适用于有意希望获得与 MusicBrainz 默认行为不同的用户。如果出错，对标签进行手动更改可能会对 MA 资料库产生不良影响。此外，源之间的匹配可能不会发生，或者可能错误地发生

通常最好保持 Picard 标签不变。不过，有些人并不认同 Musicbrainz 的观点，即 <a href="https://musicbrainz.org/doc/Style/Recording#Recordings_with_different_mastering" target="_blank" rel="noopener noreferrer">重制版与原始录音相同。</a>此技术也可用于不在 Musicbrainz 数据库中的个人抓取的专辑或曲目。要将这些区分开来，可以按如下方式编辑标签：

- 移除 MusicBrainz Release ID 和 Recording ID（确切标签名称随音乐文件格式而变化，请参见 [Picard 标签映射文档](https://picard-docs.musicbrainz.org/en/latest/appendices/tag_mapping.html#id39)）
- 保留 MusicBrainz Artist ID
- 移除 ISRC（因为它也用作曲目的强标识符）
- 移除条形码（因为它也用作专辑的强标识符）
- 由于没有版本专用标签，请将版本放在标题的括号中，可用于专辑、曲目或两者（使用专辑标签时，请确保在该发行版的所有曲目上完全一致）。例如，Great Song (Vinyl Rip Version)。无论括号中还有其他什么文字，请确保其中也包含 `Version` 一词
- 如果正在使用 AcoustID Lookup 提供方，请将其禁用，因为它会重新添加刚刚移除的 Recording ID

### 无标签文件

始终首选标签。当文件完全没有 `title`、`artist` 或 `track` 标签时，MA 会退而读取文件名，但这只是最后手段，而且特意保持简单。如果你的文件没有标签，请将其命名为 `Artist - Title.ext`，除此之外不要有其他内容。

> [!WARNING]
> 文件名只读取到**第一个**句点为止。`Dr. Dre - Still D.R.E..mp3` 会被读取为标题 `Dr`，且没有艺术家。无标签的文件名必须恰好包含一个句点，即文件扩展名之前的那一个

<details>
<summary>MA 如何读取无标签的文件名</summary>

- 分隔符必须是两侧都带空格的连字符。`Artist-Title.mp3` 不会被拆分，整个名称将成为标题，且没有艺术家
- 第一个 ` - ` 之前的内容是艺术家，下一段是标题。更多段落会被丢弃，因此 `Nirvana - Come As You Are - Live.mp3` 会以 `Come As You Are` 导入，而 `Live` 标记会丢失
- 不要在文件名中加入曲目编号。开头的数字会被读取为艺术家，因此 `01 - Come As You Are.mp3` 会得到艺术家 `01`，而 `01 - Nirvana - Come As You Are.mp3` 会得到艺术家 `01` 和标题 `Nirvana`
- **专辑**名称没有文件名或文件夹回退机制，因此无标签的文件永远不会被归入专辑。`Action when a track is missing the Albumartist ID3 tag` 设置仅涵盖专辑*艺术家*，而且只有在专辑标签存在时才起作用

</details>

---

## CUE Sheet 支持

当文件系统提供方遇到 `.cue` 文件时，CUE Sheet 中描述的每首曲目都会成为资料库中独立的曲目。被引用的音频文件本身不会作为单独的曲目导入。

每首曲目的信息由两个来源构建：CUE Sheet 和被引用音频文件中的标签。当两者都描述同一专辑级字段时，以 CUE Sheet 为准。

由主流抓取工具（EAC、CUETools、foobar2000、XLD）生成的标准 CUE Sheet 可以直接使用，下面的章节展示了 MA 所需的最低要求。为了获得最佳体验，请提供[完整字段参考](#full-field-reference)中的附加字段。它们为 MA 提供的丰富元数据，与[强烈建议的标签](#tags-used-by-ma)为普通音频文件提供的相同。

### 最低可用的 CUE Sheet

假设音频文件本身具有正确的 `album`/`albumartist` 标签：

```
FILE "album.flac" WAVE
  TRACK 01 AUDIO
    TITLE "First Song"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Second Song"
    INDEX 01 03:45:00
```

每首曲目需要：

- `TRACK NN AUDIO`
- `TITLE "..."` - 没有标题的曲目将被跳过并记录警告
- `INDEX 01 MM:SS:FF`

CUE Sheet 需要：

- `FILE` - 如果 CUE Sheet 与音频文件共享相同的主文件名（例如 `album.cue` 与 `album.flac` 并存），则可以省略。

其他所有内容（专辑标题、艺术家、年份、流派、封面图片、MBID）均继承自音频文件自身的标签。

如果音频文件也没有专辑/艺术家标签，则最低要求增加为：

```
PERFORMER "The Band"
TITLE "Album Name"
FILE "album.flac" WAVE
  TRACK 01 AUDIO
    TITLE "First Song"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Second Song"
    INDEX 01 03:45:00
```

如果既没有 CUE `TITLE` 也没有音频文件专辑标签，曲目仍会导入，但不会附加到任何专辑 - 会记录一条警告。

### 完整字段参考

<details>
<summary>Music Assistant 解析的每个指令，以及元数据的组合方式</summary>

最初的 Cue Sheet 规范只有 [13 个指令](https://web.archive.org/web/20160201021136/http://digitalx.org/cue-sheet/syntax/)。这些不足以让 Music Assistant 达到最佳工作效果，因此通过各种 REM 字段添加了额外支持，以便提供与[上文所列标签](#tags-used-by-ma)等效的内容。如下所述，此元数据可以通过文件中的标签与 Cue Sheet 中字段的任意组合来提供。由于主流的 CUE Sheet 制作工具不会输出这些 REM 字段（它们遵循最初的 13 指令规范），希望为 Music Assistant 提供完整元数据的用户需要手动将它们添加到 CUE Sheet 中 - 或者，对于专辑级元数据，直接标记音频文件本身。命名遵循 [Picard 的变量约定](https://picard-docs.musicbrainz.org/en/latest/_static/MusicBrainz_Picard_Tag_Map.html)，因此已经使用 Picard 标记资料库的用户会对此类字段感到熟悉。

**多值策略**

多值字段遵循 Vorbis 约定：重复整行，而不是用分隔符连接。这样可以保持 `AC/DC` 或 `Wait, Wait... Don't Tell Me!` 这类名称完好无损。下表中标注了支持多值的指令。

当艺术家与伴随字段（排序名称、MB 艺术家 ID）都为多值时，Music Assistant 会按索引对齐它们 - 第 N 个 `REM ARTISTSORT` 对应第 N 个 `PERFORMER`。

**从 CUE Sheet 读取的字段（专辑级）**

写在文件顶部、任何 `TRACK` 之前。**Standard**（标准）列表示该指令是否通常由主流抓取/制作工具（EAC、CUETools、foobar2000、XLD）输出，而不一定是最初 13 指令 CDRWIN 规范的一部分。标记为 **No** 的字段是 Music Assistant 的扩展 - 其他播放器可能会忽略它们。

标准指令 FLAGS、PREGAP、POSTGAP、SONGWRITER 和 CDTEXTFILE 会被接受但会被忽略。

| 指令 | 标准 | 多值？ | 提供内容 |
|-----------|:---:|:---:|-------|
| `FILE "..." WAVE\|MP3\|...` | 是 | 否 | 被引用音频文件的路径 |
| `TITLE "..."` | 是 | 否 | 专辑标题（覆盖音频文件中的专辑） |
| `PERFORMER "..."` | 是 | 是 | 专辑艺术家（覆盖音频文件中的专辑艺术家） |
| `CATALOG <upc>` | 是 | 否 | 碟片 UPC/EAN - 专辑条形码 |
| `REM DATE YYYY` | 是 | 否 | 专辑年份 |
| `REM GENRE "..."` / `GENRE "..."` | 是 | 是 | 专辑流派 |
| `REM ALBUMSORT "..."` | 否 | 否 | 专辑排序名称 |
| `REM ALBUMARTISTSORT "..."` | 否 | 是 | 专辑艺术家排序名称（与 `PERFORMER` 对齐） |
| `REM MUSICBRAINZ_ALBUMARTISTID ...` | 否 | 是 | 专辑艺术家 MBID（与 `PERFORMER` 对齐） |
| `REM MUSICBRAINZ_ALBUMID <uuid>` | 否 | 否 | 专辑 MBID，也称为 RELEASE ID |
| `REM MUSICBRAINZ_RELEASEGROUPID <uuid>` | 否 | 否 | 发行组 MBID |
| `REM RELEASETYPE ...` | 否 | 是 | 专辑类型（例如 `album`、`compilation`、`live`） |

**从 CUE Sheet 读取的字段（曲目级）**

写在每个 `TRACK NN AUDIO` 块内：

| 指令 | 标准 | 多值？ | 提供内容 |
|-----------|:---:|:---:|-------|
| `TRACK NN AUDIO` | 是 | 否 | 曲目编号 |
| `INDEX 01 MM:SS:FF` | 是 | 否 | 曲目起始位置（`INDEX 00` 前间隙会被忽略） |
| `TITLE "..."` | 是 | 否 | 曲目名称 |
| `PERFORMER "..."` | 是 | 是 | 曲目艺术家（回退到 CUE Sheet 级的 `PERFORMER`） |
| `ISRC ...` | 是 | 是 | 曲目 ISRC |
| `REM GENRE "..."` / `GENRE "..."` | 是 | 是 | 单曲流派（对此曲目覆盖专辑流派） |
| `REM TITLESORT "..."` | 否 | 否 | 曲目排序名称 |
| `REM ARTISTSORT "..."` | 否 | 是 | 曲目艺术家排序名称（按索引与 `PERFORMER` 对齐） |
| `REM MUSICBRAINZ_ARTISTID ...` | 否 | 是 | 曲目艺术家 MBID（按索引与 `PERFORMER` 对齐） |
| `REM MUSICBRAINZ_RECORDINGID <uuid>` | 否 | 否 | 曲目原始录音的唯一标识符 |
| `REM MUSICBRAINZ_TRACKID <uuid>` | 否 | 否 | 此发行版中曲目的唯一标识符 |
| `REM COPYRIGHT "..."` | 否 | 否 | 曲目版权元数据 |
| `REM GROUPING "..."` | 否 | 否 | 曲目分组元数据 |
| `REM COMMENT "..."` | 否 | 否 | 曲目描述元数据 |
| `REM ITUNESADVISORY 0\|1` | 否 | 否 | Explicit（限制级）标志 |

曲目时长由下一首曲目的 `INDEX 01` 减去本曲目的 `INDEX 01` 计算得出。对于最后一首曲目，则根据音频文件的总时长计算。

**从音频文件读取的字段**

被引用音频文件上的标签提供了适用于整张专辑的所有内容，以及用于播放的技术格式：

- **格式**（每条 CUE 曲目共享） - 采样率、位深度、声道数、比特率、容器/编解码器、内嵌封面图片、碟片编号。
- **专辑元数据**（除非被 CUE Sheet 覆盖，否则使用） - album、albumsort、albumartist/albumartists、albumartistsort、musicbrainzalbumartistid、album_type、date/year、genre、barcode、musicbrainzalbumid、musicbrainzreleasegroupid。
- **响度归一化** - 对音频文件运行 ReplayGain 扫描器（例如 `metaflac --add-replay-gain album.flac` 或 `rsgain easy album.flac`）。Music Assistant 会自动从音频文件标签中读取 `REPLAYGAIN_ALBUM_GAIN`；对于单文件 CUE 抓取，文件增益*就是*专辑增益。

曲目专属的音频标签（标题、艺术家、歌词、单曲响度等）不会逐条应用于各个 CUE 曲目 - 单文件抓取只包含其中每种信息的一个副本，因此曲目之间有差异的任何信息都由 Music Assistant 依靠 CUE Sheet 获取。

曲目艺术家（PERFORMER）会回退到 CUE Sheet 级的 PERFORMER，而不是音频标签。如果未找到任何 PERFORMER 指令，则会应用 [unknown]。

**参考 CUE Sheet**

Music Assistant 当前解析的每一个指令：

```
PERFORMER "Pink Floyd"
TITLE "The Dark Side of the Moon"
CATALOG 5099902987620
FILE "pink_floyd_dsotm.flac" WAVE
REM GENRE "Progressive Rock"
GENRE "Art Rock"
REM DATE 1973
REM RELEASETYPE album
REM ALBUMSORT "Dark Side of the Moon, The"
REM MUSICBRAINZ_ALBUMID a1b2c3d4-e5f6-7890-abcd-ef1234567890
REM MUSICBRAINZ_RELEASEGROUPID rg000000-0000-0000-0000-000000000000
REM ALBUMARTISTSORT "Pink Floyd"
REM MUSICBRAINZ_ALBUMARTISTID aa000000-0000-0000-0000-000000000000
  TRACK 01 AUDIO
    TITLE "Speak to Me"
    REM TITLESORT "Speak to Me"
    PERFORMER "Pink Floyd"
    REM ARTISTSORT "Pink Floyd"
    REM MUSICBRAINZ_ARTISTID aa000000-0000-0000-0000-000000000000
    ISRC GBCEN0500001
    REM MUSICBRAINZ_TRACKID 11111111-1111-1111-1111-111111111111
    REM COPYRIGHT "(P) 1973 Pink Floyd Music Ltd"
    REM GROUPING "Part I"
    REM COMMENT "Opening collage"
    REM ITUNESADVISORY 0
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Breathe (In the Air)"
    PERFORMER "Pink Floyd"
    PERFORMER "Clare Torry"
    REM ARTISTSORT "Pink Floyd"
    REM ARTISTSORT "Torry, Clare"
    REM MUSICBRAINZ_ARTISTID aa000000-0000-0000-0000-000000000000
    REM MUSICBRAINZ_ARTISTID ab000000-0000-0000-0000-000000000000
    REM MUSICBRAINZ_RECORDINGID ef000000-0110-0000-0000-000222000000
    REM GENRE "Ambient Rock"
    ISRC GBCEN0500002
    INDEX 01 01:05:50
  TRACK 03 AUDIO
    TITLE "On the Run"
    PERFORMER "Pink Floyd"
    ISRC GBCEN0500003
    GENRE "Ambient Rock"
    INDEX 01 03:52:15
```

</details>

---
