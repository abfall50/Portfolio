import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../utils/typings/sanity";
import Link from "next/link";
import { ReactCountryFlag } from "react-country-flag";
import { useCountry } from "../utils/context/country";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const { language } = useCountry();

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
            key={social?._id}
            url={social?.url}
            target="_blank"
            fgColor="currentColor"
            bgColor="transparent"
            className="text-violet12 hover:text-violet11"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <div className="flex items-center cursor-pointer group">
          <SocialIcon
            href="#contact"
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
            className="text-violet12 group-hover:text-violet11 transition-colors duration-300 ease-in-out"
          />
          <Link href="#contact">
            <span className="uppercase text-violet12 group-hover:text-violet11 text-sm hidden md:inline-flex transition-colors duration-300 ease-in-out group-hover:underline group-hover:decoration-violet8/60 group-hover:decoration-4 underline-offset-4">
              {language === "us" ? "Get in touch" : "Contactez-moi"}
            </span>
          </Link>
        </div>
        <div className="px-3 md:px-10">
          <Link href={language === "us" ? "/fr" : "/en"}>
            <ReactCountryFlag
              countryCode={language}
              svg
              style={{ width: "25px", height: "25px" }}
              className="hover:scale-110"
            />
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
