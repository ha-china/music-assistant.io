// Prefixes root-relative hrefs and srcs ("/integration/...") in rendered
// Markdown and MDX with the Astro base ("/music-assistant"), so content
// links work when the site is served from hasscn.top/music-assistant.
// Astro rewrites links it generates itself, but links written in content
// Markdown reach the page as plain HTML and need this pass.
// Only single-slash paths are prefixed: "//", "#", and absolute URLs stay.
const BASE = process.env.SITE_BASE_PATH || "/music-assistant";

const ATTRIBUTES = ["href", "src", "poster"];

export function rehypeBasePath() {
  function walk(node) {
    if (!node) return;
    if (node.type === "element" && node.properties) {
      for (const attribute of ATTRIBUTES) {
        const value = node.properties[attribute];
        if (
          typeof value === "string" &&
          value.startsWith("/") &&
          !value.startsWith("//") &&
          !value.startsWith(`${BASE}/`)
        ) {
          node.properties[attribute] = BASE + value;
        }
      }
    }
    for (const child of node.children ?? []) walk(child);
  }
  return (tree) => walk(tree);
}
