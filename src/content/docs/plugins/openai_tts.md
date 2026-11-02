---
title: OpenAI 文本转语音
description: 使用 OpenAI 语音 API 或自托管服务器（例如 Kokoro-FastAPI、LocalAI 或 Speaches）将文本转换为语音，用于播报和 AI Radio。
pluginGroup: other-systems
---

# OpenAI 文本转语音

Music Assistant 的某些功能需要发声：以文本消息而非音频链接形式发送的**播报（announcements）**，以及 **AI Radio** 中的主持人。两者都需要一个文本转语音（TTS）引擎来将文本转换为音频。

这些功能过去需要 Home Assistant，因为那里的 TTS 实体（entity）是唯一能为它们发声的东西。此插件让 Music Assistant 能够直接与语音服务通信，因此即使没有 Home Assistant，这些功能也能正常工作。

插件发现的每个音色（voice）都会成为一个 **TTS 引擎**，与 [Home Assistant 插件](/ha-plugin/) 提供的引擎一起提供给这些功能。然后，每个功能会在自己的设置中选择想要的引擎。

它适用于 OpenAI 语音 API 以及任何实现相同端点（endpoint）的服务：

- **OpenAI** 云端 API
- 您自行运行的语音服务器，例如 **Kokoro-FastAPI**、**LocalAI** 和 **Speaches**

:::caution[Alpha]
此插件目前被标记为 **alpha**。它可以正常工作，但尚未针对所有服务进行测试，其设置也仍可能更改。
:::

## 功能

- 一个插件即可支持 OpenAI 语音 API 以及所有实现相同端点的服务器，无论是托管服务还是自托管
- 每个音色都会在需要发声的功能中成为一个独立选项，因此播报和 AI Radio 可以各自使用不同的音色
- 在会发布音色列表的服务器上，音色会被自动发现
- 渲染好的语音会被缓存，因此重复的播报可以立即播放，无需再次渲染
- 支持多个实例，因此本地服务器和托管服务可以同时使用

## 安装

在 **设置 → 插件 → 添加插件** 中添加插件，然后选择 **OpenAI 文本转语音**。

### 连接详情

- **API 端点** — 语音 API 的地址，包含版本路径。对于 OpenAI 云端 API，使用 `https://api.openai.com/v1`；对于您自己的服务器，则使用其地址，例如 Kokoro-FastAPI 使用 `http://localhost:8880/v1`。如果服务器并非运行在通常的位置，请修改此项，例如当它运行在与 Music Assistant 不同的机器上时，或者当 Music Assistant 运行在容器中而无法访问 `localhost` 时。
- **API 密钥** — 来自您所使用服务的密钥。OpenAI 云端 API 必须填写；对于不要求密钥的本地服务器，可将其留空。
- **模型** — 要使用的语音模型，例如 OpenAI 云端 API 上的 `tts-1` 或质量更高的 `gpt-4o-mini-tts`。自托管服务器则使用自己的模型名称。

Music Assistant 在完成之前会渲染一句简短的测试语句，因此错误的地址、密钥或模型会在这里被发现，而不会等到第一次播报时。

### 音色

插件会自行发现音色：

- 如果您的服务器会发布自己的音色列表（Kokoro-FastAPI 就是这样），则会提供这些音色。
- 否则，将提供标准的 OpenAI 音色：`alloy`、`echo`、`fable`、`nova`、`onyx` 和 `shimmer`。

如果您的服务器还有通过上述方式发现不了的音色，请在**设置 → 插件**下打开该插件，然后在**音色**中手动输入，每个值填写一个音色。这会替换原本会提供的音色。

每个音色都会成为独立的 TTS 引擎，在任何可选择 TTS 引擎的地方都会以 `OpenAI Text-to-speech | <voice>` 的形式列出。

## 选择音色

- **播报**使用在 [**设置 → 系统 → 播放器**](/settings/core/#players) 中**播报文本转语音引擎**下所设置的引擎。
- **AI Radio** 通过提供者菜单中的**重新配置**来选择引擎，而不是在其常规设置中选择。请参阅[稍后更改引擎](/plugins/ai-radio/#changing-the-ai-or-text-to-speech-engine-later)。音色是否自然在这里最为明显，因此值得多试几个。

关于引擎在整个 Music Assistant 中是如何选择的，请参阅[为功能选择引擎](/ha-plugin/#choosing-an-engine-for-a-feature)。

## 已知问题 / 注意事项

- **语言。** 语音 API 没有语言设置。服务器会根据文本本身推断语言，因此请选择适合您播报所用语言的音色。
- **费用。** OpenAI 云端 API 按渲染的字符数计费。重复的文本会在 24 小时内直接由缓存提供，而不会再次渲染，但 AI Radio 为其播报的每个片段撰写的都是新文本，因此请留意您的用量。
- **速度。** 在没有显卡的情况下运行的自托管服务器渲染较长文本可能需要一些时间。请求会在两分钟后被放弃。
