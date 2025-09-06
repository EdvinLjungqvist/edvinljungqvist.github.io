import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Magnetism.module.css";
import { ScrollIndicator } from "../../../components/ScrollIndicator";
import Skeleton from "../../../components/Skeleton";

const MagnetismSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <>
            <section className="container wide-width">
                <Skeleton type="image" />
            </section>
            <section className="container large-spacing compact-width">
                <div className="container small-spacing">
                    <Skeleton type="heading" />
                    <Skeleton type="text" count={3} />
                    <Skeleton type="heading" />
                    <Skeleton type="text" count={3} />
                </div>
                <article className={`${styles["quote-container"]} container normal-spacing overlay-primary`}>
                    <div className="quote container small-spacing">
                        <Skeleton type="text" count={4} />
                    </div>
                    <div>
                        <Skeleton type="button" />
                    </div>
                </article>
            </section>
            <section className="container large-spacing">
                <div className="container small-spacing compact-width">
                    <Skeleton type="title" />
                </div>
                <div className={`${styles["container"]} wide-width`}>
                    <div className={styles["cell"]}>
                        <Skeleton type="image" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" />
                            <Skeleton type="text" count={2} baseColor="var(--surface-30)" />
                        </div>
                    </div>
                    <div className={styles["cell"]}>
                        <Skeleton type="image" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" />
                            <Skeleton type="text" count={2} baseColor="var(--surface-30)" />
                        </div>
                    </div>
                    <div className={styles["cell"]}>
                        <Skeleton type="image" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" />
                            <Skeleton type="text" count={2} baseColor="var(--surface-30)" />
                        </div>
                    </div>
                    <div className={styles["cell"]}>
                        <Skeleton type="image" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" />
                            <Skeleton type="text" count={2} baseColor="var(--surface-30)" />
                        </div>
                    </div>
                    <div className={styles["cell"]}>
                        <Skeleton type="image" />
                        <div className={`${styles["content"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" />
                            <Skeleton type="text" count={2} baseColor="var(--surface-30)" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container large-spacing">
                <div className="container small-spacing compact-width">
                    <Skeleton type="heading" />
                    <Skeleton type="text" count={3} />
                </div>
                <div className="container wide-width">
                    <Skeleton type="image" />
                </div>
            </section>
        </>
    );
};

export default MagnetismSkeleton;
