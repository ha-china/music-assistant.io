// One-off: translate the two tile-page data files (TypeScript) with the same
// local LLM, but without the Markdown structure checks. The prompt tells the
// model to only touch the human-readable string values. Run manually:
//   node scripts/translate-data-ts.mjs
// Verify with git diff afterwards.
import { execFile } from "node:child_process";
import { randomBytes } from "node:crypto";
import { readFile, writeFile, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const API_BASE = (process.env.LLM_API_URL || "https://api.siliconflow.cn/v1").replace(/\/$/, "");
const API_KEY = process.env.LLM_API_KEY || "";
const MODEL = process.env.LLM_MODEL || "";
const TIMEOUT = Number(process.env.TRANSLATION_TIMEOUT_MS || 1200000);

const SYSTEM_PROMPT = `You translate developer documentation to Simplified Chinese.
You are given a TypeScript data file. Return the COMPLETE file with ONLY the
human-readable string values translated: titles, blurbs, intros, names shown
to users. Keep every key, identifier, path, href, id, icon name, import and
code structure byte-identical. Do not translate file paths, brand names like
"Spotify" or "AirPlay", or words inside hrefs. Do not add or remove lines,
comments, or fields. Output only the file, no fences, no commentary.`;

async function chatCompletion(bodyObject) {
  const id = randomBytes(6).toString("hex");
  const requestFile = join(tmpdir(), `tr-req-${id}.json`);
  const responseFile = join(tmpdir(), `tr-res-${id}.json`);
  await writeFile(requestFile, JSON.stringify(bodyObject), "utf8");
  const args = [
    "-sS",
    "-N",
    "--max-time",
    String(Math.ceil(TIMEOUT / 1000)),
    "--keepalive-time",
    "25",
    `${API_BASE}/chat/completions`,
    "-H",
    `Authorization: Bearer ${API_KEY}`,
    "-H",
    "Content-Type: application/json",
    "-d",
    `@${requestFile}`,
    "-o",
    responseFile,
    "-w",
    "%{http_code}",
  ];
  const stdout = await new Promise((resolve, reject) => {
    execFile("curl", args, { timeout: TIMEOUT + 15000, windowsHide: true, maxBuffer: 256 * 1024 * 1024 }, (error, out, errOut) => {
      if (error) reject(new Error((errOut || error.message).slice(0, 300)));
      else resolve(out.trim());
    });
  });
  const body = await readFile(responseFile, "utf8").catch(() => "");
  await unlink(responseFile).catch(() => {});
  await unlink(requestFile).catch(() => {});
  if (stdout !== "200") throw new Error(`HTTP ${stdout || "?"}: ${body.slice(0, 200)}`);
  let text = "";
  for (const rawLine of body.split("\n")) {
    const line = rawLine.trim();
    if (!line.startsWith("data:")) continue;
    const payload = line.slice(5).trim();
    if (payload === "[DONE]") continue;
    try {
      const chunk = JSON.parse(payload);
      text += chunk.choices?.[0]?.delta?.content ?? "";
    } catch {}
  }
  if (!text.trim()) {
    try {
      text = JSON.parse(body)?.choices?.[0]?.message?.content ?? "";
    } catch {}
  }
  return text.trim();
}

const FILES = ["src/data/music-sources.ts", "src/data/players.ts"];

for (const file of FILES) {
  const original = await readFile(file, "utf8");
  const params = {
    model: MODEL,
    temperature: 0,
    stream: true,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Translate this file (${file}).\n\n${original}` },
    ],
  };
  if (process.env.LLM_REASONING && process.env.LLM_REASONING !== "none") {
    params.reasoning_effort = process.env.LLM_REASONING;
  } else {
    params.enable_thinking = false;
  }
  let translated = await chatCompletion(params);
  if (/^```/.test(translated)) translated = translated.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
  const structureOk =
    (original.match(/export /g) || []).length === (translated.match(/export /g) || []).length &&
    (original.match(/href: "/g) || []).length === (translated.match(/href: "/g) || []).length;
  if (!structureOk) {
    console.log(`SKIPPED ${file}: structure changed`);
    continue;
  }
  await writeFile(file, translated, "utf8");
  console.log(`translated ${file}`);
}
