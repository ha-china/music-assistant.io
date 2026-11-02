// Content for the marketing pages. Kept apart from the markup so the lists of
// sources, speakers, plugins and people can change without touching layout.

export interface Brand {
  name: string;
  icon: string;
  href: string;
  /** The logo is black and needs inverting on dark backgrounds. */
  dark?: boolean;
}

const brand = (icon: string, name: string, href: string, dark = false): Brand => ({
  name,
  icon,
  href,
  dark,
});

export const musicSources: Brand[] = [
  brand("filesystem_local", "Local files", "/music-providers/local-files/"),
  brand("spotify", "Spotify", "/music-providers/spotify/"),
  brand("apple_music", "Apple Music", "/music-providers/apple-music/"),
  brand("ytmusic", "YouTube Music", "/music-providers/youtube-music/"),
  brand("tidal", "TIDAL", "/music-providers/tidal/", true),
  brand("qobuz", "Qobuz", "/music-providers/qobuz/", true),
  brand("deezer", "Deezer", "/music-providers/deezer/"),
  brand("plex", "Plex", "/music-providers/plex/"),
  brand("tunein", "TuneIn", "/music-providers/tunein/"),
  brand("audible", "Audible", "/music-providers/audible/"),
  brand("audiobookshelf", "Audiobookshelf", "/music-providers/audiobookshelf/"),
  brand("pocketcasts", "Pocket Casts", "/music-providers/pocketcasts/"),
];

export const speakers: Brand[] = [
  brand("sonos", "Sonos", "/player-support/sonos/"),
  brand("airplay", "AirPlay", "/player-support/airplay/"),
  brand("chromecast", "Google Cast", "/player-support/google-cast/"),
  brand("sendspin", "Sendspin", "/player-support/sendspin/"),
  brand("hass_players", "Home Assistant", "/player-support/home-assistant/"),
  brand("wiim", "WiiM", "/player-support/wiim/"),
  brand("heos", "HEOS", "/player-support/heos/"),
  brand("musiccast", "Yamaha MusicCast", "/player-support/musiccast/"),
  brand("bluesound", "Bluesound", "/player-support/bluesound/", true),
  brand("squeezelite", "Squeezelite", "/player-support/squeezelite/"),
  brand("dlna", "DLNA", "/player-support/dlna/"),
  brand("alexa", "Alexa", "/player-support/alexa/"),
];

export interface Plugin {
  label: string;
  cover: PaletteName;
  title: string;
  text: string;
  href: string;
  link: string;
}

export const plugins: Plugin[] = [
  {
    label: "派对模式",
    cover: "hiphop",
    title: "人人都有点歌权。",
    text: "客人扫码即可用手机浏览你的音乐并点歌。放什么由你决定。无需安装应用或注册账号。",
    href: "/plugins/party/",
    link: "了解派对模式",
  },
  {
    label: "音乐问答",
    cover: "electronic",
    title: "向好友发起挑战。",
    text: "把你的音乐收藏变成游戏之夜。猜歌名、按发行时间排序曲目，或来点音乐冷知识。好友用手机即可加入。",
    href: "/plugins/music-quiz/",
    link: "了解音乐问答",
  },
  {
    label: "歌词",
    cover: "soul",
    title: "跟着唱。",
    text: "在“正在播放”中查看歌词。有逐句时间轴时，歌词会随音乐滚动。",
    href: "/metadata/lyrics/",
    link: "了解歌词",
  },
  {
    label: "AI 电台",
    cover: "radio",
    title: "属于你自己的电台。",
    text: "给你的播放列表配一位主持人：介绍歌曲，在曲目之间插播天气或新闻。直接使用你 Home Assistant 里已有的 AI 与文字转语音服务。",
    href: "/plugins/ai-radio/",
    link: "了解 AI 电台",
  },
];

export interface Feature {
  cover: PaletteName;
  /** Lucide icon drawn on the cover, so each row says what it is about. */
  icon: string;
  title: string;
  summary: string;
  text: string | Array<string | { href: string; label: string }>;
  link?: { href: string; label: string };
}

