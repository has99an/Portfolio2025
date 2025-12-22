import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Stats from "./components/sections/Stats";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AnimatedBackground from "./components/canvas/AnimatedBackground";
import BlobMorph from "./components/canvas/BlobMorph";
import CursorTrail from "./components/ui/CursorTrail";
import ScrollProgress from "./components/ui/ScrollProgress";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LoadingScreen />
        <div className="relative z-10 bg-primary">
          <AnimatedBackground />
          <BlobMorph />
          <ScrollProgress />
          <CursorTrail />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Stats />
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
