import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.css";
import RevealRight from "../../../../components/animations/RevealRight";
import { Skill } from "../../../../types/data";
import skills from "../../../../data/skills";
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaJs, FaPython } from "react-icons/fa6";

const icons: Record<string, ReactNode> = {
    "faJs": <FaJs className="icon" />,
    "faJava": <FaJava className="icon" />,
    "faPython": <FaPython className="icon" />,
    "faDatabase": <FaDatabase className="icon" />,
    "faHtml5": <FaHtml5 className="icon" />,
    "faCss3Alt": <FaCss3Alt className="icon" />,
};

const Skills: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    return (
        <section id="skills" className={`${styles["container"]} overlay-primary`}>
            <svg className={`${styles["waves"]} ${styles["top"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="var(--primary-0)" fillOpacity="1" d="M0,80L48,90.7C96,101.5,192,122.5,288,120C384,117.5,480,90.5,576,90.7C672,91,768,117.5,864,114.7C960,112,1056,80,1152,69.3C1248,58.5,1344,69.5,1392,74.7L1440,80L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
            </svg>
            <div className="container large-spacing wide-width">
                <RevealRight className="container small-spacing">
                    <h2>
                        {t("page./home.skills.title", "What I work with")}
                    </h2>
                    <p>
                        {t("page./home.skills.description", "These are the technologies I specialize in")}
                    </p>
                </RevealRight>
                <div className={styles["grid"]}>
                    {skills.map((skill: Skill, index: number) => (
                        <RevealUp key={index} className={`${styles["cell"]} container small-spacing`}>
                            <h4 className="text-primary">
                                {icons[skill.icon]} {skill.language}
                            </h4>
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
            <svg className={`${styles["waves"]} ${styles["bottom"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="var(--primary-0)" fillOpacity="1" d="M0,80L48,90.7C96,101.5,192,122.5,288,120C384,117.5,480,90.5,576,90.7C672,91,768,117.5,864,114.7C960,112,1056,80,1152,69.3C1248,58.5,1344,69.5,1392,74.7L1440,80L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
            </svg>
        </section>
    );
};

export default Skills;