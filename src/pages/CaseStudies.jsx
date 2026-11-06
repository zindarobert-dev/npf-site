import { useState } from "react";
import { Link } from "react-router-dom";
import { C } from "../theme";
import { IndustryTag, SectionLabel, PageWrapper, Section } from "../components/UI";
import { caseStudies } from "../data/caseStudies";

// Folded in from the retired /industries page. The old URL 301s to
// /case-studies#industries, so this section has to keep the anchor.
const industries = [
  {
    name: "SaaS & Subscription Platforms",
    challenges: "Deferred revenue recognition, subscription and plan complexity, contractor payouts across a distributed team, forecasting ARR/MRR growth.",
    needs: "Automated revenue recognition, subscription cohort forecasting, cash runway modeling, and unit-economics visibility.",
  },
  {
    name: "Wellness & Services",
    challenges: "Multiple revenue streams (recurring, one-time, group vs. individual), practitioner and contractor payments, seasonal demand swings.",
    needs: "Clean cost accounting by service line, contractor payout automation, and cash flow visibility that reflects how the business actually earns.",
  },
  {
    name: "Agriculture",
    challenges: "Seasonal cash flow, weather-dependent revenue, input cost timing (seed, feed, fertilizer), equipment depreciation, and thin margins.",
    needs: "Multi-season cash flow modeling, input cost planning, and equipment replacement capital strategy.",
  },
  {
    name: "Travel & Hospitality",
    challenges: "Seasonal revenue swings, advance-booking timing gaps, refund and cancellation exposure, complex payment processing.",
    needs: "Booking-to-service cash flow modeling, refund reserve strategy, and seasonal payroll planning.",
  },
  {
    name: "Oil & Gas",
    challenges: "Commodity price volatility, high fixed-asset intensity, joint-venture accounting, and complex depreciation schedules that flow into both financials and tax.",
    needs: "Reliable fixed-asset register, capital allocation modeling, and scenario planning for price volatility.",
  },
  {
    name: "Lending & Consumer Finance",
    challenges: "Loan loss reserves, portfolio delinquency and charge-off reporting, interest and fee income recognition across BNPL, lease-to-own, and installment loan products, plus heavy state and federal compliance overhead.",
    needs: "Reserves and portfolio metrics that hold up to a lender review, revenue recognition that survives an audit, and reporting infrastructure built for regulators, warehouse partners, and investors.",
  },
];

const h2Style = {
  fontFamily: "'Inter', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
  fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em",
};

function CaseStudyCard({ cs }) {
  const [h, setH] = useState(false);
  return (
    <Link
      to={`/case-studies/${cs.slug}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        textDecoration: "none",
        background: h ? C.bgCardHover : C.bgCard,
        border: `1px solid ${h ? C.accent + "44" : C.border}`,
        padding: "36px 32px", borderRadius: 3,
        transition: "all 0.3s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      <span style={{
        fontFamily: "'Inter', sans-serif", fontSize: 11, color: C.accent,
        textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16,
      }}>{cs.industry}</span>
      <h3 style={{
        fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 700,
        color: C.dark, margin: "0 0 16px 0", lineHeight: 1.2, letterSpacing: "-0.01em",
      }}>{cs.title}</h3>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: 15, color: C.gray,
        lineHeight: 1.65, margin: "0 0 24px 0", flex: 1,
      }}>{cs.summary}</p>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        paddingTop: 20, borderTop: `1px solid ${C.border}`,
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.accent,
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
        <SectionLabel label="Case Studies" number="03" />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          Three Seeds <span style={{ color: C.accent }}>Case Studies.</span>
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: 20, color: C.gray,
          lineHeight: 1.6, maxWidth: 560, marginBottom: 24, fontWeight: 300, fontStyle: "italic",
        }}>
          Real engagements. The systems we built, and what changed.
        </p>
        <a href="#industries" style={{
          fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.accent, textDecoration: "none",
        }}>See the industries I serve →</a>
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
          fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.gray,
          lineHeight: 1.6, fontStyle: "italic", maxWidth: 820, margin: 0,
        }}>
          Confidentiality note: All client names and identifying details have been omitted.
          Results shown reflect specific client engagements and are not a guarantee of future outcomes.
        </p>
      </Section>

      {/* Industries */}
      <Section id="industries" style={{ borderTop: `1px solid ${C.border}`, scrollMarginTop: 90 }}>
        <h2 style={{ ...h2Style, marginBottom: 20 }}>
          Different industries. <span style={{ color: C.accent }}>Same discipline.</span>
        </h2>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 580, marginBottom: 28, fontWeight: 300 }}>
          Every business is different, but the financial questions rhyme.
          I've built financial systems across a range of industries.
          The lessons carry.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
          {["SaaS", "Wellness", "Agriculture", "Travel", "Oil & Gas", "Lending & BNPL"
          ].map(ind => <IndustryTag key={ind} label={ind} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {industries.map(({ name, challenges, needs }) => (
            <div key={name} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "32px 28px", borderRadius: 3,
            }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.accent,
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16,
              }}>{name}</h3>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Challenges</div>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{challenges}</p>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>What you need</div>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{needs}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{ ...h2Style, marginBottom: 16 }}>Want results like these?</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          Yours might be a different industry. The questions won't be. Start with a free discovery call.
        </p>
        <Link to="/contact" style={{
          background: C.accent, color: "#fff", textDecoration: "none",
          padding: "16px 40px", fontFamily: "'Inter', sans-serif",
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: 3, display: "inline-block",
        }}>Talk to Robert →</Link>
      </Section>
    </PageWrapper>
  );
}
