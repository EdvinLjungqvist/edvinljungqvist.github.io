import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useCookies } from "react-cookie";

type ThemeContextType = {
    lightTheme: boolean;
    setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
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
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [lightTheme, setLightTheme] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["lightTheme"]);

    useEffect(() => {
        setLightTheme(cookies.lightTheme ?? false);
    }, [cookies.lightTheme]);

    useEffect(() => {
        if (lightTheme) {
            document.body.setAttribute("lightTheme", "");
        } else {
            document.body.removeAttribute("lightTheme");
        }
        setCookie("lightTheme", lightTheme);
    }, [lightTheme, setCookie]);

    const value: ThemeContextType = {
        lightTheme,
        setLightTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export { useTheme, ThemeProvider };
