import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = {
    type: "title" | "text" | "image" | "circle" | "button";
    count?: number;
};

const Skeleton: FunctionComponent<SkeletonProps> = ({ type, count = 1 }): ReactElement => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={`${styles["skeleton"]} ${styles[type]}`} />
            ))}
        </>
    );
};

export default Skeleton;
