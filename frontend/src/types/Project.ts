export type Project = {
    id: number;
    name: string;
    type: string;
    stack: string[];
    url: string;
    description: string;
    problem: string;
    resolution: string;
    challenges: string[];
    images: ProjectImage[];
    metaTitle: string;
    metaDescription: string;
}

export type ProjectImage = {
    type: "desktop" | "mobile";
    path: string;
    altInformation: string;
}