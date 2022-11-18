import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { useMediaQuery } from "../../utils/hooks";

type Props = {
  fromLeft?: boolean;
};

function Skill({ fromLeft }: Props) {
  {
    /* const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

const onClick = () => setOpen(true); */
  }

  const width = useMediaQuery(768);

  return (
    <motion.div
      initial={{
        x: fromLeft ? (width ? -200 : -100) : width ? 200 : 100,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative flex cursor-pointer"
    >
      <motion.div className="h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110">
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

      <div className="absolute opacity-0 group-hover:bg-violet12 group-hover:opacity-80 rounded-full h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110"></div>

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
