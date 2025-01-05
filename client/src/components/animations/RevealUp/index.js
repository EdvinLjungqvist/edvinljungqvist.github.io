import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RevealUp = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealUp;
