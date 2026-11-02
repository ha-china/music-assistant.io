// ---------------------------------------------------------------------------
// Data for the "I Want To Listen To" page (/faq/listen-to/).
//
// TO ADD A MUSIC SOURCE: copy an existing block in MUSIC_SOURCES below, keep
// the list alphabetical by `name`, and fill in the four fields. The site build
// will fail with a clear message if the slug, the icon or a category is wrong,
// so a mistake here can never reach the live site.
//
// A source can belong to as many categories as it needs. The "Media Types
// Supported" row of the source's own Features table says whether it offers
// music, radio, podcasts or audiobooks, which maps onto the categories below;
// Artists, Albums, Tracks and Playlists all mean music. The country tags and a
// few deliberate exceptions are judgement calls, noted in the comments below.
// ---------------------------------------------------------------------------

/** Every category a source can be tagged with. */
export type CategoryId =
  // What do you want to listen to?
  | "own-files"
  | "streaming"
  | "radio"
  | "podcasts"
  | "audiobooks"
  | "live-concerts"
  | "classical"
  | "children"
  // Music and radio from a particular country
  | "germany"
  | "austria"
  | "sweden"
  | "denmark"
  | "russia"
  | "china"
  | "japan"
  | "france"
  | "uk"
  | "australia"
  | "usa";

export interface Category {
  /** Used as the link target, so it must be unique. */
  id: CategoryId;
  /** Heading above the tiles, and the label on the tile that jumps to it. */
  title: string;
  /** A file in public/assets/icons/listen/, written as a path from the site root. */
  icon: string;
  /** One sentence under the heading. Plain text, no markdown. */
  blurb: string;
}

export interface CategoryGroup {
  id: string;
  title: string;
  intro: string;
  categories: Category[];
}

export interface MusicSource {
  /** Shown under the logo. Normally the same as the sidebar label. */
  name: string;
  /** The doc page, copied straight from the sidebar in astro.config.mjs. */
  slug: string;
  /** A file in public/, written as a path starting with a slash. */
  icon: string;
  /** One or more ids from CategoryId above. */
  categories: CategoryId[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "what",
    title: "您想听什么？",
    intro: "选择一个类别，跳转到能提供该内容的音乐源。",
    categories: [
      {
        id: "own-files",
        icon: "/assets/icons/listen/own-files.png",
        title: "我的音乐",
        blurb:
          "您已拥有的音乐，存储在硬盘、NAS 或您自己的媒体服务器上。",
      },
      {
        id: "streaming",
        icon: "/assets/icons/listen/streaming.png",
        title: "流媒体音乐",
        blurb:
          "拥有庞大曲库可供搜索和播放的服务，部分付费，部分免费。",
      },
      {
        id: "radio",
        icon: "/assets/icons/listen/radio.png",
        title: "广播电台",
        blurb:
          "网络直播电台，从单个电台到包含数千个电台的目录。",
      },
      {
        id: "podcasts",
        icon: "/assets/icons/listen/podcasts.png",
        title: "播客",
        blurb:
          "关注节目，随时从上次停止的地方继续收听每一集。",
      },
      {
        id: "audiobooks",
        icon: "/assets/icons/listen/audiobooks.png",
        title: "有声书",
        blurb: "可供收听的书籍，带有章节和保存的播放位置。",
      },
      {
        id: "live-concerts",
        icon: "/assets/icons/listen/live-concerts.png",
        title: "现场音乐会录音",
        blurb: "演出的调音台和观众录音，通常是完整的曲目。",
      },
      {
        id: "classical",
        icon: "/assets/icons/listen/classical.png",
        title: "古典音乐",
        blurb:
          "提供管弦乐、室内乐和歌剧音乐的电台和服务。",
      },
      {
        id: "children",
        icon: "/assets/icons/listen/children.png",
        title: "儿童娱乐",
        blurb: "为年轻听众制作的音频内容。",
      },
    ],
  },
  {
    id: "country",
    title: "或来自您所在国家/地区的内容",
    intro:
      "这些源提供来自特定国家/地区的内容，或仅在该国家/地区可用。",
    categories: [
      {
        id: "germany",
        icon: "/assets/icons/listen/germany.svg",
        title: "Deutschland / 德国",
        blurb: "来自德国公共广播公司的电台和播客。",
      },
      {
        id: "austria",
        icon: "/assets/icons/listen/austria.svg",
        title: "Österreich / 奥地利",
        blurb: "奥地利的广播电台和播客。",
      },
      {
        id: "sweden",
        icon: "/assets/icons/listen/sweden.svg",
        title: "Sverige / 瑞典",
        blurb: "瑞典公共服务电台，以及瑞典语有声书。",
      },
      {
        id: "denmark",
        icon: "/assets/icons/listen/denmark.svg",
        title: "Danmark / 丹麦",
        blurb: "丹麦音乐流媒体，以及丹麦语有声书。",
      },
      {
        id: "russia",
        icon: "/assets/icons/listen/russia.svg",
        title: "Россия / 俄罗斯",
        blurb: "拥有庞大俄语曲库的流媒体服务。",
      },
      {
        id: "china",
        icon: "/assets/icons/listen/china.svg",
        title: "中国",
        blurb: "中国大陆的两个大型流媒体平台。",
      },
      {
        id: "japan",
        icon: "/assets/icons/listen/japan.svg",
        title: "日本",
        blurb: "由 Nico Nico 社区上传的音乐，其中许多在其他地方找不到。",
      },
      {
        id: "france",
        icon: "/assets/icons/listen/france.svg",
        title: "法国",
        blurb: "法国流媒体，拥有主流和独立厂牌的曲库。",
      },
      {
        id: "uk",
        icon: "/assets/icons/listen/uk.svg",
        title: "英国",
        blurb: "英国电台，包括直播和播后回放。",
      },
      {
        id: "australia",
        icon: "/assets/icons/listen/australia.svg",
        title: "澳大利亚",
        blurb: "澳大利亚公共电台，从新音乐到古典和爵士乐。",
      },
      {
        id: "usa",
        icon: "/assets/icons/listen/usa.svg",
        title: "美国",
        blurb: "美国电台，从卫星频道到个性化电台。",
      },
    ],
  },
];

