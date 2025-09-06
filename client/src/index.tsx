import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme";
import { ErrorBoundary, ErrorBoundaryFallback } from "./components/ErrorBoundary";
import App from "./App";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <ThemeProvider>
                <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </Router>
    </StrictMode>
);
