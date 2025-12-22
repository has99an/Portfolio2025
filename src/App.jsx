import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AnimatedBackground from "./components/canvas/AnimatedBackground";
import CursorTrail from "./components/ui/CursorTrail";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative z-10 bg-primary">
          <AnimatedBackground />
          <CursorTrail />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
