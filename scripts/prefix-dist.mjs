// Rewrites every root-relative URL in the built site to include the
// deployment base ("/music-assistant"). Starlight's own router is base-aware
// (sidebar, assets), but Markdown content links, raw-HTML callouts, and a few
// component-generated links are emitted unprefixed, so this pass catches all
// of them straight in dist/. Idempotent: already-prefixed paths are skipped.
// Runs BEFORE collect-subpath, which then gathers everything into
// dist/music-assistant/.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const PREFIX = process.env.SITE_BASE_PATH || "/music-assistant";
const dist = fileURLToPath(new URL("../dist/", import.meta.url));

const ATTR = /\b(href|src|poster|action|srcset|imagesrcset)=("(?:\/[^"\/][^"]*)"|'(?:\/[^'\/][^']*)')/g;
const ROOT_ONLY = /\b(href|src|poster|action)=("|')\/("|')/g;
const CSS_URL = /url\(\s*("(?:\/[^"\/][^"]*)"|'(?:\/[^'\/][^']*)'|(?:\/[^)"'][^)]*'))\s*\)/g;
// JS string literals that start with a root path. Conservative: needs a
// closing quote on the same line and no whitespace, so regexes like "/g,"
// never match.
const JS_PATH = /(?<![\w$.\/])(["'])\/(?!\/)[\w@][\w\-./@~]*\1/g;

function prefixAttr(value) {
  // value keeps its quotes: '"/style.css"' -> '"/music-assistant/style.css"'.
  return `${value[0]}${PREFIX}${value.slice(1)}`;
}

function prefixSrcset(quoted) {
  const quote = quoted[0];
  const body = quoted.slice(1, -1);
  const rewritten = body
    .split(",")
    .map((candidate) => {
      const trimmed = candidate.trim();
      if (!trimmed.startsWith("/") || trimmed.startsWith(`${PREFIX}/`)) return candidate;
      return candidate.replace(trimmed, `${PREFIX}${trimmed}`);
    })
    .join(",");
  return `${quote}${rewritten}${quote}`;
}

let files = 0;
function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, name.name);
    if (name.isDirectory()) {
      walk(path);
      continue;
    }
    if (!/\.(html|css|mjs|js|json|xml|txt|webmanifest)$/.test(name.name)) continue;
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      continue;
    }
    const before = text;
    if (name.name.endsWith(".css")) {
      text = text.replace(CSS_URL, (m, q) => (q.slice(1).startsWith(PREFIX) ? m : `url(${prefixAttr(q)})`));
    } else if (/\.(mjs|js)$/.test(name.name)) {
      text = text.replace(JS_PATH, (m, q) => {
        // Already prefixed (exactly, or with a trailing slash): leave it.
        if (m === `${q}${PREFIX}${q}` || m.startsWith(`${q}${PREFIX}/`)) return m;
        return `${q}${PREFIX}${m.slice(1)}`;
      });
    } else {
      text = text
        .replace(ROOT_ONLY, (m, attr, q) => `${attr}=${q}${PREFIX}/${q}`)
        .replace(ATTR, (m, attr, q) => {
          if (attr === "srcset" || attr === "imagesrcset") {
            return q.slice(1).startsWith(PREFIX) ? m : `${attr}=${prefixSrcset(q)}`;
          }
          return q.slice(1).startsWith(PREFIX) ? m : `${attr}=${prefixAttr(q)}`;
        })
        .replace(CSS_URL, (m, q) => (q.slice(1).startsWith(PREFIX) ? m : `url(${prefixAttr(q)})`));
    }
    if (text !== before) {
      writeFileSync(path, text);
      files++;
    }
  }
}
walk(dist);
console.log(`prefixed ${files} files in dist`);
