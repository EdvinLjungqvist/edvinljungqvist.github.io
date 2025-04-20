import { ReactNode } from "react";

export type ErrorBoundaryProps = {
    children: ReactNode;
    fallback: ReactNode;
}

export type ErrorBoundaryState = {
    hasError: boolean;
}
