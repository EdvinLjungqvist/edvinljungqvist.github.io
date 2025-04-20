import React, { FunctionComponent, ReactElement } from "react";
import styles from "./ErrorBoundary.module.css";

const ErrorBoundaryFallback: FunctionComponent = (): ReactElement => {
    return (
        <div className={`${styles["container"]} container small-spacing center-content`}>
            <div className={`${styles["error"]}`}>
                <h3 className={styles["title"]}>
                    Error!
                </h3>
                <p className={styles["description"]}>
                    Something went wrong. Please try again later.
                </p>
            </div>
        </div >
    );
};

export default ErrorBoundaryFallback;