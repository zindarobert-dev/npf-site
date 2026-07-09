import { Link } from "react-router-dom";
import { C } from "../theme";
import { IndustryTag, SectionLabel, PageWrapper, Section } from "../components/UI";

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
    name: "Financial Services",
    challenges: "Regulatory reporting, separation of custodial and operating cash, revenue timing across advisory fees and commissions, and heavy compliance overhead.",
    needs: "Audit-ready books, revenue recognition rules that hold up under scrutiny, and reporting infrastructure built for regulators.",
  },
];

export default function Industries() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label="Industries" number="03" />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          Different industries.<br /><span style={{ color: C.accent }}>Same discipline.</span>
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 580, marginBottom: 32, fontWeight: 300 }}>
          Every business is different, but the financial questions rhyme.
          I've built financial systems across a range of industries.
          The lessons carry.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 0 }}>
          {["SaaS", "Wellness", "Agriculture", "Travel", "Oil & Gas", "Financial Services"
          ].map(ind => <IndustryTag key={ind} label={ind} />)}
        </div>
      </Section>

      {/* Industry deep-dives */}
      <Section style={{ borderTop: `1px solid ${C.border}`, paddingTop: 60 }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 700, lineHeight: 1.15, marginBottom: 48, letterSpacing: "-0.02em",
        }}>
          Industries I've served
        </h2>
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

      {/* Quote */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{
          padding: "40px 44px", background: C.bgCard,
          border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.accent}`,
          borderRadius: 3, maxWidth: 750,
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 500,
            color: C.dark, lineHeight: 1.7, margin: 0, fontStyle: "italic",
          }}>
            "AI can automate your bookkeeping. It can't sit across from your banker
            and explain why your cash position is seasonal, not structural.
            That's what we do."
          </p>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", background: C.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff",
            }}>R</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>Robert</div>
              <div style={{ fontSize: 13, color: C.gray }}>Founder, Three Seeds</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em",
        }}>See yourself here?</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          Yours might be different. The questions won't be. Let's talk about how Financial Command Systems work for you.
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
