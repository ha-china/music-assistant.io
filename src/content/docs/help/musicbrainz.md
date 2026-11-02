---
title: 改进 MusicBrainz 数据
description: 如何添加和修复 Music Assistant 所依赖的 MusicBrainz 数据
---

# 改进 MusicBrainz 数据

[MusicBrainz](https://musicbrainz.org) 是一个任何人都可以编辑的免费音乐百科全书。Music Assistant 使用它来识别您的音乐。当 MusicBrainz 上的某些内容缺失或错误时，您可以自行修复。每一次修复都会帮助所有 Music Assistant 用户，以及所有使用 MusicBrainz 的人。

您需要一个免费的 [MusicBrainz 账户](https://musicbrainz.org/register) 才能进行编辑。

## 为什么 MusicBrainz 很重要

Music Assistant 使用 MusicBrainz 来：

- **识别**您的艺术家、专辑和曲目，使来自两个来源的相同项目在您的媒体库中合并为一个项目
- **链接**项目到您的其他音乐服务，使用存储在 MusicBrainz 上的流媒体链接
- **补充详细信息**，如生卒日期、国家和录音年份
- **按作曲家和作品组织古典音乐**。请参阅[古典音乐](/classical/)

Music Assistant 按以下顺序在 MusicBrainz 上查找项目：您文件标签中的 MusicBrainz ID、MusicBrainz 上的流媒体链接、条形码和 ISRC 代码，最后是按名称搜索。前三种方式是可靠的。按名称搜索则不然，因此在 MusicBrainz 上添加链接和代码能带来最大的改善。

## 日志提示的含义

当 Music Assistant 在 MusicBrainz 上找不到某些内容时，它通常会在日志中写入一条提示，并附带修复链接。每条提示仅写入一次。部分提示仅在开启调试日志时显示。

| 日志中的提示 | 日志级别 | 操作方法 |
|:--|:--|:--|
| `Album "..." (barcode ...) is not on MusicBrainz, add it for example with Harmony: ...` | 信息 | [使用 Harmony 添加专辑](#add-a-missing-album-with-harmony)。该链接会打开 Harmony 并自动填入条形码 |
| `Album "..." is not on MusicBrainz, add it for example with Harmony: ...` | 信息 | 同上，但自动填入的是流媒体链接 |
| `Composer "..." is not on MusicBrainz through <link>, add <link> to their MusicBrainz page: ...` | 信息 | [将流媒体链接](#add-streaming-links)添加到作曲家的 MusicBrainz 页面。该链接指向作曲家，或者在有多个候选项时指向搜索页面 |
| `Artist "..." has no link to <service> on MusicBrainz, so it is not added ...; add one at ...` | 信息 | MusicBrainz 命名了一位艺术家（例如录音中的表演者），但该艺术家没有链接到您的服务。[添加链接](#add-streaming-links)，然后在专辑上使用**更新元数据** |
| `Artist "..." is not on MusicBrainz through <link>, so it cannot be told apart from the other "..." on <service>; add <link> to their MusicBrainz page: ...` | 信息 | 您的服务中有两位同名的不同艺术家，只有当 MusicBrainz 知道这两个页面时，Music Assistant 才能区分他们。[将流媒体链接](#add-streaming-links)添加到正确艺术家的 MusicBrainz 页面。如果已知该艺术家，链接将指向该艺术家，否则指向搜索页面 |
| `Titles "..." and "..." share <catalogue number> but name different keys, so they are kept as separate works; check which is right and link its recording to the correct work on MusicBrainz: ...` | 信息 | 两个标题之一可能是错误的。检查专辑并[将录音链接到正确的作品](#link-a-recording-to-its-work) |
| `ISRC ... of "..." is not on MusicBrainz, add it to the track's recording: ...` | 调试 | [使用 MagicISRC 添加 ISRC 代码](#add-isrc-codes-with-magicisrc) |
| `ISRC ... of "..." is on MusicBrainz recording ..., which credits other artists, so it needs album "..." identified, add its streaming link or barcode to the release of that recording` | 调试 | 该代码被用于多个录音。[将流媒体链接](#add-streaming-links)或条形码添加到该专辑的 MusicBrainz 发行版中 |

## 使用 Harmony 添加缺失的专辑

[Harmony](https://harmony.pulsewidth.org.uk) 从 Spotify、Tidal、Qobuz、Deezer、Apple Music 和其他服务读取专辑，并为您填写 MusicBrainz 的“添加发行版”表单。它还会添加专辑的流媒体链接、条形码和 ISRC 代码。

1. 打开日志中的 Harmony 链接，或前往 Harmony 并粘贴专辑的流媒体链接或条形码
2. 检查 Harmony 找到的内容。它会比较各项服务，并在出现不一致时发出警告
3. 选择**导入到 MusicBrainz**
4. MusicBrainz 会打开并自动填入专辑信息。检查艺术家是否已链接到正确的 MusicBrainz 艺术家，然后输入关于数据来源的简短说明并提交
5. 返回 Harmony，按照其建议添加任何缺失的链接和 ISRC 代码

## 添加流媒体链接

Music Assistant 通过其 MusicBrainz 页面上的链接，将艺术家和专辑链接到您的服务。

1. 在 [MusicBrainz](https://musicbrainz.org) 上查找艺术家或发行版
2. 选择**编辑**
3. 在**外部链接**下，粘贴艺术家或专辑的 Spotify、Tidal、Qobuz、Deezer、Apple Music 或 YouTube Music 链接，并在必要时选择类型
4. 提交编辑

> [!TIP]
> Harmony 还可以为 MusicBrainz 上已存在的发行版添加链接。在 Harmony 中粘贴发行版的流媒体链接并按照其建议操作。

单曲也可以有链接。在 MusicBrainz 上打开录音，选择**编辑**，并在**外部链接**下添加曲目链接（例如 `https://open.spotify.com/track/...`）。Music Assistant 在检查曲目的 ISRC 代码之前会先检查其链接，因此即使曲目名称与 MusicBrainz 不同，也能识别该曲目。这对于 Spotify 最为有用，因为 Spotify 不与 Music Assistant 共享 ISRC 代码。每首曲目需要一次编辑，因此对于整张专辑来说，ISRC 代码通常是更快捷的方式。

## 使用 MagicISRC 添加 ISRC 代码

ISRC 是用于标识录音的代码。Music Assistant 使用它将流媒体曲目与 MusicBrainz 匹配。[MagicISRC](https://magicisrc.kepstin.ca) 可以一次性为整个发行版添加代码。

1. 查找您的发行版：打开 MagicISRC 并粘贴您的 MusicBrainz 发行版链接或 ID
2. 登录：在提示时连接您的 MusicBrainz 账户
3. 提取 ISRC：
    - 对于 Spotify 或 Deezer URL：将专辑链接粘贴到 [Chartmetric ISRC Finder](https://chartmetric.com/isrc-finder-lookup) 或 [Soundcharts ISRC Finder](https://soundcharts.com/en/isrc-finder) 等网络工具中，即可立即获取 12 位代码。
    - 对于 Tidal、Qobuz 或 Apple Music：使用 Chartmetric ISRC Finder 上的搜索栏，输入艺术家名称 + 曲目/专辑名称，从其全球数据库中获取代码。
    - 复制生成的代码列表。
4. 粘贴到 MagicISRC：将代码文本块粘贴到 MagicISRC 的输入框中
5. 验证：仔细检查代码是否与曲目列表中的正确曲目对齐
6. 提交：点击提交以将代码应用到 MusicBrainz

> [!TIP]
> 如果您经常管理元数据，请安装 Tampermonkey 等浏览器扩展并下载 MusicBrainz Enhanced Tracklist (MET) 用户脚本。这会在 Spotify、Deezer、Apple Music 和 Tidal 的网页播放器中直接添加一个原生的“发送到 MagicISRC”按钮。

## 将录音链接到其作品

对于古典音乐，录音需要链接到它所演奏的作品。这能为 Music Assistant 提供作曲家、作品及其乐章信息。

1. 在 MusicBrainz 上打开发行版并选择**编辑关系**
2. 选择曲目，然后选择**批量添加新作品**以将它们链接到现有作品或创建新作品
3. 对于乐章，将录音链接到该乐章的作品。乐章作品本身应是主作品的一部分
4. 提交编辑

## 使用 Picard 为本地文件添加标签

[MusicBrainz Picard](https://picard.musicbrainz.org) 将 MusicBrainz ID 写入您的文件，这是 Music Assistant 识别它们的最可靠方式。

1. 安装 Picard 并添加您的音乐文件夹
2. **聚类**文件，然后**查找**或**扫描**以将它们与 MusicBrainz 发行版匹配
3. 检查每个匹配项，然后**保存**

对于古典音乐，在保存前请开启以下选项：

- **选项 > 元数据 > 使用曲目关系**和**使用发行版关系**。这些选项会添加作曲家、指挥家、表演者和作品
- 写入乐章标签的选项（乐章名称、乐章编号和乐章总数）
  <!-- TODO exact option name in current Picard -->

如果 Picard 找不到您的专辑，请先使用 Harmony 将其添加到 MusicBrainz。

## Music Assistant 何时会看到我的编辑？

不会立即生效。

- Music Assistant 通过其自己的数据库副本读取 MusicBrainz。此副本会延迟跟随 musicbrainz.org <!-- TODO how long -->
- MusicBrainz 的响应结果最多会保留 30 天
- 部分编辑需要进行投票，在应用编辑之前最多可能需要 7 天时间
- 未找到的项目稍后会自动重新查找。在专辑或艺术家上使用**更新元数据**可以更快地重试

> [!NOTE]
> 请仅添加您可以核实的数据，例如专辑封面、流媒体服务或宣传册。在进行较大的编辑之前，请阅读 [MusicBrainz 风格指南](https://musicbrainz.org/doc/Style)，对于古典发行版请阅读[古典风格指南](https://musicbrainz.org/doc/Style/Classical)。
