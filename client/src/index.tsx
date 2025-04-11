import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeProvider";
import App from "./App";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <HelmetProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </HelmetProvider>
        </Router>
    </StrictMode>
);
