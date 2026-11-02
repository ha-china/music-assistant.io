---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant 2.10: Turn up the fun"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "What’s new in"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Music Assistant 2.10"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Marvin Schenkel"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Announcements"

title: "Music Assistant 2.10：把乐趣调到最大"
description: "Music Assistant 2.10 来了！全新打磨的播放器栏、更智能的队列、内置的音乐问答游戏，还有专属于你的 AI 电台 DJ。按下播放键 ▶️"
cover:
    image: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
    alt: "Music Assistant 2.10: Turn up the fun"
excerpt: "Grab your air guitar and warm up those vocal cords, because Music Assistant is back with version 2.10! 🎸 Over the past three months, we’ve been jamming with the community on a release that’s all about playing – smoother controls, smarter queues, and a full-blown game night built right into your speakers."
date: 2026-08-26T00:00:00.000Z
authors:
  - marvin
tags:
  - release
  - announcement
---

拿起你的空气吉他，润一润嗓子，因为 Music Assistant 带着版本 2.10 回来了！🎸 过去三个月里，我们与社区一起即兴合奏，打磨出这个以*玩*为核心的版本——更顺手的操控、更智能的队列，还有直接内置在你音箱里的完整游戏之夜。

你可能已经注意到，这次的版本发布得比往常早了一些。这是因为我们正在为 <a href="https://www.openhomefoundation.org/blog/ifa-berlin-2026-save-the-date/" target="_blank" rel="noopener">IFA Berlin</a> 展会上我们的首个展位做准备（9 月 4 日至 8 日），想在上路之前先把 2.10 分享给大家。如果你要去逛展，欢迎到智能家居馆的 153 号展位来找我们——我们很想和你打个招呼！

一如既往，这个版本承载的内容远比一篇博客所能涵盖的要多，所以就把这篇当作精选金曲合集吧。想看完整曲目单，请查看文末的发布说明，并在评论里告诉我们你最喜欢的功能。歌单开场曲目是：一种全新的播放方式……

<!--more-->

## “我拥有力量”（I’ve Got the Power）

**焕然一新的播放器栏**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image1.webp" alt="Screen recording of the redesigned player bar in Music Assistant, showing album art, track info, and playback controls as the user interacts with them.">

*选择、分组，再把音量调大 🎚️*

控制你的播放器本应像跟着节拍用脚打拍子一样轻松自如。在 2.10 中，播放器栏得到了升级和简化，现在围绕三个清晰的操作来构建：选择你的播放器、将音箱分组、调节音量。再也不用在菜单里翻找了——你最常用的控制现在在桌面端和移动端上都置于最显眼的位置，还配有响应式的分组和音量浮动控件，由 <a href="https://github.com/erioldoesdesign" target="_blank" rel="noopener">@erioldoesdesign</a> 和 <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a> 打造。

开发这个功能是*公开构建*的一个绝佳范例。这个想法最初只是一份 <a href="https://www.figma.com/design/0EJf99xReC4253VWNzARWn/Player-drawer-and-selection-and-interactions?node-id=488-3739" target="_blank" rel="noopener">Figma 设计稿</a>，我们在流程早期就把它分享给了社区。我们在设计阶段收集反馈，并在写下第一行代码之前共同打磨完善。最终呈现的播放器栏由真正使用它的人共同塑造，带来更流畅的日常聆听体验。而我们并没有止步于此……接下来登场的是：更智能的随机播放。

## “每天都在随机播放”（Everyday I’m Shufflin’）

**队列改进与 Smart Shuffle**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image2.webp" alt="Screenshot of the Music Assistant now-playing screen showing ‘I Just Might’ by Bruno Mars, from the album ‘I Just Might,’ with album art and a waveform progress bar. An ‘Up Next’ queue with Autoplay enabled lists several upcoming tracks. Playback controls for shuffle, previous, pause, next, and repeat appear at the bottom, along with a volume slider and the connected speaker, ‘Voice PE Office #1.’">

*让音乐源源不断，直接来自你的队列。*

在 2.10 中，播放队列得到了一次彻底的调校，带来了两个功能，让你的歌单播完之后音乐依然能长久流淌。

首先是 **Autoplay（自动播放）**，现在已可完全自定义配置。当你的队列播到最后一首曲目时，Music Assistant 可以用相似的歌曲、来自你自己媒体库的混音，或你自选的播放列表让音乐继续播放。而且由于媒体库模式完全离线运行，你不再需要流媒体服务商也能享受无穷无尽的音乐。

然后是 **Smart Shuffle（智能随机播放）**，它解决了那个由来已久的烦恼——同样的歌曲被“随机”地反复播放 🙃 Smart Shuffle 会利用你的收听历史，把最近播放过的曲目移到队列靠后的位置，保持新鲜感。它还能同时处理多个来源：把两张专辑和两个播放列表一起加入队列，Smart Shuffle 会在播放过程中即时从所有来源抓取曲目、边播边混，而不是事先构建一个巨大的队列。这两个功能都由 <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a> 倾力贡献。

