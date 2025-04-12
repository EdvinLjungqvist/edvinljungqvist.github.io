import React, { FunctionComponent, ReactElement } from "react";
import styles from "./IconLink.module.css";
import { Link } from "react-router-dom";
import { IconLinkProps } from "./IconLink.types";

const IconLink: FunctionComponent<IconLinkProps> = ({ to, target, icon }): ReactElement => {
    return (
        <Link to={to} target={target} className={styles["link"]}>
            {icon}
        </Link>
    );
};

export default IconLink;