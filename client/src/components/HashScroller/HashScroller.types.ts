import { ReactNode } from "react";

export type HashScrollerProps = {
    children: ReactNode,
    behaviour?: ScrollBehavior,
    block?: ScrollLogicalPosition
};
