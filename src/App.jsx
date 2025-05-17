import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <Router>
  {/* Global wrapper with full dark background and radial gradient */}
  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
    
    {/* Full-page radial gradient background */}
    <div className="fixed inset-0 -z-20 bg-neutral-950"></div>
    <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

    {/* Scrollable content container */}
    <div className="relative z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><About /><Technologies /><Experience /><Projects /><Contact /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  </div>
</Router>

  );
};

export default App;