export const MUSIC_SOURCES: MusicSource[] = [
  {
    name: "ABC Radio Network",
    slug: "music-providers/abc-radio-network",
    icon: "/assets/icons/abc-radio-icon.svg",
    categories: ["radio", "classical", "children", "australia"],
  },
  {
    name: "Apple Music",
    slug: "music-providers/apple-music",
    icon: "/assets/icons/apple-music.svg",
    // Apple Music lists Radio as a media type, but it means artist stations
    // rather than broadcast radio, so it is not tagged "radio".
    categories: ["streaming"],
  },
  {
    name: "ARD Sounds",
    slug: "music-providers/ard-sounds",
    icon: "/assets/icons/ard-sounds.png",
    categories: ["radio", "podcasts", "germany"],
  },
  {
    name: "Audible",
    slug: "music-providers/audible",
    icon: "/assets/icons/audible-icon.png",
    categories: ["audiobooks"],
  },
  {
    name: "Audiobookshelf",
    slug: "music-providers/audiobookshelf",
    icon: "/assets/icons/audiobookshelf-icon.png",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Bandcamp",
    slug: "music-providers/bandcamp",
    icon: "/assets/icons/bandcamp.svg",
    categories: ["streaming"],
  },
  {
    name: "BBC Sounds",
    slug: "music-providers/bbc-sounds",
    icon: "/assets/icons/bbcsounds-logo.png",
    categories: ["radio", "podcasts", "classical", "uk"],
  },
  {
    name: "Builtin",
    slug: "music-providers/builtin",
    icon: "/assets/icon.png",
    categories: ["radio"],
  },
  {
    name: "Deezer",
    slug: "music-providers/deezer",
    icon: "/assets/icons/deezer-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks"],
  },
  {
    name: "DI.fm Network",
    slug: "music-providers/digitally-imported",
    icon: "/assets/icons/difm-icon.svg",
    categories: ["radio", "classical"],
  },
  {
    name: "Emby",
    slug: "music-providers/emby",
    icon: "/assets/icons/emby-icon.svg",
    categories: ["own-files"],
  },
  {
    name: "gPodder",
    slug: "music-providers/gpodder",
    icon: "/assets/icons/gpodder-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "iBroadcast",
    slug: "music-providers/ibroadcast",
    icon: "/assets/icons/ibroadcast-logo.png",
    // Not self-hosted, but you upload your own collection to it.
    categories: ["own-files"],
  },
  {
    name: "Internet Archive",
    slug: "music-providers/internet-archive",
    icon: "/assets/icons/internet-archive-logo.png",
    categories: ["streaming", "audiobooks", "podcasts", "live-concerts"],
  },
  {
    name: "iTunes Podcast Search",
    slug: "music-providers/itunes-podcast",
    icon: "/assets/icons/itunes-podcast-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Jellyfin",
    slug: "music-providers/jellyfin",
    icon: "/assets/icons/jellyfin-logo.svg",
    categories: ["own-files"],
  },
  {
    name: "KION Music",
    slug: "music-providers/kion-music",
    icon: "/assets/icons/kion-music-icon.svg",
    categories: ["streaming", "russia"],
  },
  {
    name: "本地文件",
    slug: "music-providers/local-files",
    icon: "/assets/icons/localfiles-icon.png",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Mamma Mi Radio",
    slug: "music-providers/mamma-mi-radio",
    icon: "/assets/icons/mamma-mi-radio-icon.png",
    // A self-hosted station rather than a library of your own files, so radio
    // only. The hosts are Italian characters but broadcast mostly in English,
    // so no country tag.
    categories: ["radio"],
  },
  {
    name: "MusicMe",
    slug: "music-providers/musicme",
    icon: "/assets/icons/musicme-icon.svg",
    categories: ["streaming", "france"],
  },
  {
    name: "网易云音乐",
    slug: "music-providers/netease-cloud-music",
    icon: "/assets/icons/netease-cloud-music-icon.png",
    categories: ["streaming", "china"],
  },
  {
    name: "Nico Nico Video",
    slug: "music-providers/niconico",
    icon: "/assets/icons/niconico-logo.svg",
    categories: ["streaming", "japan"],
  },
  {
    name: "NTS Radio",
    slug: "music-providers/nts",
    icon: "/assets/icons/nts-icon.svg",
    categories: ["radio", "uk"],
  },
  {
    name: "Nugs.net",
    slug: "music-providers/nugs",
    icon: "/assets/icons/nugsnet-logo.png",
    categories: ["streaming", "live-concerts"],
  },
  {
    name: "ORF Radiothek",
    slug: "music-providers/orf-radiothek",
    icon: "/assets/icons/orf_radiothek-icon.svg",
    categories: ["radio", "podcasts", "classical", "austria"],
  },
  {
    name: "Overcast",
    slug: "music-providers/overcast",
    icon: "/assets/icons/overcast-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Pandora",
    slug: "music-providers/pandora",
    icon: "/assets/icons/pandora.png",
    // Tagged "usa" because it can only be used there, not for its catalogue,
    // which is the same international music as any other streaming service.
    categories: ["radio", "usa"],
  },
  {
    name: "Phish.in",
    slug: "music-providers/phishin",
    icon: "/assets/icons/phish-logo.png",
    categories: ["live-concerts"],
  },
  {
    name: "Plex",
    slug: "music-providers/plex",
    icon: "/assets/icons/plex-icon.svg",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Pocketcasts",
    slug: "music-providers/pocketcasts",
    icon: "/assets/icons/pocketcasts-icon.svg",
    categories: ["podcasts"],
  },
  {
    name: "Podcast Index",
    slug: "music-providers/podcast-index",
    icon: "/assets/icons/podcast-index-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "播客 RSS 订阅",
    slug: "music-providers/podcastfeed",
    icon: "/assets/icons/rss-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Qobuz",
    slug: "music-providers/qobuz",
    icon: "/assets/icons/qobuz-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "QQ音乐",
    slug: "music-providers/qqmusic",
    icon: "/assets/icons/qqmusic-icon.svg",
    categories: ["streaming", "china"],
  },
  {
    name: "Radio Browser",
    slug: "music-providers/radio-browser",
    icon: "/assets/icons/radiobrowser_icon.png",
    categories: ["radio", "classical"],
  },
  {
    name: "Radio Paradise",
    slug: "music-providers/radio-paradise",
    icon: "/assets/icons/radioparadise-icon.png",
    categories: ["radio"],
  },
  {
    name: "SiriusXM",
    slug: "music-providers/siriusxm",
    icon: "/assets/icons/siriusxm-logo.png",
    // Not tagged "canada" as well: the Canadian lineup is mostly the American
    // one, so it sells there rather than being aimed at listeners there.
    categories: ["radio", "classical", "children", "usa"],
  },
  {
    name: "SomaFM Radio",
    slug: "music-providers/somafm-radio",
    icon: "/assets/icons/somafm-icon.png",
    categories: ["radio"],
  },
  {
    name: "SoundCloud",
    slug: "music-providers/soundcloud",
    icon: "/assets/icons/soundcloud-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "Spotify",
    slug: "music-providers/spotify",
    icon: "/assets/icons/spotify-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks"],
  },
  {
    name: "Storytel",
    slug: "music-providers/storytel",
    icon: "/assets/icons/storytel.svg",
    // Swedish service, and sold in Denmark as Mofibo, with a large catalogue
    // in both languages.
    categories: ["audiobooks", "podcasts", "sweden", "denmark"],
  },
  {
    name: "Subsonic",
    slug: "music-providers/subsonic",
    icon: "/assets/icons/subsonic_icon.png",
    categories: ["own-files", "podcasts"],
  },
  {
    name: "Sveriges Radio",
    slug: "music-providers/sveriges-radio",
    icon: "/assets/icons/sverigesradio-icon.svg",
    categories: ["radio", "classical", "children", "sweden"],
  },
  {
    name: "TeddyCloud",
    slug: "music-providers/teddycloud",
    icon: "/assets/icons/teddycloud-icon.svg",
    categories: ["own-files", "audiobooks", "children"],
  },
  {
    name: "Tidal",
    slug: "music-providers/tidal",
    icon: "/assets/icons/tidal-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "TuneIn",
    slug: "music-providers/tunein",
    icon: "/assets/icons/tunein-icon.svg",
    categories: ["radio", "classical"],
  },
  {
    name: "Yandex Music",
    slug: "music-providers/yandex-music",
    icon: "/assets/icons/yandex-music-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks", "russia"],
  },
  {
    name: "YouSee Musik",
    slug: "music-providers/yousee-musik",
    icon: "/assets/icons/yousee.svg",
    categories: ["streaming", "denmark"],
  },
  {
    name: "YouTube Music",
    slug: "music-providers/youtube-music",
    icon: "/assets/icons/ytm-icon.svg",
    categories: ["streaming", "podcasts"],
  },
  {
    name: "Zvuk Music",
    slug: "music-providers/zvuk",
    icon: "/assets/icons/zvuk-icon.svg",
    categories: ["streaming", "russia"],
  },
];

// ---------------------------------------------------------------------------
// Everything the "I Want To Listen To" page needs, in one object.
// Rendered by src/components/TilePage.astro.
// ---------------------------------------------------------------------------
export const MUSIC_SOURCES_PAGE = {
  idPrefix: "listen",
  dataFile: "src/data/music-sources.ts",
  itemNoun: "source",
  pathPrefix: "music-providers/",
  flagGroupId: "country",
  // Pages under music-providers/ that intentionally have no tile.
  knownUnlisted: [
    "music-providers", // the overview page
    "music-providers/ambient-sounds", // fits none of the listening categories
    "music-providers/rainy-mood", // fits none of the listening categories
    "music-providers/netease-cloud-music-zh", // Chinese version of another page
    "music-providers/qqmusic-zh", // Chinese version of another page
  ],
  groups: CATEGORY_GROUPS,
  items: MUSIC_SOURCES,
};