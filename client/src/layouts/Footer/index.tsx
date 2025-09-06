import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import me from "../../data/me";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <footer className="overlay-primary">
            <div className={styles["container"]}>
                <p>
                    {me.name} © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <Link to={me.socials.github} target="_blank" className="button small animated">
                        <FaGithub className="icon" />
                    </Link>
                    <Link to={me.socials.instagram} target="_blank" className="button small animated">
                        <FaInstagram className="icon" />
                    </Link>
                    <Link to={me.socials.linkedin} target="_blank" className="button small animated">
                        <FaLinkedin className="icon" />
                    </Link>
                    <Link to={me.socials.discord} target="_blank" className="button small animated">
                        <FaDiscord className="icon" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
