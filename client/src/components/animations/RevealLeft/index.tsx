import React, { useRef, ReactNode, FunctionComponent, ReactElement } from "react";
import { motion, useInView } from "framer-motion";

type RevealLeftProps = {
    children: ReactNode;
    className?: string;
};

const RevealLeft: FunctionComponent<RevealLeftProps> = ({ children, className }): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealLeft;
