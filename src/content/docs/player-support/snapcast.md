---
title: "Snapcast"
description: Snapcast 播放器提供程序（Player Provider）的详细信息
---

# Snapcast <img src="/assets/icons/snapcast-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 Snapcast，这是一种功能强大的同步多房间音频流媒体解决方案。Snapcast 能够在各种设备间实现无缝播放，带来沉浸式的音频体验。无论是使用兼容 Snapcast 的扬声器，还是 Raspberry Pi 等设备，都可以轻松享受同步音频播放。该组件由 <a href="https://github.com/Santiagosotoc" target="_blank" rel="noopener noreferrer">SantiagoSotoC</a> 贡献并维护。

MA 内置了一个 Snapserver，不过也可以使用外部服务器。下图展示了一种可能的输出组合。图中，一台 Raspberry Pi 运行服务器，与 MA 以及所有客户端进行通信。运行服务器的这台 Pi 同时还运行 Snapclient，并连接到一组扬声器。另外，在另一个房间还有一台运行 Snapclient 的 Pi、一部运行 Snapdroid 的手机，以及一台运行 Snapweb 的笔记本电脑。

<img src="/assets/snapcast.png" alt="Preview image" style="width: 800px;"  loading="lazy" />

## 功能

- 在所有 Snapcast 设备之间同步播放
- 无损音质。默认为 48 kHz / 16-bit。仅当 Music Assistant 连接到[兼容的外部 Snapserver](https://github.com/rwjack/snapcast/tree/feature/tcp-packed-s24le)时，才能使用更高的采样率和 24-bit。

## 配置

1. 在 Music Assistant 中，前往 **设置 → 播放器提供程序**，点击 **添加播放器提供程序** 并选择 `Snapcast`。这将启动内置的 Snapcast 服务器，无需进一步的服务器设置。若要改用外部 Snapcast 服务器，请启用 `Show Advanced Settings` 并输入其 IP 地址和端口（参见下文的设置部分，并注意已知问题 / 说明中的版本要求）。
2. 将浏览器或 Snapdroid 应用指向 `<YOUR_MA_IP_ADDRESS>:1780`，以连接你的播放器（客户端）。每个已连接的客户端都会出现在 MA 的播放器列表中。

## 设置

### 提供程序（Provider）

Music Assistant 自带一个内置的 Snapserver，并且默认使用它。有一项设置决定下方哪一组选项适用：

- <b>使用现有 Snapserver（Use existing Snapserver）。</b>当内置 Snapserver 可用时默认关闭；此时，该设置以及下方的外部服务器设置只有在启用 Show Advanced Settings（显示高级设置）后才会显示。在没有内置 Snapserver 的安装中，该设置为开启且无法关闭，并且内置服务器设置会被隐藏

启用<b>使用现有 Snapserver</b>后，可以使用以下选项：

- <b>Snapcast Server IP（Snapcast 服务器 IP）。</b>外部 Snapcast 服务器的 IP 地址（例如 `192.168.1.200`）。默认为 127.0.0.1
- <b>Snapcast Control Port（Snapcast 控制端口）。</b>连接外部 Snapcast 服务器所用的端口。默认为 1705
- <b>Snapcast stream sample rate（Snapcast 流采样率）。</b>Music Assistant 发送到 Snapcast 的采样率，可为 48000（默认值）、96000 或 192000。你的 Snapcast 客户端必须支持所选的采样率。更改后请重新加载 Snapcast 提供程序
- <b>Snapcast stream bit depth（Snapcast 流位深）。</b>可为 16（默认值）或 24。24-bit 需要一个在构建时支持打包 24-bit PCM 的外部 Snapserver，而常规软件包构建尚不具备该功能。参见[此构建版本](https://github.com/rwjack/snapcast/tree/feature/tcp-packed-s24le)。内置 Snapserver 始终保持为 48kHz / 16 bits

内置 Snapserver 设置（Built-in Snapserver Settings）会在使用内置服务器时显示，具体如下：

- <b>Snapserver buffer size（Snapserver 缓冲区大小）。</b>服务器端读取的信号与客户端播放的信号之间的总缓冲，也就是音频的总延迟。默认值为 1000 ms，可设置在 200 到 6000 之间。这就是按下播放、暂停或跳过时会察觉到约一秒延迟的原因
- <b>Snapserver chunk size（Snapserver 块大小）。</b>服务器每次在将音频传递给编码器并发送到客户端之前，从音源读取的音频量。默认值为 26 ms，可设置在 10 到 100 之间。有些编解码器比其他编解码器需要更多数据，FLAC 大约需要 26 ms，默认值即由此而来
- <b>Snapserver initial volume（Snapserver 初始音量）。</b>新客户端的起始音量。默认值为 25
- <b>Send audio to muted clients（向已静音的客户端发送音频）。</b>默认关闭。可让音频流持续发送到已静音的客户端
- <b>Snapserver default transport codec（Snapserver 默认传输编解码器）。</b>可选值为 FLAC（默认值）、OGG、OPUS 和 PCM

无论使用哪台服务器，以下设置均适用：

- <b>Snapcast idle threshold stream parameter（Snapcast 空闲阈值流参数）。</b>在静音持续这么多毫秒之后，音频流将从播放状态切换为空闲状态。默认值为 60000

### 播放器

Snapcast 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。

## 已知问题 / 说明

- Snapcast 提供程序默认使用内置的 Snapserver，但如果需要，设置中的开关允许使用外部服务器。使用外部服务器时，必须输入服务器的 IP 和端口
- Music Assistant 仅支持运行 0.27.0（或更新）版本的外部 Snapcast 服务器。如果使用外部服务器，可以通过命令 `snapserver -v` 启动来确认版本。请注意，0.28.0 版本仅在 64 位操作系统上受支持。另请注意，0.30.0 版本缺少 MA 所需的功能，无法使用
- 如果不使用外部服务器，则在添加此提供程序时会启动带有 Snapweb 选项的内置 Snapserver。启用之后，服务器的运作是透明的，客户端会出现在 MA 的 UI 中
- 客户端通过将浏览器或 Snapdroid 指向 `<YOUR_MA_IP_ADDRESS>:1780` 来创建。必须保持浏览器标签页打开，以维持音频流
- 所有客户端的名称都可以在 Snapweb 和 Snapdroid 的各自 UI 中进行调整。此外，也可以在 MA 设置中重命名播放器
- 内置的 Snapserver 只能接受来自 Music Assistant 的连接
- 如果需要调整某个客户端的延迟，必须通过其他界面（例如 Snapdroid 或 Snapweb）进行
- 如果已静音的播放器出现不同步，或在随后取消静音时出现不理想的重新缓冲延迟，或在静音期间关机，请尝试开启 `Send audio to muted clients` 选项
- 在 Snapcast 的限制范围内，暂停功能已尽可能实现了最佳效果。MA 通过发出 STOP 和 RESUME 命令来实现暂停效果，但这意味着播放器的最终状态永远不会变为“已暂停”。
- 偶尔在音频流变化（暂停、跳过或跳转）之后，Snapweb 可能会没有声音。可以通过在 Snapweb UI 中先选择停止再选择播放来解决
- iOS 版 Snapcast 应用已无法正常使用，因为它使用的是旧版本的 Snapclient。使用它会给此提供程序带来问题
- 确保 Snapserver 主机上的 1704 和 1705 端口已开放。同时确保 4953 到 5153 之间（含）的端口已开放
- 先尝试使用 Snapcast 的默认设置，然后根据需要进行更改
- 除非你使用的是兼容的外部 Snapserver，否则请将音频流的采样率和位深保持为默认值。更改后请重新加载 Snapcast 提供程序
- 音频流的名称必须为 `default`
