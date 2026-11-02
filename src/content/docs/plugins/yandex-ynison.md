---
title: "Yandex Music Connect (Ynison) 插件"
description: 让您的播放器出现在官方 Yandex Music 应用中。需要 Yandex Music 音乐源。
pluginGroup: incoming
---

# Yandex Music Connect (Ynison)

此插件可让您的 Music Assistant 播放器（player）显示在官方 [Yandex Music](https://music.yandex.ru) 应用中，出现在您平时挑选音箱的同一个列表里。在该应用中选中一个播放器，音乐就会在其上播放，工作方式与 Spotify Connect 类似。由 [TrudenBoy](https://github.com/TrudenBoy) 贡献并维护。

请先设置 [Yandex Music](/music-providers/yandex-music/) 音乐源（source）。此插件只负责播放器这一侧——音乐本身来自该音乐源，音质也是如此。

> [!CAUTION]
> 这是一个非官方实现，与 Yandex 无关，也未获得 Yandex 的认可。

> [!NOTE]
> 无损（FLAC）音质需要 Yandex Music Plus 订阅。
> 没有订阅时，播放会回退到该账户可用的最高音质。

> [!NOTE]
> 完整插件文档（俄语/英语）：**[trudenboy.github.io/ma-provider-yandex-ynison](https://trudenboy.github.io/ma-provider-yandex-ynison/)**


## 功能特性

|           |                     |
|:-----------------------|:---------------------:|
| 将 MA 播放器暴露给 Yandex Music 应用 | 是 |
| 最高流媒体音质 | 无损 FLAC（在 Yandex Music 音乐源上设置） |
| 播放控制 | 播放 / 暂停 / 跳转进度 / 下一曲 / 上一曲 |
| 电台 / My Wave 队列 | 是 |
| 多实例 | 是 |
| 登录方式 | 二维码（推荐）或手动输入令牌 |

### Yandex Music 应用支持的操作

| Yandex Music 应用中的操作 | 结果 |
|---|---|
| 从播放目标列表中选择 MA 设备 | 播放切换到已配置的 MA 播放器 |
| 播放 / 暂停 / 停止 | 转发给 MA 播放器 |
| 在当前曲目内跳转进度 | 转发给 MA 播放器 |
| 下一曲 / 上一曲 / 跳过 | 推进 Yandex 队列，MA 播放新曲目 |
| 启动电台 / My Wave | MA 播放电台流，并在队列耗尽时自行补充 |

## 配置

> [!NOTE]
> 请在添加此插件**之前**先配置 [Yandex Music](/music-providers/yandex-music/) 音乐源——插件可以自动借用其凭据，这是推荐的设置方式。

### 设置步骤

1. 在 Music Assistant 中，从提供方列表中添加 **Yandex Music Connect (Ynison)** 插件。
2. 对于 **Yandex Music 音乐源**，您可以：
   - 选择现有的 **Yandex Music** 音乐源，让插件使用您已有的登录信息（推荐，且它会自行保持登录状态），或
   - 选择 **使用自己的令牌（手动输入）**，并粘贴从 [Yandex](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d) 获取的令牌。
3. 选择当在 Yandex Music 应用中选中此设备时应播放音乐的 **已连接的 Music Assistant 播放器**。
4. 保存。现在，当您去挑选音箱时，该播放器会以其自身的名称显示在 Yandex Music 应用中。

您可以多次添加此插件，想要显示在应用中的每个播放器各添加一份。

### 设置

- **Yandex Music 音乐源** — 使用现有 Yandex Music 音乐源的登录信息，或者改为粘贴您自己的令牌。
- **Yandex Music 令牌** — 仅在您选择粘贴自己的令牌时才会出现。在此输入的令牌会过期，必须手动更换。
- **已连接的 Music Assistant 播放器** — 音乐将从该播放器输出。它的名称也就是该设备在 Yandex Music 应用中的名称；重命名播放器即会重命名设备。
- **允许手动切换播放器** — 开启后，在任何 Music Assistant 播放器上将此插件选为播放源时，播放就会转移到该播放器。关闭时，播放保持在上方设置的播放器上。
- **输出采样率**（高级）— `Auto` 对压缩音乐使用 44.1 kHz，对无损音乐使用 48 kHz，适合绝大多数人。选项：`Auto`、`44100`、`48000`、`96000`。
- **输出位深**（高级）— `Auto` 对压缩音乐使用 16 位，对无损音乐使用 24 位。选项：`Auto`、`16`、`24`。

## 已知问题 / 说明

- 必须先设置好 [Yandex Music](/music-providers/yandex-music/) 音乐源。此插件自身无法播放任何内容。
- 您自己粘贴的令牌会过期。使用 Yandex Music 音乐源的登录信息可以避免此问题。
- 音质在 Yandex Music 音乐源上设置，位于其 **音频质量（Audio quality）** 设置项中。
- 由 Yandex Music 应用决定接下来播放什么，而不是 Music Assistant，因此队列保存在 Yandex 一侧。My Wave 和电台是例外，此时由该插件自行补充队列。
- 与 Yandex 的连接是长连接，会不时断开并自行重新建立。这是正常现象，系统会自动为您处理。
- 语音播报（announcements）会中断播放。之后播放会在支持此功能的播放器上恢复。
- 每个插件副本使用一个 Yandex 账户。可以为更多播放器添加更多副本，但每个副本仍然只使用单个账户。
