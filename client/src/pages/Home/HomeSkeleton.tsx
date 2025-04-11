import React, { FunctionComponent, ReactElement } from "react";
import { AboutSkeleton } from "./components/About";
import { SkillsSkeleton } from "./components/Skills";
import { TimelineSkeleton } from "./components/Timeline";
import { ProjectsSkeleton } from "./components/Projects";
import { ContactSkeleton } from "./components/Contact";

const HomeSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <>
            <AboutSkeleton />
            <SkillsSkeleton />
            <TimelineSkeleton />
            <ProjectsSkeleton />
            <ContactSkeleton />
        </>
    );
};

export default HomeSkeleton;
