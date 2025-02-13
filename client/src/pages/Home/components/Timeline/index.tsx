import React, { Fragment, FunctionComponent, ReactElement } from "react";
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

const Timeline: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="timeline" className="container large-spacing minimized-width">
            <RevealUp>
                <h2 className="text-center">
                    {t("timeline.title")}
                </h2>
            </RevealUp>
            <div className={styles["grid"]}>
                <span className={styles["line"]} />
                {(t("timeline.events", { returnObjects: true }) as EventType[]).map((event, index) => {
                    const isEven = index % 2 === 0;
                    const Animation = window.innerWidth > 768 ? (isEven ? RevealLeft : RevealRight) : RevealUp;

                    return (
                        <Fragment key={index}>
                            {isEven && <div className={styles["empty"]} />}
                            <div className={`${styles["cell"]}`}>
                                <span className={styles["circle"]} />
                                <Animation className={`${styles["content"]} container small-spacing`}>
                                    <h3>
                                        {event.title}
                                    </h3>
                                    <p>
                                        {event.description}
                                    </p>
                                    <p className={styles["date"]}>
                                        {event.date}
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
