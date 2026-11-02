---
title: Spotify Connect 插件
description: 将你的播放器放入官方 Spotify 应用的设备列表中，就像一台 Spotify Connect 音箱。
pluginGroup: incoming
---

# Spotify Connect <img src="/assets/icons/spotify-connect-icon.png" alt="Preview image" style="float: right;"  loading="lazy" />

<a href="https://connect.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify Connect</a> 让你可以在官方 Spotify 应用中按下播放，让声音从你的 Music Assistant 播放器中传出。借助此插件，任何 MA 播放器（或播放器组）都会出现在 Spotify 应用的设备列表中，就像一台官方的 Spotify Connect 音箱。

## 播放引擎

该插件可以在两种不同的播放引擎上运行。你在添加插件时选择其中一种，之后可以通过重新运行设置来切换。

**Spotify Soloist（官方，推荐）** —— Spotify 自有的面向无屏幕设备的播放引擎。初次设置需要 Spotify **Premium** 账户，以便在 Spotify 开发者网站上创建个人 API 密钥（设置过程会引导你完成此操作）。之后连接的任何人都可以使用 **Free**（含 Spotify 广告）或 Premium 账户。受支持的 Premium 账户可能可接收高达 24-bit/44.1 kHz 的无损音频。

> [!NOTE]
> Music Assistant 可能不会将 Soloist 作为其自身安装的一部分进行分发，因此它会在征得你在设置中的同意后，代你从 Spotify 的服务器下载并自动更新。Spotify 的条款并未明确允许以这种方式使用 Soloist —— 通过 Music Assistant 使用它需自担风险。

**go-librespot（社区）** —— 一个由社区构建的逆向工程引擎。无需 API 密钥或下载，但它仅适用于 2024 年 12 月之前创建的 Spotify Premium 账户，并且一旦 Spotify 在其端上进行更改，它就可能随时停止工作。

## 功能特性

- 任何 MA 播放器都可以作为 Spotify Connect 设备对外发布，包括播放器组
- 每个已连接的播放器都会在 Spotify 应用中显示为各自的设备，并以该播放器命名
- 也可以从 Music Assistant 本身开始播放（通过播放器的音源菜单，或浏览到 `Live Inputs`），这会在该设备上恢复你上次的 Spotify 会话
- 在 Music Assistant 中停止播放会释放 Spotify 应用中的设备；在 Spotify 应用中将播放转移到其他设备会停止 MA 播放器
- 交叉淡入淡出（crossfade）和响度归一化（loudness normalization）可在插件设置中配置
- 使用 Soloist 引擎时，你可以选择音量的行为方式：`Player volume only`（默认，音频始终原样送达）或将 Spotify 应用的音量滑块与播放器音量同步

## 配置

1. 在 Music Assistant 中，前往 **设置 → 插件（Settings → Plugins）**，点击 **添加插件（Add a plugin）** 并选择 `Spotify Connect`。该插件只需添加一次。
2. 选择播放引擎。对于 Soloist，设置过程会引导你阅读 Spotify 的条款并创建 API 密钥。
3. 设置完成后，打开插件的设置。在 **Connected players（已连接的播放器）** 下，选择每一个应出现在 Spotify 应用中的播放器。每个选中的播放器都会作为独立的 Spotify Connect 设备对外发布，音频始终会在你在应用中选择的设备所对应的播放器上播放。
4. 可以选择更改 **对外发布的设备名称（Advertised device name）**，它控制设备如何以对应的播放器命名：`Player name | Music Assistant`（默认）、`Player name only` 或 `Music Assistant | Player name`。重命名播放器会同时重命名其设备。

> [!NOTE]
> 支持 Home Assistant 播放器，但不推荐使用 —— 实际效果可能因情况而异。原生 Music Assistant 播放器效果最佳。

## 使用方法

1. 在手机、平板电脑或电脑上打开 Spotify 应用。设备必须与 Music Assistant 服务器处于同一网络。
2. 先播放任意内容，然后打开 Spotify 的设备选择器（扬声器图标）。
3. 按名称选择 Music Assistant 播放器。音频现在将通过该播放器播放。

## 已知问题 / 说明

- 要使用 Spotify Connect，所有设备必须连接到同一网络。更多信息请参阅 <a href="https://support.spotify.com/us/article/spotify-connect/" target="_blank" rel="noopener noreferrer">Spotify Connect 支持文章</a>（请注意，该文章中提及的从不同 WiFi 网络访问设备的方式不受支持）
- 根据播放器自身缓冲情况的不同，在 Spotify 应用中执行操作与听到结果之间可能会有一段短暂延迟，且 Spotify 应用中的进度可能会略微领先于实际音频
- Music Assistant 无法获知 Spotify 实际交付的编码格式和音质。因此，信号路径显示的是从播放引擎接收到的已解码 PCM 音频（使用 Soloist 时为 44.1 kHz/32-bit）—— 而非 Spotify 源的音质
- 在复杂的网络环境中，如果遇到播放问题，可能需要设置[流设置（Streams Settings）](/settings/core/#generic)中的 BIND TO 选项
