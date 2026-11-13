
import { useRef, useState } from "react";
import { useParams } from "react-router";
import type { ProjectImage } from "../types/Project";
import { projects } from "../data/projectData";

export default function ProjectDetails() {
    const { id } = useParams<{ id: string }>();

    const [previewImage, setPreviewImage] =
        useState<ProjectImage | null>(null);

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const projectId = Number(id);

    const selectedProject = projects.find(
        (project) => project.id === projectId
    );

    function openPreview(image: ProjectImage) {
        setPreviewImage(image);
        dialogRef.current?.showModal();
    }

    function closePreview() {
        dialogRef.current?.close();
    }

    if (!selectedProject) {
        return (
            <main
                className="
                    min-h-dvh
                    flex flex-col items-center justify-center
                    gap-5 px-5 text-center
                    bg-page-primary
                "
            >
                <h1 className="text-heading-1 text-4xl font-bold">
                    Project not found
                </h1>

                <p className="text-body">
                    Sorry, we couldn't find that project.
                </p>
            </main>
        );
    }

    const desktopImages = selectedProject.images.filter(
        (image) => image.type === "desktop"
    );

    const mobileImages = selectedProject.images.filter(
        (image) => image.type === "mobile"
    );

    return (
        <>
            <title>{`${selectedProject.name} | Edan Read`}</title>

            <main
                className="
                    min-h-dvh w-full
                    bg-page-primary
                    px-5 py-12
                    sm:px-8 sm:py-16
                "
            >
                <div className="mx-auto w-full max-w-4xl">
                    <header className="mt-12 pb-12">
                        <div
                            className="
                                flex w-full flex-wrap
                                items-center justify-between
                                gap-4
                            "
                        >
                            <h1
                                className="
                                    text-heading-1
                                    text-4xl sm:text-5xl
                                    font-bold tracking-tight
                                "
                            >
                                {selectedProject.name}
                            </h1>
                            {selectedProject.url?.trim() && (
                                <a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group inline-flex
                                        items-center justify-center
                                        gap-3
                                        px-5 py-3
                                        rounded-full
                                        bg-primary text-on-primary
                                        text-sm font-semibold
                                        border border-border
                                        hover:bg-accent
                                        hover:text-on-accent
                                        hover:-translate-y-0.5
                                        hover:shadow-md
                                        focus-visible:outline-2
                                        focus-visible:outline-offset-2
                                        focus-visible:outline-focus
                                        transition-all duration-300
                                        cursor-pointer
                                    "
                                >
                                    {selectedProject.type === "commercial-projects"
                                        ? "View live site"
                                        : "View on GitHub"}
                                </a>
                            )}
                        </div>
                    </header>

                    <div className="border-t border-border-subtle">
                        <section
                            aria-labelledby="problem-title"
                            className="
                                grid grid-cols-1
                                md:grid-cols-[200px_minmax(0,1fr)]
                                gap-6 md:gap-10
                                py-10
                            "
                        >
                            <h2
                                id="problem-title"
                                className="
                                    text-heading-1
                                    text-xl font-semibold
                                "
                            >
                                The problem
                            </h2>

                            <p className="text-body leading-7">
                                {selectedProject.problem}
                            </p>
                        </section>

                        <section
                            aria-labelledby="resolution-title"
                            className="
                                grid grid-cols-1
                                md:grid-cols-[200px_minmax(0,1fr)]
                                gap-6 md:gap-10
                                py-10
                                border-t border-border-subtle
                            "
                        >
                            <h2
                                id="resolution-title"
                                className="
                                    text-heading-1
                                    text-xl font-semibold
                                "
                            >
                                My resolution
                            </h2>

                            <p className="text-body leading-7">
                                {selectedProject.resolution}
                            </p>
                        </section>

                        <section
                            aria-labelledby="stack-title"
                            className="
                                grid grid-cols-1
                                md:grid-cols-[200px_minmax(0,1fr)]
                                gap-6 md:gap-10
                                py-10
                                border-t border-border-subtle
                            "
                        >
                            <h2
                                id="stack-title"
                                className="
                                    text-heading-1
                                    text-xl font-semibold
                                "
                            >
                                Tech stack used
                            </h2>

                            <div className="flex flex-wrap items-start gap-2">
                                {selectedProject.stack.map((technology) => (
                                    <span
                                        key={technology}
                                        className="
                                            inline-flex items-center
                                            bg-secondary text-on-secondary
                                            px-4 py-2
                                            rounded-full
                                            text-sm font-medium
                                        "
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section
                            aria-labelledby="challenges-title"
                            className="
                                grid grid-cols-1
                                md:grid-cols-[200px_minmax(0,1fr)]
                                gap-6 md:gap-10
                                py-10
                                border-t border-border-subtle
                            "
                        >
                            <h2
                                id="challenges-title"
                                className="
                                    text-heading-1
                                    text-xl font-semibold
                                "
                            >
                                Technical Challenges
                            </h2>

                            <ul
                                className="
                                    list-disc pl-5
                                    space-y-3
                                    text-body leading-7
                                    marker:text-primary
                                "
                            >
                                {selectedProject.challenges.map(
                                    (challenge, index) => (
                                        <li key={index}>
                                            {challenge}
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>

                        {(desktopImages.length > 0 || mobileImages.length > 0) && (
                            <section
                                aria-labelledby="preview-title"
                                className="
                                    grid grid-cols-1
                                    md:grid-cols-[200px_minmax(0,1fr)]
                                    gap-6 md:gap-10
                                    py-10
                                    border-t border-border-subtle
                                "
                            >
                                <h2
                                    id="preview-title"
                                    className="text-heading-1 text-xl font-semibold"
                                >
                                    Preview
                                </h2>

                                <div className="flex flex-col gap-12 min-w-0">
                                    {desktopImages.length > 0 && (
                                        <div className="flex flex-col gap-5 min-w-0">
                                            <h3 className="text-heading-2 text-lg font-semibold">
                                                Desktop
                                            </h3>

                                            <div
                                                className={
                                                    mobileImages.length > 0
                                                        ? "flex flex-row gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                                                        : "flex flex-col gap-6"
                                                }
                                            >
                                                {desktopImages.map((image) => (
                                                    <button
                                                        key={image.path}
                                                        type="button"
                                                        onClick={() => openPreview(image)}
                                                        aria-label={`Enlarge ${image.altInformation || "desktop screenshot"}`}
                                                        className={`
                                                            bg-surface
                                                            border border-border-subtle
                                                            rounded-xl
                                                            p-2 sm:p-3
                                                            cursor-zoom-in
                                                            hover:border-primary
                                                            hover:shadow-md
                                                            transition-all
                                                            focus-visible:outline-2
                                                            focus-visible:outline-focus
                                                            ${
                                                                mobileImages.length > 0
                                                                    ? "flex-none w-[85%] sm:w-[65%] lg:w-[48%] snap-start"
                                                                    : "w-full"
                                                            }
                                                        `}
                                                    >
                                                        <img
                                                            src={image.path}
                                                            alt={
                                                                image.altInformation ||
                                                                `${selectedProject.name} desktop screenshot`
                                                            }
                                                            className="block w-full h-auto rounded-lg"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {mobileImages.length > 0 && (
                                        <div
                                            className={`
                                                flex flex-col gap-5 min-w-0
                                                ${
                                                    desktopImages.length > 0
                                                        ? "border-t border-border-subtle pt-8"
                                                        : ""
                                                }
                                            `}
                                        >
                                            <h3 className="text-heading-2 text-lg font-semibold">
                                                Mobile
                                            </h3>

                                            <div
                                                className="
                                                    flex flex-row
                                                    items-start
                                                    gap-4
                                                    overflow-x-auto
                                                    pb-4
                                                    snap-x snap-mandatory
                                                "
                                            >
                                                {mobileImages.map((image) => (
                                                    <button
                                                        key={image.path}
                                                        type="button"
                                                        onClick={() => openPreview(image)}
                                                        aria-label={`Enlarge ${image.altInformation || "mobile screenshot"}`}
                                                        className="
                                                            flex-none
                                                            w-36 sm:w-44 md:w-52
                                                            bg-surface
                                                            border border-border-subtle
                                                            rounded-xl
                                                            p-2
                                                            snap-start
                                                            cursor-zoom-in
                                                            hover:border-primary
                                                            hover:shadow-md
                                                            transition-all
                                                            focus-visible:outline-2
                                                            focus-visible:outline-focus
                                                        "
                                                    >
                                                        <img
                                                            src={image.path}
                                                            alt={
                                                                image.altInformation ||
                                                                `${selectedProject.name} mobile screenshot`
                                                            }
                                                            className="block w-full h-auto rounded-lg"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>
            <dialog
                ref={dialogRef}
                aria-label="Project screenshot preview"
                onClose={() => setPreviewImage(null)}
                className="
                    fixed inset-0 m-auto
                    w-fit max-w-[95vw]
                    max-h-[95dvh]
                    p-0
                    border-0 rounded-none
                    bg-transparent
                    shadow-none
                    overflow-visible
                    backdrop:bg-black/85
                "
            >
                {previewImage && (
                    <div className="relative w-fit max-w-full">
                        <img
                            src={previewImage.path}
                            alt={
                                previewImage.altInformation ||
                                `${selectedProject.name} ${previewImage.type} screenshot`
                            }
                            className="
                                block
                                w-auto h-auto
                                max-w-[95vw]
                                max-h-[95dvh]
                                object-contain
                            "
                        />

                        <button
                            type="button"
                            onClick={closePreview}
                            aria-label="Close image preview"
                            className="
                                absolute top-3 right-3
                                z-10
                                flex items-center justify-center
                                w-10 h-10
                                rounded-full
                                bg-black/75 text-white
                                hover:bg-black
                                cursor-pointer
                                transition-colors
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-white
                            "
                        >
                            <span aria-hidden="true" className="text-2xl leading-none">
                                ×
                            </span>
                        </button>
                    </div>
                )}
            </dialog>
        </>
    );
}
