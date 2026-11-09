
import { useState, useEffect } from "react";

type MenuState = "waiting" | "question" | "choices" | "closed";
type Theme = "default" | "contrast";
type Font = "default" | "dyslexic";

export default function AccessibilityMenu() {
    const [menu, setMenu] = useState<MenuState>(() => {
        const savedDecision = localStorage.getItem(
            "accessibility-decision"
        );

        return savedDecision ? "closed" : "waiting";
    });

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(
            "accessibility-theme"
        );

        return savedTheme === "contrast" ? "contrast" : "default";
    });

    const [font, setFont] = useState<Font>(() => {
        const savedFont = localStorage.getItem(
            "accessibility-font"
        );

        return savedFont === "dyslexic" ? "dyslexic" : "default";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        localStorage.setItem("accessibility-theme", theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.dataset.font = font;

        localStorage.setItem("accessibility-font", font);
    }, [font]);

    useEffect(() => {
        const savedDecision = localStorage.getItem(
            "accessibility-decision"
        );

        if (savedDecision) return;

        const timer = setTimeout(() => {
            setMenu("question");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    function toggleTheme() {
        setTheme((previousTheme) =>
            previousTheme === "contrast" ? "default" : "contrast"
        );
    }

    function toggleFont() {
        setFont((previousFont) =>
            previousFont === "dyslexic" ? "default" : "dyslexic"
        );
    }

    return (
        <>
            {menu === "question" && (
                <div
                    className="
                        accessibility-menu
                        fixed bottom-0 z-50
                        w-full min-h-16
                        flex flex-col md:flex-row
                        justify-between items-center
                        gap-4 bg-surface p-4
                        border-t border-border-subtle
                    "
                >
                    <p className="text-primary">
                        Would you like to see the accessibility options?
                    </p>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="
                                bg-primary text-on-primary
                                p-2 w-24 rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                            "
                            onClick={() => {
                                localStorage.setItem(
                                    "accessibility-decision",
                                    "yes"
                                );

                                setMenu("choices");
                            }}
                        >
                            Yes
                        </button>

                        <button
                            type="button"
                            className="
                                bg-secondary text-on-secondary
                                p-2 w-24 rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                            "
                            onClick={() => {
                                localStorage.setItem(
                                    "accessibility-decision",
                                    "no"
                                );

                                setMenu("closed");
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}

            {menu === "choices" && (
                <div
                    className="
                        accessibility-choices
                        fixed bottom-0 left-0 z-50
                        w-full sm:max-w-md
                        sm:bottom-4 sm:right-4 sm:left-auto
                        flex flex-col
                        items-stretch
                        gap-5
                        bg-surface
                        p-5
                        border border-border-subtle
                        rounded-t-xl sm:rounded-xl
                        shadow-lg
                        max-h-[85dvh]
                        overflow-y-auto
                    "
                >
                    <p className="text-primary text-center lg:text-left">
                        Please select an option
                    </p>

                    <div className="options flex flex-col gap-3 w-full">
                        <button
                            type="button"
                            aria-pressed={theme === "contrast"}
                            className="
                                bg-primary text-on-primary
                                px-4 py-3 w-full
                                whitespace-nowrap rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                                transition-colors duration-200
                            "
                            onClick={toggleTheme}
                        >
                            {theme === "contrast"
                                ? "Disable High Contrast"
                                : "Enable High Contrast"}
                        </button>

                        <button
                            type="button"
                            aria-pressed={font === "dyslexic"}
                            className="
                                bg-primary text-on-primary
                                px-4 py-2 w-full lg:w-auto
                                whitespace-nowrap rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                                transition-colors duration-200
                            "
                            onClick={toggleFont}
                        >
                            {font === "dyslexic"
                                ? "Disable Dyslexia Friendly fonts"
                                : "Enable Dyslexia Friendly fonts"}
                        </button>
                    </div>

                    <div className="accessibility-navigation flex gap-4">
                        <button
                            type="button"
                            className="
                                bg-primary text-on-primary
                                p-2 flex-1 lg:flex-none lg:w-24
                                rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                            "
                            onClick={() => setMenu("closed")}
                        >
                            Done
                        </button>

                        <button
                            type="button"
                            className="
                                bg-secondary text-on-secondary
                                p-2 flex-1 lg:flex-none lg:w-24
                                rounded-md
                                hover:bg-accent hover:text-on-accent
                                cursor-pointer
                            "
                            onClick={() => setMenu("question")}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}

            {menu === "closed" && (
                <button
                    type="button"
                    onClick={() => setMenu("choices")}
                    className="
                        fixed bottom-4 right-4 z-50
                        bg-accent text-on-primary
                        px-4 py-3
                        rounded-md
                        border border-border
                        shadow-sm
                        hover:bg-accent hover:text-on-accent
                        cursor-pointer
                        transition-colors duration-200
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-focus
                    "
                >
                    Accessibility
                </button>
            )}
        </>
    );
}
