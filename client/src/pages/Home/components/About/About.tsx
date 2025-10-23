import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import me from "../../../../data/me";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";

const About: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <section id="about" className="compact-width">
            <RevealUp className={styles["container"]}>
                <img src="/images/me.png" className={styles["image"]} alt="Me" />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <h2 className={styles["name"]}>
                            {me.name}
                        </h2>
                        <p className={styles["location"]}>
                            <FaLocationDot className="icon" /> {t("page./home.about.location", "Location")}
                        </p>
                        <p className={styles["description"]}>
                            {t("page./home.about.description", { age: me.age, experience: me.experience, defaultValue: "Description" })}
                        </p>
                    </div>
                    <div className={styles["links"]}>
                        <Link to={me.socials.github} target="_blank" className="button small animated">
                            <FaGithub className="icon" />
                        </Link>
                        <Link to={me.socials.instagram} target="_blank" className="button small animated">
                            <FaInstagram className="icon" />
                        </Link>
                        <Link to={me.socials.linkedin} target="_blank" className="button small animated">
                            <FaLinkedin className="icon" />
                        </Link>
                        <Link to={me.socials.discord} target="_blank" className="button small animated">
                            <FaDiscord className="icon" />
                        </Link>
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;
