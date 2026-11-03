import { useState, useEffect } from "react";

export default function AccessibilityMenu() {
    const [menu, setMenu] = useState("waiting");

    const [theme, setTheme] = useState("default");

    const [font, setFont] = useState("default");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        document.documentElement.dataset.font = font;
    }, [font]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMenu("question");
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    },[]);

    return (
        <>
            {menu === "question" && (
                <div
                    className="
                    accessibility-menu
                    fixed bottom-0 w-full min-h-16
                    flex flex-col md:flex-row
                    justify-between items-center
                    gap-4 bg-surface p-4
                ">
                    <p className="text-primary">Would you like to see the accessibility options?</p>

                    <div className="flex gap-4">
                        <button className="bg-primary text-on-primary p-2 w-24 rounded-md hover:bg-accent hover:text-on-accent" onClick={() => setMenu("choices")}>
                            Yes
                        </button>

                        <button className="bg-secondary text-on-secondary p-2 w-24 rounded-md hover:bg-accent hover:text-on-accent" onClick={() => setMenu("closed")}>
                            No
                        </button>
                    </div>
                </div>
            )}

            {menu === "choices" && (
                <div
                    className="
                    accessibility-choices
                    fixed bottom-0 w-full min-h-16
                    flex flex-col lg:flex-row
                    justify-between items-stretch lg:items-center
                    gap-4 bg-surface p-4
                ">
                    <p className="text-primary text-center lg:text-left">Please select an option</p>

                    <div className="options gap-4 flex flex-col lg:flex-row">
                        <button
                            className="
                                bg-primary text-on-primary
                                px-4 py-2 w-full lg:w-auto
                                whitespace-nowrap rounded-md
                                hover:bg-accent hover:text-on-accent
                            "
                            onClick={() => setTheme("contrast")}>
                            High Contrast
                        </button>

                        <button
                            className="
                                bg-primary text-on-primary
                                px-4 py-2 w-full lg:w-auto
                                whitespace-nowrap rounded-md
                                hover:bg-accent hover:text-on-accent
                            "
                            onClick={() => setFont("dyslexic")}>
                            Dyslexia friendly
                        </button>
                    </div>

                    <div className="accessibility-navigation flex gap-4">
                        <button
                            className="
                                bg-primary text-on-primary
                                p-2 flex-1 lg:flex-none lg:w-24
                                rounded-md hover:bg-accent hover:text-on-accent
                            "
                            onClick={() => setMenu("closed")}>
                            Done
                        </button>

                        <button
                            className="
                                bg-secondary text-on-secondary
                                p-2 flex-1 lg:flex-none lg:w-24
                                rounded-md hover:bg-accent hover:text-on-accent
                            "
                            onClick={() => setMenu("question")}>
                            Back
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
