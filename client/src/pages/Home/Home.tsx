import React, { FunctionComponent, ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ScrollIndicator } from "../../components/ScrollIndicator";
import { useData } from "../../hooks/DataProvider";

const Home: FunctionComponent = (): ReactElement => {
    const { me } = useData();

    return (
        <>
            <Helmet>
                <title>
                    {me.name} | Portfolio
                </title>
            </Helmet>
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
            <ScrollIndicator />
        </>
    );
};

export default Home;
