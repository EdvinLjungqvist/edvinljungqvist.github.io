import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="container normal-spacing minimized-width">
            <RevealUp>
                <h2>
                    {t("main.contact.title")}
                </h2>
            </RevealUp>
            <RevealUp>
                <ul>
                    <li>
                        <Link to="https://github.com/EdvinLjungqvist" target="_blank">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/edvin.ljungqvist" target="_blank">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </RevealUp>
        </section>
    );
};

export default Contact;