import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import styles from "./CookieConsent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faXmark } from "@fortawesome/free-solid-svg-icons";

const CookieConsent: FunctionComponent = (): ReactElement => {
    const [hidden, setHidden] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["consent"]);
    const { t } = useTranslation();

    const acceptCookies = () => {
        setCookie("consent", true, { sameSite: "strict" });
    };

    const close = () => {
        setHidden(true);
    };

    return (
        <>
            {!hidden && !cookies.consent && (
                <div className={`${styles["container"]}`}>
                    <div className="container normal-spacing">
                        <div className="container small-spacing">
                            <h3>
                                <FontAwesomeIcon icon={faCookie} /> {t("cookieConsent.title", "Cookies")}
                            </h3>
                            <p>
                                {t("cookieConsent.description", "")}
                            </p>
                        </div>
                        <button onClick={acceptCookies}>
                            {t("cookieConsent.button")}
                        </button>
                        <button className={styles["close"]} onClick={close}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
            )}
        </>

    );
};

export default CookieConsent;
