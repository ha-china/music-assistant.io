---
title: "语音控制"
---

# 语音控制 <img src="/assets/icons/voice-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

语音控制是指直接通过语音让 Home Assistant Assist 播放内容，而不是在 Music Assistant 应用中手动选择。你可以说“在厨房播放 Rumours”，Assist 会理解你的意图，然后音乐就会在 Music Assistant 播放器上开始播放。

通过语音启动播放功能现已内置于 Home Assistant 中。该功能在 HA 2025.6 中作为“搜索并播放”意图推出，专为 Music Assistant 设计，无需蓝图（blueprint）、无需自定义语句，也无需大语言模型（LLM）。Music Assistant 播放器开箱即用，完美支持此功能。

下文介绍的社区蓝图仍然值得拥有，但它们不再是起点。当你需要实现内置语句无法表达的功能时，再考虑使用它们。

> [!NOTE]
> 通过 Assist 添加项目时的队列行为将遵循 [**设置 → 系统 → 播放器队列**](/settings/core/#player-queues) 中的设置。

## 你需要准备什么

- **Home Assistant 2025.6 或更高版本。** 较新的版本能理解更多的语句。
- **Music Assistant 集成（integration）**，它是 Home Assistant 的一部分。请参阅[集成页面](/integration/)。
- **将你的 Music Assistant 播放器暴露给 Assist**，路径为 HA 设置 >> 语音助手 >> 暴露。Assist 仅针对你向其暴露的实体（entity），因此未暴露的播放器无法被要求播放任何内容。

## 通过语音启动播放

你可以说类似“播放 Rumours”的话，或者指定播放位置——“在厨房播放 Rumours”、“在厨房音箱上播放 Rumours”。你可以通过指定项目类型来缩小搜索范围，例如“播放专辑 Rumours”，这很值得做，因为它能避免在你想要专辑时却播放了单曲。

如果你没有指定播放器或区域（area），Home Assistant 会在你对其说话的设备所在区域的播放器上播放。因此，厨房里的语音卫星无需额外指令就会在厨房播放。

这里有两点是 Music Assistant 特有的。首先，搜索范围涵盖你的 Music Assistant 媒体库**以及**你连接的所有流媒体提供商，因此你不受限于已添加的内容。其次，播放会从第一个结果开始：Assist 不会朗读列表并询问你的意图，而是直接选择最佳匹配，因此更具体的请求能为你带来更精准的匹配。

Home Assistant 还能处理其余的播放控制——下一首和上一首、暂停和恢复、音量以及静音。有关 Assist 当前支持的语句列表以及你所使用语言的确切表达方式，请参阅 Home Assistant 关于 <a href="https://www.home-assistant.io/voice_control/builtin_sentences/" target="_blank" rel="noopener noreferrer">Assist 能做什么</a> 的文档。该列表是权威的，并且会随着每个版本的发布而增加，因此我们在此不再重复。

## 使用蓝图进一步扩展

内置语句能很好地覆盖常见请求，但它们被刻意设计得很简单。它们无法表达“播放 **Fleetwood Mac** 的专辑 Rumours”，无法在请求中开启随机播放，也没有无尽混音功能。

为此，社区在 <a href="https://github.com/music-assistant/voice-support" target="_blank" rel="noopener noreferrer">MA Voice Support 仓库</a> 中维护了一组蓝图。它们基于 `music_assistant.play_media` 动作构建，让你对请求有更多的控制权。共有三个选项：一个使用自定义语句的完全本地化方案，一个添加 LLM 以解释更宽松措辞的方案，以及一个将播放作为工具暴露给你的 LLM 对话代理调用的方案。该仓库包含设置步骤、每个选项接受的语句以及多种语言的翻译。

如果你是第一次接触蓝图，请先阅读 Home Assistant 关于<a href="https://www.home-assistant.io/docs/automation/using_blueprints/" target="_blank" rel="noopener noreferrer">使用自动化蓝图</a>的文档。

> [!NOTE]
> 该仓库自身的 README 仍描述 Home Assistant 无法通过语音启动播放。这是在 HA 2025.6 之前编写的，现已过时。蓝图本身的功能仍如文档所述正常工作。

## 自定义语句

Home Assistant 不打算在上述功能之外添加更多媒体播放器动作，因此其他任何功能——随机播放、重复播放、清空队列、停止播放器、播放器分组——都需要你自己编写语句，并将其连接到 Music Assistant 动作。请参阅此<a href="https://github.com/orgs/music-assistant/discussions/2176" target="_blank" rel="noopener noreferrer">讨论了解具体方法</a>。
