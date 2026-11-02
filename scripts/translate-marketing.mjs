// Translates the marketing data + homepage copy to Simplified Chinese.
// The same strings live in scripts/ensure-chinese.mjs, which re-applies them
// after every upstream sync (-X theirs resets the files).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

const MARKETING = [
  // plugins
  ['label: "Party mode"', 'label: "派对模式"'],
  ['title: "Everyone gets a turn."', 'title: "人人都有点歌权。"'],
  ["text: \"Guests scan a QR code to browse your music and request songs from their phones. You decide what plays next. No app or account needed.\"", 'text: "客人扫码即可用手机浏览你的音乐并点歌。放什么由你决定。无需安装应用或注册账号。"'],
  ['link: "Explore Party mode"', 'link: "了解派对模式"'],
  ['label: "Music Quiz"', 'label: "音乐问答"'],
  ['title: "Challenge your friends."', 'title: "向好友发起挑战。"'],
  ["text: \"Turn your collection into game night. Guess the song, put tracks in order of release or try music trivia. Friends join from their phones.\"", 'text: "把你的音乐收藏变成游戏之夜。猜歌名、按发行时间排序曲目，或来点音乐冷知识。好友用手机即可加入。"'],
  ['link: "Explore Music Quiz"', 'link: "了解音乐问答"'],
  ['label: "Lyrics"', 'label: "歌词"'],
  ['title: "Sing along."', 'title: "跟着唱。"'],
  ["text: \"Follow the lyrics in Now Playing. When timed lyrics are available, they scroll along with the music.\"", 'text: "在“正在播放”中查看歌词。有逐句时间轴时，歌词会随音乐滚动。"'],
  ['link: "Explore lyrics"', 'link: "了解歌词"'],
  ['label: "AI Radio"', 'label: "AI 电台"'],
  ['title: "A radio station of your own."', 'title: "属于你自己的电台。"'],
  ["text: \"Give your playlist a host that introduces songs and adds weather or news between tracks. Use the AI and text-to-speech services you already have in Home Assistant.\"", 'text: "给你的播放列表配一位主持人：介绍歌曲，在曲目之间插播天气或新闻。直接使用你 Home Assistant 里已有的 AI 与文字转语音服务。"'],
  ['link: "Explore AI Radio"', 'link: "了解 AI 电台"'],

  // features
  ['title: "One library across your music sources"', 'title: "所有音源汇成一个资料库"'],
  ['summary: "Search your streaming services and your own collection together."', 'summary: "流媒体服务与本地收藏一起搜。"'],
  ["text: \"Browse music from your connected sources in one place. Matching releases are linked, and a playlist can include tracks from several services alongside your own files. Each service still needs its own account and subscription where required.\"", 'text: "在一个界面浏览所有已连接音源的音乐。相同专辑会互相关联，播放列表可以混排多个服务的曲目和本地文件。各服务仍需自己的账号与订阅。"'],
  ['label: "Explore music sources"', 'label: "了解音乐源"'],
  ['title: "Free, open source and private"', 'title: "免费、开源、注重隐私"'],
  ['summary: "Your music system stays under your control."', 'summary: "你的音乐系统始终由你掌控。"'],
  ['". It runs in your home and never collects or shares what you play. Connected music services still handle their own streams under their own privacy terms."', '"。它运行在你家中，绝不收集或分享你的播放记录。连接的音乐服务仍按各自隐私条款处理自己的音频流。"'],
  ['title: "Keep the music going"', 'title: "音乐不间断"'],
  ['summary: "Put your phone away or take the queue to another room."', 'summary: "放下手机，或把队列带到另一个房间。"'],
  ["text: \"Your playback queue lives on the Music Assistant server, so closing the app or browser doesn’t stop the music. Transfer the queue to another speaker without losing your place, and control playback from your phone or a browser.\"", 'text: "播放队列保存在 Music Assistant 服务器上，关掉应用或浏览器音乐照放。把队列原封不动转到另一只音箱，用手机或浏览器控制播放。"'],
  ['label: "Move music between rooms"', 'label: "在房间之间移动音乐"'],
  ['title: "Play in sync across compatible speakers"', 'title: "多音箱同步播放"'],
  ['summary: "Including AirPlay and Sendspin together.",', 'summary: "AirPlay 与 Sendspin 也能同组。",'],
  ["text: \"Group compatible speakers to play the same music around your home. Music Assistant can also bring AirPlay speakers into a Sendspin group. Synchronization depends on the speakers and group type; not every combination can play in sync.\"", 'text: "把兼容的音箱组成分组，全屋播放同一首音乐。Music Assistant 还能把 AirPlay 音箱拉进 Sendspin 分组。同步效果取决于音箱与分组类型，并非所有组合都能同步。"'],
  ['label: "Learn about groups"', 'label: "了解分组"'],
  ['title: "The best sound each speaker can play"', 'title: "每只音箱的最佳音质"'],
  ['summary: "Gapless albums, smoother transitions and consistent volume."', 'summary: "专辑无缝衔接、平滑过渡、音量一致。"'],
  ["text: \"Music Assistant matches the audio to what each speaker supports. Keep albums gapless, blend tracks with Smart Fades, even out volume between songs and adjust the sound for your speakers and room.\"", 'text: "Music Assistant 按每只音箱的能力匹配音频。专辑无缝播放、智能淡入淡出衔接曲目、均衡歌曲间音量，并针对你的音箱与房间调音。"'],
  ['label: "How the audio pipeline works"', 'label: "音频管线如何工作"'],
  ['title: "Make music part of your smart home"', 'title: "让音乐成为智能家居的一部分"'],
  ['summary: "Voice control, automations and announcements with Home Assistant."', 'summary: "语音控制、自动化与播报，配合 Home Assistant。"'],
  ["text: \"Ask Home Assistant Assist for a song and a room, start music from an automation, or play a doorbell announcement through your speakers. Music Assistant can pause or lower the music for the message, then bring it back. The integration works with both Docker and Home Assistant installations.\"", 'text: "让 Home Assistant Assist 在指定房间放歌、用自动化启动音乐，或通过音箱播出门铃公告。播报时 Music Assistant 可暂停或压低音量，播完恢复。集成同时支持 Docker 与 Home Assistant 安装方式。"'],
  ['label: "Connect Home Assistant"', 'label: "连接 Home Assistant"'],
  ['title: "Move your playlists"', 'title: "迁移你的播放列表"'],
  ['summary: "Take your favorites to another service."', 'summary: "把收藏带到另一个服务。"'],
  ["text: \"Copy playlists between supported services and keep supported playlists in sync as you edit them. You can change services without rebuilding every playlist, though the songs available depend on the destination service’s catalogue.\"", 'text: "在支持的服务之间复制播放列表，编辑后还能保持同步。换服务不必重建所有歌单，可用曲目取决于目标服务的曲库。"'],
];

