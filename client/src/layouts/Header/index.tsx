import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/ThemeProvider";
import styles from "./Header.module.css";

const Header: FunctionComponent = (): ReactElement => {
    const [navListActive, setNavListActive] = useState(false);
    const [languageListActive, setLanguageListActive] = useState(false);
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
    
            if (target && !target.closest(`.${styles["nav-container"]}`)) {
                setListsInactive();
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeTheme = () => {
        setListsInactive();
        setTheme(theme == "dark" ? "light" : "dark");
    };

    const toggleNavListActive = () => {
        setListsInactive();
        setNavListActive(!navListActive);
    };

    const toggleLanguageListActive = () => {
        setListsInactive();
        setLanguageListActive(!languageListActive);
    };

    const setListsInactive = () => {
        setNavListActive(false);
        setLanguageListActive(false);
    };

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setLanguageListActive(false);
    };

    const languages = ["sv", "en"];

    return (
        <header className={styles["header"]}>
            <nav className={styles["nav"]}>
                <NavHashLink to="#" className={styles["nav-logo"]}>
                    Edvin Ljungqvist
                </NavHashLink>
                <div className={styles["nav-container"]}>
                    <ul className={`${styles["nav-list"]} ${navListActive ? styles["active"] : ""}`}>
                        <li className={styles["nav-item"]}>
                            <NavHashLink to="#about" className={styles["nav-link"]} onClick={setListsInactive}>
                                {t("header.navigation.about")}
                            </NavHashLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavHashLink to="#skills" className={styles["nav-link"]}  onClick={setListsInactive}>
                                {t("header.navigation.skills")}
                            </NavHashLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavHashLink to="#timeline" className={styles["nav-link"]}  onClick={setListsInactive}>
                                {t("header.navigation.timeline")}
                            </NavHashLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavHashLink to="#projects" className={styles["nav-link"]}  onClick={setListsInactive}>
                                {t("header.navigation.projects")}
                            </NavHashLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavHashLink to="#contact" className={styles["nav-link"]}  onClick={setListsInactive}>
                                {t("header.navigation.contact")}
                            </NavHashLink>
                        </li>
                    </ul>
                    <button className={styles["nav-button"]} onClick={changeTheme}>
                        <i className="fa-solid fa-circle-half-stroke fa-lg" />
                    </button>
                    <div className={styles["language-selector"]}>
                        <button className={styles["nav-button"]} onClick={toggleLanguageListActive}>
                            <i className="fa-solid fa-globe fa-lg" />
                        </button>
                        <ul className={`${styles["language-selector-list"]} ${languageListActive ? styles["active"] : ""}`}>
                            {languages.map(language => (
                                <li key={language} className={styles["language-selector-item"]}>
                                    <button onClick={() => changeLanguage(language)} className={`${styles["language-selector-button"]} ${language == i18n.language ? styles["active"] : ""}`}>
                                        {t("language", { lng: language })}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className={`${styles["nav-button"]} ${styles["hamburger"]}`} onClick={toggleNavListActive}>
                        <i className={`fa-solid ${navListActive ? "fa-xmark" : "fa-bars"} fa-lg`} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
