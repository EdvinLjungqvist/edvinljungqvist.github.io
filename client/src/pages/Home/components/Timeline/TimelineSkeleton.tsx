import React, { Fragment, FunctionComponent, ReactElement } from "react";
import styles from "./Timeline.module.css";
import Skeleton from "../../../../components/Skeleton";

const TimelineSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="container large-spacing minimized-width">
            <div className="container small-spacing center-content">
                <Skeleton type="title" />
                <Skeleton type="description" />
            </div>
            <div className={styles["grid"]}>
                <span className={styles["line"]} />
                {[...Array(3)].map((_, index) => {
                    const isEven: boolean = index % 2 === 0;

                    return (
                        <Fragment key={index}>
                            {isEven && <div className={styles["empty"]} />}
                            <div className={`${styles["cell"]}`}>
                                <span className={styles["circle"]} />
                                <div className={`${styles["content"]} container small-spacing`}>
                                    <Skeleton type="heading" />
                                    <Skeleton type="text" count={3} />
                                </div>
                            </div>
                            {!isEven && <div className={styles["empty"]} />}
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export default TimelineSkeleton;
