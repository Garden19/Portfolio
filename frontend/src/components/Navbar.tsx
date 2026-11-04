
export default function Navbar() {
    return (
        <nav className="
            absolute
            bg-surface w-full
            flex flex-col md:flex-row
            justify-between items-center
            gap-3 px-4 sm:px-6 py-3
            border-b border-border-subtle
            shrink-0
        ">
            <h1
                className="text-heading-1 text-xl font-bold">
                Edan Read
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                <a
                    className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors">
                    Experience
                </a>

                <a
                    className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors">
                    Projects
                </a>

                <a
                    className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors">
                    Skills
                </a>

                <a
                    className="text-primary font-medium px-4 py-2 rounded-md hover:bg-secondary hover:text-on-secondary transition-colors">
                    Contact
                </a>
            </div>
        </nav>
    );
}
