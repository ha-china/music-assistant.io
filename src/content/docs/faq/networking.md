---
title: 网络基础知识
description: 以通俗的语言介绍这些文档中使用的网络术语，并提供播放器无法被发现时的排查清单
---

# 网络基础知识

Music Assistant（MA）通过您的家庭网络找到您的音箱并向其流式传输音乐。在典型的家庭网络中，这一切都会自动完成，无需任何配置。本页以通俗的语言解释幕后发生的事情、播放器（player）无法被找到时应该检查什么，以及这些文档其他地方使用的网络术语的实际含义。

## Music Assistant 如何找到您的播放器

大多数音箱会定期在网络上进行自我宣告（实际上就是在喊“我是音箱，我住在这个地址！”），而 Music Assistant 会监听这些宣告。（这背后的技术称为 <a href="https://www.ionos.com/digitalguide/server/know-how/multicast-dns/" target="_blank" rel="noopener noreferrer">mDNS 或多播</a>；您会在路由器设置以及这些文档的其他地方看到这些名称。）

这些宣告只在单个家庭网络内传播。它们不会跨越到其他网络，并且可能被某些路由器功能阻挡。这就是为什么服务器和您的播放器必须位于同一网络上，也是为什么“播放器未找到”的问题几乎总是由网络上阻挡宣告的某些因素造成的。

## 排查清单：我的播放器无法被发现

请逐项排查下面的列表；排序依据是各项最终成为原因的频繁程度：

1. **所有设备都在同一网络上吗？** MA 服务器和您的播放器必须连接到同一个家庭网络。服务器通过网线连接到路由器、音箱使用 Wi-Fi，这通常没问题（这仍然是同一个网络），但请注意下面提到的几种情况。
2. **访客 Wi-Fi。** 访客网络会有意将设备相互隔离。如果任何播放器（或服务器）位于访客网络上，发现功能（discovery）就会失败，因此请把所有设备都移到您的主网络。某些路由器有一个类似的针对单个网络的设置，称为“客户端隔离”（client isolation）或“AP 隔离”（AP isolation）（<a href="https://www.tp-link.com/us/blog/2586/what-is-ap-isolation-and-when-to-enable-it-/" target="_blank" rel="noopener noreferrer">在此有说明</a>）；对于播放器所在的网络，该设置必须处于关闭（OFF）状态。
3. **VPN。** 如果运行 MA 的设备，或者您用来访问 MA 的手机/笔记本电脑，连接了 <a href="https://au.norton.com/blog/vpn/how-does-a-vpn-work" target="_blank" rel="noopener noreferrer">VPN</a>，那么它实际上处于另一个网络上。请断开 VPN。
4. **路由器或 mesh Wi-Fi 设置阻挡了宣告。** 商用级和“专业消费级”（prosumer）设备（UniFi/Ubiquiti、Omada、pfSense、可管理交换机）通常默认限制宣告流量。请在您的路由器或控制器应用中查找以下设置：
   - **mDNS / 多播 DNS** - 必须启用
   - **多播转单播（Multicast to Unicast）**（有时称为多播增强）- 请将其关闭（OFF）；已知这会破坏 UniFi 设备上的发现功能
   - **多播过滤/阻止** - 请将其关闭（OFF）
   - **<a href="https://www.ionos.com/digitalguide/server/know-how/igmp-snooping/" target="_blank" rel="noopener noreferrer">IGMP 侦听（IGMP snooping）</a>** - 对于配有 Sonos 播放器的 UniFi 设备，请将其开启（ON）
5. **相互隔离的网络（VLAN）。** 某些自定义的网络设置会有意将家庭划分为多个相互隔离的网络，例如为智能设备单独设置一个“IoT 网络”。这称为 <a href="https://www.youtube.com/watch?v=x-QNtpD4_UU" target="_blank" rel="noopener noreferrer">VLAN</a>。发现功能无法跨越 VLAN，因此 MA 及其所有播放器必须位于同一个 VLAN 上。如果您从未听说过 VLAN，那您几乎可以肯定没有使用它，可以跳过这一步。MA 团队不支持跨 VLAN 运行 MA。
6. **防火墙和全网络范围的拦截工具。** 防火墙可能会阻挡播放器所使用的（有时是随机的）连接，而 AdGuard、Pi-hole 或 pfSense 规则等工具也可能干扰发现和流式传输。要排除这些因素，请将它们完全临时禁用；仅仅添加一条例外规则并不是充分的测试。

