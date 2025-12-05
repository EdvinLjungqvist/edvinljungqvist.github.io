import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import me from "../../../../data/me";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { Tooltip } from "../../../../components/Tooltip";

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
                        <Link to={`https://github.com/${me.socials.github}`} target="_blank" className="button small animated">
                            <FaGithub className="icon" />
                        </Link>
                        <Link to={`https://www.instagram.com/${me.socials.instagram}`} target="_blank" className="button small animated">
                            <FaInstagram className="icon" />
                        </Link>
                        <Link to={`https://www.linkedin.com/in/${me.socials.linkedin}`} target="_blank" className="button small animated">
                            <FaLinkedin className="icon" />
                        </Link>
                        <Tooltip text={t("common.tooltip.copy.text", "Click to copy")} clickText={t("common.tooltip.copy.clickText", "Click to copy")} copyText={me.socials.discord}>
                            <button className="small animated">
                                <FaDiscord className="icon" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;
