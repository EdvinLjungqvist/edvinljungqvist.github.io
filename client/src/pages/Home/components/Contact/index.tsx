import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import socials from "../../../../data/socials.json";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="contact" className="container normal-spacing minimized-width">
            <RevealUp>
                <h2>
                    {t("contact.title")}
                </h2>
            </RevealUp>
            <RevealUp>
                <ul>
                    <li>
                        <Link to={socials.github.link} target="_blank">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link to={socials.instagram.link} target="_blank">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link to={socials.linkedin.link} target="_blank">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </RevealUp>
        </section>
    );
};

export default Contact;
