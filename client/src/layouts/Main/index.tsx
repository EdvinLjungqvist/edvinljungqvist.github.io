import React, { FunctionComponent, ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, HomeSkeleton } from "../../pages/Home";
import styles from "./Main.module.css";

const Main: FunctionComponent = (): ReactElement => {
    return (
        <main className={styles["main"]}>
            <Routes>
                {["/", "/home", "/hem"].map((path, index) => (
                    <Route key={index} path={path} element={
                        <Suspense fallback={<HomeSkeleton />}>
                            <Home />
                        </Suspense>
                    }/>
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default Main;
