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
                    translation: "common.layout.header.magnetism",
                    path: "/project/magnetism"
                },
                {
                    translation: "common.layout.header.90gqopenWebsite",
                    path: "/project/90gqopen-website"
                },
                {
                    translation: "common.layout.header.othello",
                    path: "/project/othello"
                }
            ]
        }
    }
] as Page[];
