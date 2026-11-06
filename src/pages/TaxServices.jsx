import { Link } from "react-router-dom";
import { C } from "../theme";
import { Badge, Faq, SectionLabel, PageWrapper, Section } from "../components/UI";
import {
  INCLUDED, PLANNING_VS_PREP, WHO, PROCESS, FAQ, LAST_UPDATED,
} from "../data/taxServices.js";

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
const h3 = {
  fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700,
  color: C.dark, margin: "0 0 10px 0", letterSpacing: "-0.01em",
};

export default function TaxServices() {
  return (
    <PageWrapper>
      {/* ═══ 1. HERO ═══ */}
      <Section style={{ paddingTop: 100, paddingBottom: 48 }}>
        <SectionLabel label="Tax Services" number="02" />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(34px, 5vw, 60px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 820, marginBottom: 22, letterSpacing: "-0.03em",
        }}>
          Business tax services for <span style={{ color: C.accent }}>owner-led companies</span>
        </h1>
        {/* Answer-first. An engine quoting one sentence off this page should get
            a sentence that says what the service is and who it is for. */}
        <p style={{ fontSize: 19, color: C.gray, lineHeight: 1.7, maxWidth: 660, marginBottom: 36, fontWeight: 300 }}>
          Three Seeds prepares business and owner tax returns and plans the tax position
          during the year instead of reporting it after. Built for owners whose income
          does not arrive in twelve equal pieces.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
          <Link to="/contact" style={primaryBtn}>Get a Tax Review →</Link>
          <a href="#how-it-works" style={{ ...inlineLink, fontSize: 14 }}>See how it works</a>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Badge>Nationwide · Fully Remote</Badge>
          <span style={{ fontSize: 12, color: C.gray, letterSpacing: "0.04em" }}>
            Last updated: {LAST_UPDATED}
          </span>
        </div>
      </Section>

      {/* ═══ 2. WHAT IT COVERS ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>What business tax services cover</h2>
        <p style={lede}>
          Business tax work has six moving parts: the returns, the planning that happens
          before them, the entity and compensation structure underneath, the estimated
          payments, the sales and payroll filings, and the books all of it rests on.
          Three Seeds handles them as one job rather than six.
        </p>
        <div style={{ ...grid(300), marginTop: 32 }}>
          {INCLUDED.map(({ name, detail }) => (
            <div key={name} style={card}>
              <h3 style={h3}>{name}</h3>
              <p style={body}>{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ 3. PLANNING VS PREPARATION ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Tax preparation and tax planning are not the same work</h2>
        <p style={lede}>
          Tax preparation reports what already happened. Tax planning changes what happens
          next. Most owners are paying for the first and assuming they are getting the
          second. The difference shows up in five places.
        </p>
        <div style={{ ...grid(300), marginTop: 32 }}>
          <div style={{ ...card, borderTop: `3px solid ${C.border}` }}>
            <span style={eyebrow}>Tax preparation</span>
            {PLANNING_VS_PREP.map(({ axis, prep }) => (
              <div key={axis} style={{ marginBottom: 18 }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: C.dark,
                  textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5,
                }}>{axis}</div>
                <p style={body}>{prep}</p>
              </div>
            ))}
          </div>
          <div style={{ ...card, borderTop: `3px solid ${C.accent}` }}>
            <span style={eyebrow}>Tax planning</span>
            {PLANNING_VS_PREP.map(({ axis, plan }) => (
              <div key={axis} style={{ marginBottom: 18 }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: C.dark,
                  textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5,
                }}>{axis}</div>
                <p style={body}>{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ 4. WHO IT IS FOR ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Who this is for</h2>
        <p style={lede}>
          The tax work is built around businesses whose money arrives on a different
          schedule than their bills. Uneven income is not a bookkeeping quirk. It changes
          what you owe, when you owe it, and which choices are still open to you.
        </p>
        <div style={{ ...grid(300), marginTop: 32 }}>
          {WHO.map(({ name, detail, href, hrefLabel }) => (
            <div key={name} style={card}>
              <h3 style={h3}>{name}</h3>
              <p style={{ ...body, flex: 1 }}>{detail}</p>
              {href && (
                <Link to={href} style={{ ...inlineLink, fontSize: 13, marginTop: 18, alignSelf: "flex-start" }}>
                  {hrefLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p style={{ ...lede, marginTop: 32, marginBottom: 0 }}>
          Cash flow forecasting, controller work, and Part Time CFO support run alongside
          this on the <Link to="/services" style={inlineLink}>cash flow services</Link> side.
          Most owners start with one and add the other.
        </p>
      </Section>

      {/* ═══ 5. HOW IT WORKS ═══ */}
      <Section id="how-it-works" style={{ borderTop: `1px solid ${C.border}`, scrollMarginTop: 90 }}>
        <h2 style={h2}>How it works</h2>
        <p style={lede}>
          Four steps, and you know the price before the third one. Nothing starts until
          the scope is agreed.
        </p>
        <div style={{ ...grid(240), marginTop: 32 }}>
          {PROCESS.map(({ step, title, detail }) => (
            <div key={step} style={card}>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                color: C.accent, letterSpacing: "0.14em", marginBottom: 16,
              }}>{step}</span>
              <h3 style={h3}>{title}</h3>
              <p style={body}>{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ 6. WHO YOU WILL WORK WITH ═══ */}
      {/* [BOBBY: no credential is claimed anywhere on this page, because I do not
          know your status. If you are an EA, a CPA, a CPA candidate, or a PTIN
          holder, say so here. On a tax page that line carries real weight with
          both search engines and buyers, and it is the single biggest thing
          missing from this page.] */}
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
            <h3 style={{ ...h3, fontSize: 24, marginBottom: 6 }}>Robert "Bobby" Zinda</h3>
            <p style={{ fontSize: 14, color: C.accent, letterSpacing: "0.04em", marginBottom: 20 }}>
              Founder, Three Seeds · Central Wisconsin
            </p>
            <p style={{ ...lede, fontSize: 16, marginBottom: 16 }}>
              Robert runs Three Seeds out of Central Wisconsin and works with owners
              nationwide, fully remote. He is a U.S. Veteran. The same person who prepares
              the return does the planning and sees the cash forecast, which is the point:
              a tax decision made without the cash picture is a guess.
            </p>
            <p style={{ ...lede, fontSize: 16, marginBottom: 16 }}>
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

      {/* ═══ 7. FAQ ═══ */}
      {/* Collapsed by default, but the answers are real text in the HTML, not
          injected on click, so crawlers and AI engines still read all of them. */}
      <Section style={{ borderTop: `1px solid ${C.border}` }}>
        <h2 style={h2}>Common questions about business taxes</h2>
        <p style={{ ...lede, marginBottom: 32 }}>
          Click any question to open it.
        </p>
        <Faq items={FAQ} />
        <p style={{
          fontSize: 13, color: C.gray, lineHeight: 1.7, maxWidth: 820,
          marginTop: 32, fontStyle: "italic",
        }}>
          General information, not advice for your situation. The right answer usually depends on
          your entity, your state, and your numbers.
        </p>
      </Section>

      {/* ═══ 8. CTA ═══ */}
      <Section style={{ borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <h2 style={{ ...h2, maxWidth: 680, margin: "0 auto 16px" }}>
          Start with a look at last year's return.
        </h2>
        <p style={{ fontSize: 16, color: C.gray, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Thirty minutes, no cost, and you will know whether anything is worth changing
          before the next filing.
        </p>
        <Link to="/contact" style={primaryBtn}>Talk to Robert →</Link>
      </Section>
    </PageWrapper>
  );
}
