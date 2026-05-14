import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { C } from "../theme";

export function Badge({ children }) {
  return (
    <span style={{
      display: "inline-block", padding: "5px 14px", fontSize: 11,
      fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
      letterSpacing: "0.12em", color: C.accent,
      background: C.accentDim, border: `1px solid ${C.accent}22`, borderRadius: 2,
    }}>{children}</span>
  );
}

export function SectionLabel({ label, number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.accent, letterSpacing: "0.15em",
      }}>{number}</span>
      <div style={{ height: 1, width: 40, background: C.accent }} />
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.gray,
        textTransform: "uppercase", letterSpacing: "0.15em",
      }}>{label}</span>
    </div>
  );
}

export function Counter({ end, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function ServiceCard({ tier, title, description, features, isHighlight }) {
  const [h, setH] = useState(false);
  const [bh, setBh] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? C.bgCardHover : C.bgCard,
        border: `1px solid ${isHighlight && h ? C.accent + "44" : C.border}`,
        padding: "40px 32px", position: "relative", transition: "all 0.4s ease",
        cursor: "default", display: "flex", flexDirection: "column", borderRadius: 3,
      }}
    >
      {isHighlight && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: C.accent }} />
      )}
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11, color: C.accent,
        textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 16,
      }}>{tier}</span>
      <h3 style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700,
        color: C.dark, margin: "0 0 16px 0",
      }}>{title}</h3>
      <p style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.gray,
        lineHeight: 1.7, margin: "0 0 28px 0",
      }}>{description}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ color: C.accent, fontSize: 14, marginTop: 2, flexShrink: 0 }}>→</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: C.grayLight, lineHeight: 1.6 }}>{f}</span>
          </div>
        ))}
      </div>
      <Link
        to="/contact"
        onMouseEnter={() => setBh(true)}
        onMouseLeave={() => setBh(false)}
        style={{
          marginTop: 28,
          padding: "12px 24px",
          background: bh ? C.accent : "transparent",
          color: bh ? "#fff" : C.accent,
          border: `1px solid ${C.accent}`,
          fontFamily: "'Space Mono', monospace",
          fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", textDecoration: "none",
          textAlign: "center", borderRadius: 2,
          transition: "all 0.25s ease",
        }}
      >Learn More →</Link>
    </div>
  );
}

export function PainCard({ icon, text }) {
  return (
    <div style={{
      background: C.bgCard, border: `1px solid ${C.border}`,
      padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 16, borderRadius: 3,
    }}>
      <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.grayLight, lineHeight: 1.65 }}>{text}</span>
    </div>
  );
}

export function IndustryTag({ label }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-block", padding: "10px 20px",
        fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.08em",
        color: h ? C.accent : C.grayLight,
        background: h ? C.accentDim : "transparent",
        border: `1px solid ${h ? C.accent + "44" : C.border}`,
        transition: "all 0.3s ease", cursor: "default", borderRadius: 2,
      }}
    >{label}</span>
  );
}

export function PageWrapper({ children }) {
  return (
    <div style={{ paddingTop: 80, minHeight: "calc(100vh - 120px)" }}>
      {children}
    </div>
  );
}

export function Section({ children, style }) {
  return (
    <section style={{ padding: "80px clamp(20px, 5vw, 80px)", ...style }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}
