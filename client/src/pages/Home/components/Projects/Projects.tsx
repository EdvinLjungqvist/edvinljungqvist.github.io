import React, { FunctionComponent, ReactElement, useState } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import projects from "../../../../data/projects.json";
import { Link } from "react-router-dom";
import RevealRight from "../../../../components/animations/RevealRight";
import { Category, Project } from "./Projects.types";

const INITIAL_VIEW_COUNT = 6;
const ADD_VIEW_COUNT = 4;

const categories: Category[] = [
    { name: "all", count: projects.length },
    ...Object.entries(
        projects.reduce((acc: { [key: string]: number }, project: Project) => {
            acc[project.category] = (acc[project.category] || 0) + 1;
            return acc;
        }, {})
    ).map(([name, count]) => ({ name, count }))
];

const Projects: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [viewedProjectsCount, setViewedProjectsCount] = useState<number>(INITIAL_VIEW_COUNT);

    const toggleCategory = (category: string) => {
        setSelectedCategory(category);
        setViewedProjectsCount(INITIAL_VIEW_COUNT);
    };

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter((project: Project) => project.category === selectedCategory);

    const viewedProjects = filteredProjects.slice(0, viewedProjectsCount);

    const showMore = () => {
        setViewedProjectsCount(count => count + ADD_VIEW_COUNT);
    };

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
            <div className="container normal-spacing">
                <RevealRight className="container small-spacing">
                    <h3>
                        {t("projects.categories.title")}
                    </h3>
                    <div className={styles["categories"]}>
                        {categories.map(({ name, count }) => (
                            <button
                                key={name}
                                onClick={() => toggleCategory(name)}
                                className={selectedCategory === name ? styles["active"] : ""}
                            >
                                {t(`projects.categories.list.${name}`)} ({count})
                            </button>
                        ))}
                    </div>
                </RevealRight>
                <div className={styles["grid"]}>
                    {viewedProjects.map((project: Project) => (
                        <Link key={project.key} to={project.link} target="_blank">
                            <RevealUp className={styles["cell"]}>
                                <img
                                    src={require(`../../../../assets/images/projects/${project.image}`)}
                                    className={styles["image"]}
                                    alt={`Project ${project.key}`}
                                />
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
                {viewedProjects.length < filteredProjects.length && (
                    <RevealUp className="container">
                        <button className={styles["button"]} onClick={showMore}>
                            {t("projects.button", { count: Math.min(ADD_VIEW_COUNT, filteredProjects.length - viewedProjects.length) })}
                        </button>
                    </RevealUp>
                )}
            </div>
        </section>
    );
};

export default Projects;
