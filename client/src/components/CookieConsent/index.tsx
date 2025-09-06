import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { FaCookie, FaXmark } from "react-icons/fa6";
import styles from "./CookieConsent.module.css";

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
                                <FaCookie className="icon" /> {t("common.cookieConsent.title", "Cookies")}
                            </h3>
                            <p>
                                {t("common.cookieConsent.description", "Necessary cookies is used to improve your experience.")}
                            </p>
                        </div>
                        <button onClick={acceptCookies} className="animated">
                            {t("common.cookieConsent.button", "Okay")}
                        </button>
                        <button className={styles["close"]} onClick={close}>
                            <FaXmark className="icon" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
