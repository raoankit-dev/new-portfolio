import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Light/dark theme state, shared with the Navbar toggle.
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