最棒的是，你再也不用钻进设置里去启用它们：Smart Fades 和 Autoplay 现在可以直接在队列界面中切换。轻轻一点，音乐就开始混音播放，而 Sendspin 则确保没有其他人能碰到你的音频流……

## “别想碰它”（U Can’t Touch This）

**停，Sendspin 时间**

Sendspin 即将迎来正式的 v1 发布，最后一个重大障碍也已扫清，这要归功于 <a href="https://github.com/arturpragacz" target="_blank" rel="noopener">@arturpragacz</a>。你的音乐现在可以加密传输，从 Music Assistant 一路送往你的音箱，只留给你自己的耳朵。

它还能反向运作：任何 Sendspin 设备现在都可以把音频流*送入* Music Assistant，再由它分发到你其他的音箱。比如，客厅里的一台黑胶唱机就可以串流到家里的任何一个音箱。虽然目前还没有设备支持这一功能，但 Music Assistant 已经为第一台支持的设备做好了一切准备。说到把拼图一块块就位，想不想要一个能把你的曲目变成游戏的功能？

## “你把我难住了”（You Puzzle Me）

**当知识问答遇上你的音乐**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image3.webp" alt="Screenshot of the Music Timeline game mode in Music Assistant’s Music Quiz plugin. A player named Marvin has a score of 0 with a 7-second countdown showing. The prompt reads “Where does this song belong?” with instructions to place the playing song on a timeline from older to newer. Two previously placed songs are shown as timeline entries: “Easier To Love” by Bastian/Brooklyn Barry (2021) and “I Knew That” by Sky Is So Blue (2023, marked “Another”). Buttons let the player place the current song “Before 2021,” “Between 2021 and 2023,” or “After 2023.”">

*游戏之夜迎来升级。*

觉得自己很懂音乐？是时候证明了 😏 Music Assistant 2.10 内置了由 <a href="https://github.com/TimoPtr" target="_blank" rel="noopener">@TimoPtr</a> 开发的全新 **Music Quiz（音乐问答）**插件——一款直接在你的音箱上进行的多人派对游戏，包含三种游戏模式：

* **猜歌名：**一段曲目开始播放，大家抢答歌名——答得越快，得分越高。
* **音乐时间线：**把歌曲放到时间线上正确的位置。那首金曲是 87 年还是 92 年的？准备好迎接激烈的家庭辩论吧。
* **音乐知识问答：**通过关于艺人、专辑等的各种问题来考验你的音乐功底。

主持游戏简单得令人愉悦：选好你的播放列表，开始一局游戏，客人们扫描二维码就能用自己的手机加入——无需下载应用，无需注册账号。你可以用现场模式，让一台音箱响彻整个房间；也可以使用远程模式开启一场无声迪斯科，每个人在各自的设备上同步聆听 🎧 而对于那些更喜欢独自聆听的人，我们也为你准备了特别的东西。

## “昨晚 DJ 救了我一命”（Last Night a DJ Saved My Life）

**专属于你的 AI 电台 DJ**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image4.webp" alt="Screenshot of the AI Radio DJ configuration screen in Music Assistant, titled “Morning show.” A Personality section includes fields for host name, host and program instructions describing a warm, energetic morning show persona, plus dropdowns for voice and language. Below, a Segments section lists configurable radio segments including “Intro” (set to play once at start) and “Transition” (set to play every 3 songs), with a blue “Save host” button in the top right.">

*永不休息的 DJ 🎙️*

还记得广播的黄金年代吗？那时 DJ 会介绍每一首曲目、为你播报天气，还在你开车回家的路上一路相伴。它回来了——而这一次，DJ 就住在你的服务器上。借助由 <a href="https://github.com/swiftbird07" target="_blank" rel="noopener">@swiftbird07</a> 开发的全新 **AI Radio DJ** 插件，Music Assistant 将大语言模型（LLM）和文字转语音（text-to-speech）相结合，把任何播放列表变成一座真正的电台。

电台完全由你定义：歌曲开场白与结束语、天气预报、新闻快讯——一切皆可配置，甚至可以细化到某个片段在歌曲之间出现的频率。你可以提前把整座电台搭建好，也可以让它随着播放即时生成各个片段，适配你队列中的任何内容。

## “好戏还在后头”（You Ain’t Seen Nothing Yet）

**金曲一波接一波**

以下是 2.10 中其他所有新内容的速览：

**全新音乐来源**

