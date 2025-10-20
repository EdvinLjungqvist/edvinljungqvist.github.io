import { RefObject, useEffect } from "react";

export const useClickOutside = (ref: RefObject<HTMLElement>, onClickOutside: (event: MouseEvent | TouchEvent) => void): void => {
    useEffect(() => {
        const onClick = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            onClickOutside(event);
        };
        document.addEventListener("click", onClick);
        
        return () => {
            document.removeEventListener("click", onClick);
        };
    }, [ref, onClickOutside]);
};
