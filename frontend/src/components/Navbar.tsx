
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isExperienceDetailsPage =
        location.pathname.startsWith("/experience/");

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

                <div className="flex flex-wrap justify-center gap-2 [&_button]:cursor-pointer">                {isExperienceDetailsPage ? (
                    <button
                        type="button"
                        onClick={handleExperienceClick}
                        className="
                            text-primary font-medium
                            px-4 py-2 rounded-md
                            hover:bg-secondary
                            hover:text-on-secondary
                            transition-colors
                        "
                    >
                        Back to Experience
                    </button>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={handleExperienceClick}
                            className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors"
                        >
                            Experience
                        </button>

                        <button
                            type="button"
                            onClick={() => autoScroll("projects")}
                            className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors"
                        >
                            Projects
                        </button>

                        <button
                            type="button"
                            onClick={() => autoScroll("skills")}
                            className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors"
                        >
                            Skills
                        </button>

                        <button
                            type="button"
                            onClick={() => autoScroll("contact")}
                            className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors"
                        >
                            Contact
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}