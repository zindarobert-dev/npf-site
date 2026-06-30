import { useState } from "react";
import { Link } from "react-router-dom";
import { C } from "../theme";
import { SectionLabel, PageWrapper, Section } from "../components/UI";
import { caseStudies } from "../data/caseStudies";

function CaseStudyCard({ cs }) {
  const [h, setH] = useState(false);
  return (
    <Link
      to={`/case-studies/${cs.slug}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        textDecoration: "none", display: "block",
        background: h ? C.bgCardHover : C.bgCard,
        border: `1px solid ${h ? C.accent + "44" : C.border}`,
        padding: "36px 32px", borderRadius: 3,
        transition: "all 0.3s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11, color: C.accent,
        textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16,
      }}>{cs.industry}</span>
      <h3 style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700,
        color: C.dark, margin: "0 0 16px 0", lineHeight: 1.2, letterSpacing: "-0.01em",
      }}>{cs.title}</h3>
      <p style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.gray,
        lineHeight: 1.65, margin: "0 0 24px 0", flex: 1,
      }}>{cs.summary}</p>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        paddingTop: 20, borderTop: `1px solid ${C.border}`,
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.accent,
          letterSpacing: "0.08em", fontWeight: 700, textTransform: "uppercase",
        }}>Read Case Study</span>
        <span style={{ color: C.accent, fontSize: 14, transform: h ? "translateX(4px)" : "none", transition: "transform 0.25s ease" }}>→</span>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label="Case Studies" number="04" />
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          Three Seeds <span style={{ color: C.accent }}>Case Studies.</span>
        </h1>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 20, color: C.gray,
          lineHeight: 1.6, maxWidth: 560, marginBottom: 0, fontWeight: 300, fontStyle: "italic",
        }}>
          Stewardship, controlled growth.
        </p>
      </Section>

      {/* Cards */}
      <Section style={{ paddingTop: 20 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {caseStudies.map(cs => <CaseStudyCard key={cs.slug} cs={cs} />)}
        </div>
      </Section>

      {/* Confidentiality note */}
      <Section style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, paddingBottom: 40 }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.gray,
          lineHeight: 1.6, fontStyle: "italic", maxWidth: 820, margin: 0,
        }}>
          Confidentiality note: All client names and identifying details have been omitted.
          Results shown reflect specific client engagements and are not a guarantee of future outcomes.
        </p>
      </Section>

      {/* CTA */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em",
        }}>Want results like these?</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          Start with a free discovery call. We'll talk about your numbers and where they need to go.
        </p>
        <Link to="/contact" style={{
          background: C.accent, color: "#fff", textDecoration: "none",
          padding: "16px 40px", fontFamily: "'Space Mono', monospace",
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: 3, display: "inline-block",
        }}>Talk to Bobby →</Link>
      </Section>
    </PageWrapper>
  );
}
