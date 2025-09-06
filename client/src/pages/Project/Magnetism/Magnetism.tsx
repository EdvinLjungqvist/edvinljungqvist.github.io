import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Magnetism.module.css";
import { Trans, useTranslation } from "react-i18next";
import me from "../../../data/me";
import { ScrollIndicator } from "../../../components/ScrollIndicator";
import RevealUp from "../../../components/animations/RevealUp";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Magnetism: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <title>
                {t("page./project/magnetism._title", { name: me.name })}
            </title>
            <RevealUp className="container wide-width">
                <iframe
                    src="https://www.youtube.com/embed/ASStmb2ASNA?si=S-QkTrwqSBFKCdjA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </RevealUp>
            <section className="container large-spacing compact-width">
                <RevealUp className="container small-spacing">
                    <h2>
                        {t("page./project/magnetism.info.title")}
                    </h2>
                    <p>
                        {t("page./project/magnetism.info.description")}
                    </p>
                    <h3>
                        {t("page./project/magnetism.info.credits.title")}
                    </h3>
                    <ul>
                        <li>
                            <b>7ks</b> - {t("page./project/magnetism.info.credits.projectLeadAndCode")}
                        </li>
                        <li>
                            <b>Maartin</b> - {t("page./project/magnetism.info.credits.code")}
                        </li>
                        <li>
                            <b>Morriis</b> - {t("page./project/magnetism.info.credits.artAndDesign")}
                        </li>
                    </ul>
                </RevealUp>
                <RevealUp className={`${styles["quote-container"]} container normal-spacing overlay-primary`}>
                    <p className="quote">
                        <FaQuoteLeft className="icon" /> Magnetism - how does it work? Well, it's a puzzle map where you push boxes to their assigned spaces - at least at first! Suddenly, magnetic properties are added to both you and your pushable rectangle friends, making certain boxes stick to you, whereas others will avoid you like the plague as you approach! Fear not, there's switches to allow you to reverse the polarity here and customize when and what will be attracted to or repelled by you - hold up, that sounds like a good idea for real life! <FaQuoteRight className="icon" />
                    </p>
                    <div>
                        <Link to="https://www.minecraft.net/sv-se/article/new-on-java-realms--march-2025" className="button animated">
                            {t("page./project/magnetism.info.article.button")}
                        </Link>
                    </div>
                </RevealUp>
            </section>
            <section className="container large-spacing">
                <RevealUp className="container small-spacing compact-width">
                    <h2 className="text-center">
                        {t("page./project/magnetism.structure.title")}
                    </h2>
                </RevealUp>
                <div className={`${styles["container"]} wide-width`}>
                    <RevealUp className={styles["cell"]}>
                        <img src="/images/projects/magnetism/menu.png" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <h3>
                                {t("page./project/magnetism.structure.menu.title")}
                            </h3>
                            <p>
                                {t("page./project/magnetism.structure.menu.description")}
                            </p>
                        </div>
                    </RevealUp>
                    <RevealUp className={styles["cell"]}>
                        <img src="/images/projects/magnetism/dungeons.png" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <h3 className={styles["dungeons"]}>
                                {t("page./project/magnetism.structure.dungeons.title")}
                            </h3>
                            <p>
                                {t("page./project/magnetism.structure.dungeons.description")}
                            </p>
                        </div>
                    </RevealUp>
                    <RevealUp className={styles["cell"]}>
                        <img src="/images/projects/magnetism/catacombs.png" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <h3 className={styles["catacombs"]}>
                                {t("page./project/magnetism.structure.catacombs.title")}
                            </h3>
                            <p>
                                {t("page./project/magnetism.structure.catacombs.description")}
                            </p>
                        </div>
                    </RevealUp>
                    <RevealUp className={styles["cell"]}>
                        <img src="/images/projects/magnetism/caverns.png" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <h3 className={styles["caverns"]}>
                                {t("page./project/magnetism.structure.caverns.title")}
                            </h3>
                            <p>
                                {t("page./project/magnetism.structure.caverns.description")}
                            </p>
                        </div>
                    </RevealUp>
                    <RevealUp className={styles["cell"]}>
                        <img src="/images/projects/magnetism/volcano.png" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <h3 className={styles["volcano"]}>
                                {t("page./project/magnetism.structure.volcano.title")}
                            </h3>
                            <p>
                                {t("page./project/magnetism.structure.volcano.description")}
                            </p>
                        </div>
                    </RevealUp>
                </div>
            </section>
            <section className="container large-spacing">
                <RevealUp className="container small-spacing compact-width">
                    <h2>
                        {t("page./project/magnetism.solution.title")}
                    </h2>
                    <p>
                        <Trans i18nKey="page./project/magnetism.solution.description" components={{ b: <b /> }} />
                    </p>
                </RevealUp>
                <RevealUp className="container wide-width">
                    <video
                        preload="metadata"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/magnetism-replay.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </RevealUp>
            </section>
            <ScrollIndicator />
        </>
    );
};

export default Magnetism;
