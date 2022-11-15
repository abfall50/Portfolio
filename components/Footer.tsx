import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect } from "react";

type Props = {};

function Footer({}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <></>;
  {
    /* <motion.footer
      className="sticky top-[99%] left-0 h-5 origin-[0%_0%] bg-primary"
      style={{ scaleX: scrollYProgress }}
  ></motion.footer> */
  }
}

export default Footer;
