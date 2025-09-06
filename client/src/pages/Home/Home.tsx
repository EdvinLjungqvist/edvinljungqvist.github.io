import React, { FunctionComponent, ReactElement } from "react";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ScrollIndicator } from "../../components/ScrollIndicator";
import { useTranslation } from "react-i18next";
import me from "../../data/me";

const Home: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <title>
                {t("page./home._title", { name: me.name })}
            </title>
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
