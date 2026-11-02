---
title: "Sendspin"
---

# Sendspin <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<a href="https://www.sendspin-audio.com/" target="_blank" rel="noopener noreferrer">Sendspin</a> 是 Music Assistant 自有的音频发送方式，用于向播放器（player）发送音频。它能让多台设备（device）彼此保持同步播放，同步精度之高，使得同一首曲目可以在多个房间中播放而不会在彼此之间产生任何回声。

它内置于 Music Assistant 中，并且从一开始就已启用，因此无需安装任何东西。你在浏览器中使用的网页播放器本身就是一个 Sendspin 播放器，而 Sendspin 音箱和应用一旦接入你的网络便会自动出现。

Sendspin 由 <a href="https://www.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation</a> 开发，任何人都可以自由地在其基础上进行构建，因此支持它的设备和应用的范围正在不断扩大。

要将来自兼容的 Sendspin 线路输入（line-in）、麦克风或其他输入的音频接入 Music Assistant，请参阅 [Sendspin Source 插件](/plugins/sendspin-source/)。

> [!CAUTION]
> **技术预览**
>
> Sendspin 仍处于技术预览阶段。它可以正常工作，但请预期它会有所变化。
    
## 功能特性

- **多房间音频同步**：每台已连接的设备都保持同步
- **自动发现**：你网络中的 Sendspin 设备会被自动找到
- **逐播放器音频设置**：每台设备都有自己的均衡器和音量
- **从设备端控制**：播放、暂停和跳过既可以从播放器上操作，也可以从 Music Assistant 操作
- **曲目信息**：标题、封面和播放进度会显示在每台设备上

## 配置

Sendspin 提供程序（provider）是**内置且始终启用的**。开始使用无需任何配置选项。

当客户端（client）连接时，各个 Sendspin 播放器会自动出现

## 设置

在设置此提供程序时，除了 [播放器提供程序设置](/settings/player-provider/) 之外，还可以使用以下设置：

- <b>用于发现的手动 IP 地址（Manual IP addresses for discovery）。</b>Sendspin 播放器通常会被自动找到。如果你的播放器没有被找到，请在此处添加其 IP 地址或网络名称，例如 192.168.1.50 或 speaker.local。这样 Music Assistant 便会直接连接到它，并且如果设备在 MA 启动时处于关闭状态，则会持续尝试连接
- <b>允许旧版客户端（Allow legacy clients）。</b>默认开启。接受不遵循当前规范的旧版 Sendspin 设备，包括无需加密即可连接的设备，其流量可被本地网络上的任何人读取。关闭该选项后将只接受最新的设备。此选项是临时性的，将在未来版本中移除
- <b>最小 PIN 长度（Minimum PIN length）。</b>设备进行动态 PIN 配对时可使用的最少位数。默认值为 4，最高可设置为 12

Sendspin 不通过 HTTP 进行流式传输，因此在[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)中，这些播放器仅显示**输出声道模式（Output Channel Mode）**。除了标准的[单个播放器设置](/settings/individual-player/)之外，Sendspin 播放器还具有以下设置：

- <b>配对（Pairing）。</b>每台设备都会在其设置的顶部显示其安全状态：已配对、未经配对连接，或未加密连接。在播放器上按 <b>Setup</b>（设置），通过输入设备提供的 PIN 或配对令牌来完成配对，或允许其在无需配对的情况下播放。桥接播放器和内置网页播放器没有需要配对的内容
- <b>取消配对（Unpair）。</b>移除与该设备的配对。双方都会忘记所存储的凭据，设备将以未配对状态重新连接
- <b>要求配对（Require pairing）。</b>在你允许其无需配对即可连接的设备上显示。用于阻止该设备以这种方式连接
- <b>管理设备设置（Manage device settings）。</b>打开设备自身的配对设置，可在其中分别开启或关闭未配对访问、静态 PIN 配对和动态 PIN 配对。此部分处于打开状态时，设备会拒绝来自其他服务器的连接，因此完成操作后，请使用 <b>Close device management</b>（关闭设备管理）将其再次关闭
- <b>自动播放线路输入（Automatically play line-in on）。</b>仅在带有能够报告信号存在的线路输入的设备上显示。用于选择该线路输入自动播放的位置：本设备、另一台播放器或关闭
- <b>静态播放延迟（Static playback delay (ms)）。</b>仅对支持该功能的设备显示。用于偏移此播放器的音频，使其与其他播放器保持同步，范围为 0 到 5000 毫秒。如果此播放器上的音频听起来偏晚，可以增大该值，例如用来补偿功放、有源音箱或设备自身操作系统带来的延迟
- <b>首选音频格式（Preferred audio format）。</b>此播放器上用于播放的音频格式。默认为“自动（由客户端决定）”，其他选项则读取自设备本身