如果经过以上所有步骤后发现仍然失败，请参阅[故障排除](/faq/troubleshooting/)页面，了解如何收集日志并寻求帮助。

## 排查清单：我的播放器过一段时间后掉线或停止播放

一个能够被发现、开始播放、但随后出现爆音、跳音或停止的播放器，与从未被发现的播放器是不同的问题。发现功能是正常的。是某种因素在音频开始流动后将其中断。

**为什么在厂商自己的应用中正常，在这里却不行。** 像 Apple Music 和 Spotify 这类应用会提前向音箱发送大量音频（多达数十秒），音箱会从这段缓存中播放。如果网络在中途丢失了一些数据，还有充足的时间重新发送，因此您完全听不出任何问题。而 Music Assistant 是在播放的同时发送音频的，大约只提前两秒。这正是它能让多个音箱保持同步、并在您按下播放的瞬间开始播放曲目的原因，但这也意味着一个一直存在、一直被掩盖的网络故障，现在变得能被您听到了。

因此，“在其他所有应用中都正常”并不能排除网络问题。网络本身没有任何变化。变化的是发送方能用来掩盖问题的余量变少了。

### 从这里开始：问题真的出在网络吗？

请先做这一步。如果测试结果干净无误，本页其余内容都不会有帮助，您可以到此为止。

**在播放器播放时对它持续运行 ping。** Ping 是内置在每台计算机中的一个小工具。它反复询问设备“你在吗？”，并打印出每次回复所花的时间，因此两者之间链路上的任何问题都会表现为回复缓慢或缺失。如果您对它不熟悉，<a href="https://www.youtube.com/watch?v=ZCMMyzBv354" target="_blank" rel="noopener noreferrer">这个简短的视频</a>解释了它是什么以及如何解读它的输出。

在播放器自带的应用或您路由器的设备列表中找到播放器的 IP 地址，然后在同一网络中的一台计算机上：

```text
ping 192.168.1.50          Mac or Linux
ping -t 192.168.1.50       Windows
```

让它持续运行几分钟，至少经历一次掉线，并留意 `time=` 值。

- **数值稳定且较低，没有回复丢失。** 有线连接下为几毫秒，良好的 Wi-Fi 下最高约 30 毫秒。您的网络没有问题，可以到此为止，然后参阅[故障排除](/faq/troubleshooting/)了解如何收集日志。
- **回复丢失，或数值跳到几百毫秒。** 这就是罪魁祸首，下面的步骤值得一一排查。如果数值变差的时间点与音频出问题的时刻一致，那您就找到原因了。

在做测试的同时，还有两点值得检查。**它只影响一个播放器还是所有播放器？** 如果所有播放器同时出问题，则指向 Music Assistant 服务器而非某个音箱，因此请对服务器运行同样的 ping。另外，**服务器是否繁忙？** 处理能力不足的服务器，或正在进行媒体库扫描的服务器，可能会导致音频卡顿，其表现与网络故障一模一样。正是 ping 能够把这两者区分开来。

### 如果 ping 显示存在问题

