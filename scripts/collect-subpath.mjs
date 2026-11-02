// Post-build step for the /music-assistant sub-path deployment on
// www.hasscn.top. Astro with `base` prefixes the URLs inside the pages but
// still emits pages and assets at the root of dist/, so this moves every
// dist entry into dist/music-assistant/ — upload that folder 1:1 to the
// server directory /music-assistant. Idempotent.
import { mkdirSync, readdirSync, renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const PREFIX = process.env.SITE_BASE_PATH || "/music-assistant";
const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const base = PREFIX.replace(/^\//, "");

const entries = readdirSync(dist).filter((name) => name !== base);
if (entries.length === 0) {
  console.log("dist already consolidated");
} else {
  mkdirSync(join(dist, base), { recursive: true });
  for (const name of entries) {
    renameSync(join(dist, name), join(dist, base, name));
  }
  console.log(`moved ${entries.length} entries into ${PREFIX}`);
}
