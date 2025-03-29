import React, { FunctionComponent, ReactElement, useEffect } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import CookieConsent from "./components/CookieConsent";
import { useLocation } from "react-router-dom";
import "./App.css";

const App: FunctionComponent = (): ReactElement => {
    const { hash } = useLocation();

    useEffect(() => {
		if (hash) {
			const element: Element | null = document.querySelector(hash);

			if (element) {
				element.scrollIntoView({ behavior: "instant", block: "start" });
			}
		}
    }, [hash]);

	return (
		<>
			<Header />
			<Main />
			<Footer />
			<CookieConsent />
		</>
	);
}

export default App;
