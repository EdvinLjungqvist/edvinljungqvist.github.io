import React, { FunctionComponent, ReactElement } from "react";
import Skeleton from "../../../components/Skeleton";

const Open90gQWebsiteSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <>
            <section className="container wide-width">
                <Skeleton type="image" />
            </section>
            <section className="container compact-width normal-spacing">
                <div className="container small-spacing">
                    <Skeleton type="heading" />
                    <Skeleton type="text" count={4} />
                    <Skeleton type="heading" />
                    <Skeleton type="text" count={4} />
                </div>
                <div>
                    <Skeleton type="button" />
                </div>
            </section>
        </>
    );
};

export default Open90gQWebsiteSkeleton;