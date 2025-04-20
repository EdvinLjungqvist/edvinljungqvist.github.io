export type Me = {
    name: string;
    age: number;
    experience: number;
    socials: {
        github: string;
        instagram: string;
        linkedin: string;
    };
};

export type Project = {
    key: string;
    image: string;
    link: string;
    category: string;
    technologies: string[];
};

export type Skill = {
    language: string;
    icon: string;
    technologies: string[];
};
