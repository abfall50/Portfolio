import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Character from "../../public/character.png";

type Props = {};

function PRE_Hero({}: Props) {
  return (
    <div className="h-screen w-screen flex justify-center items center">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 300 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="h-full w-full flex justify-center items-start"
      >
        <Image src={Character} alt={"Character"} width={300} height={100} />
      </motion.div>
    </div>
  );
}

export default PRE_Hero;
