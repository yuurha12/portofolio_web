import "./App.css";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact";
import Projects from "./components/Body/Projects";
import Skills from "./components/Body/Skills";
import Navbar from "./components/header/navbar";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
