import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Projects";
import Experience from "./pages/Education";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Education from "./pages/Education";

export default function App(){
  const [introDone, setIntroDone] = useState(false)
  return(
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}

      {introDone && (
    <div className="relative gradient text-white">
      <CustomCursor/>
      {/* <ParticlesBackground/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    )}
    </>
  )
}