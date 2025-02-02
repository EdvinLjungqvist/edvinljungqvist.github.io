import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import image from "../../../../assets/images/me.png";
import styles from "./About.module.css";
import IconLink from "../../../../components/IconLink";
import IconButton from "../../../../components/IconButton";
import { useFlash } from "../../../../hooks/FlashProvider";
import socials from "../../../../data/socials.json";

const About: FunctionComponent = (): ReactElement => {
    const { i18n, t } = useTranslation(["home"]);
    const { setFlash } = useFlash();

    const onClickDiscord = () => {
        const clipboard = navigator.clipboard;
        const discordName = socials.discord.name;

        if (clipboard) {
            clipboard.writeText(discordName);
            setFlash({
                message: i18n.t("flash.copy.success", { text: discordName }),
                category: "success"
            });
        } else {
            setFlash({
                message: i18n.t("flash.copy.fail", { text: discordName }),
                category: "warning"
            });
        }
    };

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
                            <i className="fa-solid fa-location-dot" /> {t("about.location")}
                        </p>
                        <p className={styles["description"]}>
                            {t("about.description", { age: 19, experience: 5 })}
                        </p>
                    </div>
                    <div className={styles["links"]}>
                        <IconLink to={socials.github} target="_blank" icon="fa-brands fa-github" />
                        <IconLink to={socials.instagram} target="_blank" icon="fa-brands fa-instagram" />
                        <IconLink to={socials.linkedin} target="_blank" icon="fa-brands fa-linkedin" />
                        <IconButton icon="fa-brands fa-discord" onClick={onClickDiscord} />
                    </div>
                </div>
            </RevealUp>
        </section>
    );
};

export default About;
