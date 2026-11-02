---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/03/25/music-assistant-2-8"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/03/25/music-assistant-2-8"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant 2.8: Let's get this party started!"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "What's new in"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Music Assistant 2.8"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Marvin Schenkel"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Announcements"

title: "Music Assistant 2.8：让派对开始吧！"
description: "Music Assistant 2.8 来了！快来了解我们全新的功能阵容：从派对插件（Party Plugin）到播放器合并（Player Merging）等等。你的家庭音频体验再上一层楼。"
cover:
    image: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/03/25/music-assistant-2-8"
    alt: "Music Assistant 2.8: Let's get this party started!"
excerpt: "After months of working with the community on new and exciting arrangements, Music Assistant is ready to take center stage once again. Today, we're thrilled to present… drum roll 🥁… version 2.8!"
date: 2026-03-25T00:00:00.000Z
authors:
  - marvin
tags:
  - release
  - announcement
---

经过数月与社区共同打磨激动人心的全新“编曲”，[Music Assistant](/) 已准备好再次登上舞台中央。今天，我们怀着无比激动的心情向大家呈现……鼓声响起 🥁……**2.8 版本**！

自上一次重大更新以来，团队一直在倾听你的反馈、修复漏洞，并打造能够*架起桥梁*、连接不同音频生态系统的功能。今天，我们将发布一系列*关键改动*，让你的家庭音频比以往任何时候都更智能、更具社交性、更统一。这个版本是社区热情的最好见证，我们已经迫不及待想让你听听播放队列里都排了哪些好东西。

说到这里，<a href="https://sotoh.openhomefoundation.org/" target="_blank" rel="noopener">State of the Open Home 2026</a> 大会也已近在眼前，今年将以*现场直播*的形式呈现 🎉。2026 年 4 月 8 日，社区将齐聚荷兰乌得勒支，庆祝我们共同创造的成果、分享成功经验，并展望未来。加入观众行列，你还有机会亲眼看到 Sendspin（下文详述）的实际演示 👀。<a href="https://events.openhomefoundation.org/sotoh26/" target="_blank" rel="noopener">在此购票</a>，今天就锁定你的席位。

<!--more-->

## “大家一起上”

**合并你的播放器**

<img src="/images/blog/2026/03/25/music-assistant-2-8/image1.webp" alt="Player Merging">

当 AirPlay、Chromecast 和 DLNA 一起走进一台高端回音壁时，会发生什么？以前：一片混乱。直到今天之前，Music Assistant 一直把这些协议当作三个不同的音箱来对待：既凌乱又拥挤，让你的 Home Assistant 仪表盘（dashboard）看起来就像一片嘈杂的控件。

但那是过去，现在是*现在*。在 2.8 版本中，我们借助**播放器合并（Player Merging）**，从*杂乱走向清晰*。<a href="https://github.com/marcelveldt" target="_blank" rel="noopener">Marcel</a> 实现了一些精妙的~~逻辑~~魔法 🪄，能够识别多个协议（例如 Airplay 和 DLNA）何时属于同一台物理音箱。结果就是，你在仪表盘中只会看到**一个**播放器。只需挑选你想使用的音箱，把它们放进一个分组，Music Assistant 就会在幕后处理剩下的一切。

值得注意的是，由于我们从根本上重新设计了播放器的识别方式，这对 Home Assistant 用户来说是一次“破坏性变更（breaking change）”。换句话说，你可能需要重新配置部分播放器分组或 Home Assistant 自动化（automation）。但相信我，一旦你看到那份干净整洁、全部同步的播放器列表，你就再也回不去了！

## “步步高升”

**Sendspin 势头正劲**

本次迭代标志着 Sendspin 的一个重要里程碑。这是我们全新的多媒体串流与同步协议，自首次亮相以来便一路积攒人气。Sendspin 开源且可免费使用，能够将高保真音频、专辑封面和可视化频谱数据无缝串流到你家中的所有设备。当我们在 2.7 版本中发布 Sendspin 技术预览时，我们邀请了所有开发者和 DIY 音频爱好者加入进来，帮助我们在开放的环境中构建和测试……

