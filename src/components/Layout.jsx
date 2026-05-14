import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { C } from "../theme";

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <div style={{ background: C.bg, color: C.dark, minHeight: "100vh", fontFamily: "'Outfit', sans-serif", overflowX: "hidden" }}>

      {/* ═══ NAV ═══ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 50 ? C.bg + "EE" : C.bg,
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: `1px solid ${scrollY > 50 ? C.border : "transparent"}`,
        transition: "all 0.3s ease",
        padding: "0 clamp(20px, 5vw, 80px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/logo.png" alt="Three Seeds" style={{
              height: 56, width: "auto", objectFit: "contain",
            }} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div className="nav-desktop" style={{ display: "flex", gap: 28 }}>
              {navLinks.map(({ label, to }) => (
                <Link key={to} to={to} style={{
                  textDecoration: "none",
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: isActive(to) ? 600 : 400,
                  color: isActive(to) ? C.accent : C.gray, transition: "color 0.2s",
                  letterSpacing: "0.02em", borderBottom: isActive(to) ? `2px solid ${C.accent}` : "2px solid transparent",
                  paddingBottom: 4,
                }}>{label}</Link>
              ))}
            </div>
            <Link to="/contact" style={{
              background: C.accent, color: "#fff", border: "none", textDecoration: "none",
              padding: "10px 24px", fontFamily: "'Space Mono', monospace",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", borderRadius: 3, transition: "transform 0.2s",
              display: "inline-block",
            }}>Get Started</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", padding: 8,
            }}
          >
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{
                height: 2, background: C.dark, borderRadius: 1, transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }} />
              <span style={{
                height: 2, background: C.dark, borderRadius: 1, transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                height: 2, background: C.dark, borderRadius: 1, transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            padding: "16px 0 24px", display: "flex", flexDirection: "column", gap: 16,
            borderTop: `1px solid ${C.border}`,
          }}>
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", fontSize: 16, fontWeight: isActive(to) ? 600 : 400,
                color: isActive(to) ? C.accent : C.dark,
              }}>{label}</Link>
            ))}
          </div>
        )}
      </nav>

      {/* ═══ CONTENT ═══ */}
      {children}

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: "48px clamp(20px, 5vw, 80px)", borderTop: `1px solid ${C.border}` }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.png" alt="Three Seeds" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: C.gray }}>
              © 2026 Three Seeds LLC. All rights reserved.
            </span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} style={{
                fontFamily: "'Space Mono', monospace", fontSize: 11, color: C.gray,
                textDecoration: "none", letterSpacing: "0.05em",
              }}>{label}</Link>
            ))}
          </div>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, color: C.gray, letterSpacing: "0.1em",
          }}>VETERAN-OWNED · USA</span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
}
