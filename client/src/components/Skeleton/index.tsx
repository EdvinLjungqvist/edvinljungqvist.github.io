import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Skeleton.module.css";
import { SkeletonProps } from "./Skeleton.types";
import { FaImage } from "react-icons/fa6";

const Skeleton: FunctionComponent<SkeletonProps> = ({ type, count = 1, className = "", baseColor = "var(--surface-10)", pulseColor = "var(--surface-20)", contentColor = "var(--surface-30)" }): ReactElement => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`${className} ${styles["skeleton"]} ${styles[type]}`}
                    style={{
                    // @ts-expect-error: Custom CSS variables not recognized
                    "--skeleton-base-color": baseColor,
                    "--skeleton-pulse-color": pulseColor
                }}>
                {(type === "image" || type === "image-circle") && (
                    <FaImage color={contentColor} className={`${styles["image-icon"]} icon`} />
                )}
                </div>
            ))}
        </>
    );
};

export default Skeleton;
