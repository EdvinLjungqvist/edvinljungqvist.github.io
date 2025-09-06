export type SkeletonProps = {
    type: "title" | "description" | "heading" | "text" | "image" | "image-circle" | "button" | "button-circle" | "input";
    count?: number;
    className?: string;
    baseColor?: string;
    pulseColor?: string;
    contentColor?: string;
};
