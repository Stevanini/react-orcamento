import "tailwindcss/tailwind.css";
import "./src/utils/extensions.d.ts";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./src/App";

import ScrollTop from "./src/hooks/useScroolTop";
import { SidebarProvider } from "./src/contexts/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <ScrollTop />
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
