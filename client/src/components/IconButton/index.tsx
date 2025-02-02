import React, { FunctionComponent, ReactElement } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
    icon: string;
    onClick: () => void;
};

const IconButton: FunctionComponent<IconButtonProps> = ({ icon, onClick }): ReactElement => {
    return (
        <button className={styles["button"]} onClick={onClick}>
            <i className={icon} />
        </button>
    );
};

export default IconButton;