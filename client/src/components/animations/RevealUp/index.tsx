import React, { useRef, FunctionComponent, ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import { RevealProps } from "../animations.types";

const RevealUp: FunctionComponent<RevealProps> = ({ children, className }): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 75 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealUp;
