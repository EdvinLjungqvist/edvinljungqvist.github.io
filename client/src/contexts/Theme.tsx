import React, { createContext, useContext, useEffect, useState, ReactNode, FunctionComponent, ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Theme } from "../types/theme";

export type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }): ReactElement => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const urlTheme = searchParams.get("theme") as Theme | null;
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        setTheme(urlTheme ?? storedTheme ?? "dark");
    }, [searchParams]);

    useEffect(() => {
        if (searchParams.get("theme") as Theme | null) {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev);
                params.set("theme", theme);
                return params;
            });
        }
        document.body.setAttribute("theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme, setSearchParams]);

    const value: ThemeContextType = { theme, setTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export { useTheme, ThemeProvider };
