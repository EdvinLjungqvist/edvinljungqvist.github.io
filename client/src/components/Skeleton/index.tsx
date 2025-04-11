import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = {
    type: "title" | "description" | "heading" | "text" | "image" | "circle" | "button";
    count?: number;
    className?: string;
};

const Skeleton: FunctionComponent<SkeletonProps> = ({ type, count = 1, className }): ReactElement => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={`${className} ${styles["skeleton"]} ${styles[type]}`} />
            ))}
        </>
    );
};

export default Skeleton;
