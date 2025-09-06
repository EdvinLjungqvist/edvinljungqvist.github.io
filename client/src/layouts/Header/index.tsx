import React, { act, FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import me from "../../data/me";
import { NavLink } from "react-router-dom";
import { DropdownType } from "../../types/page";
import pages from "../../data/pages";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useTheme } from "../../contexts/Theme";
import { FaBars, FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp, FaMoon, FaSun, FaXmark } from "react-icons/fa6";

const LOCALES = ["sv", "en"]

const Header: FunctionComponent = (): ReactElement => {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();
    const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
    const desktop = useMediaQuery("(min-width: 768px)");
    const ref = useRef<HTMLElement>(null);

    const clickHamburger = () => setActiveDropdown(activeDropdown === null ? "hamburger" : null);
    const clickDropdown = (dropdown: DropdownType) => setActiveDropdown(activeDropdown === null || activeDropdown !== dropdown ? dropdown : null);
    const hoverDropdown = (dropdown: DropdownType) => desktop && activeDropdown !== null && setActiveDropdown(dropdown);
    const setLocale = (language: string) => i18n.changeLanguage(language);

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);
    
    return (
        <header
            ref={ref}
            className={styles["header"]}
        >
            <NavLink to="/" className={styles["logo"]}>
                {me.name}
            </NavLink>
            <nav className={styles["nav"]}>
                <ul className={`${styles["list"]} ${activeDropdown === "hamburger" ? styles["active"] : ""}`}>
                    {pages.map((page, index) => (
                        <li key={index} className={styles["item"]}>
                            {page.dropdown ? (
                                <>
                                    <button
                                        className={`${styles["button"]} ${activeDropdown === page.dropdown.id ? styles["active"] : ""}`}
                                        onClick={() => clickDropdown(page.dropdown.id)}
                                        onMouseOver={() => hoverDropdown(page.dropdown.id)}
                                    >
                                        {page.translation ? t(page.translation) : page.label} {desktop ? (activeDropdown === page.dropdown.id ? <FaCaretUp className="icon" /> : <FaCaretDown className="icon" /> ) : <FaCaretRight className="icon" />}
                                    </button>
                                    <ul className={`${styles["dropdown"]} ${activeDropdown === page.dropdown.id ? styles["active"] : ""}`}>
                                        <li className={`${styles["item"]} ${styles["back"]}`}>
                                            <button
                                                className={styles["button"]}
                                                onClick={() => setActiveDropdown("hamburger")}
                                            >
                                                <FaCaretLeft className="icon" /> {t("common.layout.header.back")}
                                            </button>
                                        </li>
                                        {page.dropdown.list.map((subPage, subIndex) => (
                                            <li key={subIndex} className={styles["item"]}>
                                                <NavLink to={subPage.path} className={styles["link"]} onClick={() => clickDropdown(page.dropdown.id)}>
                                                    {subPage.translation ? t(subPage.translation) : subPage.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <NavLink to={page.path} className={styles["link"]} onClick={() => setActiveDropdown(null)}>
                                    {page.translation ? t(page.translation) : page.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                    <li className={styles["item"]}>
                        <button
                            className={`${styles["button"]} ${activeDropdown === "locales" ? styles["active"] : ""}`}
                            onClick={() => clickDropdown("locales")}
                            onMouseOver={() => hoverDropdown("locales")}
                        >
                            {t("common.locale", { locale: i18n.language })} {desktop ? (activeDropdown === "locales" ? <FaCaretUp className="icon" /> : <FaCaretDown className="icon" /> ) : <FaCaretRight className="icon" />}
                        </button>
                        <ul className={`${styles["dropdown"]} ${activeDropdown === "locales" ? styles["active"] : ""}`}>
                            <li className={`${styles["item"]} ${styles["back"]}`}>
                                <button className={styles["button"]} onClick={() => setActiveDropdown("hamburger")}>
                                    <FaCaretLeft className="icon" /> {t("common.layout.header.back")}
                                </button>
                            </li>
                            {LOCALES.map((locale, index) => (
                                <li key={index} className={styles["item"]}>
                                    <button className={styles["button"]} onClick={() => {
                                        setLocale(locale);
                                        clickDropdown("locales");
                                    }}>
                                        {t("common.locale", { lng: locale })}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <button
                    className={styles["icon"]}
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                        setActiveDropdown(null);
                    }}>
                    {theme === "dark" ? <FaMoon className="icon" /> : <FaSun className="icon" />}
                </button>
                <button
                    className={`${styles["icon"]} ${styles["hamburger"]}`}
                    onClick={() => clickHamburger()}
                >
                    {activeDropdown === null ? <FaBars className="icon" /> : <FaXmark className="icon" />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
