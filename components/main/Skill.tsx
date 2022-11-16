import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  fromLeft?: boolean;
};

function Skill({ fromLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: fromLeft ? -150 : 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 "
      >
        <Image
          className="h-full w-full border border-gray-500 rounded-full object-cover transition duration-300"
          src={
            "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/230/formation-typescript.png"
          }
          alt={"Logo"}
          width={1920}
          height={1080}
        />
      </motion.div>

    <div className="absolute opacity-0 group-hover:bg-white group-hover:opacity-80 rounded-full h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
    </div>

    </div>
  );
}

export default Skill;
