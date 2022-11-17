import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Project from "../../public/Capture_IpAddressTracker.png";

type Props = {};

function Projects({}: Props) {
  const project = [1, 2, 3, 4];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[99%] relative flex flex-col text-left max-w-full mx-auto justify-evenly items-center md:flex-row "
    >
      <h3 className="absolute top-20 uppercase text-tertiary/40 tracking-[20px] font-semibold text-xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory text-secondary">
        {project.map((project, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-10 md:p-44">
            <Image
              src={Project}
              alt="Project"
              className="w-56 md:w-80 rounded-2xl"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center tracking-normal">
                <span className="underline decoration-tertiary/40">
                  {index + 1} of 4:
                </span>{" "}
                Project name
              </h4>
            </div>

            <p className="text-sm text-center md:text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mattis, eros et mollis tincidunt, sapien dui tincidunt lectus, aliquam
          vehicula felis tellus nec dui. Proin rhoncus dapibus massa molestie
          volutpat. Pellentesque id turpis sed justo ultricies vehicula. Aliquam
          viverra lobortis nulla eu vehicula. Mauris et nunc eget erat dictum
          aliquet sed nec ligula. Nam et lectus tincidunt, tincidunt dui vitae,
          ultricies neque. Vestibulum hendrerit, leo a finibus facilisis, urna
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
