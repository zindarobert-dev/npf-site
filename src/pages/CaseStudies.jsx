import { Link } from "react-router-dom";
import { C } from "../theme";
import { SectionLabel, PageWrapper, Section } from "../components/UI";

const caseStudies = [
  {
    title: "A Finance Command System for a Subscription Platform",
    atGlance: "Automated every finance function outside of bookkeeping",
    industry: "Wellness / online services platform",
    engagement: "Part Time CFO",
    type: "Finance transformation & custom software",
    challenge: "A growth-stage company running a fully remote team was managing its finances across QuickBooks Online and a separate platform-management system. The setup created constant friction. Recognizing revenue required manual journal entries every period, and the same underlying data was needed to calculate what the company owed the contractors delivering services on its platform. The business also had no forecasting capability built for the way it actually made money, a subscription model with several distinct plan types that new customers signed up for. Leadership was making scaling decisions without a clear, forward-looking financial picture.",
    approach: [
      "Serving as Part Time CFO, I went beyond advising and built the tooling the business needed. I consolidated the company's historical financials and designed a custom financial-operations app on a modern stack (Vercel, Supabase, GitHub) that automates every finance function outside of bookkeeping.",
      "Inside the app, I built a forecasting engine comparable to Jirav but tailored to the company's reality, designed to capture the unique subscription types and plan combinations new businesses encounter on the platform. I automated the journal entries required for revenue recognition and the calculations that determine contractor payouts, replacing slow, error-prone manual work with reliable processes. I also built a client meeting hub that logs every meeting, drafts follow-ups, suggests the next agenda, and turns needs into automated to-dos.",
    ],
    results: "Leadership gained a single source of truth for historical performance plus forward-looking forecasts built specifically for their subscription model. Revenue recognition and contractor-payment calculations became automated and accurate, eliminating recurring manual journal-entry work. The remote team gained dependable, real-time financial visibility, replacing spreadsheets and guesswork with a durable, custom-fit system that runs itself and continues to support planning and scaling decisions.",
  },
  {
    title: "A $10M+ Asset Register, Rebuilt as a Custom App",
    atGlance: "$10M+ tracked across 200+ assets",
    industry: "Oil & gas",
    engagement: "Controller / CFO support",
    type: "Custom software & financial reporting",
    challenge: "An equipment-intensive oil & gas operator had accumulated a large, complex fixed-asset base over years of growth, a register exceeding $10M spread across more than 200 individual pieces of equipment. The records had drifted out of order. Asset detail was incomplete, classifications were inconsistent, and depreciation could no longer be trusted. Because fixed assets and depreciation flow directly into both financial statements and tax filings, the unreliable register undermined confidence in the company's reported numbers and made capital decisions harder than they needed to be.",
    approach: [
      "Rather than deliver a one-time spreadsheet cleanup, I built a custom application to track all 200+ pieces of equipment and keep them accurate going forward. For any asset, the client can drill into its serial number, original invoices, depreciation schedule, and fair market value, all reconciled directly to the books.",
      "Standing the app up meant validating every asset, correcting classifications, and rebuilding depreciation schedules so they were accurate and defensible, aligned to support both financial reporting and tax depreciation. The result turned a recurring source of uncertainty into a durable system the business owns.",
    ],
    results: "The client ended up with an accurate, audit-ready fixed-asset register and dependable depreciation, now backed by a tool that makes every asset's history transparent on demand. The reliability of their financial statements and tax positions improved measurably, and leadership could finally trust their reported asset base when making capital and planning decisions.",
  },
];

function MetaRow({ atGlance, industry, engagement, type }) {
  const items = [
    { label: "At a glance", value: atGlance },
    { label: "Industry", value: industry },
    { label: "Engagement", value: engagement },
    { label: "Type", value: type },
  ];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 20, padding: "24px 0", marginBottom: 40,
      borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
    }}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <div style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, color: C.accent,
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8,
          }}>{label}</div>
          <div style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.dark,
            lineHeight: 1.5, fontWeight: 500,
          }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function Subsection({ heading, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700,
        color: C.dark, marginBottom: 16, letterSpacing: "-0.01em",
      }}>{heading}</h3>
      {children}
    </div>
  );
}

function Paragraph({ children }) {
  return (
    <p style={{
      fontFamily: "'Outfit', sans-serif", fontSize: 16, color: C.grayLight,
      lineHeight: 1.75, marginBottom: 16,
    }}>{children}</p>
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

      {/* Case studies */}
      {caseStudies.map((cs, i) => (
        <Section key={cs.title} style={{ borderTop: `1px solid ${C.border}`, paddingTop: 64, paddingBottom: 64 }}>
          <article style={{ maxWidth: 820 }}>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em",
              color: C.dark,
            }}>{cs.title}</h2>

            <MetaRow
              atGlance={cs.atGlance}
              industry={cs.industry}
              engagement={cs.engagement}
              type={cs.type}
            />

            <Subsection heading="The Challenge">
              <Paragraph>{cs.challenge}</Paragraph>
            </Subsection>

            <Subsection heading="The Approach">
              {cs.approach.map((p, j) => <Paragraph key={j}>{p}</Paragraph>)}
            </Subsection>

            <Subsection heading="The Results">
              <Paragraph>{cs.results}</Paragraph>
            </Subsection>
          </article>
        </Section>
      ))}

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
