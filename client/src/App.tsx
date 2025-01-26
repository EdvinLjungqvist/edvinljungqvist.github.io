import React, { FunctionComponent, ReactElement, useEffect } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";
import CookieConsent from "./components/CookieConsent";

const App: FunctionComponent = (): ReactElement => {
	const { hash } = useLocation();

	useEffect(() => {
		const id = hash.substring(1);

		if (id) {
			document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" })
		}
	}, []);

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
