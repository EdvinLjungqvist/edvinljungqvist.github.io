import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import me from "../../../../data/me.json";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="contact" className="container normal-spacing minimized-width">
            <RevealUp className="container small-spacing">
                <h2>
                    {t("contact.title", "Let's collaborate")}
                </h2>
                <p>
                    {t("contact.description", "Feel free to reach out")}
                </p>
            </RevealUp>
            <RevealUp>
                <ul>
                    <li>
                        <Link to={me.socials.github} target="_blank">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link to={me.socials.instagram} target="_blank">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link to={me.socials.linkedin} target="_blank">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </RevealUp>
        </section>
    );
};

export default Contact;
