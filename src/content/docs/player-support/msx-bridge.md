---
title: "MSX 桥接"
---

# MSX 桥接 <img src="/assets/icons/msx-bridge-icon.svg" alt="MSX Bridge icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持通过 <a href="https://msx.benzac.de" target="_blank" rel="noopener noreferrer">Media Station X（MSX）</a> 应用将音乐流式传输到智能电视。MSX 可用于 Samsung（Tizen）、LG（webOS）、Amazon Fire TV、Android TV、Apple TV、Xbox 以及任何现代网络浏览器。此提供程序（provider）由 [TrudenBoy](https://github.com/TrudenBoy) 贡献并维护。

> [!CAUTION]
> **测试版**
>
> 此提供程序目前处于测试版（beta）阶段。虽然功能可用，但部分功能可能会发生变化。

> [!NOTE]
> 完整的提供程序文档：**[github.com/trudenboy/ma-provider-msx-bridge](https://github.com/trudenboy/ma-provider-msx-bridge)**

## 功能

- **无需任何设置**：电视一经连接即作为播放器（player）出现
- **支持多台电视**：多台电视可同时播放，各自独立控制
- **在电视上浏览**：在屏幕上浏览专辑、艺术家、播放列表和曲目
- **搜索**：从电视上搜索整个 Music Assistant 媒体库
- **两端均可控制**：播放、暂停、停止和跳过既可以在 Music Assistant 中操作，也可以在电视上操作，且两者会实时同步对方的进度
- **播放器分组** *（实验性）*：多台电视可同时播放同一曲目
- **也可在浏览器中使用**：在任何电脑上打开 `http://<ma-ip>:8099/web`
- **自动清理**：一段时间未使用的电视会从播放器列表中移除，再次使用时会自动恢复
- **移除播放器**：可以在 MA 界面中手动移除播放器

## 要求

1. 一台安装了 <a href="https://msx.benzac.de" target="_blank" rel="noopener noreferrer">Media Station X</a> 应用的智能电视（或设备）
2. 电视和 Music Assistant 必须位于同一网络中

### 支持的平台

| 平台 | 应用商店 |
|----------|-----------|
| Samsung（Tizen） | Samsung App Store |
| LG（webOS） | LG Content Store |
| Amazon Fire TV | Amazon Appstore |
| Android TV | Google Play Store |
| Apple TV | App Store |
| Xbox | Microsoft Store |
| 网络浏览器 | 打开 `http://<ma-ip>:8099` |

## 配置

### 设置电视

1. 从相应平台的应用商店在您的智能电视上安装 **Media Station X** 应用
2. 在电视上打开 MSX 应用
3. 输入起始 URL：`http://<ma-ip>:8099/msx/start.json`（将 `<ma-ip>` 替换为您的 Music Assistant 服务器 IP）
4. 电视将连接并自动作为播放器出现在 Music Assistant 中

### 提供程序设置

在设置此提供程序时，除了[播放器提供程序设置](/settings/player-provider/)之外，还可以使用以下设置：

- <b>HTTP 服务器端口。</b>MSX HTTP 服务器使用的端口。默认值为 8099
- <b>音频输出格式。</b>流式传输到电视时使用的音频格式。可输入 mp3（默认）、aac 或 flac。FLAC 可提供无损音质，但部分电视无法播放
- <b>播放器空闲超时（分钟）。</b>MSX 播放器在此分钟数内没有任何活动后将被取消注册。默认值为 30
- <b>关闭播放器前显示通知。</b>当从 Music Assistant 停止播放时，会在电视上显示确认对话框。默认关闭
- <b>启用播放器分组（实验性）。</b>允许将多台 MSX 电视分组，以便它们一起播放同一曲目。默认关闭。如果在多电视环境中遇到问题，请重新禁用此选项
- <b>Sendspin 桥接（实验性）。</b>默认开启。将每台电视注册为 Sendspin 客户端，使其可以与任何其他 Music Assistant 播放器一起加入采样同步的播放组。当同步流开始时，电视会以 Sendspin 模式打开网页 kiosk。这需要电视浏览器能够运行 Sendspin 网页客户端；如果电视无法连接，将回退到常规的 HTTP 播放器
- <b>流传输模式。</b>音频如何到达电视。MA Streamserver（默认）将每台电视直接指向 Music Assistant 流服务器，这种方式占用的 CPU 最少，并应用每个播放器各自的编解码器和音频处理；如果无法计算出地址，则回退到 Independent 模式。Independent 模式为每台电视提供各自独立的流，占用更多 CPU，且无法保持同步。Shared Buffer 模式只准备一次音频，然后提供给每个组成员，这可以减轻服务器的负担，并让分组电视保持更好的同步。请注意，MA Streamserver 模式会让每台分组的电视各自获取自己的流，因此它们并不同步

MSX 播放器使用标准的[单个播放器设置](/settings/individual-player/)，其中包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。在电视上，其中两项设置值得了解：

- <b>[流式传输音频到播放器时使用的输出编解码器](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)。</b>按每台电视分别设置，此处默认为 MP3 而不是 FLAC
- <b>[启用队列流动模式](/settings/individual-player/#enable-queue-flow-mode)。</b>开启此选项会导致电视无法正确报告曲目播放进度，因此除非有理由更改，否则请保持关闭

## 工作原理

Music Assistant 会在 8099 端口上运行一个自己的小型 Web 服务器。电视上的 MSX 应用会连接到该服务器，电视上看到的浏览界面正是由它呈现的。当您播放内容时，电视会请求音频，Music Assistant 会在发送的同时将其转换为电视能够处理的格式。

该连接保持双向开放，因此在 Music Assistant 中按下的按钮会传达到电视，而电视也会让 Music Assistant 实时了解其曲目播放进度。

您可以在 `http://<ma-ip>:8099/` 查看所有这些信息。

## 已知问题 / 注意事项

- **音频格式**：MP3 在所有电视上都能使用，因此它是默认格式。在相同文件大小下，AAC 的音质略好。FLAC 是无损格式，但使用它时 Music Assistant 无法预先告知电视即将传输的音频量，而部分电视在没有该信息的情况下将无法播放
- **播放器分组**：这是实验性功能。`Shared Buffer` 可以让电视保持更好的同步，但组内每台电视都必须设置为相同的音频格式
- **网络**：电视和 Music Assistant 必须位于同一网络中。无法从家庭网络外部访问电视
- **空闲超时**：如果电视被关闭或 MSX 应用被关闭，它将在空闲超时后从播放器列表中消失，默认为 30 分钟。电视重新连接后，它会立即恢复
- 不支持交叉淡入淡出，因为电视自行播放，无法将一首曲目平滑过渡到下一首
