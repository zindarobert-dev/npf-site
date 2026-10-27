export const SITE = {
  name: "Three Seeds",
  url: "https://www.threeseeds.io",
  image: "https://www.threeseeds.io/og.png?v=3",
  imageAlt: "Three Seeds. Part Time CFO and cash flow forecasting for businesses where cash moves on its own schedule.",
};

const DEFAULT_TITLE = "Cash Flow Forecasting & Part Time CFO | Three Seeds";
const DEFAULT_DESC =
  "Part Time CFO, controller, and bookkeeping for businesses where cash moves on an uneven schedule. See the crunch before it lands. Nationwide, fully remote.";

export const PAGES = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  "/services": {
    title: "Part Time CFO & Controller Services | Three Seeds",
    description:
      "Three tiers of financial support: bookkeeping, controller, and Part Time CFO. Plus a one-time Financial Discovery for owners not ready for a retainer.",
  },
  "/industries": {
    title: "Industries We Serve | Three Seeds Part Time CFO",
    description:
      "Cash flow and controller support across SaaS, wellness, agriculture, travel, oil and gas, and consumer lending. Every business differs. The questions rhyme.",
  },
  "/case-studies": {
    title: "Case Studies | Three Seeds Part Time CFO",
    description:
      "How we rebuilt a drifted $10M fixed-asset register and automated revenue recognition for a subscription platform. Real engagements, real systems.",
  },
  "/case-studies/finance-command-system": {
    title: "Finance Command System for a Subscription Platform",
    description:
      "Consolidated historical financials and built a custom finance-ops app automating revenue recognition, contractor payouts, and subscription forecasting.",
  },
  "/case-studies/asset-register": {
    title: "Rebuilding a $10M+ Fixed-Asset Register | Three Seeds",
    description:
      "An oil and gas operator's asset register had drifted. We rebuilt it as a custom app: 200+ assets, depreciation, and fair market value reconciled to the books.",
  },
  "/about": {
    title: "About Three Seeds | Part Time CFO & Controller",
    description:
      "Why we are named what we are. Three Seeds is a veteran-owned advisory firm helping owner-led businesses see cash crunches coming and plan around them.",
  },
  "/contact": {
    title: "Contact | Three Seeds Part Time CFO & Controller",
    description:
      "Free 30-minute discovery call. No contracts, month to month. Tell us where your cash timing hurts and we will tell you what we would do about it.",
  },
  "/legal/eula": {
    title: "End User License Agreement | Three Seeds",
    description:
      "Terms governing use of the Three Seeds application and the connection between Three Seeds and your QuickBooks Online company.",
  },
  "/legal/privacy": {
    title: "Privacy Policy | Three Seeds",
    description:
      "What we collect, what we do with it, and how you shut it off. Covers the threeseeds.io website and our QuickBooks Online integration.",
  },
  "/404": {
    title: "Page Not Found | Three Seeds",
    description: "This page is not here. The link may be old, or the address may have a typo in it.",
    noindex: true,
  },
};

export function metaFor(path) {
  const clean = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return PAGES[clean] || PAGES["/404"];
}

export function canonicalFor(path) {
  return path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
}

export const ROUTES = Object.keys(PAGES);
