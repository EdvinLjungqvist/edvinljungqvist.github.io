import React, { FunctionComponent, ReactElement, Suspense } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import image from "../../../../assets/images/me.png";
import styles from "./About.module.css";
import IconLink from "../../../../components/IconLink";

const About: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <section id="about" className="minimized-width">
            <RevealUp className={styles["container"]}>
                <img src={image} className={styles["image"]} alt="Me" />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <h2>
                            Edvin Ljungqvist
                        </h2>
                        <p className={styles["location"]}>
                            <i className="fa-solid fa-location-dot" /> {t("main.about.location")}
                        </p>
                        <p className={styles["description"]}>
                            {t("main.about.description", { age: 19, experience: 5 })}
                        </p>
                    </div>
                    <div className={styles["links"]}>
                        <IconLink to="https://github.com/EdvinLjungqvist" target="_blank" icon="fa-brands fa-github" />
                        <IconLink to="https://www.instagram.com/edvin.ljungqvist" target="_blank" icon="fa-brands fa-instagram" />
                        <IconLink to="https://www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank" icon="fa-brands fa-linkedin" />
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;