*而这次合作大获成功*。在你们的助力下，我们取得了重大进展：规范已接近完成，各项实现也即将收尾，一个由[兼容 Sendspin 的客户端](/player-support/sendspin/#supported-clients)组成的生态系统已然成形。2.8 版本通过显著的性能与质量提升展示了这一演进，让 Sendspin 离从预览状态“毕业”又更近了一步。

Sendspin 正在*步步高升*，但在进入副歌之前，先在桥段稍作停留……

## “走进桥段”

**流畅串流**

这正是我们一直在等待的那个功能。在此版本发布之前，如果你想把 Sonos 音箱和 Google Nest（通过 Chromecast）分到一组，那你只能自认倒霉。

在 2.8 中，我们推出了 **Sendspin 桥接（Sendspin Bridges），**它会将 Sendspin “包裹”在你现有的支持 Chromecast 和 AirPlay 的设备（例如 Sonos）之上。通过把这些设备变成 Sendspin 播放器，Music Assistant 现在可以把它们当成一个快乐的大家庭。你终于可以创建混搭不同品牌的 Sendspin 分组，并让它们保持完美同步。客厅里的 Sonos 和厨房里的 Chromecast 终于属于同一战队了！

## “摇滚 DJ”

**派对模式，现已内置**

<img src="/images/blog/2026/03/25/music-assistant-2-8/image2.webp" alt="Party Plugin">

受够了朋友们凑在你耳边问“能放点 90 年代的欧陆舞曲吗”？我们帮你搞定。更准确地说，是 <a href="https://github.com/apophisnow" target="_blank" rel="noopener">@apophisnow</a> 帮你搞定了！

**派对！**正式登场。你现在可以把任何屏幕变成任意播放器的派对仪表盘。你的客人只需用手机扫描二维码，*嘭，*他们就进入了一个精美的“仅限访客”版 Music Assistant 界面。无需下载应用，无需登录，而且——最重要的是——无需分享你的 Wi-Fi 密码。他们可以搜索你的媒体库、把曲目添加到播放队列，甚至还能用点数把歌曲“顶”到最前面。控制权依然在你手中；他们则过足了 DJ 瘾。

而我们并没有止步于播放队列。**卡拉 OK 模式**现已直接内置到仪表盘中。启用后，派对插件（Party Plugin）仪表盘可以全屏显示歌词，并在播放时逐行高亮。是时候拿出麦克风开始演唱了——或者让你的客人成为全场焦点 😉。

<img src="/images/blog/2026/03/25/music-assistant-2-8/image3.webp" alt="Karaoke Mode">

## “选择权在你”

**按心情探索**

<img src="/images/blog/2026/03/25/music-assistant-2-8/image4.webp" alt="Genre Support">

直到现在，在你的媒体库里找音乐都意味着要搜索特定的艺术家或专辑。但众所周知，音乐并不总是关于名字，它关乎一种*氛围*。在 2.8 中，<a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener">@jozefKruszynski</a> 贡献了**流派支持（Genre Support）**功能，让按心情挑选音乐变得容易得多。

现在，你无需在无穷无尽的艺术家列表中费力翻找，只需轻轻一点，就能播放特定流派的音乐。想把客厅变成一间爵士酒吧？只需在“流派”页面上点击“播放”，Music Assistant 就会为你精选一组曲目，帮助你找到恰到好处的氛围。

## “势不可挡”

**Music Assistant 一路高歌猛进**

除了核心功能之外，2.8 还引入了一大批新的播放器提供程序（player provider）、音乐来源和插件，以拓展你的音乐视野：

* 新增了多个播放器提供程序，例如 HEOS 和 Dashie Kiosk
* 现在可以添加 Bandcamp、YouSee Musik、Emby Music、NFS Fileshare、SomaFM Radio、ORF Radiothek、Yandex Music、Zvuk Music 和 Kion Music 等新的音乐来源，以丰富你的音乐媒体库
* 全新的 AriaCast 插件让你可以在 Music Assistant 中使用 AriaCast
* Airplay 2 现已支持密码配对
* 设置中现在有一个专门的“后台任务”板块，向你显示哪些任务正在后台运行。它还允许你在特定时间安排任务，这样当你坐下来享用晨间咖啡时，你喜爱的每日播客已经准备就绪。

想了解更多？前往<a href="https://github.com/music-assistant/server/releases/tag/2.8.0" target="_blank" rel="noopener">发布说明</a>，查看这些激动人心的新改动的完整明细。

## “走自己的路”

**你的家、你的音乐、你说了算**

Music Assistant 帮你像指挥家一样从容驾驭整套系统，而且一切按你的方式来。初次到访？跟随我们的[入门指南](/)快速上手，让你的系统奏出和谐乐章。我们会随着每个版本持续构建和打磨，而一如既往，你的声音对未来的走向起着关键作用。欢迎在评论区或 <a href="https://discord.com/invite/kaVm8hGpne" target="_blank" rel="noopener">Discord</a> 上给我们留言，或者直接把你的想法添加到我们的<a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas" target="_blank" rel="noopener">功能请求页面</a>。我们期待收到你的来信！
