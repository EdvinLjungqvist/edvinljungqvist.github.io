import React, { useEffect, useState, FunctionComponent, ReactElement } from "react";
import styles from "./ScrollIndicator.module.css";

const scrollContainer = document.getElementById("root");

const ScrollIndicator: FunctionComponent = (): ReactElement => {
    const [progress, setProgress] = useState<number>(0);

    const handleScroll = (): void => {
        const scrollTop = scrollContainer.scrollTop
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

        if (scrollHeight === 0) {
            setProgress(0);
            return;
        }
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setProgress(scrollPercentage);
    };

    useEffect(() => {
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
    
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={styles["container"]}>
            <div className={styles["bar"]} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ScrollIndicator;