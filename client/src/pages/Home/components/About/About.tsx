import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import image from "../../../../assets/images/me.png";
import styles from "./About.module.css";
import ButtonLink from "../../../../components/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../../../hooks/DataProvider";


const About: FunctionComponent = (): ReactElement => {
    const { me } = useData();
    const { t } = useTranslation(["home"]);

    return (
        <section id="about" className="minimized-width">
            <RevealUp className={styles["container"]}>
                <img src={image} className={styles["image"]} alt="Me" />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <h1>
                            {me.name}
                        </h1>
                        <p className={styles["location"]}>
                            <FontAwesomeIcon icon={faLocationDot} /> {t("about.location", "Location")}
                        </p>
                        <p className={styles["description"]}>
                            {t("about.description", { age: me.age, experience: me.experience, defaultValue: "Description" })}
                        </p>
                    </div>
                    <div className={styles["links"]}>
                        <ButtonLink to={me.socials.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </ButtonLink>
                        <ButtonLink to={me.socials.instagram} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </ButtonLink>
                        <ButtonLink to={me.socials.linkedin} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </ButtonLink>
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;
