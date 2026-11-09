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
}

export type ProjectImage = {
    type: "desktop" | "mobile";
    path: string;
    altInformation: string;
}