import { useState } from "react";
export default function Contact() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="
                w-full min-h-dvh
                flex flex-col
                bg-page-secondary
                px-4 sm:px-8 lg:px-12
                py-8 sm:py-12
            "
        >
            <div
                className="
                    mx-auto w-full max-w-6xl
                    flex flex-col flex-1
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
                        Contact
                    </h2>
                </div>

                <div
                    className="
                        grid grid-cols-1
                        lg:grid-cols-2
                        items-center
                        flex-1
                        gap-10 lg:gap-20
                        py-8 lg:py-12
                    "
                >
                    <div
                        className="
                            flex flex-col
                            gap-6
                            max-w-xl
                        "
                    >
                        <h3
                            className="
                                text-heading-2
                                text-3xl sm:text-4xl
                                lg:text-5xl
                                font-heading font-semibold
                                leading-tight
                            "
                        >
                            Let's work together.
                        </h3>

                        <p
                            className="
                                text-body
                                text-lg
                                leading-8
                            "
                        >
                            Have a project, opportunity or question?
                            I'd love to hear from you.
                        </p>
                    </div>
                    <form
                        action="https://form.taxi/s/qd3q4r78"
                        method="POST"
                        onSubmit={() => setIsSubmitting(true)}
                        className="
                            w-full
                            flex flex-col
                            gap-8
                            bg-surface
                            border border-border-subtle
                            rounded-lg
                            p-6 sm:p-10
                        "
                    >
                        <input
                            type="hidden"
                            name="_next"
                            value="http://localhost:5173/thank-you"
                        />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-heading-1 text-2xl sm:text-3xl font-semibold">
                                Send me a message
                            </h3>

                            <p className="text-body leading-7">
                                Have a question, project or opportunity?
                                Fill out the form below to get in touch.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="contact-name"
                                    className="text-body text-sm font-semibold"
                                >
                                    Your name
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Your name"
                                    required
                                    className="
                                        w-full min-h-12
                                        bg-page-primary text-body
                                        border border-border-subtle
                                        rounded-md
                                        px-4 py-3
                                        transition-colors duration-200
                                        focus-visible:outline-2
                                        focus-visible:outline-offset-2
                                        focus-visible:outline-focus
                                    "
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="contact-email"
                                    className="text-body text-sm font-semibold"
                                >
                                    Email address
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                    className="
                                        w-full min-h-12
                                        bg-page-primary text-body
                                        border border-border-subtle
                                        rounded-md
                                        px-4 py-3
                                        transition-colors duration-200
                                        focus-visible:outline-2
                                        focus-visible:outline-offset-2
                                        focus-visible:outline-focus
                                    "
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="contact-message"
                                className="text-body text-sm font-semibold"
                            >
                                Your message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={6}
                                placeholder="Tell me about your project or enquiry..."
                                required
                                className="
                                    w-full
                                    bg-page-primary text-body
                                    border border-border-subtle
                                    rounded-md
                                    px-4 py-3
                                    resize-y
                                    transition-colors duration-200
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-focus
                                "
                            />
                        </div>

                        <div
                            className="
                                flex flex-col sm:flex-row
                                justify-between items-center
                                gap-4
                                pt-6
                                border-t border-border-subtle
                            "
                        >
                            <p className="text-body text-sm">
                                All fields are required.
                            </p>

                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    w-full sm:w-auto
                                    min-h-12
                                    flex items-center justify-center
                                    gap-4
                                    bg-primary text-on-primary
                                    rounded-md
                                    px-7 py-3
                                    font-semibold
                                    cursor-pointer
                                    transition-colors duration-200
                                    hover:bg-accent
                                    hover:text-on-accent
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-focus
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                    disabled:hover:bg-primary
                                    disabled:hover:text-on-primary
                                "
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send message
                                    </>
                                )}
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
