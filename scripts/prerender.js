import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, metaFor, canonicalFor, SITE } from "../src/seo.js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

const { render } = await import(path.join(root, "dist-ssr", "entry-server.js"));
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

if (!template.includes("<!--SEO-->")) {
  throw new Error("index.html is missing the <!--SEO--> placeholder");
}
if (!template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing <div id="root"></div>');
}

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function seoTags(route) {
  const meta = metaFor(route);
  const canonical = canonicalFor(route);
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escape(SITE.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${SITE.image}" />`,
  ];
  if (meta.noindex) tags.push(`<meta name="robots" content="noindex" />`);
  return tags.join("\n    ");
}

let count = 0;
for (const route of ROUTES) {
  const html = template
    .replace("<!--SEO-->", seoTags(route))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);

  const target =
    route === "/"
      ? path.join(dist, "index.html")
      : route === "/404"
        ? path.join(dist, "404.html")
        : path.join(dist, route, "index.html");

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  count++;
  console.log("prerendered", route, "->", path.relative(dist, target));
}
console.log(`\n${count} routes prerendered`);
