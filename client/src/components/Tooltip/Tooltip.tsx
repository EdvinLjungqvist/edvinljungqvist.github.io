import React, { FunctionComponent, ReactElement, ReactNode, useState } from "react";
import styles from "./Tooltip.module.css";
import { Property } from "csstype";

type TooltipProps = {
    text?: string;
    clickText?: string;
    copyText?: string;
    children: ReactNode;
    backgroundColor?: Property.BackgroundColor;
    borderColor?: Property.BorderColor;
    className?: string;
};

const Tooltip: FunctionComponent<TooltipProps> = ({
    text = "",
    clickText = "",
    copyText = "",
    children,
    backgroundColor = "var(--surface-10)",
    borderColor = "var(--surface-20)",
    className = ""
}): ReactElement => {
    const [tooltipText, setTooltipText] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    const handleMouseEnter = () => {
        if (text) {
            setTooltipText(text);
            setVisible(true);
        }
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    const handleMouseClick = () => {
        if (clickText) {
            navigator.clipboard.writeText(copyText);
            setTooltipText(clickText);
            setVisible(true);
        }
    };

    return (
        <div
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.container} ${className}`}
        >
            <div
                className={`${styles.tooltip} ${visible ? styles.visible : ""}`}
                style={{
                    backgroundColor,
                    borderColor,
                    // @ts-expect-error: Custom CSS variable not recognized
                    "--tooltip-arrow-border-color": `${borderColor} transparent transparent transparent`
                }}
            >
                <p className={styles.text}>{tooltipText}</p>
            </div>
            {children}
        </div>
    );
};

export default Tooltip;
