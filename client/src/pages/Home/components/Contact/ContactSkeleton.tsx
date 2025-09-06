import React, { FunctionComponent, ReactElement } from "react";
import Skeleton from "../../../../components/Skeleton";

const ContactSkeleton: FunctionComponent = (): ReactElement => {
    return (
        <section className="container normal-spacing compact-width">
            <div className="container small-spacing">
                <Skeleton type="title" />
                <Skeleton type="description" />
            </div>
            <div className="container small-spacing">
                <form>
                    <Skeleton type="input" count={4} />
                </form>
            </div>
        </section>
    );
};

export default ContactSkeleton;
