import React, { FunctionComponent, ReactElement } from "react";
import styles from "./ButtonLink.module.css";
import { Link } from "react-router-dom";
import { ButtonLinkProps } from "./ButtonLink.types";

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ to, target, children }): ReactElement => {
    return (
        <Link to={to} target={target} className={styles["link"]}>
            {children}
        </Link>
    );
};

export default ButtonLink;