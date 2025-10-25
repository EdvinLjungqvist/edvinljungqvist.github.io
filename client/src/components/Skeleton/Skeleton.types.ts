import { CSSProperties } from "react";

export type SkeletonProps = {
    type: "title" | "description" | "heading" | "text" | "image" | "image-circle" | "button" | "button-icon" | "input";
    count?: number;
    className?: string;
    style?: CSSProperties | undefined;
    baseColor?: string;
    pulseColor?: string;
    contentColor?: string;
};
