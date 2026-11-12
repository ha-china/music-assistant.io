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

## Setting Up a Device

A device that allows guest access, which means connecting without pairing, is ready to play to as soon as it is found. A device that only accepts pairing, a device with an audio input, and a device that another server is using show <b>Setup required</b> until you set them up here. Select the player, or press <b>Start setup</b> in its settings:

- <b>Connect unpaired.</b> Only offered when the device allows guest access. Quick, but the connection is not verified. A device with an audio input offers <b>Connect unpaired with audio input</b> instead, and <b>Connect unpaired without audio input</b> if it can also play
- <b>Pair device.</b> Sets up a permanent, verified connection using the pairing code the device gives you. A device without a pairing code gives you a pairing token instead

To pair a device you connected unpaired, use <b>Reconfigure player</b>. Bridged players and the built-in web player have nothing to set up.

## Settings

在设置此提供程序时，除了 [播放器提供程序设置](/settings/player-provider/) 之外，还可以使用以下设置：

- <b>Manual IP addresses for discovery.</b> Sendspin players are normally found on their own. If yours is not, add its IP address or network name here, for example 192.168.1.50 or speaker.local. Music Assistant will then connect to it directly, and keep trying if the device is switched off when MA starts

Sendspin 不通过 HTTP 进行流式传输，因此在[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)中，这些播放器仅显示**输出声道模式（Output Channel Mode）**。除了标准的[单个播放器设置](/settings/individual-player/)之外，Sendspin 播放器还具有以下设置：

- <b>Security status.</b> The Sendspin settings of each device start with its security state: paired, connected through guest access, connected without encryption (see [Older Devices](#older-devices)), or pairing lost. A device that lost its pairing cannot play until you pair it again with <b>Reconfigure player</b> or remove the old pairing with <b>Unpair</b>
- <b>Unpair.</b> Removes the pairing with this device. Both sides forget the stored credential
- <b>Turn on audio input / Turn off audio input.</b> Shown for a device with an audio input that is connected through guest access. Starts or stops sending its audio to Music Assistant through the [Sendspin Source plugin](/plugins/sendspin-source/)
- <b>Automatically play line-in on.</b> Only shown for devices with a line-in that can report when a signal is present. Chooses where that line-in plays automatically, either This device, another player, or Off
- <b>Static playback delay (ms).</b> Only shown for devices that support it. Shifts this player's audio to keep it in sync with the others, from 0 up to 5000 ms. Increase it if audio on this player is heard too late, for example to make up for delay added by an amplifier, active speakers or the device's own operating system
- <b>Preferred audio format.</b> The audio format used for playback on this player. Automatic (player's preferred codec) is the default, and the other options are read from the device itself. On Automatic the player keeps the codec it prefers, and <b>Sample rate selection</b> decides the sample rate. Choosing a specific format here sets both
- <b>Sample rate selection.</b> Decides the sample rate of the audio sent to this player, and can only be changed while the preferred audio format is Automatic. <b>Smart</b> is the default. It starts at the first track's rate and only restarts the stream when a later track needs a higher rate. The other options are Bit-perfect, 48 kHz, 96 kHz and Highest supported by player, and work the same as in [Flow Mode sample rate](/settings/individual-player/#flow-mode-sample-rate). Only rates the player supports in its preferred codec are used, so a rate it cannot play is replaced by the closest one it can

Preferred audio format, Sample rate selection, and Unpair on a paired device only show while <b>Show advanced settings</b> is on.

## Older Devices

Sendspin is still evolving, and some players and clients still use an older development version of it. Future versions of Music Assistant will stop supporting these, so update them when an update is available:

- <b>Devices without encryption.</b> Play straight away without any setup, but cannot be paired and cannot use an audio input. Their security status shows that they are connected without encryption
- <b>Devices with an older pairing version.</b> Pair and play like current devices. Once paired, their settings include <b>Manage device settings</b>, which opens the device's own pairing settings, where you can turn pairing with a static or a dynamic pairing code on or off. These switches only show while <b>Show advanced settings</b> is on. While this section is open the device refuses connections from other servers, so close it again with <b>Close device management</b> when you are finished

## 已知问题 / 注意事项

- Many Sendspin devices ask for 16 bit audio, so higher resolution material may be converted on the way out
- Artwork clears briefly when you pause, seek, or move on to the next track
- A Sendspin device plays for one server at a time. Playing to a device moves it to this server, even while another server is playing on it. A device that another server is using can still be set up here, but pairing only works while the other server is not playing on it
- Players must be on the same network as Music Assistant to connect directly. Listening from elsewhere works through the web player, and Home Assistant Cloud gives the most reliable connection through a firewall
- If using Sendspin on a Chromecast device, be aware that, due to the lack of reported metadata, the Home Assistant media player entity may show 'idle' with no track details even while audio is playing correctly; check the Music Assistant UI for the true playback state

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

The player built into the Music Assistant web interface is itself a Sendspin player. It plays wherever the web interface works, at home or through [Remote Access](/settings/remote-access/).

Like any other Sendspin player, the web player has a **Static playback delay (ms)** setting in its [Output Protocols settings](/settings/individual-player/#output-protocols). It starts at 0 and may need adjusting if the web player is heard out of step with your other speakers.

The audio format the web player uses depends on the browser:

- **Chrome, Edge and other Chromium based browsers, including on Android**: Opus when the web interface is opened over HTTPS, which includes Remote Access. Lossless FLAC when it is opened over plain HTTP, for example at `http://192.168.1.100:8095`
- **Firefox, except on iPhone and iPad**: lossless FLAC
- **Safari, and every browser on iPhone and iPad**: Opus

A Chromium based browser can play lossless FLAC over HTTPS too: pick one of the FLAC formats in the web player's advanced **Preferred audio format** setting.

## 连接其他 Sendspin 播放器

你网络中的 Sendspin 播放器会被自动发现，因此通常无需在任何地方输入地址。

如果某个播放器确实要求你提供服务器地址，或者你正在构建自己的客户端，Music Assistant 会在 `ws://192.168.1.100:8927/sendspin` 进行监听——请将其中 IP 地址替换为你的 Music Assistant 服务器的 IP 地址。该规范发布于 <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>。

> [!NOTE]
> 主网页界面端口（8095）上也存在相同的 `/sendspin` 路径，但该路径专供内置网页播放器使用，会拒绝其他客户端。
