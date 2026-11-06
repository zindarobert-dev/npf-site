import { Link } from "react-router-dom";
import { C } from "../theme";
import { Badge, Faq, SectionLabel, PageWrapper, Section } from "../components/UI";
import { LAST_UPDATED, SEGMENTS, PROBLEMS, LADDER, CALENDAR, FAQ } from "../data/seasonal";

const h2 = {
  fontFamily: "'Inter', sans-serif", fontSize: "clamp(26px, 3.6vw, 40px)",
  fontWeight: 700, lineHeight: 1.15, maxWidth: 760, marginBottom: 20, letterSpacing: "-0.02em",
};
const lede = { fontSize: 17, color: C.gray, lineHeight: 1.8, maxWidth: 680, marginBottom: 20 };
const body = { fontSize: 15, color: C.gray, lineHeight: 1.75, margin: 0 };
const card = {
  background: C.bgCard, border: `1px solid ${C.border}`,
  padding: "30px 28px", borderRadius: 3, display: "flex", flexDirection: "column",
};
const grid = (min) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 16 });
const primaryBtn = {
  background: C.accent, color: "#fff", textDecoration: "none",
  padding: "16px 36px", fontFamily: "'Inter', sans-serif",
  fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
  textTransform: "uppercase", borderRadius: 3, display: "inline-block",
};
const inlineLink = { color: C.accent, textDecoration: "none", borderBottom: `1px solid ${C.accent}44` };
const eyebrow = {
  fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.accent,
  textTransform: "uppercase", letterSpacing: "0.16em", display: "block", marginBottom: 14,
};

