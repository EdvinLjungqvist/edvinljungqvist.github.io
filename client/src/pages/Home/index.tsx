import React, { FunctionComponent, ReactElement } from "react";
import { Helmet } from "react-helmet-async";
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
