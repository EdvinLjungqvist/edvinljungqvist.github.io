import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import RevealUp from "../../../components/animations/RevealUp";
import { ScrollIndicator } from "../../../components/ScrollIndicator";
import { useTranslation } from "react-i18next";
import me from "../../../data/me";

const Open90gQWebsite: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <title>
                {t("page./project/90gqopen-website._title", { name: me.name })}
            </title>
            <RevealUp className="container wide-width">
                <img src="/images/projects/90gqopen/home.png" alt="Homepage" />
            </RevealUp>
            <RevealUp className="container compact-width normal-spacing">
                <div className="container small-spacing">
                    <h2>
                        {t("page./project/90gqopen-website.title")}
                    </h2>
                    <p>
                        {t("page./project/90gqopen-website.description")}
                    </p>
                    <h3>
                        {t("page./project/90gqopen-website.technologies")}
                    </h3>
                    <ul>
                        <li>
                            Next.js
                        </li>
                        <li>
                            Tebex.js
                        </li>
                        <li>
                            Drizzle ORM
                        </li>
                        <li>
                            MySQL
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="https://90gqopen.se" className="button animated">
                        Visit website
                    </Link>
                </div>
            </RevealUp>
            <ScrollIndicator />
        </>
    );
};

export default Open90gQWebsite;