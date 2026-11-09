
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isExperienceDetailsPage =
        location.pathname.startsWith("/experience/");

    const isProjectDetailsPage =
        location.pathname.startsWith("/project/");

    function autoScroll(id: string) {
        const section = document.getElementById(id);

        section?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const sectionId = location.hash.slice(1);

            const frame = requestAnimationFrame(() => {
                autoScroll(sectionId);
            });

            return () => cancelAnimationFrame(frame);
        }
    }, [location.pathname, location.hash]);

    function handleExperienceClick() {
        if (isExperienceDetailsPage) {
            navigate("/#experience");
        } else {
            autoScroll("experience");
        }
    }

    function handleProjectsClick() {
        if (isProjectDetailsPage) {
            navigate("/#projects-list");
        } else {
            autoScroll("projects-list");
        }
    }

    const buttonClass = `
        text-primary font-medium
        px-4 py-2 rounded-md
        hover:bg-secondary
        hover:text-on-secondary
        transition-colors
        cursor-pointer
    `;

    return (
        <nav
            className="
                bg-surface w-full
                flex flex-col md:flex-row
                justify-between items-center
                gap-3 px-4 sm:px-6 py-3
                border-b border-border-subtle
                shrink-0
            "
        >
            <h1 className="text-heading-1 text-xl font-bold">
                Edan Read
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                {isExperienceDetailsPage ? (
                    <button
                        type="button"
                        onClick={handleExperienceClick}
                        className={buttonClass}
                    >
                        Back to Experience
                    </button>
                ) : isProjectDetailsPage ? (
                    <button
                        type="button"
                        onClick={handleProjectsClick}
                        className={buttonClass}
                    >
                        Back to Projects
                    </button>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={handleExperienceClick}
                            className={buttonClass}
                        >
                            Experience
                        </button>

                        <button
                            type="button"
                            onClick={handleProjectsClick}
                            className={buttonClass}
                        >
                            Projects
                        </button>

                        <button
                            type="button"
                            onClick={() => autoScroll("skills")}
                            className={buttonClass}
                        >
                            Skills
                        </button>

                        <button
                            type="button"
                            onClick={() => autoScroll("contact")}
                            className={buttonClass}
                        >
                            Contact
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}