export default function SeasonalBusinesses() {
  return (
    <PageWrapper>
      {/* ═══ 1. HERO ═══ */}
      <Section style={{ paddingTop: 100, paddingBottom: 48 }}>
        <SectionLabel label="Tax Services" number="06" />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(34px, 5vw, 60px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 780, marginBottom: 22, letterSpacing: "-0.03em",
        }}>
          Tax and cash flow for <span style={{ color: C.accent }}>seasonal businesses</span>
        </h1>
        <p style={{ fontSize: 19, color: C.gray, lineHeight: 1.7, maxWidth: 640, marginBottom: 36, fontWeight: 300 }}>
          You make most of your money in a few months and pay bills all twelve. Three Seeds
          handles the tax side and builds the cash plan that gets you through the off-season.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
          <Link to="/contact" style={primaryBtn}>Get an Off-Season Cash Check →</Link>
          <a href="#how-it-works" style={{ ...inlineLink, fontSize: 14 }}>See how it works</a>
          <Link to="/tax-services" style={{ ...inlineLink, fontSize: 14 }}>All tax services</Link>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Badge>Nationwide · Fully Remote</Badge>
          <span style={{ fontSize: 12, color: C.gray, letterSpacing: "0.04em" }}>
            Last updated: {LAST_UPDATED}
          </span>
        </div>
      </Section>

      {/* ═══ 2. DEFINITION ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>What is a seasonal cash flow business?</h2>
        <p style={lede}>
          A seasonal cash flow business earns most of its revenue in a short window, often three
          to six months, but carries payroll, debt, insurance, and overhead year-round.
        </p>
        <p style={lede}>
          That gap creates two problems at once. The tax problems are timing problems: deposits
          collected in one year for work delivered in the next, estimated payments sized to an
          income curve that does not match yours, and equipment bought in a month when the cash
          looks plentiful. The cash problem is that a healthy bank balance in July says nothing
          about February.
        </p>
        <p style={{ ...lede, marginBottom: 0 }}>
          A general accountant files the return. What a seasonal operator needs is someone
          watching the calendar, because by the time a seasonal business can see the shortfall in
          its own numbers, the season is over and there is no way to earn through it.
        </p>
      </Section>

      {/* ═══ 3. WHO THIS IS FOR ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Who we work with</h2>
        <p style={{ ...lede, marginBottom: 40 }}>
          If more than half your revenue lands in four months or fewer, this page is for you.
        </p>
        <div style={grid(300)}>
          {SEGMENTS.map(({ name, squeeze }) => (
            <div key={name} style={card}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 700,
                color: C.dark, margin: "0 0 10px 0", lineHeight: 1.35, letterSpacing: "-0.01em",
              }}>{name}</h3>
              <p style={body}>{squeeze}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ 4. PROBLEMS ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Where seasonal businesses lose money</h2>
        <p style={{ ...lede, marginBottom: 40 }}>
          Six things come up in nearly every seasonal engagement. Each one costs money quietly,
          and each one is fixable before the season turns.
        </p>
        <div style={grid(340)}>
          {PROBLEMS.map(({ question, answer, detail }) => (
            <div key={question} style={{ ...card, borderLeft: `3px solid ${C.accent}` }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700,
                color: C.dark, margin: "0 0 12px 0", lineHeight: 1.4, letterSpacing: "-0.01em",
              }}>&ldquo;{question}&rdquo;</h3>
              <p style={{ ...body, color: C.dark, fontWeight: 600, marginBottom: 10 }}>{answer}</p>
              <p style={body}>{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ 5. HOW IT WORKS ═══ */}
      <Section id="how-it-works" style={{ borderTop: `1px solid ${C.border}`, scrollMarginTop: 90 }}>
        <h2 style={h2}>How Three Seeds works with seasonal businesses</h2>
        <p style={{ ...lede, marginBottom: 40 }}>
          Three steps, in order. Most owners start at the first one and move up when the books
          are clean enough to forecast from. See the full{" "}
          <Link to="/services" style={inlineLink}>service tiers</Link> for work outside the
          seasonal track.
        </p>
        <div style={grid(300)}>
          {LADDER.map(({ step, title, detail }) => (
            <div key={step} style={card}>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 32, fontWeight: 700,
                color: C.accent, opacity: 0.3, display: "block", marginBottom: 12,
              }}>{step}</span>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700,
                color: C.dark, margin: "0 0 12px 0", letterSpacing: "-0.01em",
              }}>{title}</h3>
              <p style={body}>{detail}</p>
            </div>
          ))}
        </div>
        {/* [BOBBY: add "starting at" prices here, or leave this out entirely] */}
      </Section>

      {/* ═══ 6. CALENDAR ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Your seasonal tax and cash calendar</h2>
        <p style={{ ...lede, marginBottom: 40 }}>
          The work is the same every year. It just has to happen in the right order, and most of
          it happens before and after the season rather than during it.
        </p>
        <div style={grid(260)}>
          {CALENDAR.map(({ season, items }) => (
            <div key={season} style={card}>
              <span style={eyebrow}>{season}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: C.accent, fontSize: 13, marginTop: 3, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 14, color: C.grayLight, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/*
        ═══ 7. PROOF ═══ Deliberately not rendered. Publishing bracketed
        placeholders on a live page looks broken to visitors and to crawlers.
        [BOBBY: add client story with permission: multi-location rental company,
                the problem, what we built, the result. No invented numbers.]
        [BOBBY: add one real testimonial with name and business.]
        Once both exist, add a Results section here using the same card style.
      */}

      {/* ═══ 8. WHO YOU'LL WORK WITH ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Who you'll work with</h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 40, alignItems: "start", marginTop: 32,
        }}>
          <figure style={{
            margin: 0, border: `1px solid ${C.border}`, borderRadius: 3,
            overflow: "hidden", background: C.bgCard, maxWidth: 320,
          }}>
            <img
              src="/headshot.jpg"
              alt="Robert Zinda, founder of Three Seeds, outdoors in Central Wisconsin"
              style={{ width: "100%", height: "auto", display: "block" }}
              width="800" height="1200" loading="lazy"
            />
          </figure>
          <div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 700,
              color: C.dark, margin: "0 0 6px 0", letterSpacing: "-0.01em",
            }}>Robert "Bobby" Zinda</h3>
            <p style={{ fontSize: 14, color: C.accent, letterSpacing: "0.04em", marginBottom: 20 }}>
              Founder, Three Seeds · Central Wisconsin
            </p>
            {/* [BOBBY: add credentials and status here, e.g. EA, CPA candidate. Left out
                rather than guessed.] */}
            <p style={{ ...lede, fontSize: 16, marginBottom: 16 }}>
              Robert runs Three Seeds out of Central Wisconsin and works with owners nationwide,
              fully remote. He is a U.S. Veteran. The practice covers tax, controller work, and
              Part Time CFO support, and the seasonal track exists because the same six problems
              kept showing up in the same four months.
            </p>
            <p style={{ ...lede, fontSize: 16, marginBottom: 20 }}>
              He writes <a href="https://cashgap.substack.com" style={inlineLink} rel="noopener">The
              Cash Gap</a>, on the distance between profit on paper and money in the account.
            </p>
            <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.8, margin: 0 }}>
              Find him on{" "}
              <a href="https://www.linkedin.com/in/robert-zinda-2916457a/" style={inlineLink} rel="noopener" target="_blank">LinkedIn</a>,
              or read more on the{" "}
              <Link to="/about" style={inlineLink}>about page</Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ 9. FAQ ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Seasonal business tax and cash flow FAQ</h2>
        <p style={{ ...lede, marginBottom: 40 }}>
          General information, not advice for your situation. The right answer usually depends on
          your state, your accounting method, and the facts.
        </p>
        <Faq items={FAQ} />
      </Section>

      {/* ═══ 10. FINAL CTA ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{ ...h2, maxWidth: 680, margin: "0 auto 16px" }}>
          Find out how long your cash lasts
        </h2>
        <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
          Book a free Off-Season Cash Check. We'll look at your last year and tell you how many
          months of runway you really have.
        </p>
        <Link to="/contact" style={primaryBtn}>Get an Off-Season Cash Check →</Link>
      </Section>
    </PageWrapper>
  );
}
