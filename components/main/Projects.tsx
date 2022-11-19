import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../utils/typings/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[99%] relative flex flex-col text-left max-w-full mx-auto justify-evenly items-center md:flex-row "
    >
      <h3 className="absolute top-20 uppercase text-violet11/40 tracking-[20px] font-semibold text-base ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory text-violet12 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-violet7/80 scrollbar-corner-gray-400/20">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-10 md:p-44"
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-56 md:w-80"
            >
              <Image
                src={urlFor(project?.image).url()}
                alt="Project"
                className="w-full rounded-2xl"
                width={1920}
                height={1080}
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center tracking-normal">
                <span className="underline decoration-violet7/60 underline-offset-8">
                  {index + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex justify-center items-center space-x-5">
                {projects.map((project, index) => {
                  return project.technologies.map((technology, index) => {
                    const selector =
                      technology?.title === "MongoDB" ||
                      technology?.title === "Next Js" ||
                      technology?.title === "Solidity";
                    return (
                      <Image
                        key={technology._id}
                        src={urlFor(technology?.image).url()}
                        alt="Technology"
                        width={1920}
                        height={1080}
                        className={
                          "h-8 w-8 md:h-10 md:w-10" +
                          (selector ? " rounded-full bg-white" : "")
                        }
                      />
                    );
                  });
                })}
              </div>

              <p className="text-[11px] text-center md:text-sm">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
