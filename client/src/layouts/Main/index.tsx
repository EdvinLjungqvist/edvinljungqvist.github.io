import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <main className={styles["main"]}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default Main;