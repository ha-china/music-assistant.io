---
title: 故障排除
description: 常见问题与解决方法
---

# 故障排除

## 首先可以尝试的方法

**日志。** 查看日志并尝试解决您在其中看到的任何错误，特别是与[标签](/music-providers/local-files/#tagging-files)相关的错误。连接错误通常表明存在网络问题（包括 Adguard 或 pi-hole 的拦截）或容器配置错误。

**复杂网络。** 最常见的问题可能是人们试图在复杂的网络环境中运行 MA。不支持在 VPN 之后、跨子网或 VLAN、防火墙之后、本地 SSL、使用反向代理或在容器中运行（使用我们推荐的 docker compose 时除外）（这或许可以工作，但我们无法为您排查问题，因为 MA 由一个小团队维护，没有资源来解决非 MA 相关的问题）。核心程序中已添加了一些选项，以帮助使用非标准配置的用户，但这些选项不提供支持。请在 Discord 中搜索这些问题，因为用户经常报告此类问题，并发现故障是由他们自己的配置引起的；他们的解决方案可能对您有帮助。有关这些术语的通俗解释，请参阅[网络基础](/faq/networking/)。

**广告拦截器和 DNS 过滤器。** 越来越多的用户报告的问题是由使用 AdGuard、Pi-hole、pfSense 等工具引起的。如果您的问题与无法流媒体播放有关，或者日志中出现与地址无法访问或超时相关的错误，请在寻求帮助之前禁用所有这些工具。仅仅应用一条规则是不够的，必须在完全禁用这些工具的情况下问题仍然存在。

**不受支持的安装方式。** 明确地说，使用 HAOS（Home Assistant Operating System）或简单 docker 以外的安装方式，和/或更复杂的网络配置运行，风险自负，我们没有能力提供直接支持（例如不支持 Kubernetes）。

**流设置。** 在 [**设置 → 系统 → 流**](/settings/core/#streams)中有一些可用的设置，选中“显示高级设置”（Show advanced settings）开关即可看到，如果您使用的是非标准配置，这些设置可能会对您有所帮助。如果您在自己的 docker 容器中运行 MA，请确保正确设置了 PUBLISHED IP ADDRESS（发布的 IP 地址）和 BIND TO IP/INTERFACE（绑定的 IP/接口）。确保容器处于 HOST 网络模式，并注意[示例 docker 命令](/installation/#docker-image)中所需的额外权限。

**播放器发现。** 大多数播放器会被自动发现。它们会在网络上广播自己，MA 会监听这些广播（这种技术称为 mDNS/组播，[这里有通俗的解释](/faq/networking/)）。如果您的播放器没有被发现，说明网络中的某些东西阻止了这些广播。请按照[发现检查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐一排查；最常见的原因是访客 Wi-Fi 网络、VPN，以及会过滤组播流量的路由器设置。企业级网络设备往往尽可能阻止组播流量，因为当客户端较多时它会损害性能；但在家庭环境中，组播是必不可少的，因为所有家用设备都依赖它。Ubiquiti 设备的用户必须确保 `Multicast to Unicast` 设置处于关闭（OFF）状态。

**Home Assistant URL。** 确保 HA 内部 URL 设置正确。HA 设置 >> 系统 >> 网络 >> Home Assistant URL >> 本地网络（设置为自动，或使用您的 HA 内部 IP）。如果设置为自动，您可以尝试将其更改为 http://your.internal.ip:8123/

**WiFi 与带宽。** MA 以高质量进行流传输，这可能会耗尽较差网络连接的带宽。如果可能，请让 MA 播放器使用有线连接。输入编解码器与输出编解码器并不总是相同（默认输出通常为 FLAC），因此播放低质量的 MP3 并不会改变表观性能。如果您遇到卡顿或其他播放中断问题，而这些问题在有线播放器或靠近接入点的播放器上并不明显，那么很可能应归咎于较差的 WiFi。您需要改善 WiFi 覆盖范围。播放器有一个使用有损编解码器的选项，可降低带宽需求，该选项位于[播放器的协议设置](/settings/individual-player/#output-protocols)中。

**物理设备。** 检查物理设备的设置。有许多报告表明，问题实际上出在 MA 之外的设置上，例如接收器被设置为重复播放曲目，或者 ESP 设备在安装时传入了错误的参数。

**文件标签。** 确保本地文件已[正确打上标签](/music-providers/local-files/#tagging-files)。

**播放。** 如果播放器已被发现并启动，但出现卡顿、中断、曲目之间有间隙或显示屏上不显示任何内容，请参阅下方的[播放器能播放，但播放不正常](#the-player-plays-but-not-properly)。

**身份验证。** 如果是音乐源的问题且该源需要身份验证，请清除身份验证并重新登录。

**浏览器。** 如果是前端问题，或者与登录需要重定向到其他网站的提供程序或源有关，请尝试使用其他浏览器。如果您在移动设备上尝试，请在笔记本电脑或 PC 上试试。已知 Firefox 和 Safari 存在一些缺陷。

**隔离故障。** 将故障范围缩小到单个播放器或音乐源。在另一个播放器上播放相同的内容，然后在原播放器上播放来自另一个音乐源的内容。如果您只有一个播放器，那么内置的网络播放器 [Sendspin](/player-support/sendspin/) 始终可用；如果您只有一个音乐源，那么可以试试电台。了解某个播放器对一个源有效但对另一个源无效，或者某个播放器出故障而其他播放器正常，能告诉您问题不在哪里。

**提供程序文档。** 每个[播放器提供程序](/player-support/)和[音乐源](/music-providers/)页面都有自己的“已知问题”部分，其中一些还针对该设备或服务添加了故障排除步骤。在继续深入之前，请先查看您正在使用的那个页面。

**语音。** 有关语音问题，请参阅 <a href="https://www.home-assistant.io/voice_control/troubleshooting/" target="_blank" rel="noopener noreferrer">Home Assistant 语音故障排除</a>，以及[语音控制](/integration/voice/)以了解 Music Assistant 如何融入其中。如果您没有使用 HOME ASSISTANT 作为对话代理（Conversation Agent），则必须先在 HA 论坛寻求帮助。如果他们让您回到本项目，请在报告中明确说明您使用的是 LLM 作为对话代理（Conversation Agent），并说明 HA 支持网络无法提供帮助的原因。

**断电重启。** 如果物理播放器无法连接或没有声音，请尝试将其断电重启。

**已知问题和重启。** 查看 GitHub Issues 和 Discord，看看这是否是已知问题。如果不是，请按顺序尝试重启 MA、重启 HA，以及完整重启主机（HOST REBOOT）。如果是集成（integration）问题，请尝试在 HA 设置中将其删除，然后重启 HA，再重新安装。

## 如何报告问题

在提出问题之前，请[先阅读这篇文章](/support/)。请使用模板报告问题，并尽可能提供详细信息。帖子中往往不清楚究竟在何处输入了什么、某项是如何配置的，或者选择了哪些菜单。截图会很有帮助。

从 [**设置 → 系统 → 诊断**](/settings/core/#diagnostics)下载并附加诊断报告。这是您能提供给我们的最有用的东西，应包含在每个报告中。

从 [**设置 → 系统 → 诊断**](/settings/core/#diagnostics)下载并附加完整的日志。这些日志在开始时是可选的，因为我们在阅读诊断报告后可能会要求提供更详细的日志，但从一开始就附上它们也无妨。如果默认级别没有提供有用的信息，启用调试日志是可以的。不建议在日常使用中以全局级别运行调试日志，因为它有资源开销；仅在出现问题时才这样做。请勿在全局级别使用详细（verbose）日志级别，因为它会使日志几乎无法阅读。如果确实需要，但仅在开发人员要求的情况下，可以按单个提供程序/源启用详细日志。

当您遇到前端问题时，也可以查看浏览器控制台；在 Chrome 浏览器中是 --> F12 打开开发者工具 --> 控制台。

## 提供程序或源无法工作

导航到 MA 设置，检查该提供程序或源条目。如果条目旁边有一个带感叹号的红色圆圈，请将鼠标悬停在该图标上以查看错误消息。

![image](/assets/screenshots/setup_error.png)

该错误结合该提供程序的设置说明来看往往更容易理解，因此也请查看它在[音乐源](/music-providers/)或[播放器提供程序](/player-support/)下的专属页面。这些页面列出了已知问题，对于需要账户或密钥的项目，它们通常会解释登录被拒意味着什么问题。

## 为什么曲目/专辑在不同源之间无法匹配

在流媒体源之间匹配条目具有挑战性，因为它们并不都提供相同或唯一的元数据来明确确定匹配。如果您认为存在明显的匹配（例如相同的艺术家、曲目和专辑），请提交问题报告。有关 MA 如何以各种方式使用元数据的更多信息，请参阅[元数据](/metadata/)

## 我的媒体播放器不可用或无法播放

如果播放器已被发现并开始播放，但随后出现爆音、跳过或一段时间后停止，那是另一个问题，由[中断检查清单](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while)涵盖。请从那里的 ping 测试开始，它可以在几分钟内告诉您的网络是否有问题。请注意，播放器在其制造商自己的应用中可能运行完美，但在这里仍会出现中断，因为这些应用会提前很长时间发送音频，从而能够掩盖 Music Assistant 无法掩盖的网络故障。

如果播放器似乎正常启动，进度条在前进，曲目详情和封面也已显示，但没有声音发出，请检查 **设置 → 系统** 下 [流（Streams）](/settings/core/#streams)设置中的 <b>发布的 IP 地址（Published IP address）</b>。这是 Music Assistant 提供给播放器的、用于获取音频的地址；因此，如果它被设置为播放器在您的网络中无法访问的地址，播放器就会停留在那里，看起来像是在播放，实际上却什么也没有接收到。同样的症状也可能来自任何其他阻止音频连接返回服务器的因素，例如防火墙、相互独立的 VLAN、访客网络、Wi-Fi 上的“客户端隔离”，或运行 Music Assistant 的机器上的 VPN。即使发现功能正常、播放器也正常出现在列表中，也不代表音频能够通过；因此，如果上述任何情况适用于您，请仔细阅读[网络基础](/faq/networking/)。

对于缺失或完全无法启动的播放器，请继续阅读。

首先检查播放器是否已被发现，只是没有出现在[播放器列表](/ui/#player-list)中。为此，请导航到 [**设置 → 播放器**](/settings/individual-player/)。如果播放器在那里，请查看条目旁边是否有沙漏 ⧖，它表示由于某种原因该播放器不可用。另请查看单个播放器的**常规设置（Generic Settings）**，以确定在什么情况下播放器会在 UI 中被隐藏。

如果播放器未显示在 MA 设置的播放器列表中，请查看播放器提供程序列表。如果您的设备不支持所列协议中的任何一个，那么它目前无法工作。请查看 <a href="https://github.com/orgs/music-assistant/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>，看看其他人是否已请求支持，并加入讨论。

如果您的设备确实支持所支持的某个协议，请查看[该播放器提供程序的文档](/player-support/)，了解特定于它的已知问题和故障排除提示。

如果您的设备仍然无法工作，而您认为它应该可以工作，请查看完整日志中的发现信息和错误。回顾本页顶部的“首先可以尝试的方法”，因为通常如果您到了这一步仍未确定播放器无法工作的原因，那将是网络或非标准安装问题，通常需要您自己解决。请在 GitHub <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">Issues</a>、<a href="https://github.com/orgs/music-assistant/discussions" target="_blank" rel="noopener noreferrer">Discussions</a> 和 <a href="https://discord.gg/kaVm8hGpne" target="_blank" rel="noopener noreferrer">Discord</a> 中搜索，因为很可能有人之前问过您的问题。

## 播放器能播放，但播放不正常

已被发现并开始播放，但出现卡顿、中断、曲目之间有间隙或显示屏上不显示任何内容的播放器，通常可以通过协议设置中的某一项来解决。它们都位于该播放器设置中的[输出协议](/settings/individual-player/#output-protocols)下，且仅在 `Show advanced settings` 开关打开时可见。该页面解释了每项设置的作用。下面的症状说明了应该调整哪一项。

每次只更改一项，在断定它没有帮助之前，先播放一两首曲目试试。更改其中任何一项都会重新加载播放器，因此每次都会短暂中断播放。

**卡顿或中断，主要发生在 Wi-Fi 上。** Music Assistant 默认发送无损音频，这是较弱的无线链路上所能承载的最苛刻的内容。将 **输出编解码器（Output codec）** 设置为 MP3 或 AAC，它们所需的带宽要少得多。如果同一网络上的有线播放器一切正常，那么原因在于网络而不是 Music Assistant，请按照[中断检查清单](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while)进行排查。信号强度强并不能证明网络是健康的。当您有多个接入点时，发射功率、频段引导（band steering）和信道宽度等设置比信号格数更重要，检查清单中涵盖了这些内容。

**曲目之间有间隙，或播放时在曲目切换处停止。** 打开 **启用队列流模式（Enable queue flow mode）**，它会将整个队列作为一个连续流发送，而不是一次发送一首曲目。代价是此后大多数播放器将不再显示曲目信息。[曲目排队](/faq/tech-info/#track-queueing)解释了这两者的区别。

**播放在一首曲目中间停止、完全无法开始，或无法在曲目内跳转。** 请逐一尝试 **HTTP Profile** 选项，从 Profile 3 开始。这决定了 Music Assistant 在开始发送之前是否会告知播放器即将发送的音频量，少数播放器若不被告知就无法正常播放。

**播放器不显示曲目名称或艺术家。** 这发生在流模式下，因为播放器接收到的是一个长的连续流，而不是独立的曲目。将 **向流中注入元数据（Try to inject metadata into stream (ICY)）** 设置为 Profile 1；如果您还想要专辑封面，则设置为 Profile 2。有些播放器无法正确处理 Profile 2，因此如果播放变得不稳定，请退回到较低的档位。

**无声，或拒绝播放更高质量的文件。** 从 **此播放器支持的采样率（Sample rates supported by this player）** 中移除较高的采样率。默认选择的采样率是刻意为大多数播放器保持安全的设置，高于它们的选项是供您尝试的，并不保证有效。

如果这些方法都不起作用，请查看[您的播放器提供程序页面](/player-support/)。每个页面都有一个“已知问题”部分，其中一些还包含针对该设备特有问题的故障排除步骤。

## 我的所有媒体都丢失了 

确保收藏过滤器处于关闭（OFF）状态。每个视图的顶部都有一个 ❤️。确保它是空心的。

如果您试图通过 HA 媒体视图查看播放列表，请注意只有已收藏的播放列表才会显示；此外，您还需要选择一个 MA 播放器才能看到 MA 媒体库。HA 的媒体浏览器没有 MA 前端所具有的任何过滤或排序选项。

## 在流媒体源上看不到某位艺术家的任何曲目或专辑

请参阅[媒体库导入控制](/music-providers/#library-import-control)

## 我的本地专辑封面没有被识别

嵌入音乐曲目中的封面图像总是会被读取，但 folder.jpg 图像只有在文件夹名称与专辑名称**完全**匹配时才会被导入（文件夹名称中禁止使用的字符除外。例如 / ）

如果没有本地封面，则会非常缓慢地在后台查询在线提供程序。如果曲目也没有唯一的 MusicBrainz ID，那么大多数提供程序将完全不会返回结果。有关每个提供程序需要什么，请参阅[提供程序摘要](/metadata/#provider-summary)。

## 我的音乐没有任何元数据

对于本地文件，您可以完全为音乐打上标签（这是首选方式，建议使用 <a href="https://picard.musicbrainz.org/" target="_blank" rel="noopener noreferrer">Picard</a>），或者在艺术家文件夹中放置 <a href="https://kodi.wiki/view/NFO_files" target="_blank" rel="noopener noreferrer">artist.nfo</a>（就像图片一样），这样将被优先采用。只有在没有本地数据时才会查询在线元数据提供程序。

## 部分播放列表丢失

对于某些源（Spotify 是一个已知的例子），所使用的身份验证方法可能会影响某些类型播放列表的可见性。对于 Spotify 源，详情请见[此处](/music-providers/spotify/#known-issues--notes)

## 我已更新，但 MA 看起来还是旧版本或无法正常工作

可能您的浏览器正在使用缓存的前端版本。尝试强制刷新，Windows 上的 Chrome、Firefox 或 Edge：按 Ctrl+F5（如果不起作用，请尝试 Shift+F5 或 Ctrl+Shift+R）。

如果上述方法不起作用，请<a href="https://support.thundertech.com/hc/en-us/articles/208095793-Disable-Browser-Caching-Using-Developer-Tools" target="_blank" rel="noopener noreferrer">在此查看更多选项</a>

对于 iOS 应用，请参阅<a href="https://community.home-assistant.io/t/anyone-know-how-to-clear-cache-in-the-ios-app/64569/10" target="_blank" rel="noopener noreferrer">此处</a>

## MA 看不到我功放的第二个区域（zone），或者 MA 无法打开我的功放

MA 是您功放的一个输入源（INPUT）。因此您需要打开功放电源，然后选择 MA 正在流传输到的输入（例如 AirPlay、DLNA、Chromecast）。因此，MA 看不到功放的区域（zone），它只能看到功放的兼容输入。

某些功放可能会在检测到信号时自动开机，因此请检查功放的选项。如果此功能不可用，那么您将需要通过其他方式打开功放电源，例如[为播放器控制分配一个 HA 实体（entity）](/settings/individual-player/#player-controls)。

## 我的本地音乐没有被导入，或者我在日志中看到缺少 ID3 标签的警告

这很可能是一个标签问题。请参阅[此处](/music-providers/local-files/#tagging-files)

## MA 干扰了我的 Spotify Connect 或其他流媒体应用

如果 MA 播放器在 MA UI 中被“开机”，那么 MA 会理解为它被允许接管该播放器。之后，即使您是通过其他应用开始播放而非通过 MA 开始播放，这种情况也可能会发生。为避免这种情况，请将 MA 播放器“关机”。

## MA 无法启动

如果在日志中看到以下错误（或类似的错误）：
  ```
  File "/app/venv/lib/python3.12/site-packages/zeroconf/_utils/net.py", line 293, in add_multicast_member
      listen_socket.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, _value)
  OSError: [Errno 105] No buffer space available
  ```
  这很可能是由于达到了主机系统上的组播组限制。有关更多信息，请参阅<a href="https://unix.stackexchange.com/questions/23832/is-there-a-way-to-increase-the-20-multicast-group-limit-per-socket" target="_blank" rel="noopener noreferrer">此解释</a>

如果以上不是问题所在，请以安全模式启动 MA：

- 使用 HA 应用时，在配置中选择该开关
- 使用 Docker 时，运行容器并将环境变量 MASS_SAFE_MODE 设置为布尔真值，例如 "1" 或 "true"

如果 MA 现在能启动，您可以通过在设置中点击“重新加载”（点击 3 个点）来启动任何提供程序。如果某个特定提供程序导致 MA 崩溃，请提交包含详细信息的问题。
