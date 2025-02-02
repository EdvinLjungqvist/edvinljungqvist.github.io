import React, { useEffect, useState } from "react";
import { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useFlash } from "../../hooks/FlashProvider";
import styles from "./Flash.module.css";

const Flash: FunctionComponent = (): ReactElement => {
    const [key, setKey] = useState(0);
    const { flash, setFlash } = useFlash();
    const { t } = useTranslation();

    const close = () => {
        setFlash(null);
    };

    useEffect(() => {
        if (flash) {
            const timer = setTimeout(() => {
                setFlash(null);
            }, 3000);
            setKey(key + 1);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [flash]);

    return flash ? (
        <>
            <div key={key} className={styles["container"]}>
                <span id="duration" className={styles["duration"]} />
                <div className={styles["content"]}>
                    <div className="container small-spacing">
                        <h3>
                            {t(`flash.category.${flash.category}`)}
                        </h3>
                        <p>
                            {flash.message}
                        </p>
                    </div>
                    <button onClick={close} className={styles["button"]}>
                        <i className="fa-regular fa-circle-xmark" />
                    </button>
                </div>
            </div>
        </>
    ) : null;
};

export default Flash;
