import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaLinkedinIn, FaGithub, FaFileInvoice } from "react-icons/fa";
import { motion } from "framer-motion";
import { Social } from "../utils/typings/sanity";
import Link from "next/link";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-rox justify-between items-start max-w-7xl mx-auto z-20 xl-items-center">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        {socials.map((social, index) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="currentColor"
            bgColor="transparent"
            className="text-violet12 hover:text-violet11"
          />
        ))}

        {/* CV Icon in progress */}

        {/*<SocialIcon
          network="cv"
  />*/}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center cursor-pointer group"
        >
          <SocialIcon
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
            className="text-violet12 group-hover:text-violet11 transition-colors duration-300 ease-in-out"
          />
          <span className="uppercase text-violet12 group-hover:text-violet11 text-sm hidden md:inline-flex transition-colors duration-300 ease-in-out group-hover:underline group-hover:decoration-violet8/60 group-hover:decoration-4 underline-offset-4">
            Get in touch
          </span>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
