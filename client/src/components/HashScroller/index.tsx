import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashScrollerProps } from "./HashScroller.types";

const HashScroller: FunctionComponent<HashScrollerProps> = ({children, behaviour = "instant", block = "start" }): ReactElement => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element: Element | null = document.querySelector(hash);

			if (element) {
				element.scrollIntoView({ behavior: behaviour, block: block });
			}
		}
	}, [hash]);

	return <>
		{children}
	</>;
};

export default HashScroller;
