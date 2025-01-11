import React, { FunctionComponent, ReactElement } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./App.css";

const App: FunctionComponent = (): ReactElement => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
