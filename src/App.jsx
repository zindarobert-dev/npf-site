import { Routes, Route } from "react-router-dom";
import { C } from "./theme";
import Layout from "./components/Layout";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SeasonalBusinesses from "./pages/SeasonalBusinesses";
import TaxServices from "./pages/TaxServices";
import Eula from "./pages/Eula";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Kept as a raw string and injected with dangerouslySetInnerHTML. React's
// server renderer escapes text children, so the apostrophes in font-family
// would come back as &#x27; on the server while the browser parses <style>
// as raw text, breaking hydration on every page.
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${C.bg}; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
  ::selection { background: ${C.accent}; color: #fff; }
  a { transition: color 0.2s, opacity 0.2s; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { animation: fadeUp 0.8s ease forwards; }
  .fade-up-d1 { animation: fadeUp 0.8s ease 0.1s forwards; opacity: 0; }
  .fade-up-d2 { animation: fadeUp 0.8s ease 0.2s forwards; opacity: 0; }
  .fade-up-d3 { animation: fadeUp 0.8s ease 0.3s forwards; opacity: 0; }
  .fade-up-d4 { animation: fadeUp 0.8s ease 0.4s forwards; opacity: 0; }
  input:focus, textarea:focus { outline: none; border-color: ${C.accent} !important; }

  .faq-item { border-top: 1px solid ${C.border}; }
  .faq-item:last-of-type { border-bottom: 1px solid ${C.border}; }
  .faq-item > summary {
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 24px; padding: 22px 0; cursor: pointer; list-style: none;
  }
  .faq-item > summary::-webkit-details-marker { display: none; }
  .faq-item > summary::marker { content: ""; }
  .faq-item > summary:focus-visible { outline: 2px solid ${C.accent}; outline-offset: 4px; }
  .faq-q {
    font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 700;
    color: ${C.dark}; line-height: 1.45; letter-spacing: -0.01em; margin: 0;
    transition: color 0.2s;
  }
  .faq-item > summary:hover .faq-q { color: ${C.accent}; }
  .faq-icon { position: relative; flex: 0 0 14px; width: 14px; height: 14px; margin-top: 5px; }
  .faq-icon::before, .faq-icon::after {
    content: ""; position: absolute; top: 50%; left: 0;
    width: 14px; height: 2px; margin-top: -1px; background: ${C.accent};
    transition: transform 0.25s ease;
  }
  .faq-icon::after { transform: rotate(90deg); }
  .faq-item[open] .faq-icon::after { transform: rotate(0deg); }
  .faq-a {
    font-size: 16px; color: ${C.gray}; line-height: 1.8;
    margin: 0; padding: 0 38px 26px 0; max-width: 760px;
  }
`;

function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Seo />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tax-services" element={<TaxServices />} />
          <Route path="/seasonal-businesses" element={<SeasonalBusinesses />} />
          <Route path="/legal/eula" element={<Eula />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
