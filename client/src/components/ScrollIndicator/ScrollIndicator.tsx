import React, { useEffect, useState, useRef, FunctionComponent, ReactElement } from "react";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator: FunctionComponent = (): ReactElement => {
    const [progress, setProgress] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLElement | null>(null);

    const handleScroll = (): void => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

        if (scrollHeight === 0) {
            setProgress(0);
            return;
        }

        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setProgress(scrollPercentage);
    };

    useEffect(() => {
        scrollContainerRef.current = document.getElementById("root");

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            handleScroll();
            scrollContainer.addEventListener("scroll", handleScroll);

            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={styles["container"]}>
            <div className={`${styles["bar"]} ${progress < 100 ? styles["rounded"] : ""}`} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ScrollIndicator;
