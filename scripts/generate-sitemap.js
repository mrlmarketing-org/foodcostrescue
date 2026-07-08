// Regenerates public/sitemap.xml from known routes + blog post slugs.
// Runs automatically before `npm run build` (see package.json "prebuild").
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { posts } from "../src/data/blog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const domain = "https://www.supplynegotiator.com";
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = ["/", "/blog", "/contact", "/terms", "/privacy"];
const postRoutes = posts.map((p) => `/blog/${p.slug}`);
const routes = [...staticRoutes, ...postRoutes];

const body = routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${routes.length} routes`);
