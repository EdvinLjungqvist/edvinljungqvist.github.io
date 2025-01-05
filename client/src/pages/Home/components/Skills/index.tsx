import React, { FunctionComponent, ReactElement } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.css";
import skills from "./data/skills.json";

type Skill = {
    language: string;
    icon: string;
    technologies: string[];
};

const Skills: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <section id="skills" className={styles["container"]}>
            <div className="container normal-spacing full-width">
                <RevealUp>
                    <h2>
                        {t("main.skills.title")}
                    </h2>
                </RevealUp>
                <div className={styles["grid"]}>
                    {skills.map((skill: Skill, index: number) => (
                        <RevealUp key={index} className={`${styles["cell"]} container small-spacing`}>
                            <h3>
                                <i className={skill.icon} /> {skill.language}
                            </h3>
                            <ul>
                                {skill.technologies.map((technology: string, index: number) => (
                                    <li key={index}>
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </RevealUp>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;