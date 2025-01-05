import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
