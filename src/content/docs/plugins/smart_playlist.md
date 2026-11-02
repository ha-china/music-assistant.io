---
title: 智能播放列表
description: 基于媒体库中的规则创建动态播放列表，或通过种子曲目、艺人、专辑或播放列表发现的相似音乐来创建动态播放列表。
pluginGroup: discover
---

# 智能播放列表

智能播放列表（Smart Playlists）插件让您可以从 Music Assistant 媒体库中创建基于规则的播放列表。

智能播放列表是**动态的**：每当您播放该播放列表时，都会根据您保存的规则以及当前媒体库/提供方（provider）的状态重新评估曲目。

:::caution[实验性]
该插件目前被标记为**实验性**。在正式发布之前，其行为可能会发生变化。
:::

## 安装

通过**设置 → 插件 → 添加插件**启用**智能播放列表**插件。无需额外配置。

![Smart Playlists plugin entry](/assets/screenshots/smart_playlist/add_plugin.png)

## 创建智能播放列表

在播放列表视图中，选择右上角的 <img src="/assets/screenshots/smart_playlist/create_button.png" alt="Create Smart Playlist button" style="height: 1.4em; vertical-align: middle;" loading="lazy" /> 按钮，然后选择**创建智能播放列表**。

![Create Smart Playlist menu](/assets/screenshots/smart_playlist/menu_entry.png)

![Create Smart Playlist dialog (Discover mode)](/assets/screenshots/smart_playlist/create_smart_playlist_discover.png)

上面的截图展示了一个**发现模式**（Discover mode）的设置。

![Create Smart Playlist dialog (From my library / rule-based mode)](/assets/screenshots/smart_playlist/create_smart_playlist_rulebased.png)

上面的截图展示了**从我的媒体库**（From my library）模式（基于规则的设置）。

输入名称并选择来源模式：

- **从我的媒体库**：基于您 MA 媒体库中已有的曲目构建。
- **发现模式**：使用一个或多个种子项目（曲目、艺人、专辑或播放列表），并从支持的流媒体提供方获取相似内容。

## 规则模型

智能播放列表使用包含/排除（include/exclude）风格的规则：

- **流派**：是 / 不是（一个或多个流派）
- **艺人**：是 / 不是（媒体库模式，一个或多个艺人）
- **专辑**：是 / 不是（媒体库模式，一个或多个专辑）
- **专辑类型**：是 / 不是（按专辑类型筛选：专辑、单曲、EP、合辑等）
- **限制级内容**：按限制级内容标记筛选曲目（三个选项：允许、仅限制级内容、不允许；取决于提供方）
- **收藏**：是（媒体库模式）
- **年份**：介于 from/to 之间（可以只使用 `from` 或只使用 `to`）
- **时长**：以 MM:SS 格式设置 from/to 之间的范围（按时长筛选曲目）
- **上次播放**：按曲目最近一次播放的时间进行筛选（例如 "1 days ago"、"2 weeks ago"）

专辑类型示例：

- **专辑类型为 "Album"**：仅完整专辑（排除单曲、EP 和合辑）
- **专辑类型不为 "Single"**：排除所有单曲发行
- **专辑类型为 "Album" 或 "EP"**：包含完整专辑和 EP（排除单曲和合辑）
- **专辑类型为 "Live"**：仅现场录音/演唱会

可用的专辑类型：**Album**（专辑）、**Single**（单曲）、**EP**、**Compilation**（合辑）、**Live**（现场）、**Soundtrack**（原声带）、**Audiobook**（有声书）、**Podcast**（播客）、**Unknown album type**（未知专辑类型）（没有具体类型分类、或音乐提供方未提供类型信息的专辑）。

限制级内容筛选选项：

- **允许**：同时包含限制级和非限制级曲目（不进行筛选）
- **仅限制级内容**：仅包含被标记为限制级内容的曲目
- **不允许**：排除所有被标记为限制级内容的曲目

**注意：** 限制级内容筛选取决于您的音乐提供方是否在其元数据中提供限制级标记。并非所有音乐提供方都包含此信息，且可用性因提供方和地区而异。如果您的提供方未提供限制级标记，此筛选器将不会生效。

年份示例：

- `from: 1969` 表示 1969 年或更新。
- `to: 1980` 表示 1980 年或更早。

时长示例：

- `from: 0:30` 表示 30 秒或更长（排除间奏等非常短的曲目）。
- `to: 5:00` 表示 5 分钟或更短。
- `between: 3:00 and 6:00` 表示介于 3 到 6 分钟之间的曲目。

上次播放示例：

- `1 days ago` 表示最近一天内播放过的曲目。
- `7 days ago` 表示最近一周内播放过的曲目。
- 使用此选项可创建“最近播放”播放列表，或排除最近播放过的曲目。

在**从我的媒体库**模式中，您可以选择曲目必须匹配**所有**规则还是**任意一条**规则。

在**发现模式**中，会在获取相似内容之后对提供方的结果应用筛选器。

![Rule examples in From my library mode](/assets/screenshots/smart_playlist/rules_example.png)

## 发现模式

发现模式基于种子项目，从您的流媒体提供方获取相似内容。

:::note[尽力而为的服务]
发现模式依赖外部音乐提供方的 API 来获取内容推荐。结果取决于：
- 提供方的可用性和 API 限制
- 提供方对种子曲目/艺人/专辑的识别情况
- 提供方特定的推荐算法

结果的质量和可用性可能因提供方和时间而异。
:::

使用**发现模式**时：

- 从曲目、艺人、专辑或播放列表中添加一个或多个种子。
- 种子查找取决于提供方对所选种子类型的支持情况。
- 结果从提供方的输出中抽样，并在每次播放时刷新。

## 曲目数量和时长提示

在您编辑规则时，对话框会显示实时估算：

- **从我的媒体库模式**：实时显示匹配的曲目数量 + 时长估算，并随规则的变化而更新。
- **发现模式**：不进行实时的匹配数量计算；界面仅显示提示，说明最多会从您的流媒体提供方获取 50 首曲目。

下面的截图展示了**从我的媒体库**模式（基于规则的智能播放列表）。

![Track count indicator (From my library mode)](/assets/screenshots/smart_playlist/track_count.png)

下面的截图展示了**发现模式**的曲目数量提示。

![Track count indicator (Discover mode)](/assets/screenshots/smart_playlist/track_count_discover.png)

## 播放列表详情

保存后，打开该智能播放列表即可查看基于您的规则生成的当前示例输出。

![Smart Playlist detail view](/assets/screenshots/smart_playlist/playlist_detail.png)

## AI 描述

智能播放列表提供方设置中有一个 **AI 描述**（AI descriptions）选项。开启该选项后，Music Assistant 会根据您给出的规则为每个智能播放列表撰写一段简短描述，这样播放列表就能说明其包含的内容，而无需您亲自编写。

这需要一个 **AI 引擎**（AI engine），它来自另一个插件。开启 **AI 描述**后，其正下方会显示一个 **AI 引擎**选择器，您可以随时更改。请参阅 [AI 和文本转语音引擎](/ha-plugin/#ai-and-text-to-speech-engines)。

## 注意事项

- 智能播放列表仅在安装了智能播放列表插件时才存在。移除该插件也会将相关联的智能播放列表从 MA 媒体库中移除。