## 已知问题 / 注意事项

- 音频以 16 位发送到 Sendspin 播放器，因此更高分辨率的音源会在输出时被转换
- 当你暂停、拖动进度或切换到下一曲目时，封面会短暂消失
- 一个网络中只能有一台 Music Assistant 服务器可以使用 Sendspin
- 播放器必须与 Music Assistant 位于同一网络才能直接连接。从其他位置收听可通过网页播放器实现，而 Home Assistant Cloud 能够提供穿越防火墙的最可靠连接
- 如果在 Chromecast 设备上使用 Sendspin，请注意：由于缺少报告的元数据，即使音频正在正常播放，Home Assistant 媒体播放器实体（entity）也可能显示为“idle”且没有任何曲目详情；请查看 Music Assistant 用户界面以了解真实的播放状态

## 支持的客户端

多种客户端类型可以通过 Sendspin 连接到 Music Assistant：

| 客户端 | 描述 |
|--------|-------------|
| **网页浏览器** | 内置的 Music Assistant 网页播放器使用 Sendspin 进行本地播放 |
| **[Google Cast（Sendspin 模式）](/player-support/google-cast/)** | 面向 Chromecast 设备的实验性 Sendspin 模式，默认关闭。参见 [Cast 设备上的 Sendspin](/player-support/google-cast/#sendspin-on-cast-devices) |
| **<a href="https://esphome.github.io/home-assistant-voice-pe/" target="_blank" rel="noopener noreferrer">Home Assistant Voice PE</a>** | 已内置于近期的 Voice PE 固件中。使用官方安装程序更新设备；如果当前的稳定版本未显示为播放器，请选择预发布版本 |
| **[本地音频](/player-support/local-audio/)** | 播放到其所运行机器的声卡、USB DAC 或内置输出。可作为 Home Assistant App 部署，或使用 Docker Compose 部署 |
| **<a href="https://github.com/trudenboy/sendspin-bt-bridge" target="_blank" rel="noopener noreferrer">Sendspin Bluetooth Bridge</a>** | 将蓝牙音箱桥接为 MA 播放器，支持多设备、多房间同步以及网页仪表盘（dashboard）。可作为 Home Assistant App、Docker 或 LXC 部署 |
| **<a href="https://www.sendspin-audio.com/code/" target="_blank" rel="noopener noreferrer"> 各类 Sendspin 客户端</a>** | 适用于各种平台的客户端正在陆续推出 |

## 网页播放器

内置于 Music Assistant 网页界面中的播放器本身就是一个 Sendspin 播放器。在你自己的网络上，它直接连接到服务器，声音效果最佳。而在其他任何地方，它则改为通过互联网连接，虽然仍可使用，但音质较低。

与其他任何 Sendspin 播放器一样，网页播放器在其[输出协议设置](/settings/individual-player/#output-protocols)中有一个**静态播放延迟（Static playback delay (ms)）**设置。Music Assistant 会为你的设备选择一个合适的值，但如果网页播放器与你的其他音箱听起来不同步，则可能需要对其进行调整。

网页播放器的音质取决于你的收听位置：

- **在你自己的网络上**：桌面浏览器和 Android 上为无损 FLAC。iPhone、iPad 和 Safari 使用 Opus
- **在其他任何地方**：所有浏览器均使用 Opus

> [!NOTE]
> Android 上的 Firefox 无法从你自己网络之外的地方播放。

## 连接其他 Sendspin 播放器

你网络中的 Sendspin 播放器会被自动发现，因此通常无需在任何地方输入地址。

如果某个播放器确实要求你提供服务器地址，或者你正在构建自己的客户端，Music Assistant 会在 `ws://192.168.1.100:8927/sendspin` 进行监听——请将其中 IP 地址替换为你的 Music Assistant 服务器的 IP 地址。该规范发布于 <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>。

> [!NOTE]
> 主网页界面端口（8095）上也存在相同的 `/sendspin` 路径，但该路径专供内置网页播放器使用，会拒绝其他客户端。
