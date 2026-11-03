import './App.css';
import AccessibilityMenu from './components/AccessibilityMenu.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <main className="bg-page h-screen ">
      <Navbar />
      <AccessibilityMenu />
    </main>
  )
}

export default App
