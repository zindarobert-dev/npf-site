import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor, canonicalFor } from "../seo";

/**
 * Keeps <title> and the description/canonical tags in sync on client-side
 * navigation. The real tags for a first page load are written into each
 * prerendered HTML file by scripts/prerender.js, so this is only a catch-up
 * for route changes after hydration.
 */
function setTag(selector, create, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  if (el.tagName === "LINK") el.setAttribute("href", value);
  else el.setAttribute("content", value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    const canonical = canonicalFor(pathname);
    document.title = meta.title;

    const named = (name) => () => {
      const el = document.createElement("meta");
      el.setAttribute("name", name);
      return el;
    };
    const propped = (prop) => () => {
      const el = document.createElement("meta");
      el.setAttribute("property", prop);
      return el;
    };

    setTag('meta[name="description"]', named("description"), meta.description);
    setTag('meta[property="og:title"]', propped("og:title"), meta.title);
    setTag('meta[property="og:description"]', propped("og:description"), meta.description);
    setTag('meta[property="og:url"]', propped("og:url"), canonical);
    setTag('meta[name="twitter:title"]', named("twitter:title"), meta.title);
    setTag('meta[name="twitter:description"]', named("twitter:description"), meta.description);
    setTag('link[rel="canonical"]', () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    }, canonical);

    // Swap the per-page JSON-LD. Without this, navigating from /tax-services
    // to /about leaves the tax FAQPage sitting in the head of the about page.
    // The site-wide graph in index.html carries no data-page-ld, so it stays.
    const stale = document.head.querySelector('script[data-page-ld]');
    if (stale) stale.remove();
    if (meta.jsonLd) {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-page-ld", "true");
      // textContent, not innerHTML, so "</" inside a string cannot break out.
      el.textContent = JSON.stringify(meta.jsonLd());
      document.head.appendChild(el);
    }
  }, [pathname]);

  return null;
}
