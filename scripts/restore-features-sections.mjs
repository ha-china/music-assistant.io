// Restores the English "## Features" section of every music-providers page.
// The MusicSourceMatrix component parses those tables at build time: the row
// labels are matched against English regexes, the answers must start with
// Yes/No, and the stream-quality wording drives the tier logic. The LLM
// translation renamed them, so the section goes back to the upstream text
// while the prose around it stays Chinese.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const upstream = execFileSync("git", ["show", "upstream/main:src/content/docs/music-providers"], {
  cwd: root,
  encoding: "utf8",
  maxBuffer: Infinity,
});

// git show on a directory fails; list files instead.
const files = execFileSync("git", ["ls-files", "src/content/docs/music-providers"], {
  cwd: root,
  encoding: "utf8",
})
  .split("\n")
  .filter((f) => f.endsWith(".md"));

function upstreamSection(fileName) {
  const text = execFileSync("git", ["show", `upstream/main:${fileName}`], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: Infinity,
  }).replace(/\r\n/g, "\n");
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^## Features\b/.test(l));
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) {
      end = i;
      break;
    }
  }
  return { section: lines.slice(start, end).join("\n").trim(), heading: "## Features" };
}

let restored = 0;
let skipped = 0;
for (const file of files) {
  const path = `${root}${file.replace(/\//g, "/")}`;
  let text;
  try {
    text = readFileSync(path, "utf8");
  } catch {
    continue;
  }
  const target = upstreamSection(file);
  if (!target) {
    skipped++;
    continue;
  }

  const lines = text.replace(/\r\n/g, "\n").split("\n");

  // Find the first table line; the Features table is the first one on the page.
  const tableStart = lines.findIndex((l) => /^\|/.test(l));
  if (tableStart === -1) {
    console.log(`NO TABLE in ${file}`);
    continue;
  }
  // Walk up to the heading that introduces the table.
  let headingLine = tableStart;
  for (let i = tableStart; i >= 0; i--) {
    if (/^#{1,6} /.test(lines[i])) {
      headingLine = i;
      break;
    }
  }
  // Walk down past the table to the next heading.
  let tableEnd = tableStart;
  for (let i = tableStart; i < lines.length; i++) {
    if (/^\|/.test(lines[i])) tableEnd = i;
    else if (i > tableStart && /^#{1,6} /.test(lines[i])) break;
  }
  let sectionEnd = tableEnd + 1;
  for (let i = tableEnd + 1; i < lines.length; i++) {
    if (/^#{1,6} /.test(lines[i])) {
      sectionEnd = i;
      break;
    }
    sectionEnd = i + 1;
  }

  const before = lines.slice(0, headingLine).join("\n");
  const after = lines.slice(sectionEnd).join("\n");
  const rebuilt = `${before}\n${target.section}\n\n${after}`
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (rebuilt !== text.replace(/\r\n/g, "\n").trim()) {
    writeFileSync(path, rebuilt + "\n");
    restored++;
  }
}
console.log(`restored ${restored} Features sections (${skipped} pages without one)`);
