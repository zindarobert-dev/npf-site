import { Link, useParams, Navigate } from "react-router-dom";
import { C } from "../theme";
import { PageWrapper, Section } from "../components/UI";
import { getCaseStudy } from "../data/caseStudies";

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
        fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700,
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

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <PageWrapper>
      {/* Breadcrumb back link */}
      <Section style={{ paddingTop: 100, paddingBottom: 20 }}>
        <Link to="/case-studies" style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.gray,
          letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span>←</span> All Case Studies
        </Link>
      </Section>

      {/* Hero */}
      <Section style={{ paddingTop: 20, paddingBottom: 40 }}>
        <article style={{ maxWidth: 820 }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 900, lineHeight: 1.1, marginBottom: 32, letterSpacing: "-0.03em",
            color: C.dark,
          }}>{cs.title}</h1>

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
