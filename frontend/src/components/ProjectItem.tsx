
import { Link } from "react-router";
import type { Project } from "../types/Project";

type ProjectItemProps = {
    project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <article
            className="
                bg-surface
                border border-border-subtle
                rounded-2xl
                p-5 sm:p-7
                shadow-sm
                hover:shadow-lg
                transition-shadow duration-300
                min-w-0
            "
        >
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3
                        className="
                            text-heading-2
                            font-heading
                            text-2xl font-bold
                            min-w-0
                        "
                    >
                        {project.name}
                    </h3>

                    <span
                        className="
                            inline-flex items-center
                            shrink-0
                            px-3 py-1.5
                            rounded-full
                            bg-page-secondary text-body
                            border border-border-subtle
                            text-xs font-semibold
                            whitespace-nowrap
                        "
                    >
                        {project.type
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                    </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((techStack) => (
                        <span
                            key={techStack}
                            className="
                                inline-flex items-center
                                px-2.5 py-1
                                rounded-full
                                bg-secondary text-on-secondary
                                text-xs font-medium
                                whitespace-nowrap
                            "
                        >
                            {techStack}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-body text-base leading-relaxed mt-5">
                {project.description}
            </p>

            <Link
                to={`/project/${project.id}`}
                className="
                    group inline-flex items-center justify-center gap-3
                    mt-5 px-5 py-3
                    rounded-full
                    bg-primary text-on-primary
                    text-sm font-semibold
                    border border-border
                    hover:bg-accent hover:text-on-accent
                    hover:-translate-y-0.5
                    hover:shadow-md
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-focus
                    transition-all duration-300
                    cursor-pointer
                "
            >
                View project
            </Link>
        </article>
    );
}