import React from "react";
import styles from "./IconLink.module.css";
import { Link } from "react-router-dom";

type IconLinkProps = {
    to: string;
    target: string;
    icon: string;
}

const IconLink = ({ to, target, icon }: IconLinkProps) => {
    return (
        <Link to={to} target={target} className={styles["link"]}>
            <i className={icon} />
        </Link>
    );
};

export default IconLink;