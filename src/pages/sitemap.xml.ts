// The sitemap: every page.
import { SITE } from "../site";
import { TOOLS, toolUrl } from "../data/tools";

const PAGES = ["/", "/tools/", "/download/", "/faq/", "/privacy/", "/legal/"];

export function GET() {
  const urls = [...PAGES, ...TOOLS.map((t) => toolUrl(t, "en"))]
    .map((loc) => `  <url><loc>${SITE}${loc}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
