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

## 设置设备

允许访客访问（即无需配对即可连接）的设备在被发现后即可立即播放。仅接受配对的设备、带有音频输入的设备以及正在被其他服务器使用的设备会显示<b>需要设置</b>，直到你在此处完成设置。选择播放器，或在其设置中按<b>开始设置</b>：

- <b>不配对连接。</b>仅在设备允许访客访问时提供。速度快，但连接未经验证。带有音频输入的设备会提供<b>不配对连接（带音频输入）</b>，如果它也能播放，还会提供<b>不配对连接（不带音频输入）</b>
- <b>配对设备。</b>使用设备提供的配对码建立永久、经过验证的连接。没有配对码的设备会向你提供一个配对令牌

要配对通过不配对方式连接的设备，请使用<b>重新配置播放器</b>。桥接播放器和内置网页播放器无需设置。

## 设置

在设置此提供程序时，除了 [播放器提供程序设置](/settings/player-provider/) 之外，还可以使用以下设置：

- <b>用于发现的手动 IP 地址。</b> Sendspin 播放器通常会自动被发现。如果你的播放器未被发现，请在此处添加其 IP 地址或网络名称，例如 192.168.1.50 或 speaker.local。Music Assistant 将直接连接它，并且如果设备在 MA 启动时处于关闭状态，会持续重试

Sendspin 不通过 HTTP 进行流式传输，因此在[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)中，这些播放器仅显示**输出声道模式（Output Channel Mode）**。除了标准的[单个播放器设置](/settings/individual-player/)之外，Sendspin 播放器还具有以下设置：

- <b>安全状态。</b> 每台设备的 Sendspin 设置以其安全状态开头：已配对、通过访客访问连接、未加密连接（参见 [旧设备](#older-devices)）或配对丢失。丢失配对的设备无法播放，直到你使用<b>重新配置播放器</b>重新配对，或使用<b>取消配对</b>移除旧配对
- <b>取消配对。</b> 移除与此设备的配对。双方都会忘记存储的凭据
- <b>打开音频输入 / 关闭音频输入。</b> 对于通过访客访问连接且带有音频输入的设备显示。通过 [Sendspin Source 插件](/plugins/sendspin-source/) 开始或停止将其音频发送到 Music Assistant
- <b>自动播放线路输入。</b> 仅对带有可报告信号存在性的线路输入的设备显示。选择该线路输入自动播放的位置：此设备、另一台播放器或关闭
- <b>静态播放延迟（毫秒）。</b> 仅对支持此功能的设备显示。将此播放器的音频偏移以与其他播放器保持同步，范围从 0 到 5000 毫秒。如果此播放器上的音频听起来太晚，请增加此值，例如补偿放大器、有源音箱或设备自身操作系统增加的延迟
- <b>首选音频格式。</b> 用于此播放器播放的音频格式。自动（播放器首选编解码器）是默认选项，其他选项从设备本身读取。在自动模式下，播放器保留其偏好的编解码器，<b>采样率选择</b>决定采样率。在此处选择特定格式会同时设置两者
- <b>采样率选择。</b> 决定发送到此播放器的音频采样率，并且只能在首选音频格式为自动时更改。<b>智能</b>是默认选项。它从第一首曲目的采样率开始，仅当后续曲目需要更高采样率时才重新启动流。其他选项为位完美、48 kHz、96 kHz 和播放器支持的最高采样率，其工作方式与 [Flow Mode 采样率](/settings/individual-player/#flow-mode-sample-rate) 相同。仅使用播放器在其首选编解码器中支持的采样率，因此无法播放的采样率会被替换为最接近的可播放采样率

首选音频格式、采样率选择以及已配对设备上的取消配对仅在<b>显示高级设置</b>开启时显示。

## 旧设备

Sendspin 仍在发展中，一些播放器和客户端仍在使用其较旧的开发版本。未来版本的 Music Assistant 将停止支持这些版本，因此请在更新可用时进行更新：

- <b>未加密的设备。</b> 无需任何设置即可直接播放，但无法配对，也无法使用音频输入。其安全状态显示它们未加密连接
- <b>使用旧配对版本的设备。</b> 像当前设备一样配对和播放。配对后，其设置包括<b>管理设备设置</b>，该选项会打开设备自身的配对设置，你可以在其中打开或关闭使用静态或动态配对码的配对。这些开关仅在<b>显示高级设置</b>开启时显示。在此部分打开期间，设备会拒绝来自其他服务器的连接，因此完成后请使用<b>关闭设备管理</b>再次关闭它

## 已知问题 / 注意事项

- 许多 Sendspin 设备要求 16 位音频，因此更高分辨率的素材可能会在输出时被转换
- 暂停、跳转或切换到下一首曲目时，封面会短暂清除
- Sendspin 设备一次只为一台服务器播放。播放到某台设备会将其移动到当前服务器，即使另一台服务器正在其上播放。被其他服务器使用的设备仍可在此处设置，但配对仅在另一台服务器未在其上播放时有效
- 播放器必须与 Music Assistant 位于同一网络上才能直接连接。从其他位置收听可通过网页播放器实现，而 Home Assistant Cloud 可提供穿过防火墙的最可靠连接
- 如果在 Chromecast 设备上使用 Sendspin，请注意，由于缺少报告的元数据，Home Assistant 媒体播放器实体（entity）可能显示“空闲”且没有曲目详细信息，即使音频正在正常播放；请查看 Music Assistant 界面以了解真实播放状态

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

Music Assistant 网页界面内置的播放器本身就是一个 Sendspin 播放器。无论网页界面在何处运行，在家中或通过[远程访问](/settings/remote-access/)，它都能播放。

与任何其他 Sendspin 播放器一样，网页播放器在其[输出协议设置](/settings/individual-player/#output-protocols)中具有**静态播放延迟（毫秒）**设置。它从 0 开始，如果网页播放器与其他音箱的播放不同步，则可能需要调整。

网页播放器使用的音频格式取决于浏览器：

- **Chrome、Edge 和其他基于 Chromium 的浏览器，包括 Android 上的**：当网页界面通过 HTTPS 打开时（包括远程访问），使用 Opus。通过纯 HTTP 打开时（例如 `http://192.168.1.100:8095`），使用无损 FLAC
- **Firefox，iPhone 和 iPad 上的除外**：无损 FLAC
- **Safari，以及 iPhone 和 iPad 上的所有浏览器**：Opus

基于 Chromium 的浏览器也可以通过 HTTPS 播放无损 FLAC：在网页播放器的高级**首选音频格式**设置中选择一种 FLAC 格式即可。

## 连接其他 Sendspin 播放器

你网络中的 Sendspin 播放器会被自动发现，因此通常无需在任何地方输入地址。

如果某个播放器确实要求你提供服务器地址，或者你正在构建自己的客户端，Music Assistant 会在 `ws://192.168.1.100:8927/sendspin` 进行监听——请将其中 IP 地址替换为你的 Music Assistant 服务器的 IP 地址。该规范发布于 <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>。

> [!NOTE]
> 主网页界面端口（8095）上也存在相同的 `/sendspin` 路径，但该路径专供内置网页播放器使用，会拒绝其他客户端。
