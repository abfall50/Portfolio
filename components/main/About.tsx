import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Profil from "../../public/profile_photo.jpeg";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../utils/typings/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[99%] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-20 uppercase text-violet11/40 font-semibold tracking-[20px] text-base">
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
          src={urlFor(pageInfo?.profilPic).url()}
          alt={"Profil Photo"}
          className="w-full h-full rounded-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="text-violet12 space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is who I am</h4>
        <p className="text-sm lg:text-base">{pageInfo?.aboutMe}</p>
      </div>
    </motion.div>
  );
}

export default About;
