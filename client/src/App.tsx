import React, { FunctionComponent, ReactElement, useEffect } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import CookieConsent from "./components/CookieConsent";
import { useLocation } from "react-router-dom";
import "./App.css";
import Flash from "./components/Flash";

const App: FunctionComponent = (): ReactElement => {
	const { hash } = useLocation();

	useEffect(() => {
		const id = hash.substring(1);

		if (id) {
			const element = document.getElementById(id);

			if (element) {
				element.scrollIntoView({ block: "start", behavior: "instant" });
			}
		}
	}, []);

	return (
		<>
			<Header />
			<Main />
			<Footer />
			<CookieConsent />
			<Flash />
		</>
	);
}

export default App;
