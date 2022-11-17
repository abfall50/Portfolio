import React from "react";
import About from "./main/About";
import Contact from "./main/Contact";
import Hero from "./main/Hero";
import PRE_Hero from "./main/PRE_Hero";
import Projects from "./main/Projects";
import Skills from "./main/Skills";

type Props = {};

function Main({}: Props) {
  return (
    <>
      <section id="pre-hero" className="h-screen snap-center md:hidden">
        <PRE_Hero />
      </section>

      <section id="hero" className="h-screen snap-start">
        <Hero />
      </section>

      <section id="about" className="h-screen snap-center flex items-center">
        <About />
      </section>

      <section id="skills" className="h-screen snap-start flex items-center">
        <Skills />
      </section>

      <section id="projects" className="h-screen snap-start flex items-center">
        <Projects />
      </section>


      {/* CONTACT */}
      <section id="contact" className="h-screen snap-start flex items-center">
        <Contact />
      </section>
    </>
  );
}

export default Main;
