// Three Seeds design tokens — warm paper-and-ink editorial.
// Derived from /Three Seeds Design System/colors_and_type.css.

export const FONT_LINK = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";

export const F = {
  display: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans: "'IBM Plex Sans', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', 'SF Mono', Menlo, Consolas, monospace",
};

export const C = {
  // Paper / surface — warm bone through cream
  bg: "#F7F1E1",          // paper, default page bg
  bgBand: "#EFE7D2",      // paper-2, alt section band
  bgBandStrong: "#E4D9BC",// paper-3, deeper callout band
  bgCard: "#FAF6EC",      // bone, cards over paper
  bgCardHover: "#F5EFE2", // slightly raised
  chalk: "#FFFFFF",       // rarely

  // Ink — text and high-contrast
  dark: "#1A1C18",        // default text
  darkSoft: "#2C2F28",
  ink3: "#4A4D44",        // secondary text
  gray: "#807A6E",        // stone — tertiary
  grayLight: "#4A4D44",   // alias for ink3 (legacy code uses grayLight)
  stone2: "#B5AFA2",      // hairlines, disabled
  border: "#D5CFC1",      // stone-3, dividers on paper
  rule: "#C9C1AC",        // hairline rule

  // Avocado — primary brand green
  accent: "#5C7F2A",      // avocado, links + primary CTAs
  accentDeep: "#3E5A18",  // avocado-deep, hover/pressed
  forest: "#233D0F",      // deepest, footer/inverse bg
  shoot: "#7A9B3A",       // lighter olive, the arc
  leaf: "#A8C26B",        // tints, soft fills
  mist: "#DCE6BE",        // faint background tint
  accentLight: "#7A9B3A", // legacy alias → shoot
  accentDim: "rgba(92,127,42,0.08)",
  accentGlow: "rgba(92,127,42,0.20)",

  // Soil — pit brown (secondary)
  soil: "#7A4E1E",
  soilDeep: "#4F3110",
  bark: "#A06B33",
  sand: "#D8C49C",

  // Signals — semantic, for financial data
  signalGood: "#4F7A1F",
  signalWarn: "#B7791F",
  signalRisk: "#9A2A1F",
  signalInfo: "#2D5A78",

  // Forms
  inputBg: "#FAF6EC",
};
