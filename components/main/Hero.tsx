import React from "react";
import Image from "next/image";
import Character from "../../public/character.png";
import { motion } from "framer-motion";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "../../utils/typings/sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const words = [
    `Hi! My name is ${pageInfo.name}`,
    "I'm a Front-End Developer",
    "And also a Blockchain Developer",
  ];

  const [text] = useTypewriter({
    words: words,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen w-screen flex justify-center md:justify-start items-center">
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{once: true}}
        className="w-2/5 h-4/5 hidden md:block"
      >
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 200 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full flex justify-center items-start"
        >
          <Image src={Character} alt={"Character"} priority />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-[90%] h-4/6 flex flex-col justify-center items-center gap-14 md:w-3/5 md:gap-8"
      >
        <span className="text-violet11 text-xl md:text-5xl text-center">
          {"<  "} {text}
          <Cursor />
          {"  />"}
        </span>

        <h3 className="text-violet12 text-lg tracking-[20px] uppercase text-center">
          {pageInfo.role}
        </h3>

        <div className="w-2/3 flex justify-around items-center">
          <Link href={"#about"}>
            <button className="hero_button">About</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero_button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero_button">Projects</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