export const features: Feature[] = [
  {
    cover: "rock",
    icon: "library-big",
    title: "所有音源汇成一个资料库",
    summary: "流媒体服务与本地收藏一起搜。",
    text: "在一个界面浏览所有已连接音源的音乐。相同专辑会互相关联，播放列表可以混排多个服务的曲目和本地文件。各服务仍需自己的账号与订阅。",
    link: { href: "/music-providers/", label: "了解音乐源" },
  },
  {
    cover: "electronic",
    icon: "shield-check",
    title: "免费、开源、注重隐私",
    summary: "你的音乐系统始终由你掌控。",
    text: [
      "Music Assistant is free and open source, backed by the ",
      {
        href: "https://www.openhomefoundation.org/",
        label: "Open Home Foundation",
      },
      "。它运行在你家中，绝不收集或分享你的播放记录。连接的音乐服务仍按各自隐私条款处理自己的音频流。",
    ],
  },
  {
    cover: "folk",
    icon: "list-music",
    title: "音乐不间断",
    summary: "放下手机，或把队列带到另一个房间。",
    text: "播放队列保存在 Music Assistant 服务器上，关掉应用或浏览器音乐照放。把队列原封不动转到另一只音箱，用手机或浏览器控制播放。",
    link: { href: "/faq/masstransfer/", label: "在房间之间移动音乐" },
  },
  {
    cover: "ambient",
    icon: "speaker",
    title: "多音箱同步播放",
    summary: "AirPlay 与 Sendspin 也能同组。",
    text: "把兼容的音箱组成分组，全屋播放同一首音乐。Music Assistant 还能把 AirPlay 音箱拉进 Sendspin 分组。同步效果取决于音箱与分组类型，并非所有组合都能同步。",
    link: { href: "/faq/groups/", label: "了解分组" },
  },
  {
    cover: "classical",
    icon: "audio-waveform",
    title: "每只音箱的最佳音质",
    summary: "专辑无缝衔接、平滑过渡、音量一致。",
    text: "Music Assistant 按每只音箱的能力匹配音频。专辑无缝播放、智能淡入淡出衔接曲目、均衡歌曲间音量，并针对你的音箱与房间调音。",
    link: { href: "/audiopipeline/", label: "音频管线如何工作" },
  },
  {
    cover: "jazz",
    icon: "house",
    title: "让音乐成为智能家居的一部分",
    summary: "语音控制、自动化与播报，配合 Home Assistant。",
    text: "让 Home Assistant Assist 在指定房间放歌、用自动化启动音乐，或通过音箱播出门铃公告。播报时 Music Assistant 可暂停或压低音量，播完恢复。集成同时支持 Docker 与 Home Assistant 安装方式。",
    link: { href: "/integration/", label: "连接 Home Assistant" },
  },
  {
    cover: "indie",
    icon: "arrow-right-left",
    title: "迁移你的播放列表",
    summary: "把收藏带到另一个服务。",
    text: "在支持的服务之间复制播放列表，编辑后还能保持同步。换服务不必重建所有歌单，可用曲目取决于目标服务的曲库。",
  },
];

interface TeamMember {
  name: string;
  github: string;
  image?: string;
}

export const team: TeamMember[] = [
  { name: "Marcel", github: "marcelveldt", image: "marcel" },
  { name: "Marvin", github: "marvinschenkel", image: "marvin" },
  { name: "Maxim", github: "maximmaxim345", image: "maxim" },
  { name: "Steven", github: "stvncode", image: "steven" },
  { name: "Chris", github: "chrisuthe", image: "chris" },
  { name: "Piero", github: "pierosavi", image: "piero" },
  { name: "Gavin", github: "OzGav", image: "gavin" },
  { name: "Jozef", github: "jozefKruszynski", image: "jozef" },
  { name: "Fabian", github: "fmunkes", image: "fabian" },
  { name: "David", github: "teancom", image: "david" },
  { name: "Andrii", github: "formatbce", image: "andrii" },
];

/**
 * Album-art palettes. Each is a three-colour mesh gradient standing in for a
 * cover, one per corner of the music Music Assistant plays, so the site gets
 * its colour the way the app does: from the artwork.
 */
export interface Palette {
  genre: string;
  source: string;
  colors: [string, string, string];
}

export const palettes = {
  indie: {
    genre: "Indie",
    source: "Spotify",
    colors: ["#ff6b6b", "#f7b267", "#5f0f40"],
  },
  electronic: {
    genre: "Electronic",
    source: "SoundCloud",
    colors: ["#00f5d4", "#7b2ff7", "#0b0c3d"],
  },
  jazz: {
    genre: "Jazz",
    source: "Local files",
    colors: ["#f4d35e", "#ee964b", "#0d3b66"],
  },
  hiphop: {
    genre: "Hip-hop",
    source: "Apple Music",
    colors: ["#ff006e", "#fb5607", "#3a0ca3"],
  },
  classical: {
    genre: "Classical",
    source: "Qobuz",
    colors: ["#e9d8a6", "#94d2bd", "#005f73"],
  },
  ambient: {
    genre: "Ambient",
    source: "Plex",
    colors: ["#a2d2ff", "#cdb4db", "#1d3557"],
  },
  rock: {
    genre: "Rock",
    source: "TIDAL",
    colors: ["#ffba08", "#d00000", "#03071e"],
  },
  soul: {
    genre: "Soul",
    source: "YouTube Music",
    colors: ["#ff9e00", "#9d4edd", "#240046"],
  },
  folk: {
    genre: "Folk",
    source: "Bandcamp",
    colors: ["#f2e8cf", "#a7c957", "#386641"],
  },
  radio: {
    genre: "Radio",
    source: "TuneIn",
    colors: ["#90e0ef", "#48cae4", "#03045e"],
  },
  podcasts: {
    genre: "Podcasts",
    source: "Pocket Casts",
    colors: ["#ffcad4", "#f4845f", "#582f0e"],
  },
  audiobooks: {
    genre: "Audiobooks",
    source: "Audiobookshelf",
    colors: ["#caf0f8", "#b8c0ff", "#3c096c"],
  },
} satisfies Record<string, Palette>;

export type PaletteName = keyof typeof palettes;

/** The shelf under the hero, showing the range of what plays. */
export const shelf: PaletteName[] = [
  "indie",
  "jazz",
  "electronic",
  "classical",
  "hiphop",
  "podcasts",
  "folk",
  "ambient",
  "rock",
  "radio",
  "soul",
  "audiobooks",
];
