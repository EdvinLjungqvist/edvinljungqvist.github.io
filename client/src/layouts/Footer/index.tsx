import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import me from "../../data/me";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Tooltip } from "../../components/Tooltip";
import { useTranslation } from "react-i18next";

const Footer: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className={styles["container"]}>
                <p>
                    {me.name} © {new Date().getFullYear()}
                </p>
                <div className={styles["links"]}>
                    <Link to={`https://github.com/${me.socials.github}`} target="_blank" className="button small animated">
                        <FaGithub className="icon" />
                    </Link>
                    <Link to={`https://www.instagram.com/${me.socials.instagram}`} target="_blank" className="button small animated">
                        <FaInstagram className="icon" />
                    </Link>
                    <Link to={`https://www.linkedin.com/in/${me.socials.linkedin}`} target="_blank" className="button small animated">
                        <FaLinkedin className="icon" />
                    </Link>
                    <Tooltip text={t("common.tooltip.copy.text", "Click to copy")} clickText={t("common.tooltip.copy.clickText", "Click to copy")} copyText={me.socials.discord}>
                        <button className="small animated">
                            <FaDiscord className="icon" />
                        </button>
                    </Tooltip>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
