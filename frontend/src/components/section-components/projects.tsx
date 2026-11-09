
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { projects } from "../../data/projectData";

import countryDesktop from "../../assets/images/projects/country-explorer.png";
import countryMobile from "../../assets/images/projects/country-explorer-mobile.png";

import ohmsDesktop from "../../assets/images/projects/ohms-law-calculator.png";
import ohmsMobile from "../../assets/images/projects/ohms-law-calculator-mobile.png";

import cruiseDesktop from "../../assets/images/projects/cruise-admin-dashboard.png";
import cruiseMobile from "../../assets/images/projects/cruise-admin-dashboard-mobile.png";

import ProjectItem from "../ProjectItem";

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const [selectedType, setSelectedType] = useState("all");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const imageWidth = useTransform(
        scrollYProgress,
        [0, 0.85],
        ["32vw", "100vw"]
    );

    const imageHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["46dvh", "100dvh"]
    );

    const imageRadius = useTransform(
        scrollYProgress,
        [0, 1],
        ["12px", "0px"]
    );

    const overlayOpacity = useTransform(
        scrollYProgress,
        [0.2, 1],
        [0, 1]
    );

    const filteredProjects = projects.filter(
        (project) =>
            selectedType === "all" ||
            project.type === selectedType
    );

    return (
        <section
            id="projects"
            className="relative w-full bg-page-primary"
        >
            <div
                ref={sectionRef}
                className="relative h-[300dvh]"
            >
                <div
                    className="
                        sticky top-0 h-dvh overflow-hidden
                        flex flex-row items-center justify-center
                        gap-5 px-4
                    "
                >
                    <picture className="block w-[26vw] h-[38dvh] shrink-0">
                        <source
                            media="(max-width: 767px)"
                            srcSet={countryMobile}
                        />

                        <img
                            src={countryDesktop}
                            alt="A project displaying multiple country cards."
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </picture>

                    <motion.div
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                            borderRadius: imageRadius,
                        }}
                        className="relative shrink-0 overflow-hidden"
                    >
                        <picture className="block w-full h-full">
                            <source
                                media="(max-width: 767px)"
                                srcSet={ohmsMobile}
                            />

                            <img
                                src={ohmsDesktop}
                                alt="A project displaying an Ohm's Law calculator."
                                className="block w-full h-full object-cover"
                            />
                        </picture>

                        <motion.div
                            aria-hidden="true"
                            style={{ opacity: overlayOpacity }}
                            className="
                                absolute inset-0
                                bg-page-secondary
                                pointer-events-none
                            "
                        />
                    </motion.div>

                    <picture className="block w-[26vw] h-[38dvh] shrink-0">
                        <source
                            media="(max-width: 767px)"
                            srcSet={cruiseMobile}
                        />

                        <img
                            src={cruiseDesktop}
                            alt="A project displaying multiple cruise enquiry cards."
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </picture>
                </div>
            </div>

            <div
                className="
                    relative
                    min-h-dvh w-full
                    flex flex-col
                    bg-page-secondary
                    px-4 sm:px-8 lg:px-12
                    py-12
                "
            >
                <div
                    className="
                        flex flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4
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
                        id="projects-list"
                    >
                        Projects
                    </h2>

                    <div
                        className="
                            flex flex-col
                            sm:flex-row
                            sm:items-center
                            gap-3
                        "
                    >
                        <label
                            htmlFor="project-type"
                            className="text-body font-medium text-sm"
                        >
                            Filter by type
                        </label>

                        <select
                            id="project-type"
                            value={selectedType}
                            onChange={(event) =>
                                setSelectedType(event.target.value)
                            }
                            className="
                                bg-surface text-body
                                border border-border-subtle
                                rounded-md
                                px-4 py-2.5
                                min-w-48
                                cursor-pointer
                                focus-visible:outline-2
                                focus-visible:outline-focus
                            "
                        >
                            <option value="all">All Projects</option>
                            <option value="commercial-projects">
                                Commercial Projects
                            </option>
                            <option value="web-development">
                                Web Development
                            </option>
                            <option value="automation">
                                Automations
                            </option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-6">
                    {filteredProjects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="text-body">
                        No projects found for this category.
                    </p>
                )}
            </div>
        </section>
    );
}