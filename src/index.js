import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import ScrollToTop from "./Componenet/ScrollToTop";
// import { PromiseProvider } from "mongoose";
import { ProSidebarProvider } from "react-pro-sidebar";
if (process.env.NODE_ENV !== "development") console.log = () => {};
console.log = console.warn = console.error = () => {};

// Look ma, no error!
console.error("Something bad happened.");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
