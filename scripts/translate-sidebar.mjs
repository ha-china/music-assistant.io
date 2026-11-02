// Translates the Starlight sidebar labels in astro.config.mjs to Simplified
// Chinese. The same mapping lives in scripts/ensure-chinese.mjs, which
// re-applies it after every upstream sync (-X theirs resets the config).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const path = fileURLToPath(new URL("../astro.config.mjs", import.meta.url));
let text = readFileSync(path, "utf8");

const LABELS = {
  Home: "首页",
  Documentation: "文档",
  "I Want To": "我想要…",
  "Install Music Assistant": "安装 Music Assistant",
  "Install the HA Integration": "安装 HA 集成",
  "Listen To...": "听什么…",
  "Stream To...": "推流到哪…",
  "First Run and Settings": "首次运行与设置",
  "First Run (Authentication)": "首次运行（认证）",
  "Music Sources": "音乐源",
  "Player Providers": "播放器提供方",
  "Metadata Providers": "元数据提供方",
  Players: "播放器",
  Profile: "配置档案",
  "User Interface": "用户界面",
  "User Management": "用户管理",
  "Remote Access": "远程访问",
  "System Settings": "系统设置",
  About: "关于",
  "Home Assistant Integration": "Home Assistant 集成",
  Overview: "概览",
  Installation: "安装",
  Announcements: "播报",
  "Play Media Action": "播放媒体动作",
  "Play Announcement Action": "播放公告动作",
  "Search Action": "搜索动作",
  "Get Library Action": "获取资料库动作",
  "Get Queue Action": "获取队列动作",
  "Transfer Queue Action": "转移队列动作",
  "Voice Control": "语音控制",
  "Using Music Assistant": "使用 Music Assistant",
  UI: "界面",
  Groups: "分组",
  Genres: "流派",
  "Fine Tuning the Audio": "音频微调",
  "Audio Pipeline": "音频管线",
  "Digital Signal Processing": "数字信号处理",
  "DSP Compressor Filter": "DSP 压缩器滤波器",
  "DSP Convolution Filter": "DSP 卷积滤波器",
  "DSP Parametric Equalizer": "DSP 参数均衡器",
  "DSP Tone Controls": "DSP 音调控制滤波器",
  "DSP Transpose Filter": "DSP 变调滤波器",
  "Enhancing Music Assistant": "增强 Music Assistant",
  Plugins: "插件",
  "AI Radio": "AI 电台",
  "AirPlay Receiver": "AirPlay 接收器",
  "Ariacast Receiver": "Ariacast 接收器",
  "FastMCP Server": "FastMCP 服务器",
  "Hue Entertainment": "Hue Entertainment",
  "LastFM Scrobbler": "LastFM 听歌记录",
  "MilkDrop Visualizer": "MilkDrop 可视化",
  "Music Quiz": "音乐问答",
  "OpenAI Compatible": "OpenAI 兼容接口",
  "OpenAI Text-to-speech": "OpenAI 文字转语音",
  Party: "派对模式",
  "Plex Connect": "Plex Connect",
  "Sendspin Source": "Sendspin 音源",
  "Smart Playlist": "智能播放列表",
  "Sonic Similarity": "听感相似度",
  "Spotify Connect": "Spotify Connect",
  "Subsonic Scrobbler": "Subsonic 听歌记录",
  "VBAN Receiver": "VBAN 接收器",
  "Library Recommendations": "资料库推荐",
  "Listenbrainz Scrobbler": "ListenBrainz 听歌记录",
  Artwork: "封面艺术",
  Lyrics: "歌词",
  "Media Items": "媒体条目",
  "LastFM Recommendations": "LastFM 推荐",
  MusicBrainz: "MusicBrainz",
  "Playlist Metadata": "播放列表元数据",
  "Audio Analysis Providers": "音频分析提供方",
  "AcoustID Lookup": "AcoustID 查询",
  "Loudness Analysis": "响度分析",
  "Smart Fades": "智能淡入淡出",
  "Sonic Analysis": "听感分析",
  Apps: "应用",
  "Desktop Companion App": "桌面伴侣应用",
  "Mobile Devices": "移动设备",
  Help: "帮助",
  "How Do I...": "我想知道…",
  Troubleshooting: "故障排查",
  Support: "支持",
  "Technical Info": "技术信息",
  "Networking Basics": "网络基础",
  API: "API",
  "Release Cycle": "发布周期",
  Community: "社区",
  "I Want to Help / Donate": "参与帮助 / 捐赠",
  Translations: "翻译",
  "Improve MusicBrainz Data": "完善 MusicBrainz 数据",
  "Community Extensions": "社区扩展",
  News: "新闻",
};

let count = 0;
for (const [en, zh] of Object.entries(LABELS)) {
  const needle = `label: "${en}"`;
  if (text.includes(needle)) {
    text = text.split(needle).join(`label: "${zh}"`);
    count++;
  }
}
writeFileSync(path, text);
console.log(`translated ${count} sidebar labels`);
