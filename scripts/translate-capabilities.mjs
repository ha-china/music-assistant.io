// Translates the display strings (label/help) of player-capabilities.ts.
// The capability ids, slugs and boolean values stay untouched.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const path = fileURLToPath(new URL("../src/data/player-capabilities.ts", import.meta.url));
let text = readFileSync(path, "utf8");

const PAIRS = [
  ['label: "Hi\\u00A0Res",', 'label: "Hi\\u00A0Res",'],
  ['help: "Can carry audio above 48kHz or above 16 bits.",', 'help: "能承载高于 48kHz 或 16bit 的音频。",'],
  ['label: "Lossless",', 'label: "无损",'],
  ['help: "Can carry audio without lossy compression.",', 'help: "能以无损压缩方式承载音频。",'],
  ['label: "Perfect Sync",', 'label: "完美同步",'],
  ['help: "Players of this kind can be kept in time with each other when they are grouped.",', 'help: "此类播放器分组后可以彼此保持时间同步。",'],
  ['label: "Sync Adjust",', 'label: "同步微调",'],
  ['help: "A per-player delay can be applied to pull a player that runs ahead of or behind the rest of its group back into line.",', 'help: "可为单个播放器设置延迟，把跑前或跑后的播放器拉回与分组同步。",'],
  ['label: "Cross\u00ADfade",', 'label: "交叉淡入淡出",'],
  ['help: "One track can be faded into the next.",', 'help: "一首歌可以平滑过渡到下一首。",'],
  ['label: "Stereo Pair",', 'label: "立体声配对",'],
  ['help: "Two players can be paired as the left and right channels of one.",', 'help: "两台播放器可配对为一个设备的左右声道。",'],
  ['label: "Device Button",', 'label: "设备按键",'],
  ['help: "Buttons on the device itself control Music Assistant playback.",', 'help: "设备自带的按键可以控制 Music Assistant 播放。",'],
  ['label: "Device Voice",', 'label: "设备语音",'],
  ['help: "The voice assistant built into the device can control playback.",', 'help: "设备内置的语音助手可以控制播放。",'],
  ['label: "Player Options",', 'label: "播放器选项",'],
  ['help: "The provider exposes device-specific settings, such as the player\'s own bass and treble.",', 'help: "该提供方暴露设备专属设置，比如播放器自己的低音和高音。",'],
];

let miss = 0;
for (const [en, zh] of PAIRS) {
  if (!text.includes(en)) {
    console.log(`MISS: ${en.slice(0, 48)}`);
    miss++;
    continue;
  }
  text = text.split(en).join(zh);
}
writeFileSync(path, text);
console.log(miss ? `${miss} misses` : "player-capabilities display strings done");
