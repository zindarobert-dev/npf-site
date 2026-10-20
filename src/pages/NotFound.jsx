import { Link } from "react-router-dom";
import { C } from "../theme";
import { SectionLabel, PageWrapper, Section } from "../components/UI";

export default function NotFound() {
  return (
    <PageWrapper>
      <Section style={{ paddingTop: 120, paddingBottom: 160 }}>
        <SectionLabel label="Not found" number="404" />
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(32px, 4.5vw, 56px)",
          fontWeight: 700, lineHeight: 1.08, maxWidth: 640, marginBottom: 20,
          letterSpacing: "-0.03em",
        }}>
          This page isn't here.
        </h1>
        <p style={{ fontSize: 18, color: C.gray, lineHeight: 1.7, maxWidth: 520, marginBottom: 36, fontWeight: 300 }}>
          The link may be old, or the address may have a typo in it. Everything else is
          still where you left it.
        </p>
        <Link to="/" style={{
          display: "inline-block", padding: "14px 28px",
          background: C.accent, color: "#fff", textDecoration: "none",
          fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 2,
        }}>
          Back to home
        </Link>
      </Section>
    </PageWrapper>
  );
}
