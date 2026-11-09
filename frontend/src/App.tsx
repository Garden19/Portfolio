
import { Routes, Route } from "react-router";

import AccessibilityMenu from "./components/AccessibilityMenu";
import Navbar from "./components/Navbar";
import Intro from "./components/section-components/Intro";
import Timeline from "./components/section-components/timeline";
import ExperienceDetails from "./components/ExperienceDetails";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/section-components/projects";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {
    return (
        <main className="w-full min-h-dvh flex flex-col">
            <ScrollToTop />
            <Navbar />
            
            <Routes>

                <Route path="/" element={
                        <>
                            <div className="min-h-dvh flex flex-col bg-page-primary">
                                <Intro />
                            </div>

                            <div className="min-h-dvh flex flex-col bg-page-secondary">
                                <Timeline />
                            </div>

                            <div className="min-h-dvh flex flex-col bg-page-primary">
                                <Projects />
                            </div>
                        </>
                    }
                />

                <Route path="/experience/:id" element={
                        <div className="min-h-dvh flex flex-col bg-page-secondary">
                            <ExperienceDetails />
                        </div>
                    }
                />
                <Route
                    path="/project/:id"
                    element={<ProjectDetails />}
                />
            </Routes>
            <AccessibilityMenu />
        </main>
    );
}