// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import mdx from "@astrojs/mdx";
import { remarkAlert } from "remark-github-blockquote-alert";
import { rehypeBasePath } from "./scripts/rehype-base-path.mjs";
import { authors } from "./src/authors.mjs";

const isProduction =
  process.env.CONTEXT === "production" || !process.env.CONTEXT;

// Chinese mirror deployment: served from hasscn.top/music-assistant. Both
// overridable so the upstream root deploy keeps working from this branch.
const SITE_URL = process.env.SITE_URL || "https://www.hasscn.top";
const BASE_PATH = process.env.SITE_BASE_PATH || "/music-assistant";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  image: {
    domains: ["assets.openhomefoundation.org", "www.openhomefoundation.org"],
    remotePatterns: [
      { protocol: "https", hostname: "assets.openhomefoundation.org" },
      { protocol: "https", hostname: "www.openhomefoundation.org" },
    ],
  },
  markdown: {
    remarkPlugins: [remarkAlert],
    rehypePlugins: [rehypeBasePath()],
  },
  integrations: [
    starlight({
      title: "Music Assistant",
      locales: {
        root: { label: "简体中文", lang: "zh-cn" },
      },
      titleDelimiter: "-",
      editLink: isProduction
        ? {
            baseUrl:
              "https://github.com/music-assistant/music-assistant.io/edit/main/",
          }
        : {},
      logo: {
        light: "./src/assets/ma-logo--dark.svg",
        dark: "./src/assets/ma-logo--light.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      pagination: false,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/music-assistant",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/kaVm8hGpne",
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: isProduction ? "index, follow" : "noindex, nofollow",
          },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Music Assistant",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Linux",
            description:
              "Music library manager for your offline and online music sources",
            url: "https://www.hasscn.top/music-assistant/",
            author: {
              "@type": "Organization",
              name: "Open Home Foundation",
              url: "https://www.openhomefoundation.org/",
            },
          }),
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/music-assistant/favicon.svg",
          },
        },
        {
          tag: "script",
          attrs: {
            charset: "UTF-8",
            id: "LA_COLLECT",
            src: "//sdk.51.la/js-sdk-pro.min.js?id=3MhQABjxy4RZQ6Ig&ck=3MhQABjxy4RZQ6Ig",
          },
        },
        {
          tag: "script",
          content: `document.addEventListener('keydown', function(e) {
						if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
							e.preventDefault();
							document.querySelector('button[data-open-modal]')?.click();
						}
					});`,
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://www.hasscn.top/music-assistant/assets/website-social.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://www.hasscn.top/music-assistant/assets/website-social.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      routeMiddleware: "./src/starlightRouteData.ts",
      plugins: [
        starlightBlog({
          title: "新闻",
          prefix: "blog",
          postCount: 10,
          recentPostCount: 5,
          authors,
        }),
      ],
      sidebar: [
        { label: "首页", link: "/" },
        { label: "文档", slug: "documentation" },
        {
          label: "我想要…",
          items: [
            { label: "安装 Music Assistant", slug: "installation" },
            {
              label: "安装 HA 集成",
              slug: "integration/installation",
            },
            { label: "听什么…", slug: "faq/listen-to" },
            { label: "推流到哪…", slug: "faq/stream-to" },
          ],
        },
        {
          label: "首次运行与设置",
          collapsed: true,
          items: [
            { label: "首次运行（认证）", slug: "first-run" },
            {
              label: "音乐源",
              slug: "settings/music-provider-settings",
            },
            { label: "播放器提供方", slug: "settings/player-provider" },
            {
              label: "元数据提供方",
              slug: "settings/metadata-provider-settings",
            },
            { label: "播放器", slug: "settings/individual-player" },
            { label: "配置档案", slug: "settings/profile" },
            { label: "用户界面", slug: "settings/user-interface" },
            { label: "用户管理", slug: "settings/user-management" },
            { label: "远程访问", slug: "settings/remote-access" },
            { label: "系统设置", slug: "settings/core" },
            { label: "关于", slug: "settings/about" },
          ],
        },
        {
          label: "Home Assistant 集成",
          collapsed: true,
          items: [
            { label: "概览", slug: "integration" },
            { label: "安装", slug: "integration/installation" },
            { label: "播报", slug: "integration/announcements" },
            { label: "播放媒体动作", slug: "faq/massplaymedia" },
            { label: "播放公告动作", slug: "faq/massannounce" },
            { label: "搜索动作", slug: "faq/masssearch" },
            { label: "获取资料库动作", slug: "faq/get_library" },
            { label: "获取队列动作", slug: "faq/get_queue" },
            { label: "转移队列动作", slug: "faq/masstransfer" },
            { label: "语音控制", slug: "integration/voice" },
          ],
        },
        {
          label: "音乐源",
          collapsed: true,
          autogenerate: { directory: "music-providers" },
        },
        {
          label: "播放器提供方",
          collapsed: true,
          autogenerate: { directory: "player-support" },
        },
        {
          label: "使用 Music Assistant",
          collapsed: true,
          items: [
            { label: "概览", slug: "usage" },
            { label: "界面", slug: "ui" },
            { label: "分组", slug: "faq/groups" },
            { label: "流派", slug: "genres" },
          ],
        },
        {
          label: "音频微调",
          collapsed: true,
          items: [
            { label: "音频管线", slug: "audiopipeline" },
            { label: "数字信号处理", slug: "dsp" },
            { label: "DSP 压缩器滤波器", slug: "dsp/compressor" },
            { label: "DSP 卷积滤波器", slug: "dsp/convolution" },
            { label: "DSP 参数均衡器", slug: "dsp/parametriceq" },
            { label: "DSP 音调控制滤波器", slug: "dsp/tonecontrols" },
            { label: "DSP 变调滤波器", slug: "dsp/transpose" },
          ],
        },
        {
          label: "增强 Music Assistant",
          collapsed: true,
          items: [
            {
              label: "插件",
              collapsed: true,
              items: [
                { label: "概览", slug: "plugins" },
                { label: "AI 电台", slug: "plugins/ai-radio" },
                { label: "AirPlay 接收器", slug: "plugins/airplay-receiver" },
                {
                  label: "Ariacast 接收器",
                  slug: "plugins/ariacast-receiver",
                },
                { label: "FastMCP 服务器", slug: "plugins/fastmcp-server" },
                { label: "Home Assistant", slug: "ha-plugin" },
                {
                  label: "Hue Entertainment",
                  slug: "plugins/hue-entertainment",
                },
                { label: "LastFM 听歌记录", slug: "plugins/lastfm_scrobble" },
                {
                  label: "资料库推荐",
                  slug: "plugins/library-recommendations",
                },
                {
                  label: "ListenBrainz 听歌记录",
                  slug: "plugins/listenbrainz_scrobble",
                },
                {
                  label: "MilkDrop 可视化",
                  slug: "plugins/milkdrop-visualizer",
                },
                { label: "音乐问答", slug: "plugins/music-quiz" },
                {
                  label: "OpenAI 兼容接口",
                  slug: "plugins/openai_compatible",
                },
                {
                  label: "OpenAI 文字转语音",
                  slug: "plugins/openai_tts",
                },
                { label: "派对模式", slug: "plugins/party" },
                { label: "Plex Connect", slug: "plugins/plex-connect" },
                { label: "Sendspin 音源", slug: "plugins/sendspin-source" },
                { label: "智能播放列表", slug: "plugins/smart_playlist" },
                { label: "听感相似度", slug: "plugins/sonic-similarity" },
                { label: "Spotify Connect", slug: "plugins/spotify-connect" },
                {
                  label: "Subsonic 听歌记录",
                  slug: "plugins/subsonic_scrobble",
                },
                { label: "VBAN 接收器", slug: "plugins/vban-receiver" },
                {
                  label: "Yandex Music Connect (Ynison)",
                  slug: "plugins/yandex-ynison",
                },
                {
                  label: "Yandex Smart Home",
                  slug: "plugins/yandex-smarthome",
                },
              ],
            },
            {
              label: "元数据提供方",
              collapsed: true,
              items: [
                { label: "概览", slug: "metadata" },
                { label: "封面艺术", slug: "metadata/artwork" },
                { label: "歌词", slug: "metadata/lyrics" },
                { label: "媒体条目", slug: "metadata/media-items" },
                {
                  label: "LastFM 推荐",
                  slug: "metadata-providers/lastfm-recommendations",
                },
                {
                  label: "MusicBrainz",
                  slug: "metadata-providers/musicbrainz",
                },
                {
                  label: "播放列表元数据",
                  slug: "metadata-providers/playlist-metadata",
                },
              ],
            },
            {
              label: "音频分析提供方",
              collapsed: true,
              items: [
                { label: "AcoustID 查询", slug: "audio-analysis/acoustid" },
                {
                  label: "响度分析",
                  slug: "audio-analysis/loudness-analysis",
                },
                { label: "智能淡入淡出", slug: "audio-analysis/smart-fades" },
                {
                  label: "听感分析",
                  slug: "audio-analysis/sonic-analysis",
                },
              ],
            },
          ],
        },
        {
          label: "应用",
          collapsed: true,
          items: [
            { label: "桌面伴侣应用", slug: "companion-app" },
            { label: "移动设备", slug: "mobile" },
          ],
        },
        {
          label: "帮助",
          collapsed: true,
          items: [
            { label: "我想知道…", slug: "faq/how-to" },
            { label: "故障排查", slug: "faq/troubleshooting" },
            { label: "支持", slug: "support" },
            { label: "技术信息", slug: "faq/tech-info" },
            { label: "网络基础", slug: "faq/networking" },
            { label: "API", slug: "api" },
            { label: "发布周期", slug: "release" },
          ],
        },
        {
          label: "社区",
          collapsed: true,
          items: [
            { label: "参与帮助 / 捐赠", slug: "help" },
            { label: "翻译", slug: "help/lokalise" },
			{ label: "完善 MusicBrainz 数据", slug: "help/musicbrainz" },
            {
              label: "社区扩展",
              slug: "community-extensions",
            },
          ],
        },
        { label: "新闻", link: "/blog/" },
      ],
      components: {
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
        Footer: "./src/components/Footer.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
      },
    }),
    mdx(),
  ],
});
