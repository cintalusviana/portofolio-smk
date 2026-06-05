import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;