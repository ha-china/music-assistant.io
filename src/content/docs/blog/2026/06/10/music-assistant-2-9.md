---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/06/10/music-assistant-2-9"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/06/10/music-assistant-2-9"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant 2.9: Discover Your Sound"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "What's new in"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Music Assistant 2.9"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Marvin Schenkel"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Announcements"

title: "Music Assistant 2.9：探寻你的声音"
description: "Music Assistant 2.9 现已发布，满满都是更新 🎉 从智能播放列表（Smart Playlists）到 Sendspin 可视化效果，快来一探究竟 👀"
cover:
    image: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/06/10/music-assistant-2-9"
    alt: "Music Assistant 2.9: Discover Your Sound"
excerpt: "The crew's been hard at work, and we're pretty excited to show what we've been up to… Music Assistant is back and making waves with version 2.9! 🎉"
date: 2026-06-10T00:00:00.000Z
authors:
  - marvin
tags:
  - release
  - announcement
---

团队一直在埋头苦干，我们非常激动地想向大家展示我们的最新成果……Music Assistant 带着版本 2.9 回来了，再度掀起波澜！🎉

有了前几个版本打下的井井有条的音频生态系统，这一次我们将深入音乐本身。过去几个月里，我们专注于修复错误、添加呼声很高的 provider（音乐源提供方），并为你打造探索媒体库的新方式——这一切都离不开我们出色社区的帮助。

版本 2.9 将复杂的声音密码转译成更简单、更个性化、比以往任何时候都更直观的聆听体验。我们迫不及待地想让你登船体验！

<!--more-->

## “眼前一片清明”

**你的个人专属 Discover（发现）页面**

<img src="/images/blog/2026/06/10/music-assistant-2-9/image4.webp" alt="Screenshot of the Music Assistant Discover page showing personalized Top Picks, a Hits section with genre playlists from Tidal, a New Tracks section with recent releases, and a New Albums section, with album art displayed throughout.">

*专为你打造的页面*

不知道接下来该听什么？焕然一新的 Discover 页面就是你的首选去处！🔎 无需在无尽的媒体库中苦苦翻找，为你精心挑选的热门推荐早已静候你的到来——就像一位总能准确知道此刻该为你拿哪张唱片的友好唱片店店员。找到下一首心爱的曲目，只需轻点几下。

而这仅仅是 Discover 页面重新设计的第一步——在即将发布的版本中，我们将与 UX 和前端专家以及社区一起，逐步改进 UI 和 UX。更多精彩还在后头 👀。但探索远不止于此……

## “美妙的振动”

**深入探索 Audio Analysis（音频分析）**

Music Assistant 迎来了一次重大翻新，新增了一种全新的 provider 类型：Audio Analysis（音频分析）！这项新功能会分析你的音频文件，理解它们究竟独特在哪里——让你能聆听真正打动自己的音乐，并在曲目之间无缝切换，一拍不落。

多亏了我们的贡献者，这项功能在发布之初就带来了一些非常酷的能力：

* **Smart Fades（智能淡入淡出）：**通过对曲目进行节拍检测，Music Assistant 现在可以精准把控智能交叉淡入淡出的时机，让歌曲之间的过渡天衣无缝。
* **Sonic Analysis 与 Sonic Similarity 插件：**感谢 <a href="https://github.com/chrisuthe" target="_blank" rel="noopener">@chrisuthe</a>，我们现在可以分析本地音频文件之间的声学相似度。这让“电台模式”（Radio Mode）和“音乐不停歇”（Don't Stop the Music）等功能首次走进你的本地媒体库——无需任何流媒体服务！更棒的是，你现在还可以用自然语言搜索本地音乐库——也就是说，你可以通过描述音乐听起来的感觉来找到它，而不只是靠它的名字 🤯。
* **AcoustID：**收藏了一堆缺少元数据的老式数字化 CD？AcoustID 会检测音频的声学指纹，将其匹配到 MusicBrainz ID，并自动拉取正确的标签，感谢 <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a> 🙌

当 Audio Analysis 保证你的聆听体验一帆风顺时，Sendspin 则负责照顾你一路上的视觉感受……

## “点燃我的火焰”

**Sendspin 变得可视化**

自 2.7 版本发布以来，Sendspin 已经成为 Music Assistant 让你家中保持同步的关键——而且对它大加赞赏的可不止我们一家！这一开源流媒体协议现已内置于 ESPHome、LedFx，并覆盖日益壮大的第三方客户端社区，遍及 Android、桌面端、ESP32 等平台——这意味着你可以随心所欲地搭建自己的系统。在音频同步稳如磐石的基础上，我们还在打造更多让你享受音乐的方式。在 2.9 中，这意味着 Sendspin 变得*可视化*了。

<img src="/images/blog/2026/06/10/music-assistant-2-9/image1.webp" alt="An ultrawide monitor in a dimly lit room displaying Music Assistant across two panels: the left showing the album Getz/Gilberto by Stan Getz playing 'The Girl from Ipanema,' and the right showing a green frequency visualizer on a red background. Warm orange ambient lighting glows behind the screen.">

