// Re-applies the Simplified-Chinese chrome after a "-X theirs" upstream sync.
// The sync workflow runs this right after `git merge upstream/main -X theirs`,
// because that merge resets every file upstream also touched: astro.config.mjs
// (labels, site/base, head), the marketing copy, and the homepage components.
//
// Every step is idempotent: safe to run any number of times. When an upstream
// edit changes the exact English text a pair matches, extend the mapping in
// the matching scripts/* file.
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

function run(script) {
  execFileSync("node", [join0(root, script)], { stdio: "inherit", cwd: root });
}
function join0(a, b) {
  return a.endsWith("/") ? a + b : `${a}/${b}`;
}

// 1. The idempotent translation passes (sidebar labels, marketing data,
//    homepage components, footer, get-started, capability legend).
run("scripts/translate-sidebar.mjs");
run("scripts/translate-marketing.mjs");
run("scripts/translate-chrome2.mjs");
run("scripts/translate-capabilities.mjs");

// 2. astro.config.mjs structural values the upstream side resets.
{
  const path = join0(root, "astro.config.mjs");
  let text = readFileSync(path, "utf8");
  const pairs = [
    [
      'import { remarkAlert } from "remark-github-blockquote-alert";',
      'import { remarkAlert } from "remark-github-blockquote-alert";\nimport { rehypeBasePath } from "./scripts/rehype-base-path.mjs";',
    ],
    [
      "const isProduction =",
      'const SITE_URL = process.env.SITE_URL || "https://www.hasscn.top";\nconst BASE_PATH = process.env.SITE_BASE_PATH || "/music-assistant";\n\nconst isProduction =',
    ],
    [
      'site: "https://www.music-assistant.io",',
      'site: SITE_URL,\n  base: BASE_PATH,\n  i18n: {\n    defaultLocale: "root",\n    locales: {\n      root: { label: "简体中文", lang: "zh-CN" },\n    },\n  },',
    ],
    [
      "remarkPlugins: [remarkAlert],",
      "remarkPlugins: [remarkAlert],\n    rehypePlugins: [rehypeBasePath()],",
    ],
    ['href: "/favicon.svg",', 'href: "/music-assistant/favicon.svg",'],
    [
      'content: "https://www.music-assistant.io/assets/website-social.png",',
      'content: "https://www.hasscn.top/music-assistant/assets/website-social.png",',
    ],
    [
      'url: "https://www.music-assistant.io",',
      'url: "https://www.hasscn.top/music-assistant/",',
    ],
  ];
  for (const [en, zh] of pairs) {
    if (!text.includes(en)) continue;
    text = text.split(en).join(zh);
  }
  // The 51.la snippet of the Chinese mirror (idempotent).
  if (!text.includes("sdk.51.la")) {
    const faviconEntry = `        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/music-assistant/favicon.svg",
          },
        },`;
    const withLa = `${faviconEntry}
        {
          tag: "script",
          attrs: {
            charset: "UTF-8",
            id: "LA_COLLECT",
            src: "//sdk.51.la/js-sdk-pro.min.js?id=3MhQABjxy4RZQ6Ig&ck=3MhQABjxy4RZQ6Ig",
          },
        },`;
    if (text.includes(faviconEntry)) {
      text = text.split(faviconEntry).join(withLa);
    } else if (text.includes("favicon: \"/favicon.svg\"")) {
      // Fallback if upstream changed the head entry shape: append a head item
      // right after the starlight({ opening via the social array anchor.
      text = text.replace(
        "favicon: \"/favicon.svg\",",
        `favicon: "/favicon.svg",\n      // (51.la snippet appended below via head)`,
      );
    }
  }
  if (!text.includes('defaultLocale: "root"')) {
    console.warn("WARN: astro.config.mjs still lacks the zh-cn i18n block");
  }
  writeFileSync(path, text);
  console.log("astro.config.mjs chrome re-applied");
}

console.log("ensure-chinese done");
