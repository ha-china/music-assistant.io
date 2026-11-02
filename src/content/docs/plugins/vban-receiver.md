---
title: VBAN Receiver 插件
description: 让另一台计算机通过网络发送其声音，并在你的扬声器上播放，就像一个 AUX 输入。
pluginGroup: incoming
---

# VBAN Receiver <img src="/assets/icons/vban-icon.svg" alt="Preview image" style="width: 126px; float: right;"  loading="lazy" />

该插件允许你网络中的另一台计算机将其音频发送到 Music Assistant，然后由 Music Assistant 在你的任意扬声器上播放。它的作用类似于 AUX 输入：另一台机器正在播放的任何内容都会出现在 Music Assistant 中，供你选择收听。由 <a href="https://github.com/sprocket-9" target="_blank" rel="noopener noreferrer">sprocket-9</a> 贡献并维护

这可以是另一台计算机输出的全部声音、来自某个特定应用程序的声音，或者接入该计算机的外部设备（例如麦克风，或连接到线路输入（line-in）的黑胶唱机）的声音。

VBAN 是用于在网络中传输音频的方法。它来自 <a href="https://vb-audio.com/Voicemeeter/vban.htm" target="_blank" rel="noopener noreferrer">VB-Audio</a>，以未压缩的方式发送声音，因此在传输过程中不会有任何损失。发送音频的计算机需要支持该协议的软件——常见选择请参见下方的 [VBAN 发送端](#vban-senders)。

## 功能

- 接收来自网络中任意 VBAN 发送端的音频，并像其他任何音源一样播放
- 可以发送另一台计算机的全部声音，也可以只发送某个应用程序、麦克风或线路输入的声音
- 可以多次添加该插件，每一路传入的音频源各对应一个实例

## 配置

其中大多数设置必须与你在发送端计算机上设置的值相匹配，否则将没有任何声音传出。请先在发送端一侧填写，然后将相同的值复制到此处。

如果你多次添加该插件，请为每个实例分配各自的端口号。

### 设置

- <b>接收端：UDP 端口。</b> Music Assistant 监听的端口。发送端计算机需要能够通过此端口访问你的 Music Assistant 服务器
- <b>发送端：VBAN 流名称。</b> 在发送端计算机上为该音频流指定的名称。必须完全匹配，否则将收不到任何内容。最多 16 个字符，只能使用字母和数字
- <b>发送端：VBAN Sender 主机名/IP 地址。</b> 发送音频的计算机的地址
- <b>PCM 音频格式。</b> 与发送端计算机保持一致
- <b>PCM 采样率。</b> 与发送端计算机保持一致
- <b>声道。</b> 单声道为 `1`，立体声为 `2`

在 ADVANCED（高级）部分：

- <b>接收端：绑定的 IP/网络接口。</b> 监听服务器的哪一个网络连接。默认值 `0.0.0.0` 表示全部接口，这几乎总是你想要的结果
- <b>接收端：VBAN 队列策略。</b> 当音频到达的速度超过处理速度时采取的操作。选项包括 `Clear entire queue`、`Clear the oldest half of the queue` 和 `Remove single oldest queue entry`
- <b>接收端：VBAN 数据包队列大小。</b> 可以等待处理的音频数量。在较慢的服务器上提高该值可能会有帮助，但大多数人无需修改它

## 已知问题 / 说明

- 要收听该插件的音频，请在侧边栏中打开“浏览”（Browse），然后选择所需的 VBAN Receiver 流
- 声音从另一台计算机发出到从你的扬声器播出之间会有少量延迟。延迟大部分来自末端的播放器而非本插件，因此延迟多少取决于你使用的扬声器。它不适用于任何声音需要与画面同步的场景
- 以这种方式发送的音频在传输过程中如有丢失不会重发，因此网络质量很重要。有线连接比 Wi-Fi 可靠得多。在拥塞或信号较弱的网络上，你可能会听到声音中断或爆音
- 发送端计算机运行缓慢或繁忙也可能导致声音断断续续
- 仅支持 VBAN 的音频部分，不支持其其他功能

## VBAN 发送端

### VB-Audio Windows Apps
大多数 <a href="https://vb-audio.com/index.htm" target="_blank" rel="noopener noreferrer">Voicemeeter 应用</a>（来自 VBAN 协议的创造者）都具有 VBAN Sender 功能，其中“最简单”的是 Voicemeeter Banana。这些调音台应用功能齐全、相当复杂，且配置高度依赖系统。关于如何配置它们，官方文档和 YouTube 视频是远比此处所能提供的更为详尽的信息来源。从基本层面来说，这些应用会安装许多 Voicemeeter 系统音频设备。将 Voicemeeter Input 设备选为默认输出设备即可通过 VBAN 路由整个系统音频，或者在音量混合器（Volume Mixer）中将它选为某个应用程序的输出设备。

基本提示：

* 请确保以管理员身份运行安装程序。
* 在 Hardware Out（硬件输出）部分，将 A1 输出设备配置为 MME 设备。
* 在某些情况下，可能需要禁用网卡的节能功能。

点击 VBAN 按钮来配置一个输出流（Outgoing Stream）：
* IP Address：填 MA 服务器的 IP
* 流名称、采样率和音频格式——在 VBAN Receiver 插件设置中填写相同的值
* UDP Port——帮助文档显示此应用过去允许在此处设置 VBAN Receiver 的 UDP 端口，但如今已不再如此，默认端口为 6980，因此请在 VBAN Receiver 插件设置中使用此端口。
* 点击“On”以开始推流。

如果在 Voicemeeter 的 VBAN 部分中，输出 VBAN 流旁边出现错误编号/红灯，这是**发送端的问题，而非接收端/MA 端的问题**。很可能是调音台配置中有误。

## Pipewire
Pipewire 系统拥有 <a href="https://docs.pipewire.org/page_module_vban_send.html" target="_blank" rel="noopener noreferrer">vban-send</a> 模块，它会创建一个系统音频 sink（输出端）。任何发送到该 sink 的音频都会被转换为 VBAN 数据包，并发送到目标 ip:port 处的 VBAN Receiver，该 ip:port 需设置为 MA 服务器的 IP 地址以及 VBAN Receiver 插件中设置的监听端口。

`~/.config/pipewire/pipewire.conf.d/01-vban.conf`

```
{
	name = libpipewire-module-vban-send
	args = {
		source.ip = 0.0.0.0
		destination.ip = 127.0.0.1 # MA Server IP
		destination.port = 6980 # VBAN Receiver plugin listener port
		sess.name = "Network AUX" # Match in VBAN Receiver plugin
		audio.format = "S16LE" # Match in VBAN Receiver plugin
		audio.rate = 44100 # Match in VBAN Receiver plugin
		audio.channels = 2 # Match in VBAN Receiver plugin
		stream.props = {
			media.class = "Audio/Sink"
			node.name = "vban-sender-ma"
			node.description = "VBAN sender for MA"
		}
	}
}
```

在桌面环境中，该 sink 会作为音频输出设备出现在声音管理界面中，可用于路由整个系统或单个应用程序的音频。

在无头（headless）环境中，可以使用 <a href="https://docs.pipewire.org/page_man_pw_link_1.html" target="_blank" rel="noopener noreferrer">pw-link</a> 命令通过端口 ID 将音频输出端口连接到 vban-sender-ma 输入端口。这些连接只是临时的，需要在重启或 pipewire 重启后重新创建，而此时端口 ID 很可能已经改变。借助 Wireplumber 会话管理器和一个 lua 脚本，可以实现基于节点属性而非端口 ID 的动态连接：

有关示例，请参见<a href="https://bennett.dev/auto-link-pipewire-ports-wireplumber/" target="_blank" rel="noopener noreferrer">本指南</a>、<a href="https://github.com/bennetthardwick/dotfiles/blob/master/.config/wireplumber/scripts/auto-connect-ports.lua" target="_blank" rel="noopener noreferrer">这个 GitHub 脚本</a>以及<a href="https://franks-reich.net/posts/creating_pipewire_links_with_wireplumber/" target="_blank" rel="noopener noreferrer">这篇文章</a>。
