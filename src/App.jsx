import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Timeline/>
      <Skills/>
      
    </>
  );
}

export default App;
