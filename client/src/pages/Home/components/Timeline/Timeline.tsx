import React, { ElementType, Fragment, FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import RevealLeft from "../../../../components/animations/RevealLeft";
import RevealRight from "../../../../components/animations/RevealRight";
import styles from "./Timeline.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { EventType } from "./Timeline.types";

const Timeline: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="timeline" className="container large-spacing minimized-width">
            <RevealUp className="container small-spacing center-content">
                <h2 className="text-center">
                    {t("timeline.title")}
                </h2>
                <p>
                    {t("timeline.description")}
                </p>
            </RevealUp>
            <div className={styles["grid"]}>
                <span className={styles["line"]} />
                {(t("timeline.events", { returnObjects: true }) as EventType[]).map((event, index) => {
                    const isEven: boolean = index % 2 === 0;
                    const Animation: ElementType = window.innerWidth > 768 ? (isEven ? RevealLeft : RevealRight) : RevealLeft;

                    return (
                        <Fragment key={index}>
                            {isEven && <div className={styles["empty"]} />}
                            <div className={`${styles["cell"]}`}>
                                <span className={styles["circle"]} />
                                <Animation className={`${styles["content"]} container small-spacing`}>
                                    <p className={styles["date"]}>
                                        <FontAwesomeIcon icon={faClock} /> {event.date}
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
