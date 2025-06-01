import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Projects.module.css";
import Skeleton from "../../../../components/Skeleton";

const ProjectsSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="container large-spacing full-width">
            <div className="container small-spacing center-content minimized-width">
                <Skeleton type="title" />
                <Skeleton type="description" />
            </div>
            <div className="container normal-spacing">
                <div className="container small-spacing">
                    <Skeleton type="title" />
                    <div className={styles["categories"]}>
                        <Skeleton type="button" count={4} />
                    </div>
                </div>
                <div className={styles["grid"]}>
                    <Skeleton type="image" count={6} />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSkeleton;
