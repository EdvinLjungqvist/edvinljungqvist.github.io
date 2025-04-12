import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useLocation } from "react-router-dom";

const Home: FunctionComponent = (): ReactElement => {
    const { hash } = useLocation();

    useEffect(() => {
		if (hash) {
			const element: Element | null = document.querySelector(hash);

			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
    }, [hash]);
    
    return (
        <>
            <Helmet>
                <title>
                    Edvin Ljungqvist | Portfolio
                </title>
            </Helmet>
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
