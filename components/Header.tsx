import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-rox justify-between items-start max-w-7xl mx-auto z-20 xl-items-center">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="linkedin" fgColor="gray" bgColor="transparent" />

        {/* CV Icon in progress */}

        {/*<SocialIcon
          network="cv"
  />*/}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center text-gray-400 cursor-pointer group"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <span className="uppercase text-gray-400 text-sm hidden md:inline-flex transition-colors duration-300 ease-in-out group-hover:underline group-hover:decoration-[#B3192B]/40 group-hover:decoration-4 underline-offset-4">
          Get in touch
        </span>
      </motion.div>
    </header>
  );
}

export default Header;
