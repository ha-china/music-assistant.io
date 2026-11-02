// Local-build helper: the blog covers are remote images whose dimensions
// Astro infers at build time, and Node's fetch cannot reach
// openhomefoundation.org from some networks (the CI runners can). This
// preload patches global fetch to fall back to curl, which does work.
//
// Usage:
//   NODE_OPTIONS="--import ./scripts/fetch-polyfill.mjs" pnpm exec astro build
const originalFetch = globalThis.fetch;

globalThis.fetch = async (input, init) => {
  try {
    return await originalFetch(input, init);
  } catch (error) {
    const url = typeof input === "string" ? input : input?.url;
    if (!url || !url.startsWith("http") || url.includes("localhost")) throw error;
    const { execFileSync } = await import("node:child_process");
    const body = execFileSync(
      "curl",
      ["-sSL", "--max-time", "90", url],
      { maxBuffer: 128 * 1024 * 1024, windowsHide: true },
    );
    const response = new Response(body, { status: 200 });
    // Astro's redirect validation reads response.url; a bare Response has
    // none, and the check then rejects the image.
    Object.defineProperty(response, "url", { value: url });
    return response;
  }
};
