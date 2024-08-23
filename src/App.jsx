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
      <Hero/>
      <About/>
      <Projects/>
      <Timeline/>
      <Skills/>
      <Contact/>
      
    </>
  );
}

export default App;
