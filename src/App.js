import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App ">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
