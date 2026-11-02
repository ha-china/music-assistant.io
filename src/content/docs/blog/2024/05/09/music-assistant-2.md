---
head:
  - tag: meta
    attrs:
      property: og:image
      content: /images/blog/2024/05/09/music-assistant-2/art.jpg
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant 2.0: Your Music, Your Players"

title: "Music Assistant 2.0：你的音乐，你的播放器"
description: "将多个音乐库连接到几乎任何智能音箱。"
cover:
  image: /public/images/blog/2024/05/09/music-assistant-2/art.jpg
  alt: 'Music Assistant 2.0: Your Music, Your Players'
excerpt: "Today, exactly five years ago, I, Marcel, started working on Music Assistant. What began as a quick script, to sync my playlists so I could switch between streaming providers, grew into a beast on its own.\n\nMusic Assistant is what I'd like to call a \"music library manager\" – it gives you full control of playing YOUR music on your players. Just like Home Assistant centralizes all your devices and services to work together, Music Assistant does the same with your music sources and smart audio-playing devices."
date: 2024-05-09T00:00:00.000Z
authors:
  - marcel
tags:
  - release
  - announcement
---

整整五年前的今天，我（Marcel）开始开发 [Music Assistant](https://music-assistant.io/)。这一切起初只是一个用于同步播放列表、方便我在不同流媒体服务商之间切换的快速脚本，后来却成长为一个自成一体的大工程。

我想把 Music Assistant 称为一款“音乐库管理器”——它让你能够完全掌控在自己的播放器上播放属于你的音乐。正如 Home Assistant 将你所有的设备和服务集中起来协同工作一样，Music Assistant 对你的音乐源和智能音频播放设备也做着同样的事情。

想不看介绍直接试用 Music Assistant（是的，我们懂你！）：

<a href="https://my.home-assistant.io/redirect/supervisor_addon?addon=d5369777_music_assistant&amp;repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon" class="my badge" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_addon.svg"></a>

<!--more-->

## 彩虹连接
<h3 style="margin-top: -0.25rem; opacity: .67;">Music Assistant 是什么？</h3>

**你的音乐，你的播放器。** 点击即播。本来就该这么简单。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/how-it-works.jpg'/>从音乐源到 Music Assistant 再到音箱</p>

#### 连接并随处播放
Music Assistant 让你可以快速连接 Spotify 和 Tidal 等<a href="https://music-assistant.io/music-providers/">最受欢迎的流媒体服务商</a>，以及你的本地媒体文件。它会导入你喜欢的曲目、艺人、专辑和播放列表，并全部配以正确的封面插图显示。

它支持像 Airplay、Cast 和 DLNA 这类最普及的<a href="https://music-assistant.io/player-support/">流媒体协议和设备</a>，让你几乎可以在任何设备上播放媒体——如果一台旧音箱不支持新的服务，Music Assistant 可以让它重获新生。

[阅读更多...](#freedom-of-choice)

#### 具备高级功能的统一音乐库
你的本地音乐库和云端音乐库将无缝合并在一起。如果同一首曲目存在于多个地方，它只会显示一次，同时帮你找到音质最高的版本。你甚至可以使用同一服务商的多个账号，让家中每个人的播放列表都汇集在一处。

它可以将支持的播放器分组以实现同步播放。它还支持诸如淡入淡出（crossfade）和音量归一化等高级播放功能——无论设备本身是否支持这些功能。

[阅读更多...](#come-together)

#### 为 Home Assistant 而生
将它与 Home Assistant 集成（integration）相连接——自动化和语音控制将为整个体验带来强力提升。

[阅读更多...](#we-are-family)

## 启动吧
<h3 style="margin-top: -0.25rem; opacity: .67;">如何安装 Music Assistant</h3>

经过多年与出色的社区共同开发和测试，我们终于可以说，它已经为日常使用做好了准备。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/start-me-up.png'/></p>

尽管 Music Assistant 是一个 HA 加载项（add-on），它也完全可以从头到尾通过 [HACS](https://hacs.xyz/) 进行安装。你只需安装集成，它就会自动为你安装并管理相应的加载项。借助该集成，你可以通过自动化和语音控制来操控你的设备。

<a href="https://my.home-assistant.io/redirect/supervisor_addon?addon=d5369777_music_assistant&amp;repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon" class="my badge" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_addon.svg"></a>

_Music Assistant 以 <a href="https://www.home-assistant.io/addons">Home Assistant 加载项</a>的形式分发——这是我们让你轻松使用第三方应用来扩展 Home Assistant 安装的方式。若要以 Docker 容器的形式安装，请遵循 <a href="https://music-assistant.io/installation/#tertiary-installation-method-docker-image">MA 安装说明</a>。_

## 反抗权威
<h3 style="margin-top: -0.25rem; opacity: .67;">为什么选择 Music Assistant？</h3>

我之所以开始开发 Music Assistant，是因为对市面上主流的现有方案感到失望；

*   你购入了一个一体化生态系统（例如 Sonos），然后现在乃至将来支持哪些音乐源，就全由那个生态系统说了算。

*   你选择了一家音乐流媒体服务商，然后不知怎么的，他们的音乐在哪里播、怎么播，居然由这家服务商说了算。

*   你想在不同的流媒体服务商之间切换，同时保留自己精心整理的播放列表，无论你打算用哪家服务商来播放。

*   你还珍藏着自己当年费尽心血翻录成高质量文件、存放在本地存储中的 CD 音乐收藏，你想要播放它们，甚至想把它们与流媒体服务商的内容混搭播放。

*   又或者，你属于不想要任何订阅服务的那类用户，拥有一套精心整理的本地媒体收藏，想在那些闪亮崭新的播放设备上播放。

当我们为音乐或设备付了钱，就不应该被这些武断的限制所束缚。我们正在慢慢进入一个围墙花园越来越高、供应商锁定越来越多的世界，是时候夺回控制权了。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/fight-the-power.jpg'/><i>Google Home 上的 Tidal</i></p>

我花了很长时间，也自掏了不少腰包，去研究能够填补这些空白的现有方案。它们要么昂贵，要么封闭，要么过不了家人认可这一关——要么集这些缺点于一身。

## 自由选择
<h3 style="margin-top: -0.25rem; opacity: .67;">连接任意音乐源，随处播放</h3>

Music Assistant 可以连接你最喜欢的流媒体服务商和本地音乐文件，让你在过去 20 年里的几乎任何联网播放设备上播放它们。它基本上就是一个把音乐协议 A 翻译成音箱/播放器协议 B 的翻译器。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/freedom-of-choice.png'/></p>

举例来说，我的客厅里有一套传统功放加音箱的组合，能够播放高品质音乐，我可以坐下来聆听每一个细节。我还在一个非常嘈杂的厨房里放了几个 Sonos 音箱，另外还有一些只接受 Airplay 的 DIY 音箱。我可以把我的音乐播放到所有这些音箱上，而不必受制于任何单一生态系统。

有些人可能会说，避免所有这些烦恼的最好办法，就是投入像 Sonos 这样的生态系统，让它全权为你打理这一切。虽然我是 Sonos 的忠实粉丝（而且鉴于它的易用性，我也会向朋友和家人推荐它们），但我并不喜欢随之而来的供应商锁定。如果 Sonos 和某家流媒体服务决定分道扬镳，我也不至于被挡在我的音乐之外。另外，他们并不是在每个价位都有音箱产品，这意味着你无法享受到市面上新的更高保真或更实惠硬件的优势。

## 齐聚一堂
<h3 style="margin-top: -0.25rem; opacity: .67;">将你的所有音乐统一到一个音乐库中</h3>

在同一个界面里，我既可以把孩子们的音乐串流到他们的音箱上，也可以把我钟爱的高解析度（Hi-Res）音乐串流到我的高保真音响系统上。这是一个一体化界面。那种需要五个不同的应用才能让家中多个区域开始播放音乐、或者为了访问某个人的播放列表还得切换连接账号的日子，一去不复返了。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/come-together.png'/></p>

当你在 Music Assistant 中搜索时，它会搜索你所有的音乐库。每一个流媒体服务，以及你添加的本地文件，都可以选择用来播放。

## 我们是一家人
<h3 style="margin-top: -0.25rem; opacity: .67;">为 Home Assistant 而生</h3>

Music Assistant 一直与 Home Assistant 紧密相连（下文会详细介绍）。现在我甚至为 [Nabu Casa](https://www.nabucasa.com/) 工作，部分原因正是我在 Music Assistant 上的工作（不过现在我成了负责 Matter 的人）。

<p class="img"><img src='/images/blog/2024/05/09/music-assistant-2/we-are-family.png'/></p>

得益于这层紧密的联系，Home Assistant 可以与 Music Assistant 无缝衔接，解锁多项高级功能。MA 的播放器会暴露给 HA，可以通过你的仪表盘（dashboard）、自动化和脚本进行控制。这使 HA 用户能够控制他们的音乐播放器，并使用 MA 强大的音乐搜索功能。播放器可以提供 TTS（Text-to-Speech，文字转语音）播报，还可以由连接到 Home Assistant 的语音助手来控制。

## 后记

于是，[整整五年前](<https://github.com/music-assistant/server/commit/75adea9721fa1f1b7225515087c81edd979fcc8f>)，我开始着手开发 Music Assistant，最初只是为了我自己使用。它始于一个学习练习——多亏了它，我学会了 Python 的 asyncio 编程，也学会了 Vue 前端框架。我把项目放在 GitHub 上只是为了托管代码，其实并没打算让别人使用。

后来，我逐渐明白确实存在真正的需求，于是我发布了一些关于如何安装它的信息，获得了一点关注。2022 年 6 月，我们发布了 Music Assistant 1.0 版本，它当时还很粗糙，但已经适合许多用户使用。我们甚至组织了一场由 Home Assistant 主持的直播“[让我们嗨起来](https://www.youtube.com/watch?v=SEH-DxOsywg)”，来宣传 [ESPHome 的音频支持](https://esphome.io/components/media_player/i2s_audio.html)，以及把这三个开源项目组合在一起时你能打造出的超酷玩意儿。

1.0 版本并没有达到我们的全部期望。它存在一些结构性缺陷，尤其是以自定义组件（custom component）的形式在 Home Assistant 中运行时。HA 的诞生是为了给你带来家庭自动化的最佳体验；它从未针对实时音频串流做过优化。更糟糕的是，到了某个时候，两个项目的依赖项冲突严重到 Music Assistant 在 2023 年 3 月的 HA 版本中完全无法工作。

1.0 初始版本发布六个月后，这个项目看上去快要无以为继，于是我决定推倒重来、回到绘图板。MA 的引擎需要成为独立的隔离组件，负责为你提供最佳的流媒体音乐体验（音质和延迟在其中至关重要），而 HA 一侧则应负责家庭和音乐的自动化。

于是，Music Assistant Server 应运而生。它是一个独立的应用程序，你可以在 Docker 中（或作为 Home Assistant 加载项）运行，全部通过一个 HACS 集成连接到 HA。该项目被拆分成多个自成一体的部分。

Music Assistant Server 拥有自己的网页界面，一个用 Vue 编写的现代界面。多亏了 HA 的加载项系统，这个网页界面可以从 HA 安全地访问。该网页界面是一个渐进式 Web 应用（Progressive Web App，PWA），因此你也可以直接访问它，并[将其安装到你的设备上](https://support.google.com/chrome/answer/9658361?hl=en-GB&co=GENIE.Platform=Desktop)。我们还有一个（实验性的）[桌面应用](https://music-assistant.io/companion-app/)。

在过去一年里，我们与数量惊人的测试者一起对此不断迭代。所以，虽然从技术上讲这是一个 2.0 版本，但对我个人而言，这才是第一个真正的版本，因为它终于是一件手感良好、根基扎实的东西。同样棒的是，我们为项目吸引了贡献者，这些人帮助创建和维护音乐集成，同时提供支持或翻译。更令人兴奋的是，一些非常重大的功能以及新的流媒体服务已经在地平线上出现。衷心感谢每一位帮助这个版本圆满发布的伙伴。
