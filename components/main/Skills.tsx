import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[99%] relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 mx-auto justify-center xl:space-y-0 items-center"
    >
      <h3 className="absolute top-20 uppercase text-violet11/40 tracking-[20px] font-semibold text-base ">
        Skills
      </h3>

      <h3 className="absolute top-28 truncate uppercase text-violet11/40 tracking-[3px] text-[8px] lg:text-xs">
        Click on skills for current experiences
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
        <Skill fromLeft={true} />
      </div>
    </motion.div>
  );
}

export default Skills;