* **Pocket casts：**同步你的播客订阅（由 <a href="https://github.com/yfhyou" target="_blank" rel="noopener">@yfhyou</a> 开发）
* **Overcast：**在 MA 中收听你的 Overcast 播客（由 <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a> 开发）
* **Storytel：**串流你的 Storytel 有声书（由 <a href="https://github.com/jonasbp2011" target="_blank" rel="noopener">@jonasbp2011</a> 开发）
* **Sveriges Radio：**收听瑞典公共广播（由 <a href="https://github.com/romany" target="_blank" rel="noopener">@romany</a> 开发）
* **ABC Radio Network：**收听澳大利亚的广播电台（由 <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a> 开发）
* **Mamma Mi Radio：**精心挑选、包罗万象的网络电台（由 <a href="https://github.com/florianhorner" target="_blank" rel="noopener">@florianhorner</a> 开发）
* **Google Drive：**串流你的云端音乐库（由 <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a> 开发）
* **OneDrive：**播放 Microsoft OneDrive 中的音乐（由 <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a> 开发）
* **Ambient sounds：**本地生成的环境音循环（由 <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a> 开发）
* **Rainy mood：**伴着舒缓的雨声放松身心（由 <a href="https://github.com/jlpouffier" target="_blank" rel="noopener">@jlpouffier</a> 开发）
* **teddycloud：**通过 teddycloud 连接你的 Toniebox（由 <a href="https://github.com/yoyixms" target="_blank" rel="noopener">@yoyixms</a> 开发）

**全新播放器支持**

* **Bose SoundTouch：**控制你的 SoundTouch 音箱（由 <a href="https://github.com/Odn0" target="_blank" rel="noopener">@Odn0</a> 开发）
* **Yandex Station：**本地控制 Yandex 音箱（由 <a href="https://github.com/trudenboy" target="_blank" rel="noopener">@trudenboy</a> 开发）
* **AmpliPi：**多分区全屋音频支持（由 <a href="https://github.com/mcaulifn" target="_blank" rel="noopener">@mcaulifn</a> 开发）

**其他新功能**

* **投射仪表盘：**一些页面（例如正在播放界面和派对仪表盘）可以作为仪表盘进行投射（由 <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener">@MarvinSchenkel</a> 开发）
* **引导式设置流程：**一步步完成服务提供商和播放器的设置（由 <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a> 开发）
* **更聪明的 Smart Fades：**能感知人声和能量的歌曲过渡（由 <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener">@MarvinSchenkel</a> 开发）
* **Milkdrop 可视化：**为你的音乐呈现炫酷视觉效果（由 <a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener">@jozefKruszynski</a> 开发）
* **睡眠定时器：**安然入睡，播放自动停止（由 <a href="https://github.com/teancom" target="_blank" rel="noopener">@teancom</a> 开发）
* **有声书合集：**把系列有声书整理成井井有条的合集（由 <a href="https://github.com/fmunkes" target="_blank" rel="noopener">@fmunkes</a> 开发）
* **Audible Whispersync：**在你的各设备间续播有声书（由 <a href="https://github.com/scootaash" target="_blank" rel="noopener">@scootaash</a> 开发）
* **生日推荐：**为这一天出生的艺人送上庆祝（由 <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@dmoo500</a> 开发）
* **播放列表封面：**为你的播放列表自动生成封面（由 <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@dmoo500</a> 开发）

想要完整列表？前往<a href="https://github.com/music-assistant/server/releases/tag/2.10.0" target="_blank" rel="noopener">发布说明</a>查看所有新内容 👀

## “演出必须继续”（The Show Must Go On）

**下一场演出见**

Music Assistant 2.10 带来了队列改进、Smart Shuffle、游戏模式等更多新玩法——一切都已就绪，等待你的下一次聆听时光。初次到访？我们的[入门指南](/)会让你很快上手运行。

一如既往，版本发布保持三个月一次的节奏，下一个版本已经在筹备中。想看看幕后进展，欢迎加入<a href="https://discord.com/channels/753947050995089438/1083643113484070953" target="_blank" rel="noopener">我们的 Beta 频道</a>，在我们构建新功能的同时参与测试，或在<a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas" target="_blank" rel="noopener">功能请求页面</a>分享你的想法。如果你只是想打个招呼，欢迎前往<a href="https://discord.com/invite/kaVm8hGpne" target="_blank" rel="noopener">Discord</a>——我们的大门永远敞开。

最后，出场时不在周边商品摊前转一圈，演出就不算完整。<a href="https://store.openhomefoundation.org/" target="_blank" rel="noopener">Open Home Foundation 商店</a>刚刚上新了印有 Music Assistant、ESPHome 以及全新 Home Assistant 设计的<a href="https://store.openhomefoundation.org/shop/t-shirts" target="_blank" rel="noopener">T 恤</a>，全部采用经典黑色。它们百搭耐穿，最重要的是，每一笔购买都能为基金会的工作提供资金支持。快来商店选购，把你的支持穿在身上！
