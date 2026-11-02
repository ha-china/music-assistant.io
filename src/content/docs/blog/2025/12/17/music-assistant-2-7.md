---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2025/12/17/music-assistant-2-7"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2025/12/17/music-assistant-2-7"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant is taking over the airwaves"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "What's new in"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Music Assistant 2.7"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Marcel van der Veldt"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Announcements"

title: "Music Assistant 2.7 - 接管电波"
description: "视觉全面改版、全新功能与提供方，再加上一个自建的流媒体协议，这是我们迄今为止最大的一次更新！"
cover:
    image: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2025/12/17/music-assistant-2-7"
    alt: "Music Assistant is taking over the airwaves"
excerpt: "It's been a busy few months composing behind the scenes, building up to a massive crescendo. Today, the beat finally drops on Music Assistant's biggest update yet. With version 2.7, Music Assistant is getting all jazzed up with a visual overhaul, a chart-topping lineup of new features and providers, along with a brand-new streaming protocol we're spinning up ourselves."
date: 2025-12-17T00:00:00.000Z
authors:
  - marcel
tags:
  - release
  - announcement
---

过去几个月里，我们在幕后忙于谱曲，只为蓄势推向一段宏大的渐强乐章。今天，[Music Assistant](https://www.music-assistant.io/) 迄今为止最重大的更新终于踩着节拍震撼登场。在 **2.7 版本**中，Music Assistant 焕发出爵士乐般的活力：视觉全面改版、一众登顶排行榜的新功能和提供方（provider），外加一个由我们亲自*转动*起来的全新流媒体协议。

当然，你完全可以不读完下文就直接更新，体验所有精彩的新内容，但那样可能会错过一些“遗珠曲目”。事实上，这篇博客甚至无法涵盖全部内容（新东西真的有那么多），所以如果我们遗漏了什么，欢迎到评论区放声高唱赞歌！

<!--more-->

## “朋友们的鼎力相助”

**Marvin 加入团队**

Music Assistant 迎来了 Open Home Foundation 的第一位全职员工。不，不是我！我的本职工作是领导基金会的[生态系统部门](https://www.openhomefoundation.org/structure/)（涵盖基金会名下除 Home Assistant 之外的所有软件项目）。[Marvin](https://github.com/MarvinSchenkel) 将于新年加入基金会，全职投入 Music Assistant 的开发，负责项目的日常运营。Marvin 参与项目贡献已有三年，涉足项目的方方面面，尤其专注于 Apple Music 和 YouTube 提供方。

不必担心，我对自己的音频设备一向痴迷，仍会继续捣鼓我心爱的小项目 😁。

## “万物各归其位”

**视觉全面改版**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/overhaul.webp" alt="Screenshot of the Music Assistant app with an overhauled user interface">
    一场实至名归的视觉焕新
</p>

Music Assistant 加入基金会带给我们的远不止一个美好的*开放之家*；它为项目指明了更清晰的方向，还带来了专家的助力。有些人认为 Music Assistant 的短板在于 UI 和 UX，而在 2.7 版本中，我们开始对其进行大规模改版，让它的颜值配得上你音乐的美妙！这只是一个宏大进程的开端，后续每次更新都会带来更多打磨。你最先注意到的可能是屏幕左侧可折叠的导航栏，它看起来和另一个“助手”颇为神似 😉。现在一切都直观了许多，对新手用户尤其友好。设置页面也借助面包屑（breadcrumbs）导航变得更容易浏览。

本次最大的明星当属全新的内置播放器（Built-in Player），让你可以在正在搜寻下一首曲目的浏览器里直接试听音乐。在把歌曲发送到家中的每个音箱之前，先确认它是否老少皆宜，非常实用。

## “刀枪不入”

**用户与登录**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/login.webp" alt="Screenshot of the Music Assistant app with it's new login functionality">
    全家人都有专属的用户资料！
</p>

我们实现的许多新功能都离不开某种形式的登录和身份认证。这是一项呼声极高的功能，因为即使在家中，安全性也不容忽视。我们知道偶尔登录一次可能有点小麻烦，但我们已尽力让它尽量不打扰你，甚至实现了将你的 Home Assistant 登录用作“单点登录”（Single Sign-On）的方式。

现在，你可以创建各自配备独立音乐提供方的不同用户资料。再也不用让四个 Tidal 账号并排挤在一起，把“播放列表”标签页弄得杂乱无章。你甚至可以指定谁有权使用哪台音箱；跟孩子们在你进行绩效评估时用办公室音箱播放 Demon Hunters 的日子说再见吧 😅。在“设置”中，只需前往“用户管理”（User Management）部分，即可添加和编辑新用户。

## “环游世界”

**远程音乐串流**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/flow.webp" alt="Diagram of how Music Assistant handles remote music streaming">
    无论何地，无论何时
</p>

全新登录界面带来的功能之一就是远程音乐串流——没错，只要能连接互联网，随时随地都能使用 Music Assistant。我们推出了一个[全新的 Web 应用](https://app.music-assistant.io/)，让你在外出时也能远程连接。

它借助 Home Assistant Cloud 内置的多媒体串流能力（WebRTC），将音频从你的 Music Assistant 服务器路由到你所在的任何地方。使用此功能无需 [Home Assistant Cloud 订阅](https://www.home-assistant.io/cloud/)；特别感谢 Nabu Casa 免费向我们的用户开放其基础设施。Home Assistant Cloud 订阅用户可以使用更强大的路由，在更多地方获得更好的串流体验。这项订阅同时也为 Music Assistant 的全职开发提供支持 🙏。

此连接为点对点（P2P）且经过端到端加密，意味着没人会知道你在听 ABBA 😊。我不敢说它已经准备好取代你现有的音乐串流服务，但它是让你在朋友家播放自己 FLAC 音乐的好办法。你甚至可以打开两个 Web 应用实例，分别串流到两台设备，它们还能保持同步……*这究竟是怎么做到的？*

## “让我转个不停”

**隆重推出 Sendspin**

一段时间以来，Music Assistant 团队一直在寻找将音频、专辑封面以及其他音乐可视化效果串流到家各处设备的最佳方式。市面上有几个项目在做很酷的音频串流，但没有一个符合我们的需求。所以，既然这样的东西还不存在，那就是时候动手构建了。

隆重介绍 **Sendspin**：一个全新的多媒体串流与同步协议。它完全开源，可免费使用。Sendspin 可以串流高保真音频、专辑封面和可视化数据，并自动适配每台设备的能力。想象一下：电子纸显示屏上展示着专辑封面，多个音箱同步播放，智能灯光随节奏律动。

目前使用它的最佳方式是通过浏览器，或者运行 Beta 固件的 [Home Assistant Voice Preview Edition](https://www.home-assistant.io/voice-pe/)。我们还构建了在支持 Google Cast 的音箱上使用 Sendspin 的实验性功能（也在计划对支持 AirPlay 的音箱做同样的事情），这将让 Sendspin 能与许多不同的硬件协同工作。

特别感谢 Open Home Foundation 的 [Maxim](https://github.com/maximmaxim345) 和 [Kevin](https://github.com/kahrendt)，他们为 Sendspin 从构想变为现实*谱写了关键乐章*。尽管它如今已能实现一些令人惊叹的功能，但它仍处于技术预览阶段，本次公告正是我们**向所有开发者和 DIY 音频爱好者发出的召集令**——[我们需要你的帮助来构建和测试它](https://www.sendspin-audio.com/)。规范就在这里，快用它开始构建吧！

生命中最美好的事物注定要与人分享，你的音乐也应像我们所热爱的软件一样自由开放。所以，转动那张唱片 💿，放下唱针，让音乐传遍你家的每个角落。

## “飞机”

**AirPlay 新增支持**

我们最近添加了对外部音频源的支持，首个是 Spotify Connect。这让你可以把音频从 Spotify 应用串流到你的 Music Assistant 服务器，再发送到你所有的音箱，即使它们不支持 Spotify Connect 也没问题。现在我们又添加了向 Music Assistant 发送 AirPlay 音频的功能，之后你就可以把它发送到家中的任何地方。

我们还支持将 AirPlay 2 音箱作为播放器提供方，这意味着所有支持 AirPlay 2 的音箱（例如 HomePod）都能实现完美同步的音频。我们建议阅读文档中的相关限制说明，因为并非所有 AirPlay 2 设备都同等可靠 🤦‍♂️。

## “歌唱”

**歌词支持**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/lyrics.webp" alt="Screenshot of the Music Assistant player with lyrics alongside album art">
    卡拉OK时间到！
</p>

再也不必去猜 Kurt 在 Smells Like Teen Spirit 里到底在唱什么了。从 Music Assistant 2.6 起，你可以查看正在播放歌曲的歌词。如果歌词提供方支持，这些歌词还可以与播放时间同步，就像卡拉OK一样。打开播放队列菜单即可找到歌词，它位于“歌词”标签页中（只有当曲目名称、艺术家和专辑与歌词提供方匹配时，才会显示该标签页）。我们最初支持 LRCLIB，之后又添加了 Tidal 歌词同步、Genius 歌词以及本地 LRC 文件。

## “圆滑的调音师”

**智能淡入淡出**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/crossfade.webp" alt="Screenshot of the Music Assistant app showing the smart fades setting">
    让你的播放列表无缝衔接
</p>

Music Assistant 现在是你的专属家庭 DJ，能把一首歌与下一首完美衔接，而且与 DJ 不同，它总是接受你的点歌 😎。本次最新更新加入了*智能淡入淡出（Smart Fading）*，它会考虑每首歌曲的 BPM（每分钟节拍数），让歌曲之间的交叉淡入淡出过渡更加自然。要开启此功能，请前往你选择的播放器，向下滚动到“音频”部分，然后选择“启用智能淡入淡出（Enable Smart Fades）”。

## “所有的小事”

**以及更多**

这些更新中没有一件是*小事*，但篇幅有限，以下是热门榜单 Hot 100 的其余部分：

- 新增 DSP 预设，可快速保存和应用自定义配置。
- 记录并分享你的收听历史，新增 scrobbling（收听记录上报）功能，支持 LastFM、ListenBrainz 和 Subsonic。
- 新增了多个播放器提供方，包括 Yamaha MusicCast 以及运行 Media Assistant 的 Roku 设备。
- 新增 VBAN 作为输入提供方。
- 新的电台和播客提供方包括 Radio Paradise、Podcast Index、BBC Sounds、gPodder、iTunes Podcasts、Dl.fm 和 ARD Audiothek。
- 无法追随 Phish 的巡演？幸运的是，新的 Phish.in 提供方可以帮到你。如果你想要更多现场音乐，还有 Nugs.net。
- 另一个很酷的音频大杂烩是 Internet Archive，现在可以作为提供方添加了。
- 日本最大的流媒体平台之一 Niconico 也已作为音频提供方加入 ㊗️。

## “叛逆的呐喊”

**加入音频革命**

<p class="img">
    <img src="/images/blog/2025/12/17/music-assistant-2-7/playing.webp" alt="Google Nest Hub playing Music Assistant alongside a Home Assistant Voice Preview Edition">
    Music Assistant 也兼容 Cast 投屏！
</p>

你的音乐，你的播放器——是时候夺回对你音乐以及你想要播放它的设备的控制权了。如果你刚接触 Music Assistant，请查看[这里的入门指南](https://www.music-assistant.io/)。虽然我们对这些新功能感到兴奋，但我们不会很快按下暂停键。欢迎在评论区或 [Discord](https://discord.com/invite/kaVm8hGpne) 上告诉我们你的反馈。
