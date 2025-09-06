import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../components/animations/RevealUp";
import { Link } from "react-router-dom";
import me from "../../../data/me";

const Othello: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <title>
                {t("page./project/othello._title", { name: me.name })}
            </title>
            <RevealUp className="container wide-width">
                <img src="/images/projects/othello/othello.png" alt="Othello" />
            </RevealUp>
            <RevealUp className="container compact-width normal-spacing">
                <div className="container small-spacing">
                    <h2>
                        Othello
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, enim necessitatibus provident sequi quis non fugiat fuga minus ut est harum nihil, ipsa eius aliquam qui molestias sunt itaque deleniti!
                    </p>
                    <h3>
                        Technologies
                    </h3>
                    <ul>
                        <li>
                            Kotlin
                        </li>
                        <li>
                            Jetpack Compose
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="" className="button animated">
                        Visit on GitHub
                    </Link>
                </div>
            </RevealUp>
        </>
    );
};

export default Othello;
