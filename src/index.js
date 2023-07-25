import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import { AuthProvider } from "./context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppProvider>
);
