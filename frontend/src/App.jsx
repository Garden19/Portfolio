import "./App.css";
import AccessibilityMenu from "./components/AccessibilityMenu.tsx";
import Navbar from "./components/Navbar.tsx";
import Intro from "./components/section-components/Intro.tsx";
import Timeline from "./components/section-components/timeline.tsx";

function App() {
    return (
        <main className="w-full min-h-dvh flex flex-col">
            <Navbar />
            <div className="min-h-dvh flex flex-col bg-page-primary">
                <Intro />
            </div>
            <div className="min-h-dvh flex flex-col bg-page-secondary">
                <Timeline />
            </div>
            <AccessibilityMenu />
        </main>
    );
}

export default App;