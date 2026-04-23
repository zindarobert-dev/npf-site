import { Link } from "react-router-dom";
import { C } from "../theme";
import { IndustryTag, SectionLabel, PageWrapper, Section } from "../components/UI";

const industries = [
  {
    name: "Construction",
    challenges: "Retainage, progress billing, seasonal labor costs, bonding requirements, job costing across multiple active projects.",
    needs: "Cash flow forecasting that accounts for retainage release schedules and seasonal revenue dips.",
  },
  {
    name: "Oil & Gas",
    challenges: "Commodity price volatility, high equipment costs, complex joint venture accounting, regulatory compliance.",
    needs: "Capital allocation strategy and scenario modeling for price fluctuation impacts.",
  },
  {
    name: "Agriculture",
    challenges: "Extreme seasonality, weather-dependent revenue, input cost volatility, equipment depreciation cycles.",
    needs: "Annual cash flow modeling that bridges harvest-to-harvest and manages input cost timing.",
  },
  {
    name: "Manufacturing",
    challenges: "Inventory management, cost of goods complexity, equipment maintenance reserves, workforce scaling.",
    needs: "Margin analysis by product line and capital expenditure planning for equipment replacement.",
  },
  {
    name: "Logistics & Trucking",
    challenges: "Fuel cost volatility, fleet depreciation, driver payroll complexity, per-mile profitability tracking.",
    needs: "Per-unit economics visibility and fleet replacement capital planning.",
  },
  {
    name: "Equipment Rental",
    challenges: "Asset utilization tracking, depreciation schedules, maintenance reserves, seasonal demand swings.",
    needs: "Asset-level P&L visibility and rental rate optimization against depreciation.",
  },
];

export default function Industries() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label="Industries" number="03" />
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          Built for businesses that<br /><span style={{ color: C.accent }}>move heavy things.</span>
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontWeight: 300 }}>
          We serve capital-intensive operators — businesses where cash flow is seasonal,
          equipment depreciates, and a wrong financial call costs real money.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 0 }}>
          {["Construction", "Oil & Gas", "Agriculture", "Manufacturing", "Logistics & Trucking",
            "Equipment Rental", "Heavy Civil", "Excavation & Earthwork", "HVAC & Mechanical",
          ].map(ind => <IndustryTag key={ind} label={ind} />)}
        </div>
      </Section>

      {/* Industry deep-dives */}
      <Section style={{ borderTop: `1px solid ${C.border}`, paddingTop: 60 }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, lineHeight: 1.15, marginBottom: 48, letterSpacing: "-0.02em",
        }}>
          We know your world
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {industries.map(({ name, challenges, needs }) => (
            <div key={name} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "32px 28px", borderRadius: 3,
            }}>
              <h3 style={{
                fontFamily: "'Space Mono', monospace", fontSize: 13, color: C.accent,
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
            fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 500,
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
              fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 700, color: "#fff",
            }}>B</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>Bobby</div>
              <div style={{ fontSize: 13, color: C.gray }}>Founder, Net Positive Financials</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em",
        }}>See yourself here?</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          Let's talk about how Financial Command Systems work for your specific industry.
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
