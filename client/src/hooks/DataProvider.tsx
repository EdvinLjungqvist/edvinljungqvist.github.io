import React, { createContext, useContext, ReactNode, FunctionComponent, ReactElement } from "react";
import { Me, Project, Skill } from "../types/data";
import rawMe from "../data/me.json";
import rawProjects from "../data/projects.json";
import rawSkills from "../data/skills.json";

export type DataContextType = {
    me: Me;
    projects: Project[];
    skills: Skill[];
};

const DataContext = createContext<DataContextType | null>(null);

const useData = (): DataContextType => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

type DataProviderProps = {
    children: ReactNode;
};

const DataProvider: FunctionComponent<DataProviderProps> = ({ children }): ReactElement => {
    const me: Me = rawMe as Me;
    const projects: Project[] = rawProjects as Project[];
    const skills: Skill[] = rawSkills as Skill[];

    const value: DataContextType = {
        me,
        projects,
        skills,
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { useData, DataProvider };