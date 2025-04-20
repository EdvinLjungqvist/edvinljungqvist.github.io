import React, { FunctionComponent, ReactElement } from "react";
import IconLink from "../../components/ButtonLink";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useData } from "../../hooks/DataProvider";

const Footer: FunctionComponent = (): ReactElement => {
    const { me } = useData();

    return (
        <footer className="overlay-primary">
            <div className={styles["container"]}>
                <p>
                    {me.name} © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <IconLink to={me.socials.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </IconLink>
                    <IconLink to={me.socials.instagram} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </IconLink>
                    <IconLink to={me.socials.linkedin} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </IconLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
