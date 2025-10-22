import React, { ElementType, Fragment, FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import RevealLeft from "../../../../components/animations/RevealLeft";
import RevealRight from "../../../../components/animations/RevealRight";
import styles from "./Timeline.module.css";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import events from "../../../../data/events";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const Timeline: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();
    const desktop = useMediaQuery("(min-width: 768px)");

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
                {events.map((event, index) => {
                    const isEven: boolean = index % 2 === 0;
                    const Animation: ElementType = desktop ? (isEven ? RevealLeft : RevealRight) : RevealLeft;

                    return (
                        <Fragment key={event.key}>
                            {isEven && <div className={styles["empty"]} />}
                            <div id={`timeline-${event.hash}`} className={`${styles["cell"]}`}>
                                <Link to={`#timeline-${event.hash}`} className={styles["circle"]} />
                                <Animation className={`${styles["content"]} container small-spacing`}>
                                    <p className={styles["date"]}>
                                        <FaClock className="icon" /> {event.date}
                                    </p>
                                    <h3>
                                        {t(`page./home.timeline.list.${event.key}.title`, "Title")}
                                    </h3>
                                    <p>
                                        {t(`page./home.timeline.list.${event.key}.description`, "Description")}
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
