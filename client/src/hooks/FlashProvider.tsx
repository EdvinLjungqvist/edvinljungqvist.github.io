import { TOptionsBase } from "i18next";
import React, { createContext, useContext, useState, ReactNode, FunctionComponent, ReactElement } from "react";

type Flash = {
    message: string;
    category: "success" | "info" | "warning"; 
};

type FlashContextType = {
    flash: Flash;
    setFlash: React.Dispatch<React.SetStateAction<Flash>>;
};

const FlashContext = createContext<FlashContextType | null>(null);

const useFlash = (): FlashContextType => {
    const context = useContext(FlashContext);
    
    if (!context) {
        throw new Error("useFlash must be used within a FlashProvider");
    }
    return context;
};

type FlashProviderProps = {
    children: ReactNode;
};

const FlashProvider: FunctionComponent<FlashProviderProps> = ({ children }): ReactElement => {
    const [flash, setFlash] = useState<Flash>(null);

    const value: FlashContextType = {
        flash,
        setFlash,
    };

    return (
        <FlashContext.Provider value={value}>
            {children}
        </FlashContext.Provider>
    );
};

export { useFlash, FlashProvider };
