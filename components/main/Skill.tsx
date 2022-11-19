import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { urlFor } from "../../sanity";
import { useMediaQuery } from "../../utils/hooks/media";
import { Skill } from "../../utils/typings/sanity";

type Props = {
  fromLeft?: boolean
  skill: Skill
  background: boolean
};

function Skill({ skill, fromLeft, background }: Props) {
  {
    /* const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

const onClick = () => setOpen(true); */
  }

  const width = useMediaQuery(768);
  console.log(width)

  return (
    <motion.div
      initial={{
        x: fromLeft ? (width ? -25 : -200) : width ? 25 : 200,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative flex cursor-pointer"
    >
      <motion.div className="h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110 hover:animate-pulse">
        <Image
          className={"h-full w-full border-0 border-gray-500 object-fill transition duration-300 hover:scale-110" + (background ? " rounded-full bg-white" : "")}
          src={urlFor(skill.image).url()}
          alt={"Logo"}
          width={1920}
          height={1080}
        />
      </motion.div>


      {/* Open Modal to see experiencies */}

      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div className="absolute z-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[300px] bg-gray-500 rounded-2xl outline-none">
          <button
            className="w-full h-5 bg-red-400"
            onClick={() => setOpen(false)}
          ></button>
        </div>
        </Modal> */}
    </motion.div>
  );
}

export default Skill;
