
import ExperienceItem from "../ExperienceItem";
import { experiences } from "../../data/experienceData";

export default function Timeline() {
    return (
        <section
            id="experience"
            className="
                w-full flex-1
                flex flex-col
                px-4 sm:px-8 lg:px-12
                py-12
            "
        >
            <div
                className="
                    sticky
                    top-0
                    z-30
                    bg-page-secondary
                    py-4
                    mb-10
                "
            >
                <h2
                    className="
                        text-heading-1
                        text-4xl sm:text-5xl
                        font-bold
                    "
                >
                    Experience
                </h2>
            </div>
            <div
                className="
                    grid
                    grid-cols-[80px_20px_minmax(0,1fr)]
                    sm:grid-cols-[120px_24px_minmax(0,1fr)]
                    gap-x-3 sm:gap-x-6
                    gap-y-6
                "
            >
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}