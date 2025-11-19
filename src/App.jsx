import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-blue-400/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-white tracking-tight">
            Daham Abeyratne
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-400/10 py-10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Daham Abeyratne. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
