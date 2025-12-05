import React, { FunctionComponent, lazy, ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeSkeleton } from "../../pages/Home";
import styles from "./Main.module.css";
import HashScroller from "../../components/HashScroller";
import Project from "../../pages/Project";

const Home = lazy(() => import("../../pages/Home/Home"));

const Main: FunctionComponent = (): ReactElement => {
    return (
        <main className={styles["main"]}>
            <Routes>
                {["/", "/index", "/home"].map((path, index) => (
                    <Route key={index} path={path} element={
                        <Suspense fallback={<HomeSkeleton />}>
                            <HashScroller behaviour="smooth" block="start">
                                <Home />
                            </HashScroller>
                        </Suspense>
                    } />
                ))}
                {["/project/*"].map((path, index) => (
                    <Route key={index} path={path} element={<Project />} />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default Main;
