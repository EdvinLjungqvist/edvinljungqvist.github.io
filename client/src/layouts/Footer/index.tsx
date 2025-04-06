import React, { FunctionComponent, ReactElement } from "react";
import IconLink from "../../components/IconLink";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import me from "../../data/me.json";

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <footer className="overlay-primary">
            <div className={styles["container"]}>
                <p>
                    Edvin Ljungqvist © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <IconLink to={me.socials.github} target="_blank" icon={<FontAwesomeIcon icon={faGithub} />} />
                    <IconLink to={me.socials.instagram} target="_blank" icon={<FontAwesomeIcon icon={faInstagram} />} />
                    <IconLink to={me.socials.linkedin} target="_blank" icon={<FontAwesomeIcon icon={faLinkedin} />} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
