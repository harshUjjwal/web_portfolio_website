import React from "react";
import ReactDOM from "react-dom/client";
import { initSentry } from "@/lib/sentry";
import App from "./App.tsx";
import "./index.css";

// Initialize Sentry in production
initSentry();

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