*点亮整个房间的音乐 🔥*

从展示曲目的封面和信息，到让灯光与音乐相互呼应——Sendspin 现已支持可视化效果！Music Assistant 2.9 推出了 Philips Hue 与 Sendspin 之间的桥接功能，借助全新的 Smart Fades 节拍分析，你可以让智能灯光跟随曲目节奏同步律动。你的客厅正式变身舞池 🪩。

## “快车道上的生活”

**快速访问你的收藏**

<img src="/images/blog/2026/06/10/music-assistant-2-9/image3.webp" alt="Screenshot of a Music Assistant track listing with a context menu open, highlighting the option to add a track to Shortcuts for quick access.">

*直达精彩内容*

还记得导航菜单上那块闲置的空间吗？现在它不再是一条*空荡荡的栏* 👀 <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@DMoo</a> 让它装满了值得播放的内容：你的快捷方式！现在你可以将任何媒体内容固定下来，一键直达你的最爱。

无论是一首常听曲目、一张循环播放的专辑，还是一份能让你进入状态的播放列表——它们现在都有了专属的家，随时为你的生活配乐。而对于那些准备走得更远的人——无论是深入你的媒体库还是走出它——有一个新插件可以助你抵达……

## “一种魔力”

**隆重推出 Smart Playlists（智能播放列表）**

<img src="/images/blog/2026/06/10/music-assistant-2-9/image2.webp" alt="Screenshot of the Music Assistant Playlists page with the Create Smart Playlist dialog open, showing options to name the playlist, choose between From My Library or Discover sources, and add rules to filter tracks.">

*设定规则，剩下的交给播放列表 🎶*

过去，打造一张完美的混音合集是件苦差事，但有了全新的 Smart Playlist 插件，你将一路畅行！这个由 <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@DMoo</a> 带来的亮眼新功能完全自动化，帮助你充分发掘音乐的潜力。该插件有两种截然不同的工作方式：

* **探索你的媒体库：**设置自定义规则和过滤器来扫描媒体库，构建一个自动更新的队列。想要一份汇集 90 年代高评分、而你最近一个月都没听过的独立摇滚曲目的播放列表？只需设置一次规则，Music Assistant 就会随着媒体库的变化自动刷新你的播放列表。
* **发现更多：**为插件提供“种子”媒体项——一首心爱的曲目、一位特定的艺人，或一种小众流派。插件随后会以这些种子为起点，走出你的媒体库去探索，为你搜罗符合你品味的*新*音乐。

无论你想整理自己的经典收藏，还是想尝试新东西，全新的 Smart Playlist 插件都能把你的配乐安排得明明白白 ✅

## “总也听不够”

**……尽享 2.9 的所有精彩**

由于我们在版本 2.9 中塞入了太多内容，无法在一篇博客中尽数介绍——以下是所有关键更新的一览：

**新增音乐源**

* 添加你的远程 WebDAV 音乐库
* 接入 QQ 音乐——中国大陆最大的免费增值（freemium）流媒体服务
* 收听 Mother Earth Radio：由人工精心挑选、无广告、发烧友级音质的网络电台
* 浏览 MusicMe——一家拥有超过 1300 万首曲目的法国流媒体服务
* 探索网易云音乐（NetEase Cloud Music）的播放列表、歌词和个性化推荐
* 收听 NTS Radio 的直播频道和 Infinite Mixtapes——来自全球 50 多个城市的独立、不拘一格的电台

**新增播放器支持**

* 现已支持 WiiM 和 MSX Bridge 播放器
* 想让音频直接从你的设备播放？Local Audio Out 可将播放直接通过本地硬件输出
* MPD 爱好者可以连接自己的服务器，Samsung WAM 音箱也已获得支持

**更多值得探索**

* 为每个播放器设置音量限制——定义最小值和最大值，避免音量意外过小或过大
* 控制播客和有声读物的播放速度，按需放慢或加快
* 使用全新的 MCP Server Provider，将 Music Assistant 连接到你喜爱的 LLM
* 在电台流上显示艺人图像

精彩还远不止这些！查看<a href="https://github.com/music-assistant/server/releases/tag/2.9.0" target="_blank" rel="noopener">发布说明</a>，了解所有新内容 👀

## “沉醉于这种感觉”

**冒险仍在继续……**

我们的最新版本装满了各种更新，让*你*来掌舵自己的家庭聆听体验。你可以选择你的播放器、你的音乐——以及*你的冒险*。如果你是新手，请前往我们的[入门指南页面](/)获取指引。

版本发布以三个月为周期，我们希望下一个版本中也能融入你的声音！想更快看到新功能并分享早期反馈？加入<a href="https://discord.com/channels/753947050995089438/1083643113484070953" target="_blank" rel="noopener">我们的 Beta 频道</a>，在我们构建的过程中共同塑造未来。你也可以在我们的<a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas" target="_blank" rel="noopener">功能请求页面</a>分享你的想法，或者到<a href="https://discord.com/invite/kaVm8hGpne" target="_blank" rel="noopener">Discord</a> 上打个招呼——我们很乐意与你聊天！
