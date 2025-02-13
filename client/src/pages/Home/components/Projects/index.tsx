import React, { FunctionComponent, ReactElement, Suspense, useState } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import projects from "../../../../data/projects.json";
import { Link } from "react-router-dom";

type Project = {
    key: string;
    image: string;
    link: string;
    technologies: string[];
};

const INITIAL_VIEW_COUNT = 6;
const ADD_VIEW_COUNT = 4;

const Projects: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);
    const [viewedProjects, setViewedProjects] = useState(projects.slice(0, INITIAL_VIEW_COUNT));
    const [viewedProjectsCount, setViewedProjectsCount] = useState(INITIAL_VIEW_COUNT);

    const showMore = () => {
        setViewedProjects(projects.slice(0, viewedProjectsCount + ADD_VIEW_COUNT));
        setViewedProjectsCount(count => count + ADD_VIEW_COUNT);
    };

    const projectsLength = projects.length;
    const viewedProjectsLength = viewedProjects.length;

    return (
        <section id="projects" className="container large-spacing full-width">
            <RevealUp className="container small-spacing center-content">
                <h2>
                    {t("projects.title")}
                </h2>
                <p>
                    {t("projects.description")}
                </p>
            </RevealUp>
            <div className={styles["grid"]}>
                {viewedProjects.map((project: Project, index: number) => (
                    <Link key={index} to={project.link} target="_blank">
                        <RevealUp className={styles["cell"]}>
                            <img src={require(`../../../../assets/images/projects/${project.image}`)} className={styles["image"]} alt={`Project ${project.key}`} />
                            <div className={`${styles["content"]} container small-spacing`}>
                                <h3 className={styles["title"]}>
                                    {t(`projects.gallery.${project.key}.title`)}
                                </h3>
                                <p className={styles["description"]}>
                                    {t(`projects.gallery.${project.key}.description`)}
                                </p>
                                <div className={styles["languages"]}>
                                    {project.technologies.map((language: string, index: number) => (
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
                    {t("projects.button", { count: Math.min(ADD_VIEW_COUNT, projectsLength - viewedProjectsLength) })}
                </button>
            )}
        </section>
    );
};

export default Projects;