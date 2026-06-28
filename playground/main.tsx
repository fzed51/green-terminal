import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BaseStyle } from "../src";
import { Showcase } from "./Showcase";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Élément #root introuvable dans index.html");
}

createRoot(container).render(
  <StrictMode>
    <BaseStyle />
    <Showcase />
  </StrictMode>,
);
