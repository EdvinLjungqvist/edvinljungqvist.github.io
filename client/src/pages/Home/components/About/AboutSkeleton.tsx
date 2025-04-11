import React, { FunctionComponent, ReactElement } from "react";
import styles from "./About.module.css";
import Skeleton from "../../../../components/Skeleton";

const AboutSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="minimized-width">
            <div className={styles["container"]}>
                <Skeleton type="circle" className={styles["image"]} />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <Skeleton type="heading" />
                        <Skeleton type="text" count={3} />
                    </div>
                    <div className={styles["links"]}>
                        <Skeleton type="button" count={3} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;
