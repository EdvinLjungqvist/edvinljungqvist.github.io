import React, { FunctionComponent, ReactElement } from "react";
import { SyncLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import styles from "./Loader.module.css";

const Loader: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    const messages = t("loader.messages", { returnObjects: true }) as string[];

    return (
        <div className={styles["container"]}>
            <SyncLoader color="var(--primary-0)" size={25} />
            <p className={styles["text"]}>
                {messages[Math.floor(Math.random() * messages.length)]}
            </p>
        </div>
    );
};

export default Loader;
