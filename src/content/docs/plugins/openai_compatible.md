---
title: OpenAI Compatible
description: 使用 OpenAI、Groq、OpenRouter、Together 或本地 AI 服务器（例如 Ollama 或 LM Studio）来支持 Music Assistant 的 AI 功能。
pluginGroup: other-systems
---

# OpenAI Compatible

Music Assistant 的部分功能由 AI 模型驱动：**AI Radio**、**Trivia** 测验类型、**Music Quiz** 中的 AI 答案建议，以及 **Smart Playlists** 的 AI 生成描述。

这些功能过去需要 Home Assistant，因为那里的 AI 任务实体（entity）是唯一能够回答它们的组件。这个插件让 Music Assistant 可以直接与 AI 服务通信，因此这些功能在没有 Home Assistant 的情况下也能使用。

你在这里选择的每个模型都会成为一个 **AI 引擎**（AI engine），与 [Home Assistant 插件](/ha-plugin/)提供的引擎一起提供给这些功能。随后，每个功能会在自己的设置中选择它想要的引擎。参见[为功能选择引擎](/ha-plugin/#choosing-an-engine-for-a-feature)。

它适用于任何兼容 OpenAI API 的服务，而这几乎涵盖了所有服务：

- 托管服务，例如 **OpenAI**、**Groq**、**OpenRouter** 和 **Together AI**
- 你自己运行的 AI 服务器，例如 **Ollama**、**LM Studio**、**llama.cpp** 和 **vLLM**

:::caution[Beta]
该插件目前被标记为 **beta**。它可以正常工作，但尚未针对所有服务进行测试。
:::

## 功能特性

- 一个插件即可适用于所有兼容 OpenAI API 的服务，无论是托管还是自托管
- 你选择的每个模型在 AI 功能中都会成为一个独立的选项，因此小而便宜的模型可以处理简单的任务，而更强的模型则用于重要的地方
- 支持多个实例，因此本地服务器和托管服务可以搭配使用

## 安装

在**设置 → 插件 → 添加插件**中添加该插件，并选择 **OpenAI Compatible**。

### 选择服务

从列表中选择你的服务，其地址会自动为你填写。如果你的服务不在列表中，请选择 **Something else**（其他）。

### 连接详情

- **API base URL**（API 基础 URL）——服务的地址，包括版本路径，例如 `https://api.openai.com/v1`。如果服务没有运行在通常的位置，则需要修改此项，例如 Ollama 运行在与 Music Assistant 不同的机器上，或者 Music Assistant 运行在容器中而无法访问 `localhost`。
- **API key**（API 密钥）——来自你的服务的密钥。对于不要求密钥的本地服务器，可将其留空。

Music Assistant 会在完成之前检查地址和密钥，因此拼写错误会在这里被发现，而不是以后。

### 选择你的模型

在你选择模型之前，该插件不会提供任何模型。在**设置 → 插件**下打开该插件，并在 **Models**（模型）下选择你想要的模型。

该列表从你的服务中读取。如果你的服务不发布其模型列表，则该字段允许你自行输入模型名称。

你选择的每个模型都会成为它自己的 AI 引擎，在所有可以选择 AI 引擎的地方显示为 `OpenAI Compatible | <model>`。

## 选择模型

不同的 AI 功能有不同的要求，因此选择多个模型是值得的：

- **Trivia** 和 **AI 答案建议**要求严格的 JSON 格式回答。这里应使用能力较强的模型——小型本地模型的回答措辞往往让 Music Assistant 无法读取，这样问题或建议就会被丢弃。
- **AI Radio** 撰写口播主持人的文本。任何能用你的语言流畅写作的模型都可以胜任，而在这里使用更大的模型效果最为明显。
- **Smart Playlist 描述**只有一两句话。使用最便宜、最快的模型即可。

## 已知问题 / 注意事项

- **费用。** 托管服务按请求收费。尤其是 AI Radio，它播报的每个片段都需要请求文本，因此请留意你的使用量。
- **速度。** 没有显卡的情况下运行的本地模型可能需要很长时间才能回答。请求会在两分钟后被放弃。
- **推理模型。** 支持在回答之前先进行思考的模型，且思考内容会从答案中去除。它们速度较慢，并且对于需要严格 JSON 的功能来说，并不总是更可靠。
- **提供哪些模型。** 列表直接来自你的服务，可能很长，其中可能包含根本无法回答聊天请求的模型，例如图像或语音模型。请只选择你打算使用的模型。
