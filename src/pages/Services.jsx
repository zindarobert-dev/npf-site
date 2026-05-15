import { Link } from "react-router-dom";
import { C } from "../theme";
import { ServiceCard, SectionLabel, PageWrapper, Section, Badge } from "../components/UI";

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label="Services" number="02" />
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          Three tiers.<br /><span style={{ color: C.accent }}>One command system.</span>
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 560, marginBottom: 0, fontWeight: 300 }}>
          Start where you are. Scale when you're ready. Every tier builds
          toward full financial command. CFO judgment at a controller's cost.
        </p>
      </Section>

      {/* Cards */}
      <Section style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 60 }}>
          <ServiceCard tier="Tier 01" title="Bookkeeping & Compliance"
            description="Clean books, tax-ready records, and a foundation that won't crack under growth. The floor, not the ceiling."
            features={["Monthly reconciliation & close", "AP/AR management", "Payroll coordination", "Sales tax & compliance filings"]} />
          <ServiceCard tier="Tier 02" title="Controller Services" isHighlight
            description="Financial oversight that catches problems before they become crises. Budgets, variance analysis, and audit-ready reporting."
            features={["Budget vs. actual reporting", "Cash flow forecasting", "Financial process design", "Audit preparation & support"]} />
          <ServiceCard tier="Tier 03" title="Part Time CFO"
            description="Strategic financial leadership. Capital allocation, lender relationships, growth planning. The judgment calls that move the needle."
            features={["Capital structure & debt strategy", "Scenario modeling & forecasting", "Board & lender reporting", "M&A and exit readiness"]} />
        </div>
      </Section>

      {/* How it works */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, lineHeight: 1.15, marginBottom: 48, letterSpacing: "-0.02em",
        }}>
          How engagement works
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {[
            { step: "01", title: "Discovery Call", desc: "30 minutes. We learn your business, your pain points, and what 'fixed' looks like for you." },
            { step: "02", title: "Diagnostic Review", desc: "We audit your current books, processes, and financial infrastructure, then tell you exactly what needs to happen." },
            { step: "03", title: "Onboarding", desc: "We slot into your operations within two weeks. No disruption. Parallel run with existing processes." },
            { step: "04", title: "Command", desc: "Monthly reporting, cash flow visibility, and strategic guidance. You make better decisions, starting immediately." },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "32px 28px", borderRadius: 3,
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace", fontSize: 32, fontWeight: 700,
                color: C.accent, opacity: 0.3, display: "block", marginBottom: 12,
              }}>{step}</span>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 700,
                color: C.dark, marginBottom: 10,
              }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em",
        }}>Ready to take command?</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          No contracts. Month-to-month. Start with a free discovery call.
        </p>
        <Link to="/contact" style={{
          background: C.accent, color: "#fff", textDecoration: "none",
          padding: "16px 40px", fontFamily: "'Space Mono', monospace",
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: 3, display: "inline-block",
        }}>Get Started →</Link>
      </Section>
    </PageWrapper>
  );
}
