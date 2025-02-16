import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import styles from "./CookieConsent.module.css";


const CookieConsent: FunctionComponent = (): ReactElement => {
    const [hidden, setHidden] = useState(false);
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
                                <i className="fa-solid fa-cookie" /> {t("cookie_consent.title")}
                            </h3>
                            <p>
                                {t("cookie_consent.description")}
                            </p>
                        </div>
                        <button onClick={acceptCookies}>
                            {t("cookie_consent.button")}
                        </button>
                        <button className={styles["close"]} onClick={close}>
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </div>
                </div>
            )}
        </>

    );
};

export default CookieConsent;
