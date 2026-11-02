---
head:
  - tag: meta
    attrs:
      property: og:image
      content: /images/blog/2025/03/05/music-assistants-next-big-hit/art.jpg
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant's next big hit"

title: "Music Assistant 的下一首热门金曲"
description: "Spotify Connect、Assist 串流播放、播客、有声读物、Apple Music、完整的均衡器（EQ）等等！"
cover: 
  image: /public/images/blog/2025/03/05/music-assistants-next-big-hit/art.jpg
  alt:   "Music Assistant's next big hit"
excerpt: "Over the past several months, Music Assistant has been hitting all the right notes with new features, greater stability, and a crescendo of contributors who keep pushing the project forward. If you're unfamiliar with Music Assistant, it allows you to merge your libraries from leading audio streaming providers and local files, letting you play them on the most popular smart speakers. Since our last update, Music Assistant has had a couple of big releases, but our most recent might just be our platinum record 💿, with a lot of new functionality coming in version 2.4."
date: 2025-03-05T00:00:00.000Z
authors:
  - marcel
tags:
  - release
  - features
---

在过去几个月里，[Music Assistant](https://www.music-assistant.io/) 一直踩准每一个音符：新功能层出不穷，稳定性大幅提升，贡献者队伍也如渐强音（crescendo）般不断壮大，持续推动项目向前发展。如果你还[不了解 Music Assistant](/blog/2024/05/09/music-assistant-2/#rainbow-connection)，它可以让你把来自各大主流音频流媒体服务商的媒体库与本地文件合并在一起，并在最流行的智能音箱上播放。自[上次更新](/blog/2024/05/09/music-assistant-2/)以来，Music Assistant 已经发布了几个重要版本，而最新的这个版本或许就是我们的白金唱片 💿——版本 2.4 带来了大量新功能。如果你错过了之前的几次更新，下面是其中最重要的新增内容。

**目录**
- [针对 Assist 优化](#say-my-name)
- [外部音频与 Spotify Connect](#across-the-universe)
- [播客与有声读物](#radio-ga-ga)
- [更多播放器与提供商](#new-sensation)
- [均衡器控制与功能](#all-about-that-bass)
- [Home Assistant 改进](#master-of-puppets)
- [更稳定的流媒体播放](#d-d-dont-dont-stop-the-beat)
- [立即获取 Music Assistant 2.4！](#drop-it-like-its-hot)

<!--more-->

### "Say My Name"
<h4 style="margin-top: -0.25em; opacity: .67;">针对 Assist 优化</h4>
<p class="img"><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/voice_ma.jpg' alt="audiobooks page"/>我们其实应该叫它 Hi-Fi 版</p>

最新版本为 [Assist](https://www.home-assistant.io/voice_control/) 设备（例如 [Home Assistant Voice Preview Edition](https://www.home-assistant.io/voice-pe/)）带来了一些重大的进步。我们一直与 [ESPHome](https://esphome.io/) 团队紧密合作，以确保获得最理想的音频串流体验，这也让 Assist 设备成为了性能出色的媒体播放器。社区甚至添加了一些很棒的功能，让你能够完全[用语音控制媒体播放器](https://github.com/music-assistant/voice-support)，包括选择歌曲、艺人等等。Voice Preview Edition 配备了一枚高品质 DAC（数模转换器），通过其 3.5mm 接口即可提供非常纯净的音频回放，让你可以把无损音频串流到已连接的音箱（这台 59 美元的设备让我的一些昂贵 Hi-Fi 器材都相形见绌！）。

### "Across the Universe"
<h4 style="margin-top: -0.25em; opacity: .67;">外部音频与 Spotify Connect</h4>
<p class="img"><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/spotify_connect.jpg' alt="Spotify Connect on a Voice PE"/>Voice Preview Edition 上的 Spotify Connect</p>

最新版本的另一个功能是支持“外部音频源”，它既可以由播放器自身提供（音源控制），也可以通过插件提供。首个提供这一功能的插件就是 Spotify Connect。这是在 Music Assistant 中使用 Spotify 最简单的方式，而且可以在任何播放器上启用。这让任何受 Music Assistant 支持的设备都成为支持 Spotify Connect 的设备（亲测确认，Voice Preview Edition 在这方面非常出色）。[要开始使用](https://www.music-assistant.io/plugins/spotify-connect/)，请前往 Music Assistant 的设置，添加 Spotify Connect 插件，选择你希望它使用的设备，然后在 Spotify 中你就会看到该设备作为一个播放器出现。请注意，Spotify Connect 需要 Premium 账户才能使用。

我们已经把目光投向了后续添加更多此类插件（要不要来个 AirPlay？）。我们也在努力让整个设置流程变得极其简单，尤其是针对那些使用 Voice Preview Edition 的用户——他们可能不需要 Music Assistant 的每一项功能，但仍然想要这种简单的投射播放能力。

### "Radio Ga Ga"
<h4 style="margin-top: -0.25em; opacity: .67;">播客与有声读物</h4>

<p class="img"><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/audiobooks.png' alt="audiobooks page"/>整本书的收听进度都会被记录，各章节清晰可见</p>

你的媒体库一下子变大了好多！Music Assistant 现已原生支持播客和有声读物。对于播客，我们添加了多个提供商，包括 [Subsonic](https://www.music-assistant.io/music-providers/subsonic/)、[YouTube](https://www.music-assistant.io/music-providers/youtube-music/) 和 [RSS 订阅源](https://www.music-assistant.io/music-providers/podcastfeed/)。有声读物可以通过两个全新的提供商添加：[Audible](https://www.music-assistant.io/music-providers/audible/) 和 [Audiobookshelf](https://www.music-assistant.io/music-providers/audiobookshelf/)，也可以直接从你的本地文件导入。有声读物播放会把整本书呈现为一条进度条，上面用圆点标示每一章（即使这本书被分成了多个文件），让你能真正掌握自己的进度。整个核心都经过了调整，以便更好地追踪你在任何媒体中的进度，因此你总能从上次中断的地方继续收听。

<p class="img"><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/continue.png' alt="Continue listening section"/>主页上的“继续收听”板块会带你回到上次中断的地方</p>

### "New Sensation"
<h4 style="margin-top: -0.25em; opacity: .67;">更多播放器与提供商</h4>

在上一篇博文发布后不久，我们添加了对 [Apple Music](https://www.music-assistant.io/music-providers/apple-music/) 的支持，这是评论区呼声最高的新功能之一。我们还添加了另外几个新提供商，包括 [iBroadcast](https://www.music-assistant.io/music-providers/ibroadcast/) 和 [SiriusXM](https://www.music-assistant.io/music-providers/siriusxm/)。在硬件支持方面，我们新增了对 [Bluesound](https://www.music-assistant.io/player-support/bluesound/) 播放器的支持。如果你有喜爱的提供商或播放器，希望在 Music Assistant 中看到它，请[提出请求](https://github.com/orgs/music-assistant/discussions?discussions_q=sort%3Atop)——不过更好的做法是[加入我们，一起开发它](https://github.com/music-assistant/server)！

### "All About That Bass"
<h4 style="margin-top: -0.25em; opacity: .67;">均衡器控制与功能</h4>

<p class="img"><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/eq.png' alt="PEQ page"/>创建你自己的 EQ 设置，或为你的音箱导入现成的设置</p>

在我们发布 2.0 时，设备只有基本的低音和高音控制，但如今借助我们全新的[可配置 DSP](https://www.music-assistant.io/audiopipeline/)（数字信号处理器），你可以以前所未有的方式精细调整音频。这包括输入和输出增益，以及一个可以针对每个播放器单独应用的强大[参数均衡器](https://www.music-assistant.io/dsp/parametriceq/) 📈。点击音质指示图标，即可方便地查看整个音频管线。

<p><img src='/images/blog/2025/03/05/music-assistants-next-big-hit/audio_path.png' alt="Music Assistants next big hit" class='no-shadow' /></p>

另一个实用的新增功能是“[Don't stop the music](https://www.music-assistant.io/usage/#:~:text=Don%27t%20Stop%20The%20Music%20(DSTM))”模式，即使你的播放队列已经结束，音乐也会继续播放，从你的媒体库中挑选相似的歌曲。让音乐不停歇的另一种方式是通过许多主流操作系统内置的锁屏和小部件控件，它们现在也可以控制 Music Assistant 了。

### "Master of Puppets"
<h4 style="margin-top: -0.25em; opacity: .67;">Home Assistant 改进</h4>

Home Assistant 从设计之初就旨在与 Music Assistant 无缝协作，而且这种协作只会越来越好。在 [Home Assistant 2024.12 版本](https://www.home-assistant.io/blog/2024/12/04/release-202412/#new-integrations)中，我们为社区送上了一份圣诞礼物——Music Assistant 从 HACS 迁移为原生集成（[如果你尚未迁移，请尽快迁移](https://www.music-assistant.io/integration/migrate/)）。

现在许多人会先把所有播放器添加到 Music Assistant，然后再将 Music Assistant 与 Home Assistant 集成，从而无需单独添加每台设备。最新版本增加了把任意播放器控制（包括音量以及开/关机）外包给 Home Assistant 实体（entity）的功能。两者搭配使用还有其他好处，例如 Music Assistant 可以在播报（announcement）之后[恢复音频播放](https://www.music-assistant.io/integration/announcements/)，或者使用 Assist 查找并播放歌曲（[无论是否使用 LLM](https://github.com/music-assistant/voice-support)）。

### "D-D-Don't Don't Stop the Beat"
<h4 style="margin-top: -0.25em; opacity: .67;">更稳定的流媒体播放</h4>

每个版本最大的目标之一就是提升所有提供商和播放器的流媒体播放稳定性。随着每个版本的发布，我们一直在改进稳定性；而且自上篇文章发布以来，大量新用户的涌入也在帮助我们发现并修复 bug。几乎每一个提供商都有不错的改进，稳定性、速度和音质都得到了提升。就在接下来的补丁版本 2.4.3 中，我们改进了较慢网络连接下的串流性能。我们的目标是让音乐永不停歇。

## "Praise You" - 🙏

衷心感谢每一位为此版本做出贡献的人——无论是通过编写代码、参与测试还是提供反馈。正是你们的支持，让 Music Assistant 不断演进，成为在你的播放器上管理音乐的终极工具。

## "Drop It Like It's Hot"
<h3 style="margin-top: -0.25em; opacity: .67;">立即获取 Music Assistant 2.4！</h3>

如果你还没有更新，现在就是时候了！如果你还没有用过它，你可以将 Music Assistant 作为 Home Assistant 加载项进行安装，

[<img src='https://my.home-assistant.io/badges/supervisor_addon.svg' style='border: 0;box-shadow: none;' alt="!Open your Home Assistant instance and show the dashboard of an add-on.">](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant)

要进一步了解 Music Assistant 的入门信息，请[阅读文档](https://www.music-assistant.io/installation/)。

有反馈或想贡献力量？欢迎加入我们在 GitHub 和 Discord 上不断壮大的社区！

祝你聆听愉快！
