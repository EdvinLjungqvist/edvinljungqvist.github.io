import React, { FunctionComponent, lazy, LazyExoticComponent, StrictMode, Suspense } from "react";
import { createRoot, Root } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeProvider";
import Loader from "./components/Loader";
import "./i18n";
import "./index.css";

const App: LazyExoticComponent<FunctionComponent> = lazy(() => import("./App"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <HelmetProvider>
                <ThemeProvider>
                    <Suspense fallback={<Loader />}>
                        <App />
                    </Suspense>
                </ThemeProvider>
            </HelmetProvider>
        </Router>
    </StrictMode>
);
