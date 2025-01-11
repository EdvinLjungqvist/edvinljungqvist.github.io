import React, { FunctionComponent, ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { Translation } from "react-i18next";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Home: FunctionComponent = (): ReactElement => {
    return (
        <>
            <Helmet>
                <title>
                    Portfolio | Edvin Ljungqvist
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
