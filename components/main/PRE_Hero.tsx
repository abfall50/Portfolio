import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Character from "../../public/character.png";

type Props = {};

function PRE_Hero({}: Props) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-screen flex justify-center items center"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 300 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="h-full w-full flex justify-center items-start"
      >
        <Image src={Character} alt={"Character"} width={300} height={100} />
      </motion.div>
    </motion.div>
  );
}

export default PRE_Hero;
