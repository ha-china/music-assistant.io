---
title: "Fully Kiosk"
---

# Fully Kiosk Browser <img src="/assets/icons/fully-kiosk.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持向运行 Fully Kiosk Browser Android 应用的设备进行流式传输

## 功能

- 通过运行 Fully Kiosk 的 Android 平板电脑播放音乐，通常是壁挂式仪表盘（dashboard）
- 可以添加多个 Fully Kiosk 浏览器播放器
- 仅支持基本播放。无法与其他播放器进行同步的多房间播放
  
## 配置

1. 在 Music Assistant 中，前往 **Settings → Player Providers**（设置 → 播放器提供程序），点击 **Add a player provider**（添加播放器提供程序）并选择 `Fully Kiosk Browser`（Fully Kiosk 播放器不会自动被发现）。
2. 输入运行 Fully Kiosk 的设备的 IP 地址（或主机名）和密码。其余选项请参见下方的设置。
3. 要添加更多 Fully Kiosk 设备，请为每台设备再次添加该提供程序。

## 设置

除了[播放器提供程序设置](/settings/player-provider/)之外，在设置此提供程序时还可以使用以下设置：

- <b>Fully Kiosk 设备。</b>要连接的设备，每行输入一个，格式为 host 或 host:port。如果省略端口，则默认使用 2323。每台设备都会成为独立的播放器。保存后，打开每个播放器的设置页面以设置其密码及 HTTPS 相关选项

除了[单个播放器设置](/settings/individual-player/)和[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)之外，Fully Kiosk 播放器还有以下设置：

- <b>密码（Password）。</b>在该设备上为 Fully Kiosk REST API 设置的密码。在设置密码之前，播放器将一直不可用，因此请在该播放器上按 <b>Setup</b>（设置）并输入密码
- <b>连接 Fully Kiosk API 时使用 HTTPS。</b>默认关闭
- <b>验证 HTTPS 证书（推荐）。</b>默认开启。关闭后将信任任何证书而不进行验证
- <b>TLS 证书指纹。</b>可选的 SHA-256 十六进制指纹。如果提供，则必须与设备证书匹配，并且会覆盖“验证 HTTPS 证书”设置
- <b>[向播放器流式传输音频所使用的输出编解码器](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player)。</b>此处默认为 MP3 而非 FLAC，因为许多平板电脑难以处理无损音频。除非有特殊原因，否则请保持使用 MP3
  
## 已知问题 / 注意事项

- 需要 Fully Kiosk 的<a href="https://www.fully-kiosk.com/#pricing" target="_blank" rel="noopener noreferrer">付费许可证</a>
- 这些播放器永远不会被自动发现，因此必须手动添加每台平板电脑，并提供其 IP 地址和 Fully Kiosk 密码
- 添加后，如有需要，可以在具体播放器的配置中更改设备名称
- Fully Kiosk 播放器始终以连续的[流模式（flow mode）](/faq/tech-info/#track-queueing)流式传输整个播放队列，因此没有开启或关闭该模式的设置。因此淡入淡出（crossfade）功能可以使用，但设备可能不会显示曲目元数据，其物理按键也可能没有响应
- 此播放器可以通过[通用分组（Universal Group）](/faq/groups/#universal-groups)进行分组，但无法实现完美同步。
