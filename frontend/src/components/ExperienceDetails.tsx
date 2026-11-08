
import { useParams } from "react-router";
import { experiences } from "../data/experienceData";

export default function ExperienceDetails() {
    const { id } = useParams<{ id: string }>();

    const experienceId = Number(id);

    const selectedExperience = experiences.find(
        (experience) => experience.id === experienceId
    );

    if (!selectedExperience) {
        return (
            <main className="
                min-h-dvh
                flex flex-col items-center justify-center
                gap-5 px-5 text-center
                bg-page-primary
            ">
                <h1 className="text-heading-1 text-4xl font-bold">
                    Experience not found
                </h1>

                <p className="text-body">
                    Sorry, we couldn't find that experience.
                </p>
            </main>
        );
    }

    const achievements = selectedExperience.achievements ?? [];

    return (
        <main className="
            min-h-dvh w-full
            bg-page-primary
            px-5 py-12
            sm:px-8 sm:py-16
        ">
            <div className="mx-auto w-full max-w-4xl">
                <header className="mt-12 pb-12">
                    <div className="
                        flex flex-col
                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                        gap-6
                    ">
                        <div className="flex flex-col gap-3">
                            <h1 className="
                                text-heading-1
                                text-4xl sm:text-5xl
                                font-bold tracking-tight
                            ">
                                {selectedExperience.company}
                            </h1>

                            <h2 className="
                                text-heading-2
                                text-xl sm:text-2xl
                                font-medium
                            ">
                                {selectedExperience.title}
                            </h2>
                        </div>

                        <span className="
                            inline-flex items-center justify-center
                            self-start shrink-0
                            px-5 py-3
                            rounded-full
                            bg-accent text-on-primary
                            text-sm font-semibold
                        ">
                            {selectedExperience.date}
                        </span>
                    </div>
                </header>

                <div className="border-t border-border-subtle">
                    <section
                        aria-labelledby="responsibilities-title"
                        className="
                            grid grid-cols-1
                            md:grid-cols-[200px_minmax(0,1fr)]
                            gap-6 md:gap-10
                            py-10
                        "
                    >
                        <h3
                            id="responsibilities-title"
                            className="
                                text-heading-1
                                text-xl font-semibold
                            "
                        >
                            Responsibilities
                        </h3>

                        <ul className="
                            list-disc
                            pl-5
                            space-y-5
                            text-body
                            leading-7
                            marker:text-primary
                        ">
                            {selectedExperience.responsibilities.map(
                                (responsibility, index) => (
                                    <li key={index} className="pl-2">
                                        {responsibility}
                                    </li>
                                )
                            )}
                        </ul>
                    </section>

                    {achievements.length > 0 && (
                        <section
                            aria-labelledby="achievements-title"
                            className="
                                grid grid-cols-1
                                md:grid-cols-[200px_minmax(0,1fr)]
                                gap-6 md:gap-10
                                py-10
                                border-t border-border-subtle
                            "
                        >
                            <h3
                                id="achievements-title"
                                className="
                                    text-heading-1
                                    text-xl font-semibold
                                "
                            >
                                Key Achievements
                            </h3>

                            <ul className="
                                list-disc
                                pl-5
                                space-y-5
                                text-body
                                leading-7
                                marker:text-primary
                            ">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="pl-2">
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
}