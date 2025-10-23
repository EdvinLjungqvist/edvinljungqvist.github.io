import React, { FunctionComponent, ReactElement, useState } from "react";
import RevealUp from "../../../../components/animations/RevealUp";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import { Project } from "../../../../types/data";
import { Category } from "./Projects.types";
import projects from "../../../../data/projects";

const INITIAL_VIEW_COUNT = 9;
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
        <section id="projects" className="container large-spacing">
            <RevealUp className="container small-spacing center-content wide-width">
                <h2>
                    {t("page./home.projects.title", "Projects")}
                </h2>
                <p>
                    {t("page./home.projects.description", "Here are some of my projects")}
                </p>
            </RevealUp>
            <div className="container large-spacing">
                <RevealUp className="container small-spacing wide-width">
                    <h3>
                        {t("page./home.projects.categories.title", "Choose category")}
                    </h3>
                    <div className={styles["categories"]}>
                        {categories.map(({ name, count }) => (
                            <button
                                key={name}
                                onClick={() => toggleCategory(name)}
                                className={`${styles["categories-button"]} animated ${selectedCategory === name ? styles["active"] : ""}`}
                            >
                                {t(`page./home.projects.categories.list.${name}`, name.charAt(0).toUpperCase() + name.slice(1))} ({count})
                            </button>
                        ))}
                    </div>
                </RevealUp>
                <div className={`${styles["grid"]} full-width`}>
                    {viewedProjects.map((project: Project) => (
                        <Link key={project.key} to={project.link} className={styles["link"]}>
                            <RevealUp className={styles["cell"]}>
                                <img
                                    src={`/images/projects/${project.image}`}
                                    className={styles["image"]}
                                    alt={`Project ${project.key}`}
                                    loading="lazy"
                                />
                                <div className={`${styles["content"]} container small-spacing`}>
                                    <h3 className={styles["title"]}>
                                        {t(`page./home.projects.gallery.${project.key}.title`, "Title")}
                                    </h3>
                                    <p className={styles["description"]}>
                                        {t(`page./home.projects.gallery.${project.key}.description`, "Description")}
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
                    <RevealUp className="container wide-width">
                        <button onClick={showMore} className="animated">
                            {t("page./home.projects.button", { count: Math.min(ADD_VIEW_COUNT, filteredProjects.length - viewedProjects.length), defaultValue: "Show more" })}
                        </button>
                    </RevealUp>
                )}
            </div>
        </section>
    );
};

export default Projects;
