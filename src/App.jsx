import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <section id="about">

      <About/>
      </section>
      <section id="projects">

      <Projects/>
      </section>
      <section id="timeline">

      <Timeline/>
      </section>
      <section id="skills">

      <Skills/>
      </section>
      <section id="contact">

      <Contact/>
      </section>
      
    </>
  );
}

export default App;
