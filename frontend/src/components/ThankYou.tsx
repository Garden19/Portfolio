
import { Link } from "react-router";

export default function ThankYou() {
    return (
        <main
            className="
                w-full min-h-dvh
                flex flex-col
                items-center justify-center
                bg-page-primary
                px-4 sm:px-8
                py-16
                text-center
            "
        >
            <div
                className="
                    flex flex-col
                    items-center
                    max-w-xl w-full
                "
            >
                <div
                    className="
                        w-20 h-20
                        flex items-center justify-center
                        rounded-full
                        bg-secondary
                        border border-border-subtle
                        mb-8
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        aria-hidden="true"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>

                <h1
                    className="
                        text-heading-1
                        text-4xl sm:text-5xl
                        font-bold
                        tracking-tight
                    "
                >
                    Message sent!
                </h1>

                <p
                    className="
                        text-body
                        text-base sm:text-lg
                        leading-8
                        max-w-md
                        mt-5
                    "
                >
                    Thanks for getting in touch.
                    Your message has been received,
                    and I'll get back to you as soon as I can.
                </p>

                <div
                    className="
                        w-16 h-px
                        bg-border
                        my-10
                    "
                    aria-hidden="true"
                />

                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center justify-center
                        gap-3
                        min-h-12
                        px-8 py-3
                        bg-primary text-on-primary
                        border border-border
                        rounded-md
                        font-semibold
                        transition-colors duration-200
                        hover:bg-accent
                        hover:text-on-accent
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-focus
                    "
                >
                    Back to portfolio
                </Link>
            </div>
        </main>
    );
}
