// ---------------------------------------------------------------------------
// Settings for the music source comparison table on /faq/listen-to/.
//
// Unlike the player table, almost nothing lives here. The values come from the
// "## Features" table on each source's own page, read while the site builds by
// src/components/MusicSourceMatrix.astro, so the summary cannot drift from the
// pages the way the screenshot it replaced did. This file holds only the parts
// that cannot be read from a page: what the columns are called, how the media
// types are shown, and the two escape hatches below.
//
// TO ADD A MUSIC SOURCE: nothing to do here. Give the page a complete Features
// table with the standard row labels and it appears in the comparison on its
// own. The build says so if a row is missing.
// ---------------------------------------------------------------------------

/** The chips shown in the Max Stream Quality column. */
export type QualityTier = "hi-res" | "cd" | "lossy" | "varies";

export interface SummaryColumn {
  /** Key used internally, and the class hook for the odd column-specific rule. */
  id: string;
  /** The term itself, used in the legend under the table. */
  label: string;
  /**
   * The heading, one string per line. Written out rather than left to wrap:
   * the table has room to spare at most widths, and with room to spare nothing
   * forces a break, so each heading sits at its full width and the columns come
   * out ragged. Splitting them here is what sets the column widths.
   */
  head: string[];
  /** One sentence for the legend under the table. Plain text, no markdown. */
  help: string;
  /** Optional page explaining the term, linked from the legend. */
  href?: string;
  /** Matched against the row label on the page, markup stripped. */
  featuresLabel: RegExp;
}

export const YES_NO_COLUMNS: SummaryColumn[] = [
  {
    id: "subscriptionFree",
    label: "免费",
    head: ["免费"],
    help: "该音源的部分或全部内容无需付费订阅即可播放。",
    featuresLabel: /^Subscription FREE$/i,
  },
  {
    id: "selfHosted",
    label: "自托管",
    head: ["本地"],
    help: "该音源从你自己的磁盘、NAS 或服务器上的文件播放，而不是别人的曲库。",
    featuresLabel: /^Self-Hosted Local Media$/i,
  },
  {
    id: "endlessMix",
    label: "无限混播",
    // Abbreviated, because the column is a tick and the full name would set a
    // width the ticks never use. The legend spells it out.
    head: ["混播"],
    help: "队列播完后，Music Assistant 能按该音源自己的“相似”逻辑继续播放。",
    href: "/usage/#endless-mix",
    featuresLabel: /^Endless Mix$/i,
  },
  {
    id: "recommendations",
    label: "推荐",
    // Short, because the column is a tick: at body size the full word would
    // hold sixty pixels to show fifteen. The legend keeps the full term.
    head: ["推荐"],
    help: "该音源提供自己的推荐内容，显示在“发现”视图中。",
    href: "/ui/#view---discover",
    featuresLabel: /^Recommendations Supported$/i,
  },
];

/** The three columns that carry text rather than a tick or a cross. */
export const TEXT_COLUMNS = {
  quality: {
    id: "quality",
    label: "最高音质",
    head: ["最高流", "音质"],
    help: "该音源能提供的最佳音质。Hi-Res 指高于 48kHz 或 16bit；CD 对应激光唱片规格；Lossy 表示经过有损压缩；Varies 表示取决于电台或节目而非音源本身。",
    href: "/player-support/#audio-quality",
    featuresLabel: /^Maximum Stream Quality$/i,
  },
  mediaTypes: {
    id: "mediaTypes",
    label: "媒体类型",
    head: ["媒体", "类型"],
    help: "该音源能播放的内容类型。一个音源往往同时支持多种。",
    featuresLabel: /^Media Types Supported$/i,
  },
  login: {
    id: "login",
    label: "登录",
    head: ["登录"],
    help: "登录方式。密码最直接；OAuth 在服务自己的网站上登录；Cookie 需要手动从浏览器复制，体验最差。",
    featuresLabel: /^Login Method$/i,
  },
} as const;

// The order media types are listed in, whatever order a page happens to use.
// A type a page names that is not here fails the build rather than being
// dropped quietly, because a silently missing chip is a wrong table.
export const MEDIA_TYPE_ORDER = [
  "Artists",
  "Albums",
  "Tracks",
  "Playlists",
  "Radio",
  "Podcasts",
  "Audiobooks",
];

// Sources with a tile but no row in the comparison. Only for a source there is
// genuinely nothing to compare about; anything else belongs in the table.
export const EXCLUDED: string[] = [
  // Plays whatever URL you hand it, and generates playlists from what you
  // already have. No subscription, no login and no stream quality of its own,
  // so every column would be empty or meaningless.
  "music-providers/builtin",
];

// The tier is worked out from the wording on the page. These are the ones the
// wording cannot settle, decided by hand instead of guessed at. Keyed by slug.
export const QUALITY_TIER_OVERRIDES: Record<string, QualityTier> = {
  // "FLAC, Unlimited": local files are served at whatever resolution the file
  // holds, with no cap, so the ceiling is Hi-Res.
  "music-providers/local-files": "hi-res",
  // "192kHz 24 bit", with no codec named. Above 48kHz and above 16 bits, which
  // is what /player-support/#audio-quality calls Hi-Res.
  "music-providers/audiobookshelf": "hi-res",
  // All three say "Lossless FLAC (with subscription)" without a resolution.
  // Recorded as Hi-Res, matching the summary this table replaced.
  "music-providers/kion-music": "hi-res",
  "music-providers/yandex-music": "hi-res",
  "music-providers/zvuk": "hi-res",
  // Soloist can serve lossless, and the page says 24 bits because that is the
  // ceiling Music Assistant reports for the tier (Soloist never says what it
  // actually fetched). Spotify sells no hi-res tier, so this pins the chip to CD
  // rather than letting that 24 be read as one - an editorial call, not a
  // tie-break: the wording on its own would derive hi-res.
  "music-providers/spotify": "cd",
};
