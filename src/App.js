import "./App.css";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact";
import Projects from "./components/Body/Projects";
import Skills from "./components/Body/Skills";
import Navbar from "./components/header/navbar";

function App() {
  return (
    <main
      style={{ marginInline: "auto"}}
      className="text-gray-400 bg-gray-900 body-font bg-gradient-to-r from-indigo-500 ..."
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