> [!NOTE]
> 如果音频在一段固定的时长后停止，并且当您更改输出编解码器或采样率时该时长也随之变化，那么这不是您的网络问题。这是播放器内部的限制。Cast 用户请参阅[播放中途停止](/player-support/google-cast/#playback-stops-part-way-through-a-track)。

1. **尽可能使用网线。** 有线连接的播放器可以彻底消除整个问题，而将 Music Assistant 服务器用网线连接则能同时改善所有播放器。如果只做一件事，那就做这一件。
2. **在音箱实际所在的位置检查信号**，而不是看路由器声称的数值。位于墙后、柜子里或另一楼层的音箱，从路由器角度看可能很健康，但实际上仍在苦苦挣扎。把它挪动一米就是一个零成本的测试。
3. **留意节能设置。** 音箱上的 Wi-Fi 节能、服务器网卡上的电源管理，以及会休眠或让硬盘停转的服务器，都会导致毫无明显原因、时有时无的掉线。以固定间隔出现的掉线强烈暗示有东西正在进入休眠。
4. **考虑还有哪些东西在使用 2.4 GHz。** 微波炉、无绳电话、蓝牙以及您的邻居都处于这个频段。如果您的音箱可以使用 5 GHz，请把它们放到 5 GHz 上。如果它们只支持 2.4 GHz，那么更换信道值得一试。

<details>
<summary>有多个接入点？还有一些其他可以尝试的方法</summary>

多个接入点会带来其自身的问题，而且是只在某些房间才出现掉线的常见原因。如果您只有一个路由器，请跳过此部分。

5. **调低发射功率。** 这感觉违反直觉，但往往正是解决之道。所有接入点都以满功率“喊叫”时会相互干扰，音箱会紧抓着远处声音大的那个接入点，而不是紧邻的好的那个。中等功率是合理的起点。
6. **防止音箱四处漫游。** 关闭频段导航（band steering）和快速漫游（fast roaming），并且在您的设备允许的情况下，将每个音箱绑定到离它最近的接入点。在曲目播放中途切换接入点的音箱会在切换期间丢失音频。
7. **手动设置信道**，并关闭任何夜间或自动信道优化，这种优化可能会在音箱正常播放时突然更换其所在的信道。
8. **缩小信道宽度。** 当接入点彼此靠近时，更宽并不更好。2.4 GHz 上 20 MHz、5 GHz 上 40 MHz 是合理的起点。
9. **关闭多播增强和多播过滤**（如果尚未这样做）。上面为了发现功能已经列出它们，它们同样会干扰播放。

要找出是哪个接入点造成的，请关闭除一个之外的所有接入点，把一个音箱放到与它相同的房间里，并且只向那个音箱播放。如果此时没有问题，再逐个重新开启其他接入点，直到问题再次出现。

</details>

## 术语通俗解释

这些文档其他地方使用的网络术语，用通俗的语言解释。使用 Music Assistant 并不需要理解这些术语；本节用于在文档页面或支持交流中提到其中某个术语时供您查阅。

- **mDNS（多播 DNS，Multicast DNS）。** 即上文描述的“宣告”系统。设备广播自己的名称和地址，以便其他设备能够找到它们，无需任何中央目录。同样的技术也被称为 Bonjour、zeroconf 或 Avahi。<a href="https://www.ionos.com/digitalguide/server/know-how/multicast-dns/" target="_blank" rel="noopener noreferrer">了解更多</a>
- **多播/广播（multicast/broadcast）。** 一种将一条消息同时发送给多台设备（而非发送给某一特定设备）的方式。发现宣告使用的是多播。企业级网络设备通常会限制多播，因为它会在大型网络上产生噪音；家用设备则依赖它。
- **SSDP（简单服务发现协议，Simple Service Discovery Protocol）。** 第二种宣告系统，由 UPnP/DLNA 设备使用，与 mDNS 并行工作。Music Assistant 提供了启用它的设置（[**设置 → 系统 → 发现**](/settings/core/#discovery)），用于发现常规发现功能找不到的播放器。与 mDNS 一样，它依赖多播，因此相同的路由器设置也会影响它。
- **IGMP 侦听（IGMP snooping）。** 一种路由器/交换机功能，用于管理多播消息被交付给哪些设备。根据设备的不同，它既可能有助于发现，也可能阻碍发现；已知的情况见上面的排查清单。<a href="https://www.ionos.com/digitalguide/server/know-how/igmp-snooping/" target="_blank" rel="noopener noreferrer">了解更多</a>
- **子网/"同一网络"/“扁平网络”/“二层网络”（subnet / same network / flat network / Layer 2 network）。** 同一件事的不同说法。所有设备可以直接相互通信，中间没有路由器或防火墙。默认的家庭网络就是一个扁平网络。当这些文档说服务器和播放器必须位于同一子网或扁平网络上时，意思是：中间没有 VLAN、没有访客网络，也没有 VPN。<a href="https://www.networkfuntimes.com/a-complete-beginners-guide-to-subnetting/" target="_blank" rel="noopener noreferrer">了解更多</a>
- **VLAN（虚拟局域网，Virtual LAN）。** 将一个物理网络划分为多个相互隔离的网络的方法，有时用于自定义的家庭网络设置（例如为智能家居设备设置单独的网络）。默认的家庭设置中没有 VLAN。<a href="https://www.youtube.com/watch?v=x-QNtpD4_UU" target="_blank" rel="noopener noreferrer">了解更多（视频）</a>
- **VPN（虚拟专用网络，Virtual Private Network）。** 一种加密隧道，可将您的设备“虚拟地”置于另一个网络上，例如您的办公室或某个隐私服务。连接期间，设备实际上并不在您的家庭网络上，因此发现和流式传输会中断。<a href="https://au.norton.com/blog/vpn/how-does-a-vpn-work" target="_blank" rel="noopener noreferrer">了解更多</a>
- **防火墙/开放端口。** 防火墙控制允许哪些网络连接。“端口”是一个有编号的门，程序在门后监听；“开放端口”就是告诉防火墙允许连接到那扇门。开放端口的方法因路由器或防火墙产品而异，请查阅您所用产品的手册。MA 及其播放器使用许多端口，其中一些是随机选择的，这就是为什么不支持在限制严格的防火墙后运行 MA。
- **Ping。** 内置于 Windows、macOS 和 Linux 中的一个小工具，反复向网络上的另一台设备请求回复，并报告每次回复所花的时间。它有助于将网络故障与其他问题区分开来，因为它能在丢包和延迟发生时即时显示出来。<a href="https://www.youtube.com/watch?v=ZCMMyzBv354" target="_blank" rel="noopener noreferrer">了解更多（视频）</a>
- **频段导航（band steering）。** 一种 Wi-Fi 功能，为设备决定使用 2.4 GHz 还是 5 GHz 频段，通常会把设备推到较不繁忙的 5 GHz 上。这对手机和笔记本电脑有帮助，但它可能会在曲目播放中途把音箱切换到另一个频段，切换期间音频会停止。<a href="https://www.dlink.com/uk/en/technology/band-steering" target="_blank" rel="noopener noreferrer">了解更多</a>
- **信道宽度（channel width）。** Wi-Fi 网络占用的无线电频谱宽度，以 MHz 为单位。更宽的信道可以一次承载更多数据，但与周围网络的重叠也更多，因此在多个接入点或邻居网络彼此靠近的环境中，较窄的设置通常更稳定。<a href="https://support.microsoft.com/en-us/windows/experience/connectivity-networking/wi-fi-and-your-home-layout" target="_blank" rel="noopener noreferrer">了解更多</a>
- **快速漫游（fast roaming）。** 一种 Wi-Fi 功能，可加快设备从一个接入点切换到另一个接入点时的切换速度，从而使通话或流媒体播放不中断。它是为会移动的设备设计的，而固定放置在一处的音箱用不上它。<a href="https://www.devolo.co.uk/en/glossary/fast-roaming" target="_blank" rel="noopener noreferrer">了解更多</a>
- **发射功率（transmit power）。** 接入点广播的“音量”。调高功率听起来应该有帮助，但当多个接入点彼此靠近时，这会使它们相互干扰，并促使设备滞留在远处声音大的接入点上，而不是附近好的那个。<a href="https://www.youtube.com/watch?v=PC677xAYu28" target="_blank" rel="noopener noreferrer">了解更多（视频）</a>
- **反向代理（reverse proxy）。** 位于 Web 应用前端的服务器，通常用于添加 HTTPS 或一个友好的地址（例如用 `music.example.com` 代替 IP 地址和端口号）。只有在您自行设置了反向代理来访问 MA 界面时才与此相关；播放器始终需要直接访问服务器。<a href="https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/" target="_blank" rel="noopener noreferrer">了解更多</a>
