import { useState } from "react";
import { C } from "../theme";
import { SectionLabel, PageWrapper, Section } from "../components/UI";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdayprro";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", revenue: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (submitting) return;
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email bobby directly or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Section style={{ paddingTop: 100 }}>
        <SectionLabel label="Contact" number="05" />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60, alignItems: "start",
        }}>
          {/* Left column */}
          <div>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900, lineHeight: 1.08, marginBottom: 20, letterSpacing: "-0.03em",
            }}>
              Let's talk about<br /><span style={{ color: C.accent }}>your numbers.</span>
            </h1>
            <p style={{ fontSize: 17, color: C.gray, lineHeight: 1.8, marginBottom: 40 }}>
              No pitch decks. No jargon. Just a straight conversation about
              where your finances are, where they need to be, and how to close the gap.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {[
                { icon: "◆", text: "Free 30-minute discovery call" },
                { icon: "◆", text: "No contracts — month-to-month" },
                { icon: "◆", text: "Onboarding in under 2 weeks" },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ color: C.accent, fontSize: 14 }}>{icon}</span>
                  <span style={{ color: C.grayLight, fontSize: 16, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: "28px 24px", borderRadius: 3,
            }}>
              <h3 style={{
                fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.accent,
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16,
              }}>What happens next</h3>
              {[
                "You fill out the form. Takes 60 seconds.",
                "Bobby reviews your info and reaches out within 24 hours.",
                "We hop on a 30-minute call — no pitch, just problem-solving.",
                "If it's a fit, we scope an engagement and start within two weeks.",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 3 ? 12 : 0 }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.accent,
                    fontWeight: 700, flexShrink: 0, marginTop: 2,
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 14, color: C.gray, lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            padding: "44px 36px", borderRadius: 3,
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", background: C.accentDim,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px", fontSize: 24, color: C.accent,
                }}>✓</div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700,
                  color: C.dark, marginBottom: 12,
                }}>Got it.</h3>
                <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.65 }}>
                  Bobby will be in touch within 24 hours.<br />
                  Looking forward to the conversation.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 13, color: C.accent,
                  textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4,
                }}>Get in touch</h3>
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                  { key: "company", label: "Company", type: "text", placeholder: "Company name" },
                  { key: "revenue", label: "Annual Revenue Range", type: "text", placeholder: "e.g. $5M–$10M" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label style={{
                      display: "block", fontFamily: "'Space Mono', monospace", fontSize: 11,
                      color: C.gray, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8,
                    }}>{label}</label>
                    <input type={type} placeholder={placeholder} value={formData[key]}
                      onChange={e => setFormData(p => ({ ...p, [key]: e.target.value }))}
                      style={{
                        width: "100%", padding: "13px 16px", background: C.inputBg,
                        border: `1px solid ${C.border}`, color: C.dark,
                        fontFamily: "'Outfit', sans-serif", fontSize: 14, borderRadius: 3,
                        transition: "border-color 0.2s",
                      }} />
                  </div>
                ))}
                <div>
                  <label style={{
                    display: "block", fontFamily: "'Space Mono', monospace", fontSize: 11,
                    color: C.gray, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8,
                  }}>What's your biggest financial pain point?</label>
                  <textarea rows={5} placeholder="Tell us what's keeping you up at night..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{
                      width: "100%", padding: "13px 16px", background: C.inputBg,
                      border: `1px solid ${C.border}`, color: C.dark,
                      fontFamily: "'Outfit', sans-serif", fontSize: 14, resize: "vertical",
                      borderRadius: 3, transition: "border-color 0.2s",
                    }} />
                </div>
                {error && (
                  <div style={{
                    padding: "12px 14px", background: "#FCEBEA", border: "1px solid #E5B4B0",
                    color: "#8B2A22", fontSize: 13, borderRadius: 3,
                    fontFamily: "'Outfit', sans-serif", lineHeight: 1.5,
                  }}>{error}</div>
                )}
                <button onClick={handleSubmit} disabled={submitting} style={{
                  width: "100%", padding: "16px",
                  background: submitting ? C.gray : C.accent, color: "#fff",
                  border: "none", fontFamily: "'Space Mono', monospace", fontSize: 13,
                  fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer",
                  letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 3,
                  marginTop: 4, transition: "all 0.3s",
                }}>{submitting ? "Sending..." : "Send It →"}</button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
