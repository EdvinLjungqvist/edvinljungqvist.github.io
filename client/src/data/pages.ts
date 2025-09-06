import { Page } from "../types/page";

export default [
    {
        translation: "common.layout.header.home",
        path: "/"
    },
    {
        translation: "common.layout.header.projects",
        dropdown: {
            id: "projects",
            list: [
                {
                    label: "Magnetism",
                    path: "/project/magnetism"
                },
                {
                    label: "90gQopens website",
                    path: "/project/90gqopen-website"
                },
                {
                    label: "Othello",
                    path: "/project/othello"
                }
            ]
        }
    }
] as Page[];
