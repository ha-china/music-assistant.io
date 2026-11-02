---
title: "Home Assistant 集成"
---

# Home Assistant 集成 <img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Home Assistant 的 Music Assistant 集成（integration）提供了从 MA 到 HA 的连接。这意味着 MA 播放器在 HA 中可见，并且可以通过 HA 用户界面、自动化（automation）或脚本进行控制。

## 关于该集成

- 该集成是 Home Assistant 的官方组成部分，无需安装自定义组件

- 该集成可以连接到 MA 服务器，该服务器可以作为 Home Assistant 应用或作为 docker 容器运行在同一台或另一台主机系统上

另请参阅 <a href="https://www.home-assistant.io/integrations/music_assistant/" target="_blank" rel="noopener noreferrer">Home Assistant 关于 Music Assistant 集成的文档</a>

## 它能做什么

- 完全支持来自 HA 的文本转语音或音频文件形式的[公告](/integration/announcements/)。

- 通过一些额外的设置，还可以通过 HA 实现对 MA 的[语音控制](/integration/voice/)

## 各部分如何协同工作

Music Assistant 和 Home Assistant 可以双向连接，其中涉及三个独立的部分。你需要哪些部分取决于你想要的连接方向。

<a href="/assets/ha-connection-diagram.png"><img src="/assets/ha-connection-diagram.png" alt="The Home Assistant Integration, installed in Home Assistant, makes Music Assistant players appear in Home Assistant, and is all most people need. Installed in Music Assistant, the Home Assistant Plugin exposes Home Assistant control entities plus AI and text to speech. Home Assistant Media Players makes Home Assistant players appear in Music Assistant, and requires the plugin." style="width: 800px;" loading="lazy" /></a>

| 组件 | 安装位置 | 提供的功能 |
|:--|:--|:--|
| [Home Assistant 集成](/integration/installation/) | Home Assistant | 你的 **MA 播放器在 HA 中显示**，可用于 HA 用户界面、自动化、脚本、公告和语音 |
| [Home Assistant 插件](/ha-plugin/) | Music Assistant | 反向连接。它本身不添加播放器，但允许你通过 HA 实体（entity）控制**任何** MA 播放器的电源、音量或静音，并让 [AI Radio](/plugins/ai-radio/) 等插件能够访问 Home Assistant 的 AI 和文本转语音功能 |
| [Home Assistant 媒体播放器](/player-support/home-assistant/) | Music Assistant | 你的 **HA 媒体播放器在 MA 中显示**，作为可以播放音乐的目标位置 |

大多数人只需要第一行。安装该集成后，你的 Music Assistant 音箱就会出现在 Home Assistant 中——这就是全部工作。

如果你还想要反向连接，请添加第三行：让 Home Assistant 知道但 Music Assistant 没有对应提供程序的音箱，在 Music Assistant 内部可用。这需要用到该插件。该插件不需要该集成，因此第二行和第三行可以在没有第一行的情况下独立工作。

你可能只想单独使用插件，而不需要第三行。它允许你将 Home Assistant 实体映射到任何 Music Assistant 播放器的电源、音量或静音控制，这样，例如，处于待机状态的放大器可以在播放开始时被唤醒，并且这也是插件访问 Home Assistant 的 AI 和文本转语音服务（service）的方式。
