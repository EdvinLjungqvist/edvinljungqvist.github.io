import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import image from "../../../../assets/images/me.png";
import styles from "./About.module.css";
import IconLink from "../../../../components/IconLink";
import socials from "../../../../data/socials.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="about" className="minimized-width">
            <RevealUp className={styles["container"]}>
                <img src={image} className={styles["image"]} alt="Me" />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <h1>
                            Edvin Ljungqvist
                        </h1>
                        <p className={styles["location"]}>
                            <FontAwesomeIcon icon={faLocationDot} /> {t("about.location")}
                        </p>
                        <p className={styles["description"]}>
                            {t("about.description", { age: 19, experience: 5 })}
                        </p>
                    </div>
                    <div className={styles["links"]}>
                        <IconLink to={socials.github.link} target="_blank" icon={<FontAwesomeIcon icon={faGithub} />} />
                        <IconLink to={socials.instagram.link} target="_blank" icon={<FontAwesomeIcon icon={faInstagram} />} />
                        <IconLink to={socials.linkedin.link} target="_blank" icon={<FontAwesomeIcon icon={faLinkedin} />} />
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;
