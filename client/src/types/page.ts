export type DropdownType = "projects" | "locales" | "hamburger" | null;

export type DropdownList = {
    id: DropdownType;
    list: Dropdown[];
};

export type Dropdown = {
    label?: string;
    translation?: string;
    path: string;
};

export type Page = Dropdown & {
    dropdown?: DropdownList;
};
