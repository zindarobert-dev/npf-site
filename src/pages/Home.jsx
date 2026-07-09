import { Link } from "react-router-dom";
import { C } from "../theme";
import { Badge, PainCard, PageWrapper, Section, SectionLabel } from "../components/UI";

export default function Home() {
  return (
    <PageWrapper>
      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center",
        padding: "60px clamp(20px, 5vw, 80px) 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.035,
          backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div style={{
          position: "absolute", top: "5%", right: "-15%",
          width: 800, height: 800, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.accent}0A 0%, transparent 70%)`,
          filter: "blur(100px)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="fade-up"><Badge>Veteran-Owned · Part Time CFO</Badge></div>
          <h1 className="fade-up-d1" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, lineHeight: 1.05,
            margin: "28px 0", maxWidth: 900, letterSpacing: "-0.03em", color: C.dark,
          }}>
            Financial Command<br />
            <span style={{ color: C.accent }}>Systems</span> for<br />
            Growing Businesses.
          </h1>
          <p className="fade-up-d2" style={{
            fontSize: "clamp(16px, 1.8vw, 20px)", color: C.gray, lineHeight: 1.7,
            maxWidth: 580, margin: "0 0 44px 0", fontWeight: 300,
          }}>
            CFO-level financial infrastructure for owner-operated businesses.
            Books you can trust, forecasts that hold, and the judgment to know what's coming.
          </p>
          <div className="fade-up-d3" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 80 }}>
            <Link to="/contact" style={{
              background: C.accent, color: "#fff", border: "none", textDecoration: "none",
              padding: "16px 36px", fontFamily: "'Inter', sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", borderRadius: 3, transition: "all 0.3s",
              display: "inline-block",
            }}>Talk to Robert →</Link>
            <Link to="/services" style={{
              background: "transparent", color: C.dark, border: `1px solid ${C.border}`,
              padding: "16px 36px", fontFamily: "'Inter', sans-serif", textDecoration: "none",
              fontSize: 13, fontWeight: 400, letterSpacing: "0.1em",
              textTransform: "uppercase", borderRadius: 3, transition: "all 0.3s",
              display: "inline-block",
            }}>See Services</Link>
          </div>

        </div>
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <SectionLabel label="The Problem" number="01" />
        <h2 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700, lineHeight: 1.15, maxWidth: 650, marginBottom: 20, letterSpacing: "-0.02em",
        }}>
          Your bookkeeper keeps the books.
          <br /><span style={{ color: C.gray }}>Nobody's commanding the finances.</span>
        </h2>
        <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
          Businesses don't fail from a lack of work.
          They fail from cash flow surprises, invisible cost creep,
          and decisions made without financial context.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
          <PainCard number="01" text="You can't tell if you'll make payroll in 60 days without pulling up three spreadsheets and guessing." />
          <PainCard number="02" text="Your books close weeks after month-end, so every decision gets made on numbers that are already stale." />
          <PainCard number="03" text="Margins are shrinking and nobody can tell you exactly where the cost creep is coming from." />
          <PainCard number="04" text="You're making $8M in revenue but can't explain to your banker why you need a bigger line of credit." />
        </div>
      </Section>

      {/* ═══ THE THREE SEEDS ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <SectionLabel label="The Three Seeds" number="02" />
        <h2 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700, lineHeight: 1.15, maxWidth: 720, marginBottom: 48, letterSpacing: "-0.02em",
        }}>
          <span style={{ color: C.accent }}>Three Seeds</span> puts its name on three things.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            {
              num: "01",
              title: "Accurate historicals.",
              desc: "Books that close on time and reflect what actually happened. Numbers you can audit, build on, and put in front of a lender.",
            },
            {
              num: "02",
              title: "Outcomes we own.",
              desc: "We're accountable for the financial result, not just the report. If something slips, we own the fix.",
            },
            {
              num: "03",
              title: "Early warning.",
              desc: "We see trouble while there's still time to act. You know before the bank, the buyer, or the board does.",
            },
          ].map(({ num, title, desc }) => (
            <div key={num} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "36px 32px", borderRadius: 3, position: "relative",
              display: "flex", flexDirection: "column",
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                color: C.accent, letterSpacing: "0.14em", display: "block", marginBottom: 20,
              }}>{num}</span>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700,
                color: C.dark, margin: "0 0 12px 0", letterSpacing: "-0.01em",
              }}>{title}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 15, color: C.gray,
                lineHeight: 1.7, margin: 0,
              }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <Link to="/services" style={{
            color: C.accent, fontFamily: "'Inter', sans-serif", fontSize: 13,
            letterSpacing: "0.08em", textDecoration: "none", borderBottom: `1px solid ${C.accent}44`,
            paddingBottom: 2,
          }}>SEE THE SERVICE TIERS →</Link>
        </div>
      </Section>
    </PageWrapper>
  );
}
