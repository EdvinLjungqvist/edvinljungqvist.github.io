import React, { FunctionComponent, ReactElement, useState } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import projects from "./data/projects.json";
import { Link } from "react-router-dom";

type Project = {
    name: string;
    image: string;
    link: string;
};

const INITIAL_VIEW_COUNT = 4
const ADD_VIEW_COUNT = 4

const Projects: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();
    const [viewedProjects, setViewedProjects] = useState(projects.slice(0, INITIAL_VIEW_COUNT));
    const [viewedProjectsCount, setViewedProjectsCount] = useState(INITIAL_VIEW_COUNT);

    const showMore = () => {
        setViewedProjects(projects.slice(0, viewedProjectsCount + ADD_VIEW_COUNT));
        setViewedProjectsCount(count => count + 1);
    };

    const projectsLength = projects.length;
    const viewedProjectsLength = viewedProjects.length;

    return (
        <section id="projects" className="container large-spacing full-width">
            <RevealUp className="container small-spacing center-content">
                <h2>
                    {t("main.projects.title")}
                </h2>
                <p>
                    {t("main.projects.description")}
                </p>
            </RevealUp>
            <div className={styles["grid"]}>
                {viewedProjects.map((project: Project, index: number) => (
                    <Link key={index} to={project.link} target="_blank">
                        <RevealUp className={styles["cell"]}>
                            <img src={require(`./assets/images/${project.image}`)} className={styles["image"]} alt={`Project ${project.name}`} />
                            <div className={`${styles["content"]} container small-spacing`}>
                                <h3 className={styles["title"]}>
                                    {t(`main.projects.gallery.${project.name}.title`)}
                                </h3>
                                <p className={styles["description"]}>
                                    {t(`main.projects.gallery.${project.name}.description`)}
                                </p>
                                <div className={styles["languages"]}>
                                    {(t(`main.projects.gallery.${project.name}.languages`, { returnObjects: true }) as string[]).map((language: string, index: number) => (
                                        <span key={index} className={styles["language"]}>
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealUp>
                    </Link>
                ))}
            </div>
            {viewedProjectsLength < projectsLength && (
                <button className={styles["button"]} onClick={showMore}>
                    {t("main.projects.button", { count: Math.min(ADD_VIEW_COUNT, projectsLength - viewedProjectsLength) })}
                </button>
            )}
        </section>
    );
};

export default Projects;