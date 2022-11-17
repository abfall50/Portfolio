import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Profil from "../../public/profile_photo.jpeg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[99%] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-20 uppercase text-tertiary/40 font-semibold tracking-[20px] text-base">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-40 h-40 mt-20 md:mt-0 md:w-64 md:h-64 xl:w-96 xl:h-96 flex-shrink-0"
      >
        <Image
          src={Profil}
          alt={"Profil Photo"}
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>
      <div className="text-secondary space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is who I am</h4>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mattis, eros et mollis tincidunt, sapien dui tincidunt lectus, aliquam
          vehicula felis tellus nec dui. Proin rhoncus dapibus massa molestie
          volutpat. Pellentesque id turpis sed justo ultricies vehicula. Aliquam
          viverra lobortis nulla eu vehicula. Mauris et nunc eget erat dictum
          aliquet sed nec ligula. Nam et lectus tincidunt, tincidunt dui vitae,
          ultricies neque. Vestibulum hendrerit, leo a finibus facilisis, urna
        </p>
      </div>
    </motion.div>
  );
}

export default About;
