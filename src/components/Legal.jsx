import { C } from "../theme";
import { SectionLabel, PageWrapper, Section } from "./UI";

const BODY = 760;

export function LegalPage({ label, number, title, updated, intro, children }) {
  return (
    <PageWrapper>
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label={label} number={number} />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(32px, 4.5vw, 56px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 700, marginBottom: 20,
          letterSpacing: "-0.03em",
        }}>
          {title}
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: BODY, fontWeight: 300 }}>
          {intro}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: 11, color: C.gray,
          textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 28,
        }}>
          Last updated {updated}
        </p>
      </Section>

      <Section style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: BODY }}>{children}</div>
      </Section>
    </PageWrapper>
  );
}

export function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700,
      color: C.dark, letterSpacing: "-0.01em",
      margin: "44px 0 14px 0",
    }}>
      {children}
    </h2>
  );
}

export function P({ children }) {
  return (
    <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 16 }}>
      {children}
    </p>
  );
}

export function UL({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "4px 0 20px 0" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <span style={{ color: C.accent, fontSize: 14, marginTop: 4, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 16, color: C.gray, lineHeight: 1.7 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function Callout({ children }) {
  return (
    <div style={{
      background: C.bgCard,
      borderLeft: `3px solid ${C.accent}`,
      border: `1px solid ${C.border}`,
      borderLeftWidth: 3, borderLeftColor: C.accent,
      padding: "22px 26px", borderRadius: 3, margin: "8px 0 24px 0",
    }}>
      <span style={{ fontSize: 15, color: C.grayLight, lineHeight: 1.7 }}>{children}</span>
    </div>
  );
}
