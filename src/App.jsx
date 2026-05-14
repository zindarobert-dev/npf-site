import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FONT_LINK, C } from "./theme";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";

function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: ${C.bg}; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }
      ::selection { background: ${C.accent}; color: #fff; }
      a { transition: color 0.2s, opacity 0.2s; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      .fade-up { animation: fadeUp 0.8s ease forwards; }
      .fade-up-d1 { animation: fadeUp 0.8s ease 0.1s forwards; opacity: 0; }
      .fade-up-d2 { animation: fadeUp 0.8s ease 0.2s forwards; opacity: 0; }
      .fade-up-d3 { animation: fadeUp 0.8s ease 0.3s forwards; opacity: 0; }
      .fade-up-d4 { animation: fadeUp 0.8s ease 0.4s forwards; opacity: 0; }
      input:focus, textarea:focus { outline: none; border-color: ${C.accent} !important; }
    `}</style>
  );
}

export default function App() {
  useEffect(() => {
    if (!document.querySelector("#three-seeds-fonts")) {
      const link = document.createElement("link");
      link.id = "three-seeds-fonts";
      link.rel = "stylesheet";
      link.href = FONT_LINK;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