const COMPONENTS = [
  // Hero
  ["<span>Your music.</span>", "<span>你的音乐。</span>"],
  ['<span class="way">Your way.</span>', '<span class="way">由你做主。</span>'],
  [
    "Bring the music you love – from your personal collection or streaming\n        services – into one library, to enjoy on speakers you already own.",
    "把你喜爱的音乐——无论是本地收藏还是流媒体服务——汇成一个资料库，\n        用你已有的音箱欣赏。",
  ],
  ['alt="Music Assistant\'s Discover screen: speakers playing in different rooms, top picks and recently played music"', 'alt="Music Assistant 的“发现”界面：不同房间的音箱正在播放，显示精选与最近播放"'],

  // HowItWorks
  ["title=\"Your music<", "title=\"你的音乐<"],
  ["title=\"Your speakers<", "title=\"你的音箱<"],

  // Discover
  ["<h2>Get lost in the music.</h2>", "<h2>沉浸在音乐里。</h2>"],
  ['alt="The album library in Music Assistant, a grid of album covers"', 'alt="Music Assistant 的专辑资料库：专辑封面网格"'],
  ['alt="Now playing on a phone, with the album cover, progress and playback controls"', 'alt="手机上的“正在播放”界面：专辑封面、进度条与播放控制"'],

  // Community
  ["<h2>Built in the open.</h2>", "<h2>公开透明地构建。</h2>"],
  ["Brought to you by", "由以下团队出品"],

  // FinalCta
  ["<h2>Bring your music home.</h2>", "<h2>把音乐带回家。</h2>"],

  // SectionHeading titles
  ['title="A music system for your home."', 'title="属于你家的音乐系统。"'],
  ["lead=\"Your library and queues run on a device in your home. Music Assistant never collects or shares what you play. Online music services still handle their own streams.\"", 'lead="你的资料库与播放队列跑在家中的设备上。Music Assistant 绝不收集或分享你的播放记录。在线音乐服务仍自行处理各自的音频流。"'],
  ['title="More than pressing play."', 'title="不止于按下播放。"'],
  ['aria-label="Some of the supported music sources"', 'aria-label="部分支持的音乐源"'],
  ['aria-label="Some of the supported speakers"', 'aria-label="部分支持的音箱"'],
  ['title="One system uniting your music and your speakers."', 'title="一套系统，打通你的音乐与音箱。"'],
  ['title="Music Assistant — Your music. Your way."', 'title="Music Assistant — 你的音乐，由你做主。"'],
  ['>Lokalise Translations<', '>Lokalise 翻译平台<'],
  ['title="Lokalise Translations"', 'title="Lokalise 翻译平台"'],
  ['>Open Home Foundation<', '>Open Home Foundation<'],
  ["This website uses", "本站使用"],
  ["to help us improve the site. You can view all data in our", "帮助我们改进网站。你可以在我们的"],
  ["public dashboard", "公开面板查看全部数据"],
];

let missing = 0;
function apply(file, pairs) {
  const path = root + file;
  let text = readFileSync(path, "utf8");
  const isCRLF = text.includes("\r\n");
  for (const [en0, zh0] of pairs) {
    const en = isCRLF ? en0.split("\n").join("\r\n") : en0;
    const zh = isCRLF ? zh0.split("\n").join("\r\n") : zh0;
    if (!text.includes(en)) {
      console.log(`MISS ${file}: ${en.slice(0, 56)}`);
      missing++;
      continue;
    }
    text = text.split(en).join(zh);
  }
  writeFileSync(path, text);
}

apply("src/data/marketing.ts", MARKETING);
apply("src/components/home/Hero.astro", COMPONENTS);
apply("src/components/home/HowItWorks.astro", COMPONENTS);
apply("src/components/home/Discover.astro", COMPONENTS);
apply("src/components/home/Community.astro", COMPONENTS);
apply("src/components/home/FinalCta.astro", COMPONENTS);
apply("src/components/home/Features.astro", COMPONENTS);
apply("src/components/home/Plugins.astro", COMPONENTS);
apply("src/components/home/Shelf.astro", COMPONENTS);
console.log(missing ? `${missing} misses` : "marketing + homepage done");
