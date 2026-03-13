import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const fallback = document.getElementById("fallback");
if (fallback) {
  fallback.style.display = "none";
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
