import React, { FunctionComponent, ReactElement } from "react";
import Skeleton from "../../../../components/Skeleton";

const ContactSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="container normal-spacing minimized-width">
            <div className="container small-spacing">
                <Skeleton type="title" />
                <Skeleton type="description" />
            </div>
            <div className="container small-spacing">
                <Skeleton type="text" count={3} />
            </div>
        </section>
    );
};

export default ContactSkeleton;
