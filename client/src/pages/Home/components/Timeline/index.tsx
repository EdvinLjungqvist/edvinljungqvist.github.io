import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import RevealLeft from "../../../../components/animations/RevealLeft";
import RevealRight from "../../../../components/animations/RevealRight";
import styles from "./Timeline.module.css";

type EventType = {
    date: string;
    title: string;
    description: string;
};

const Timeline = () => {
    const { t } = useTranslation();

    return (
        <section id="timeline" className="container normal-spacing minimized-width">
            <RevealUp>
                <h2 className="text-center">
                    {t("main.timeline.title")}
                </h2>
            </RevealUp>
            <div className={styles["grid"]}>
                <span className={styles["line"]} />
                {(t("main.timeline.events", { returnObjects: true }) as EventType[]).map((event, index) => {
                    const isEven = index % 2 === 0;
                    const Animation = window.innerWidth > 768 ? (isEven ? RevealLeft : RevealRight) : RevealUp;

                    return (
                        <Fragment key={index}>
                            {isEven && <div className={styles["empty"]} />}
                            <div className={`${styles["cell"]}`}>
                                <span className={styles["circle"]} />
                                <Animation className={`${styles["content"]} container small-spacing`}>
                                    <p>
                                        {event.date}
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
