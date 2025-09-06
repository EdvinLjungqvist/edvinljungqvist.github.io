import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Projects.module.css";
import Skeleton from "../../../../components/Skeleton";

const ProjectsSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="container large-spacing">
            <div className="container small-spacing center-content compact-width">
                <Skeleton type="title" />
                <Skeleton type="description" />
            </div>
            <div className="container normal-spacing">
                <div className="container small-spacing wide-width">
                    <Skeleton type="title" />
                    <div className={styles["categories"]}>
                        <Skeleton type="button" count={4} />
                    </div>
                </div>
                <div className={`${styles["grid"]} full-width`}>
                    <Skeleton type="image" count={9} />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSkeleton;
