
import type { Experience } from "../types/Experience";
import { Link } from "react-router";

type ExperienceItemProps = {
    experience: Experience;
};

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <>
            <div>
                <p className="text-body text-sm font-medium">
                    {experience.date}
                </p>
            </div>

            <div className="flex flex-col items-center h-full">
                <div
                    className="
                        w-4 h-4
                        rounded-full
                        bg-primary
                        ring-4 ring-accent
                        shrink-0
                    "
                />

                <div
                    className="
                        w-0.5
                        flex-1
                        bg-border-subtle
                    "
                />
            </div>

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
                <h3 className="text-heading-1 font-heading text-2xl font-bold">
                    {experience.title}
                </h3>

                <p className="text-heading-2 font-semibold mt-1">
                    {experience.company}
                </p>

                <p className="text-body text-base leading-relaxed mt-4">
                    {experience.description}
                </p>

                <Link
                    to={`/experience/${experience.id}`}
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
                    See more
                </Link>
            </article>
        </>
    );
}
