
export default function Skills() {
    return (
        <section
            id="skills"
            className="
                w-full flex-1
                flex flex-col
                px-4 sm:px-8 lg:px-12
                py-12
                bg-page-primary
            "
        >
            <div className="py-4 mb-10">
                <h2
                    className="
                        text-heading-1
                        text-4xl sm:text-5xl
                        font-bold
                    "
                >
                    Skills
                </h2>
            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
            >
                <article className="bg-surface border border-border-subtle rounded-xl p-6">
                    <h3 className="text-heading-2 text-xl font-heading">
                        Frontend Development
                    </h3>

                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        {[
                            "Angular",
                            "React",
                            "TypeScript",
                            "JavaScript",
                            "Tailwind CSS",
                            "HTML5",
                            "CSS3",
                            "RxJS"
                        ].map((skill) => (
                            <li
                                key={skill}
                                className="text-body text-sm font-medium"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="bg-surface border border-border-subtle rounded-xl p-6">
                    <h3 className="text-heading-2 text-xl font-heading">
                        Backend & APIs
                    </h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        {[
                            "JSON",
                            "API Integration",
                            "HTTP Requests",
                            "REST APIs",
                            "ASP .NET Core",
                            "C#"
                        ].map((skill) => (
                            <li
                                key={skill}
                                className="text-body text-sm font-medium"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="bg-surface border border-border-subtle rounded-xl p-6">
                    <h3 className="text-heading-2 text-xl font-heading">
                        Automation & Data
                    </h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        {[
                            "Make.com",
                            "Airtable",
                            "N8N",
                            "Playwright",
                            "API Integration",
                            "Data Processing & Validation",
                            "Error handling"
                        ].map((skill) => (
                            <li
                                key={skill}
                                className="text-body text-sm font-medium"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="bg-surface border border-border-subtle rounded-xl p-6">
                    <h3 className="text-heading-2 text-xl font-heading">
                        Tools & Practices
                    </h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        {[
                            "Git",
                            "GitHub",
                            "Visual Studio Code",
                            "Jira",
                            "Agile / Scrum",
                            "Responsive web design",
                            "Web Accessibility",
                            "Debugging"
                        ].map((skill) => (
                            <li
                                key={skill}
                                className="text-body text-sm font-medium"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}