import React, { Fragment, FunctionComponent, ReactElement } from "react";
import styles from "./Skills.module.css";
import Skeleton from "../../../../components/Skeleton";

const SkillsSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className={`${styles["container"]} overlay-primary`}>
            <svg className={`${styles["waves"]} ${styles["top"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="var(--primary-0)" fillOpacity="1" d="M0,80L48,90.7C96,101.5,192,122.5,288,120C384,117.5,480,90.5,576,90.7C672,91,768,117.5,864,114.7C960,112,1056,80,1152,69.3C1248,58.5,1344,69.5,1392,74.7L1440,80L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
            </svg>
            <div className="container normal-spacing wide-width">
                <div className="container small-spacing">
                    <Skeleton type="title" />
                </div>
                <div className={styles["grid"]}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`${styles["cell"]} container small-spacing`}>
                            <Skeleton type="heading" baseColor="var(--surface-20)" pulseColor="var(--surface-30)" />
                            <Skeleton type="text" count={3} baseColor="var(--surface-20)" pulseColor="var(--surface-30)" />
                        </div>
                    ))}
                </div>
            </div>
            <svg className={`${styles["waves"]} ${styles["bottom"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="var(--primary-0)" fillOpacity="1" d="M0,80L48,90.7C96,101.5,192,122.5,288,120C384,117.5,480,90.5,576,90.7C672,91,768,117.5,864,114.7C960,112,1056,80,1152,69.3C1248,58.5,1344,69.5,1392,74.7L1440,80L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
            </svg>
        </section>
    );
};

export default SkillsSkeleton;