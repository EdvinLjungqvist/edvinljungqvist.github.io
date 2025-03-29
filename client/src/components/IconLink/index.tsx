import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import styles from "./IconLink.module.css";
import { Link } from "react-router-dom";

type IconLinkProps = {
    to: string;
    target: string;
    icon: ReactNode;
};

const IconLink: FunctionComponent<IconLinkProps> = ({ to, target, icon }): ReactElement => {
    return (
        <Link to={to} target={target} className={styles["link"]}>
            {icon}
        </Link>
    );
};

export default IconLink;