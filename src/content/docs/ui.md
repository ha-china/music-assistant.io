---
title: 用户界面
description: Music Assistant 用户界面导览
---

# 用户界面

## 主菜单

![image](/assets/screenshots/UI-main-menu.png)

通过点击右下角的 ⋮ 并选择 `Edit menu`（编辑菜单），可以配置此菜单的外观。随后可以对项目重新排序、显示或隐藏，并重命名分区标题。

在 [**设置 → 用户界面**](/settings/user-interface/#display) 中有一些会影响 UI 的显示（Display）选项。在桌面端，菜单可以垂直放置在左侧或右侧，也可以水平放置在底部（通过选择“强制移动端布局”）。在移动端布局中，将显示菜单（Menu）、发现（Discover）、搜索（Search）和播放器（Players）。

### 侧边栏快捷方式

使用快捷方式可以将常用的媒体库（library）项目固定到主菜单，以便快速访问。

- 通过项目的上下文菜单（⋮ 菜单、右键点击或长按）选择 **添加到快捷方式（Add to shortcuts）** 来添加快捷方式。
- 在同一菜单中选择 **从快捷方式中移除（Remove from shortcuts）** 即可将其移除。
- 快捷方式按用户账户分别存储。
- 如果被固定的项目被更新（例如重命名），快捷方式会自动更新。
- 如果被固定的项目被删除，它会自动从快捷方式中移除。

## 全局搜索
[![image](/assets/screenshots/global-search.png)](/assets/screenshots/global-search.png)

可以使用任意词语或部分词语的组合进行搜索，也可以通过指向某个来源的 URL 进行搜索，例如 `https://open.spotify.com/album/0BwWUstDMUbgq2NYONRqlu`

最初，视图默认为 ALL（全部），在曲目（Tracks）、艺术家（Artists）、专辑（Albums）、播放列表（Playlists）、播客（Podcasts）、有声书（Audiobooks）、电台（Radio）和流派（Genres）这八个类别中，每个类别最多显示 8 个项目。可以通过筛选器选择显示哪些媒体类型。类似地，也可以对搜索所使用的提供商（provider）进行筛选。

选择单个媒体类型后，每个提供商最多显示 50 个项目。每个项目均有上下文相关菜单可用。如果未找到所需的项目，请缩小搜索词的范围。

## 播放器栏
[![image](/assets/screenshots/UI-playercontrols-bar.png)](/assets/screenshots/UI-playercontrols-bar.png)

[音频管线（Audio Pipeline）](/audiopipeline/)可选标签通过彩色图标和两个字母来指示音频输出的音质：LQ（低音质）、SQ（标准音质）、HQ（高音质）或 HR（Hi-Res，高解析音质）。选择该标签可以查看音频所经过的完整路径；各音质等级的含义在[音频管线](/audiopipeline/)页面中有说明。对于组而言，由于各播放器的音质可能不同，将指示其中可用的最高音质。

溢出菜单中包含许多实用的选项。值得注意的是，对于播客和有声书，有一个 `Change playback speed`（更改播放速度）选项，选中后会打开一个对话框，其中包含五个预设速度和一个滑块。滑块范围为 0.5x 到 2.0x，另有一个 3.0x 倍速的预设可用。

## 正在播放视图
[![image](/assets/screenshots/now-playing-view.png)](/assets/screenshots/now-playing-view.png)

此视图会随屏幕宽度而变化。在较宽的显示屏上，您可以看到正在播放的曲目（及相关信息）以及队列。在较窄的显示屏上，您需要使用右下角的切换按钮在当前播放信息和队列之间进行切换。可以通过右侧的 ⋮ 菜单对队列进行调整。可以使用右上角的投屏图标将此视图投屏到兼容设备上。

[音频管线](/audiopipeline/)可选标签已在上文[播放器栏](#player-bar)部分中介绍。

您也可以[通过 URL 直接访问正在播放视图](/faq/how-to/#open-the-ui-with-the-now-playing-view-showing)

当收藏图标为实心时，点击它会弹出两个选项：`Remove from Favorites`（从收藏中移除）和 `Add to Playlist`（添加到播放列表）。如果播放开始后从其他视图更改了收藏状态，那么在重新开始播放该曲目之前，收藏状态可能无法正确显示。

当正在播放的曲目有可用歌词时，LYRICS 可选标签会以白色显示。选中后，队列将被歌词取代；当有时间信息时，歌词会与音乐同步。歌词能否准确选取取决于元数据提供商，对于歌曲的其他版本可能并不准确。可以在 ⋮ 菜单中调整歌词时间。

自动播放（Autoplay）和交叉淡入淡出（Crossfade）这两个可切换按钮，可让您快速访问在全局级别或特定队列上配置的行为。[单个队列设置](/usage/#the-queue)可在 ⋮ 菜单中找到。

⋮ 菜单中还提供睡眠定时器，它会在选定的时间段结束后停止播放。

⋮ 菜单的内容因播放器和队列状态而异。当曲目正在播放时，可以使用全部选项，如下所示：

[![image](/assets/screenshots/now_playing_menu.png)](/assets/screenshots/now_playing_menu.png)

## 播放器列表

[![image](/assets/screenshots/UI-speakers-menu.png)](/assets/screenshots/UI-speakers-menu.png)

> [!NOTE]
> 播放器组（player group）所显示的音量是其子播放器音量的最大值。当组音量改变时，每个播放器都会按相应的比例改变，使得当组滑块到达 0 时所有扬声器都达到 0，滑块到达 100 时所有扬声器都达到 100。扬声器之间的相对平衡得以保留，因此将组滑块恢复到原始值会使每个子播放器恢复到其原始音量

当[播放器组](/faq/groups/)开启后，该组的成员将从播放器列表中消失，且无法再单独向这些播放器播放。要向单个播放器播放，请关闭该组或将该播放器从组中移除。

> [!NOTE]
> 每个播放器所显示的图标（一个 <a href="https://pictogrammers.com/library/mdi/" target="_blank" rel="noopener noreferrer">Material Design Icon</a>）可以在播放器设置中更改。

## 播放器分组

有四种方式可以对播放器进行分组

1.   **[临时同步组（TEMPORARY SYNC GROUP）。](/faq/groups/#temporary-sync-group)** 如[播放器列表](#player-list)部分所示，可以通过播放器列表中的复选框来链接播放器。仅允许将支持同步播放的同类型播放器连接在一起。这些播放器随后将同步播放。需要注意的是，以这种方式分组时，只有主播放器拥有队列。
2.   **[同步组（SYNC GROUP）。](/faq/groups/#sync-groups)** 在设置的播放器列表中创建一个（永久的）组播放器；然后在该[播放器自身的设置页面](/settings/individual-player/)上设置其成员。除了同步播放之外，该组还会将队列保存在组播放器上，而不是其某个子播放器上。
3.   **[通用组（UNIVERSAL GROUP）。](/faq/groups/#universal-groups)** 这允许对不同类型的播放器提供商进行分组，但请仔细注意所链接页面上的潜在限制。
4.   **原生组（NATIVE GROUP）。** 使用某些播放器提供商类型所提供的原生功能来对播放器进行分组（例如 Google Cast）

> [!NOTE]
> 如果尝试开启一个组，而该组中的某个成员已经是另一个已开启组的成员，则会显示错误。

> [!NOTE]
> 如果某个播放器被其他应用接管，MA 将不会知晓此事，该组可能因此无法再正常工作。此外，如果同步组的某个播放器试图延迟加入（例如它之前未开机），它将无法与组同步。

## 播放按钮 ![image](/assets/icons/play-button.png)

播放按钮用作播放 UI 中各种项目的快捷方式。在非移动设备上，它会在悬停时显示；在移动设备上则始终可见。

点击/触摸播放按钮将执行该项目的默认播放操作，或显示播放菜单。为了确保用户不会意外地在错误的播放器上播放，播放菜单将在以下情况下显示：

- 首次进入 MA 视图时；或
- 播放器未处于播放状态（或已暂停）时

> [!NOTE]
> 如果不确定该项目是否会立即开始播放，请使用右键点击或长按来调出菜单。

## 多选 ![image](/assets/icons/multiselect.png)

选中多选（Multi Select）图标后，将出现全选（Select All）图标。

点击/触摸全选图标将选中视图中的所有项目（或视情况选中视图中的某个分区）。对于大型列表，会出现一个确认对话框，因为根据主机的资源情况，选中数千个项目可能会导致无响应。

CTRL-A 也会选中所有项目，除非搜索框显示在视图中，在这种情况下它将选中该搜索框中的所有文本。此外，CTRL-A 在具有多个分区的视图上无法使用（例如艺术家视图包含专辑和曲目），因此在这种情况下必须使用多选图标。

## 曲目菜单

在以下任一视图中，右键点击或长按曲目即可调出以下菜单

![image](/assets/screenshots/UI-track-menu.png)

**查看 ... 无尽混音**（View ... endless mix）选项只有在存在支持该功能的提供商时才会显示。其措辞会跟随您所选择的内容，因此会显示为曲目、专辑或艺术家。[它会根据该选择将曲目填充到队列中](/usage/#endless-mix)。这些曲目由提供商而非 MA 来挑选。

## 视图 - 发现

[![image](/assets/screenshots/homescreen.png)](/assets/screenshots/homescreen.png)

发现（Discover）视图提供对不同媒体类型和推荐的快速访问。推荐行独立加载，因此内容会随着可用而逐行出现。每个已启用的音乐提供商都可以提供自己的推荐行。

选择右上角的铅笔图标进入编辑模式。在那里，您可以显示或隐藏各行，并将它们拖动为您偏好的顺序。一些特殊或加载较慢的行默认被隐藏，以保持“发现”视图的响应速度；如果您想使用它们，可以在编辑模式中启用。选择 `Leave edit mode`（退出编辑模式）即可返回正常视图。

[![image](/assets/screenshots/homescreen_edit.png)](/assets/screenshots/homescreen_edit.png)

有关 Music Assistant 内置的可用推荐行的信息，请参阅[媒体库推荐插件（Library Recommendations Plugin）](/plugins/library-recommendations)。

## 视图 - 艺术家 / 专辑 / 曲目

[![image](/assets/screenshots/UI-artist-view.png)](/assets/screenshots/UI-artist-view.png)

专辑、曲目和播放列表视图与上面的类似，只是没有专辑艺术家筛选选项，并且曲目视图有一个 [通过 URL 添加（ADD VIA URL）](/music-providers/builtin/) 选项。播放列表视图具有 `Create new playlist on`（在……上创建新播放列表）选项以及 `Import playlist`（导入播放列表）选项，后者允许手动导入纯文本的 M3U 和 M3U8 播放列表文件。

任何图标上的蓝点（例如搜索图标 ![image](/assets/icons/search-icon.png) ）表示所查看的结果经过了筛选。

提供商筛选选项只有在安装了两个或更多支持当前所查看媒体类型的音乐源时才会显示。可以在筛选器中选择多个提供商。

所有视图中的项目都可以“右键点击”或“长按”来调出一个内容丰富的选项菜单，该菜单与右侧 ⋮ 菜单所打开的菜单相同。上图中显示了所有可能的选项的完整列表，这会根据当前视图略有不同。

可以通过点击[多选图标](#multi-select-)来多选专辑 / 艺术家 / 曲目。选中一个或多个项目后，点击底部的“操作”

![image](/assets/screenshots/UI-actions.png)

将调出此菜单

![image](/assets/screenshots/UI-actions-menu.png)

上述行为在任何能看到“已选择 x 个项目”文本的视图中都有效。

## 视图 - 单个艺术家

[![image](/assets/screenshots/UI-individual-artist.png)](/assets/screenshots/UI-individual-artist.png)

每个分区都可以折叠。曲目分区显示媒体库中的所有曲目。当有多个提供商可以提供该数据时，可以对热门曲目（Top tracks）分区按提供商进行筛选。

专辑分区还有一个额外的筛选选项。您可以选择按 ALBUM、SINGLE、COMPILATION、EP、LIVE、SOUNDTRACK 或 UNKNOWN 专辑类型或其任意组合进行筛选。

展开 IMAGES 分区（仅对具有管理员（Administrators）角色的用户可见）可以选择 Thumb、Fanart 或 Logo。目前 UI 中并未使用所显示的其他类型。如果没有显示图像或显示的图像有限，或者 IMAGES 分区缺失，请前往视图右上角的 ⋮ 菜单并选择 UPDATE METADATA（更新元数据）。右键点击某个图像可将其设为主要使用的图像。（专辑视图中的 Thumb 也有类似功能）

### 提供商详情

PROVIDER DETAILS（提供商详情）分区（对不具有管理员（Administrator）角色的用户为只读）显示在所有可用提供商中，哪些提供商与该艺术家建立了链接（专辑和曲目也有类似的分区）。如果艺术家有别名，或者存在拼写变体、标点符号使用差异等情况，这里出现多个条目是正常的。因此可能会有许多条目，显示提供商内部以及跨提供商的匹配链接。跨提供商以及提供商内部的交叉链接发生在项目被添加到 MA 媒体库之时，并且可以通过使用 <img src="/assets/icons/database-search.png" alt="icon" style="width: 20px;"  loading="lazy" />图标来触发。添加新的提供商不会触发对现有媒体库项目的链接。

当某个项目可从多个提供商获得时，Music Assistant 会在播放时选择音质最高的那一个。有关该选择是如何做出的，请参阅[流选择（Stream Selection）](/faq/tech-info/#stream-selection)。

当项目被添加到 MA 媒体库时，可能会创建 MA 媒体库内指向 MA 媒体库中其他相同项目（提供商内部或跨提供商）的链接。如果内部匹配逻辑得到满足，就会自动建立这些链接。

错误的映射可以通过 ⋮ 菜单中的删除选项移除。对于本地文件，如果源文件的[标签不够全面](/music-providers/local-files/#tagging-files)，则可能出现错误的链接。

流媒体提供商旁显示的 ID 可用于自动化（automation）和脚本，按右侧的 ⋮ 图标即可获取。在此菜单中（针对流媒体提供商），还有一个外部链接，可打开该项目在源提供商上的页面。

## 视图 - 单个曲目

[![image](/assets/screenshots/UI-track-show-info.png)](/assets/screenshots/UI-track-show-info.png)

> [!NOTE]
> 此视图中的 PROVIDER DETAILS 分区还具有在本地设备上播放该曲目一小段样本的功能。所标示的采样率和位深度均为提供商报告的数值；如果在音频数据到达 MA 之前进行了转码，播放时可能会有所不同。

## 视图 - 有声书
有声书视图显示您的媒体库中可用的有声书。
[![image](/assets/screenshots/audiobooks/audiobooks_view_annotated.png)](/assets/screenshots/audiobooks/audiobooks_view_annotated.png)

1. 有声书、作者和朗读者（narrator）的标签页。只有在您所配置的至少一个音乐源支持将作者和/或朗读者同步到 Music Assistant 媒体库时，才会显示这些标签页。否则，只有不带标签页的普通有声书视图。
2. 折叠合集：如果音乐源支持将合集（例如有声书系列）同步到 Music Assistant，使用“折叠合集”可将这些合集折叠为单个项目。
[![image](/assets/screenshots/audiobooks/audiobook_view_collections_collapsed.png)](/assets/screenshots/audiobooks/audiobook_view_collections_collapsed.png)

## 视图 - 有声书合集与作者/朗读者详情
合集子视图显示某个合集内的有声书。这些项目按音乐源给定的顺序排序。当您播放一个合集时，它总是会将第一个尚未完整播放的项目加入队列。
[![image](/assets/screenshots/audiobooks/collection_view.png)](/assets/screenshots/audiobooks/collection_view.png)

作者与朗读者子视图显示属于给定艺术家的有声书。对于媒体库项目，可以折叠合集。
[![image](/assets/screenshots/audiobooks/author_details_collapse_collections.png)](/assets/screenshots/audiobooks/author_details_collapse_collections.png)

## 视图 - 电台

电台视图显示 MA 媒体库中可用的流媒体电台。可以通过以下方式将电台添加到媒体库：

* 通过 URL 添加项目 - 通过在电台视图右上角的菜单中选择 `Add item from URL`（通过 URL 添加项目），可以将流媒体电台的 URL（例如自托管的 Icecast 电台）添加到媒体库。按提供商筛选时，这些电台将显示为由“Music Assistant”提供。

* 支持电台项目的音乐提供商，在将其添加到媒体库后，这些项目将显示在此处

## 视图 - 浏览

进入浏览（Browse）视图后，将显示已安装的、具备浏览功能的[音乐源（Music Sources）](/music-providers/)列表。选择其中之一，将显示该源中可浏览项目的相应列表。

在查看具有原生媒体库的源时，只能看到该媒体库中的内容。对于本地源以及其他没有原生媒体库的源，您将看到该源提供的所有可用项目。对于本地源，如果访问的文件夹尚未存在于 MA 媒体库中，即使它之前已被移除，也会被自动添加。

> [!CAUTION]
> 在源内浏览时请务必小心，因为在文件夹上选择 PLAY（播放）将播放该文件夹及所有子文件夹中的全部内容。尝试播放数千首曲目可能会占用主机上过多的系统资源，导致 MA 崩溃或无响应。
