import React, { FunctionComponent, ReactElement } from "react";
import IconLink from "../../components/IconLink";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <footer className="background-primary">
            <div className={styles["container"]}>
                <p>
                    Edvin Ljungqvist © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <IconLink to="https://github.com/EdvinLjungqvist" target="_blank" icon="fa-brands fa-github" />
                    <IconLink to="https://www.instagram.com/edvin.ljungqvist" target="_blank" icon="fa-brands fa-instagram" />
                    <IconLink to="https://www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank" icon="fa-brands fa-linkedin" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;