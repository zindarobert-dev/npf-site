import { Routes, Route } from "react-router-dom";
import { C } from "./theme";
import Layout from "./components/Layout";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/eula" element={<Eula />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
