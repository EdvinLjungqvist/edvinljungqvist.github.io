import React, { FunctionComponent, ReactElement, Suspense } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Magnetism, MagnetismSkeleton } from "./Magnetism";
import { Open90gQWebsite } from "./90gQopenWebsite";
import { useTranslation } from "react-i18next";
import RevealUp from "../../components/animations/RevealUp";
import Open90gQWebsiteSkeleton from "./90gQopenWebsite/Open90gQWebsiteSkeleton";
import { Othello, OthelloSkeleton } from "./Othello";
import styles from "./Project.module.css";

const Project: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <Routes>
                <Route path="/magnetism" element={
                    <Suspense fallback={<MagnetismSkeleton />}>
                        <Magnetism />
                    </Suspense>
                } />
                <Route path="/90gqopen-website" element={
                    <Suspense fallback={<Open90gQWebsiteSkeleton />}>
                        <Open90gQWebsite />
                    </Suspense>
                } />
                <Route path="/othello" element={
                    <Suspense fallback={<OthelloSkeleton />}>
                        <Othello />
                    </Suspense>
                } />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <RevealUp className={`${styles["container"]} container compact-width normal-spacing`}>
                <div className="container small-spacing">
                    <h2 className={styles["title"]}>
                        {t("page./project/*.title")}
                    </h2>
                    <p className={styles["description"]}>
                        {t("page./project/*.description")}
                    </p>
                </div>
                <div>
                    <Link to="/#projects" className={`${styles["button"]}`}>
                        {t("page./project/*.button")}
                    </Link>
                </div>
            </RevealUp>
        </>
    );
};

export default Project;
