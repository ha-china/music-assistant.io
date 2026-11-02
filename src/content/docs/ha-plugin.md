---
title: Home Assistant 插件提供者
description: 深入 Home Assistant 以将实体链接到播放器控制，并在 Music Assistant 中使用其 AI 和文本转语音服务。
pluginGroup: other-systems
---
# Home Assistant 插件提供者 <img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Home Assistant 插件提供了从 HA 到 MA 的连接。它是 Music Assistant 用于深入 Home Assistant 的桥梁。

它本身不添加任何播放器。要向 Home Assistant 媒体播放器播放，您还需要 [Home Assistant 媒体播放器](/player-support/home-assistant/) 提供者，该提供者构建在此插件之上。不过，该插件本身仍然值得安装，因为它提供了下文所述的实体链接播放器控制以及 AI 和文本转语音功能。

如果您不确定它与 Home Assistant 集成（integration）如何配合，请参阅[各部分如何协同工作](/integration/#how-the-pieces-fit-together)。

## 功能

- 允许将 HA 实体（entity）链接到 MA 中任何可用播放器的电源、静音或音量控制。如果播放器本身不支持该功能或在高级用例中，这会非常有用
- 使您已经在 Home Assistant 中拥有的 AI 和文本转语音实体可供需要它们的 Music Assistant 功能使用
- 是 [Home Assistant 媒体播放器](/player-support/home-assistant/) 提供者的先决条件，正是它允许 HA 媒体播放器成为 MA 用户界面中的播放器
 
## 配置

该插件直接连接到 Home Assistant 自身的 API，无需安装 [Home Assistant 集成](/integration/installation/)。两者是独立的：集成将 MA 播放器放入 HA，而插件让 MA 深入 HA。

- 导航到 **设置 → 插件** 并添加该插件
- 如果使用 Music Assistant 应用（即 HAOS），您不需要任何服务器详细信息，它应该会自动连接到本地 HA 实例
- 如果使用 MA 服务器的 docker 版本，则需要输入 HA 实例的 URL 并进行身份验证

添加后，此处的唯一设置是[将 Home Assistant 实体链接到播放器控制](#linking-home-assistant-entities-to-player-controls)下描述的三个播放器控制列表。

## AI 和文本转语音引擎

一些 Music Assistant 功能需要使用 AI 编写文本，或者将其大声朗读出来。[AI 电台](/plugins/ai-radio/) 两者都需要。[音乐问答](/plugins/music-quiz/) 和 [智能播放列表](/plugins/smart_playlist/) 仅需要 AI。

该插件本身不执行这两项任务。它提供 Home Assistant 已经能做的事情：每个 AI 任务实体都成为一个 **AI 引擎**，每个文本转语音实体都成为一个 **文本转语音引擎**。此处不进行任何选择。每个功能从其自身的设置中选择所需的内容。

其他插件也提供引擎。[OpenAI 兼容插件](/plugins/openai_compatible/) 和 [OpenAI 文本转语音](/plugins/openai_tts/) 插件提供完全不涉及 Home Assistant 的 AI 引擎。

### 您在 Home Assistant 中需要什么

- 对于 **AI 引擎**，需要一个 <a href="https://www.home-assistant.io/integrations/ai_task/" target="_blank" rel="noopener noreferrer">AI 任务</a> 实体。这些来自您添加的 AI 集成，例如 <a href="https://www.home-assistant.io/integrations/openai_conversation/" target="_blank" rel="noopener noreferrer">OpenAI Conversation</a>。并非所有 AI 集成都提供此功能，因此请检查您首选的集成页面
- 对于 **文本转语音引擎**，需要一个 <a href="https://www.home-assistant.io/integrations/tts/" target="_blank" rel="noopener noreferrer">文本转语音</a> 实体。Home Assistant 列出了提供这些功能的集成。请先在那里测试您的集成，并确保它能朗读一条简短的消息

引擎仅决定调用哪个 Home Assistant 实体。模型、声音、语言、语速和音频质量均在 Home Assistant 中设置。

### 为功能选择引擎

每个功能都有其自己的下拉菜单，标记为 **AI 引擎** 或 **文本转语音引擎**。选项以插件命名，然后是实体，因此可以区分两个相似的引擎：

```text
Home Assistant | Google Translate (tts.google_translate_en_com)
```

| 功能 | 所需内容 | 更改位置 |
|---|---|---|
| [AI 电台](/plugins/ai-radio/) | AI **和** 文本转语音 | 在提供者的菜单上进行 **重新配置**，而不是其常规设置。请参阅[稍后更改引擎](/plugins/ai-radio/#changing-the-ai-or-text-to-speech-engine-later) |
| [音乐问答](/plugins/music-quiz/) | AI | 提供者设置，在 **功能** 下 |
| [智能播放列表](/plugins/smart_playlist/) | AI | 提供者设置，开启 **AI 描述** 后 |

> [!TIP]
> 如果每种类型只有一个引擎，则无需进行任何操作。功能会获取唯一可用的引擎并记住它。当您有多个引擎时，选择器才起作用。

如果某个功能需要您没有的引擎，其下拉菜单将变灰，并显示一条消息，提示您设置提供该引擎的插件。在引擎存在之前，某些功能根本无法完成设置。

如果您稍后选择的引擎消失，例如因为该实体在 Home Assistant 中被移除或重命名，Music Assistant 会将其报告为缺失，而不是悄悄切换到另一个引擎。

## 将 Home Assistant 实体链接到播放器控制

Home Assistant 插件可以将 HA 实体暴露给 MA，然后可以将其映射到 MA 播放器的电源、音量或静音功能。这适用于 Music Assistant 中的任何播放器，而不仅仅是 Home Assistant 播放器，因此在播放器本身不支持该功能的情况下非常有用。电源实体可能会在播放开始时将放大器从待机状态唤醒，或者打开播放器馈入的有源扬声器；音量或静音实体可能会驱动播放器无法直接控制的放大器。有三个下拉列表，其中包含经过筛选的 HA 实体列表：

- 对于电源控制，将显示可以打开/关闭并具有布尔状态的实体。（即 switch、input_boolean 和 media_player）

- 对于静音控制，将显示可以打开/关闭并具有布尔状态的实体。（即 switch、input_boolean 以及 media_player（将映射静音状态））

- 对于音量控制，将显示可以具有数值/状态的实体。（即 number、input_number 和 media_player（将映射 volume_level））

选择实体后，它将作为选项出现在单个播放器的[播放器控制](/settings/individual-player/#player-controls)设置中。

> [!NOTE]
> 对于电源控制，这不能用于打开和关闭播放器本身。如果播放器被切断主电源，它会从网络断开，Music Assistant 会将其标记为不可用，并且电源控制以及所有其他功能都会被禁用。请切换播放器馈入的设备，而不是播放器本身。

## 已知问题 / 注意事项

如果 MA 服务器作为 Home Assistant 应用运行，此插件将自动安装（且无法禁用）。
