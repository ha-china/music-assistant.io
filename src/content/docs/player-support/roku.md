---
title: "Roku Media Assistant"
---

# Roku Media Assistant <img src="/assets/icons/roku-media-assistant-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Media Assistant 是一款实用工具，允许你通过 Deeplink（深层链接）在 Roku 设备上串流/播放本地和托管的媒体。更多信息（包括示例和文档）可在 <a href="https://medievalapple.net/Media-Assistant" target="_blank" rel="noopener noreferrer">Media Assistant 网站</a> 上找到。该提供程序（provider）由 [Medieval Apple](https://github.com/MedievalApple) 贡献并维护。

## 功能特性

- Music Assistant 会自动检测 Roku 设备
- 支持使用物理按钮进行播放/暂停
- 音频质量为无损 48 kHz/16-bit

## 配置

> [!NOTE]
> 您的 Roku 必须运行 Roku OS V9.1 或更高版本才能安装 Media Assistant 应用（该应用仅在最低 OS V13.0 上进行过测试）。

1.	从 Roku Channel Store 安装 Media Assistant 应用，或将其侧载（sideload）到您的 Roku 上。
- Roku Channel Store 链接（https://channelstore.roku.com/details/625f8ef7740dff93df7d85fc510303b4/media-assistant）
- 侧载链接（https://github.com/MedievalApple/Media-Assistant）
2.	如果您是侧载的应用，则需要将 **Advanced → App ID of Media Assistant** 中的播放器提供程序设置更改为 `dev`。
3.	在较新的 Roku OS 版本上，为了让 Music Assistant 能够与 Roku 通信，您必须确保已启用移动应用控制。要检查此项，请进入 Roku 的设置并导航到（Settings >> System >> Advanced system settings >> Control by mobile apps >> Network access），检查 `Network access` 是否设置为 `Enabled`

## 设置

在设置此提供程序时，除了 [播放器提供程序设置](/settings/player-provider/) 之外，还可以使用以下设置：

- <b>允许自动发现 Roku 设备。</b>默认开启，用于自动发现 Roku 设备
- <b>用于发现的手动 IP 地址。</b>当自动发现在您的网络中找不到 Roku 设备时，可通过 IP 地址添加 Roku 设备
- <b>Media Assistant 的 App ID。</b>默认为 Roku Channel Store 版本的 Media Assistant，ID 为 782875。如果您将应用侧载到了 Roku 上，请将其设置为 dev

Roku 播放器使用标准的 [单个播放器设置](/settings/individual-player/)，包括 [大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。以下设置在 Roku 上有所不同：

- <b>[此播放器支持的采样率](/settings/individual-player/#sample-rates-supported-by-this-player)。</b>默认选中的采样率与 Roku 官方声称的支持范围一致。更高的采样率可能仍然有效，具体取决于设备
- <b>[用于向播放器串流音频的输出编解码器](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)。</b>不同 Roku 设备上各编解码器的加载速度不同，因此如果播放开始较慢，请尝试其他编解码器

## 已知问题 / 注意事项

- 用于跳过的物理按钮无法使用
- Roku 不支持音频的交叉淡入淡出（crossfade）。如果您需要交叉淡入淡出和/或完整的无缝播放（gapless）支持，请在播放器的高级设置中启用 `Flow mode`。启用 `Flow mode` 可能会解决播放问题，但将无法显示剩余时间


## 尚不支持
- 目前音量必须在设备上进行控制
