import React, { FunctionComponent, ReactElement } from "react";
import styles from "./About.module.css";
import Skeleton from "../../../../components/Skeleton";

const AboutSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="compact-width">
            <div className={styles["container"]}>
                <Skeleton type="image-circle" className={styles["image"]} />
                <div className={`${styles["content"]} container normal-spacing`}>
                    <div className={`${styles["content"]} container small-spacing`}>
                        <Skeleton type="heading" />
                        <Skeleton type="text" count={3} />
                    </div>
                    <div className={styles["links"]}>
                        <Skeleton type="button-icon" count={4} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;
