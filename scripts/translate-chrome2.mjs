// Second pass: the strings that the first component sweep could not match,
// located per file. Same strings live in scripts/ensure-chinese.mjs.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

const JOBS = [
  {
    file: "src/components/home/HowItWorks.astro",
    pairs: [
      ['<p class="step">Your music</p>', '<p class="step">你的音乐</p>'],
      ['<p class="step">Your speakers</p>', '<p class="step">你的音箱</p>'],
    ],
  },
  {
    file: "src/components/home/Discover.astro",
    pairs: [["<h2>Get lost in the music.</h2>", "<h2>沉浸在音乐里。</h2>"]],
  },
  {
    file: "src/components/home/Community.astro",
    pairs: [["<h2>Built in the open.</h2>", "<h2>公开透明地构建。</h2>"]],
  },
  {
    file: "src/components/home/FinalCta.astro",
    pairs: [["<h2>Bring your music home.</h2>", "<h2>把音乐带回家。</h2>"]],
  },
  {
    file: "src/components/Footer.astro",
    pairs: [
      ['title="Lokalise Translations"', 'title="Lokalise 翻译平台"'],
      ['<span class="sr-only">Lokalise Translations</span>', '<span class="sr-only">Lokalise 翻译平台</span>'],
      ['<p class="analytics-notice">\n  This website uses', '<p class="analytics-notice">\n  本站使用'],
      ["rel=\"noopener\">privacy-first analytics</a", "rel=\"noopener\">隐私优先的统计分析</a"],
      ["public dashboard</a", "公开面板查看全部数据</a"],
    ],
  },
];

let missing = 0;
for (const job of JOBS) {
  const path = root + job.file;
  let text = readFileSync(path, "utf8");
  const isCRLF = text.includes("\r\n");
  for (const [en0, zh0] of job.pairs) {
    const en = isCRLF ? en0.split("\n").join("\r\n") : en0;
    const zh = isCRLF ? zh0.split("\n").join("\r\n") : zh0;
    if (!text.includes(en)) {
      console.log(`MISS ${job.file}: ${en.slice(0, 60)}`);
      missing++;
      continue;
    }
    text = text.split(en).join(zh);
  }
  writeFileSync(path, text);
}
console.log(missing ? `${missing} misses` : "second pass done");
