import React, { FunctionComponent, lazy, ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeSkeleton } from "../../pages/Home";
import styles from "./Main.module.css";
import HashScroller from "../../components/HashScroller";

const Home = lazy(() => import("../../pages/Home/Home"));

const Main: FunctionComponent = (): ReactElement => {
    return (
        <main className={styles["main"]}>
            <Routes>
                {["/", "/home", "/hem"].map((path, index) => (
                    <Route key={index} path={path} element={
                        <Suspense fallback={<HomeSkeleton />}>
                            <HashScroller behaviour="smooth" block="start">
                                <Home />
                            </HashScroller>
                        </Suspense>
                    } />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default Main;
