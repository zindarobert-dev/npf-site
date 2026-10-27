import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered HTML is hydrated. The dev server serves an empty shell, so fall
// back to a fresh render there.
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
