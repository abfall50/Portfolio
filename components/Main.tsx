import React from "react";
import { PageInfo, Project, Skill } from "../utils/typings/sanity";
import About from "./main/About";
import Contact from "./main/Contact";
import Hero from "./main/Hero";
import PRE_Hero from "./main/PRE_Hero";
import Projects from "./main/Projects";
import Skills from "./main/Skills";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
};

function Main({ pageInfo, skills, projects }: Props) {

  return (
    <>
      <section id="pre-hero" className="h-screen snap-center md:hidden">
        <PRE_Hero />
      </section>

      <section id="hero" className="h-screen snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="h-screen snap-center flex items-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="h-screen snap-start flex items-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="h-screen snap-start flex items-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="h-screen snap-start flex items-center">
        <Contact pageInfo={pageInfo} />
      </section>
    </>
  );
}

export default Main;
