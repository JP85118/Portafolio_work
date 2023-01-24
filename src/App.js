import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portafolio from "./components/Portafolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portafolio/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
