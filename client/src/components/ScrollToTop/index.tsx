import { FunctionComponent, ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FunctionComponent = (): ReactElement => {
    const { pathname } = useLocation();

    useEffect(() => {
        const root = document.getElementById("root");

        if (root) {
            root.scrollTo({
                top: 0,
                behavior: "instant"
            })
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
