import { Link } from "react-router-dom";
import { C } from "../theme";
import { Badge, SectionLabel, PageWrapper, Section } from "../components/UI";

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Section style={{ paddingTop: 100, paddingBottom: 40 }}>
        <SectionLabel label="About" number="04" />
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900, lineHeight: 1.08, maxWidth: 700, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          About <span style={{ color: C.accent }}>Three Seeds.</span>
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 580, marginBottom: 0, fontWeight: 300 }}>
          Why we're named what we are.
        </p>
      </Section>

      {/* The Story */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60, alignItems: "start",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              Slow growth. Constant attention.
            </h2>
            <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 20 }}>
              The avocado isn't a logo. It's the first real food each of my daughters ate.
              The first thing that nourished them outside their mother. My world is my girls,
              and that's where the name starts: with the fruit that fed them before anything else.
            </p>
            <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 20 }}>
              The <em>three</em> matters too. An avocado grows slowly. It needs time, attention,
              and patience that most modern businesses don't want to give anything. And anyone
              who's ever tried to grow one from a pit knows you don't plant one seed. You plant
              three. Because nature is honest about backup plans. Some won't take. Some take longer
              than you expected. And if one is tended well, it becomes something that outlives you.
            </p>
            <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 20 }}>
              That's how I think about the work. One plan isn't a plan. Real ownership means
              scenarios: the primary case, the contingency when the season turns, and the
              long-term track you're building toward whether you sell, succeed, or pass it on.
              Three Seeds is named for the way that thinking shows up in everything we build
              for clients.
            </p>
            <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 32, fontStyle: "italic" }}>
              Slow growth. Constant attention. Three seeds in the ground, always.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Badge>U.S. Veteran</Badge>
              <Badge>Endurance Athlete</Badge>
              <Badge>100-Mile Finisher</Badge>
              <Badge>Half Ironman</Badge>
            </div>
          </div>

          {/* Values card */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            padding: "40px 32px", borderRadius: 3,
          }}>
            <h3 style={{
              fontFamily: "'Space Mono', monospace", fontSize: 13,
              color: C.accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 32,
            }}>Why Three Seeds</h3>
            {[
              { q: "Not another accountant", a: "We don't just record history. We build the financial infrastructure that helps you see what's coming." },
              { q: "Capital-intensive expertise", a: "Equipment depreciation, seasonal cash flow, lender covenants. We speak your language because we live it." },
              { q: "CFO judgment, controller cost", a: "High-level strategic thinking priced for businesses that can't justify a $300K salary, but desperately need the insight." },
              { q: "Built to earn trust", a: "Veteran discipline. Endurance mindset. We show up, we grind, and we don't quit when it gets hard." },
            ].map(({ q, a }, i) => (
              <div key={i} style={{ marginBottom: i < 3 ? 28 : 0 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 800, lineHeight: 1.15, marginBottom: 48, letterSpacing: "-0.02em",
        }}>
          How we operate
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { title: "No surprises", desc: "We build the visibility that eliminates financial surprises. If a cash flow problem is coming in 90 days, you'll know in 30." },
            { title: "Transition, don't disrupt", desc: "We run parallel with your existing processes before taking over. Your operations keep running while we upgrade the financial infrastructure underneath." },
            { title: "Plain language", desc: "We translate financial complexity into operator decisions. No jargon, no 40-page reports nobody reads. Clear signals, clear actions." },
            { title: "Month-to-month", desc: "We earn your business every month. No long-term contracts, no lock-in. If we're not delivering value, you should be able to walk." },
            { title: "Strategic, not just compliant", desc: "Any firm can keep you compliant. We position your finances to give you leverage: with lenders, with partners, with your own decision-making." },
            { title: "Built for operators", desc: "We're not here to serve tech startups or lifestyle businesses. We serve people who move dirt, pour concrete, haul freight, and pump oil." },
          ].map(({ title, desc }) => (
            <div key={title} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "28px 24px", borderRadius: 3,
            }}>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 700,
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
        }}>Let's see if we're the right fit.</h2>
        <p style={{ fontSize: 16, color: C.gray, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
          Straight talk. No obligations. 30 minutes.
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
