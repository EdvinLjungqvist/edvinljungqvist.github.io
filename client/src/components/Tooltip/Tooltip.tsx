"use client"

import React, { FunctionComponent, ReactElement, ReactNode, useState } from "react";
import styles from "./Tooltip.module.css";
import { Property } from "csstype";

export type TooltipProps = {
    text?: string;
    clickText?: string;
    children: ReactNode
    backgroundColor?: Property.BackgroundColor;
    borderColor?: Property.BorderColor;
    className?: string;
};

const Tooltip: FunctionComponent<TooltipProps> = ({
    text = "",
    clickText = "",
    children,
    backgroundColor = "var(--surface-10)",
    borderColor = "var(--surface-20)",
    className = ""
}): ReactElement => {
    const [tooltipText, setTooltipText] = useState<string>("");

    const handleMouseEnter = () => text && setTooltipText(text);

    const handleMouseLeave = () => setTooltipText("");

    const handleMouseClick = () => clickText && setTooltipText(clickText);

    const shouldWrap =
        (!!text && tooltipText === text) ||
        (!!clickText && tooltipText === clickText);

    if (!shouldWrap) {
        return (
            <div
                onClick={handleMouseClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${styles.container} ${className}`}
                style={{ display: "inline-block" }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.container} ${className}`}
            style={{ display: "inline-block" }}
        >
            <div
                className={styles.tooltip}
                style={{
                    backgroundColor,
                    borderColor,
                    // @ts-ignore
                    "--tooltip-arrow-border-color": `${borderColor} transparent transparent transparent`
                }}
            >
                <p className={styles.text}>
                    {tooltipText}
                </p>
            </div>
            {children}
        </div>
    );
};

export default Tooltip;
