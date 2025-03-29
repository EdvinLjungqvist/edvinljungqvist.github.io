import React, { FunctionComponent, ReactElement } from "react";
import IconLink from "../../components/IconLink";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import socials from "../../data/socials.json";

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <footer className="background-primary">
            <div className={styles["container"]}>
                <p>
                    Edvin Ljungqvist © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <IconLink to={socials.github.link} target="_blank" icon={<FontAwesomeIcon icon={faGithub} />} />
                    <IconLink to={socials.instagram.link} target="_blank" icon={<FontAwesomeIcon icon={faInstagram} />} />
                    <IconLink to={socials.linkedin.link} target="_blank" icon={<FontAwesomeIcon icon={faLinkedin} />} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
