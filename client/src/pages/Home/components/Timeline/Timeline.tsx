import React, { ElementType, Fragment, FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import RevealLeft from "../../../../components/animations/RevealLeft";
import RevealRight from "../../../../components/animations/RevealRight";
import styles from "./Timeline.module.css";
import { EventType } from "./Timeline.types";
import { FaClock } from "react-icons/fa6";

const Timeline: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <section id="timeline" className="container large-spacing compact-width">
            <RevealUp className="container small-spacing center-content">
                <h2 className="text-center">
                    {t("page./home.timeline.title", "My journey")}
                </h2>
                <p>
                    {t("page./home.timeline.description", "Path to where I am today")}
                </p>
            </RevealUp>
            <div className={styles["grid"]}>
                <span className={styles["line"]} />
                {(t("page./home.timeline.events", { returnObjects: true }) as EventType[]).map((event, index) => {
                    const isEven: boolean = index % 2 === 0;
                    const Animation: ElementType = window.innerWidth > 768 ? (isEven ? RevealLeft : RevealRight) : RevealLeft;

                    return (
                        <Fragment key={index}>
                            {isEven && <div className={styles["empty"]} />}
                            <div className={`${styles["cell"]}`}>
                                <span className={styles["circle"]} />
                                <Animation className={`${styles["content"]} container small-spacing`}>
                                    <p className={styles["date"]}>
                                        <FaClock className="icon" /> {event.date}
                                    </p>
                                    <h3>
                                        {event.title}
                                    </h3>
                                    <p>
                                        {event.description}
                                    </p>
                                </Animation>
                            </div>
                            {!isEven && <div className={styles["empty"]} />}
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export default Timeline;
