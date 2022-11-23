import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity";
import { Skill } from "../../utils/typings/sanity";

type Props = {
  fromLeft?: boolean;
  skill: Skill;
  background: boolean;
  width: boolean;
};

function Skill({ skill, fromLeft, background }: Props) {
  return (
    <>
      {skill.link ? (
        <Link href={skill.link} target="_blank">
          <motion.div
            initial={{
              x: fromLeft ? -100 : 100,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative flex cursor-pointer"
          >
            <motion.div className="h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110 hover:animate-pulse">
              <Image
                className={
                  "h-full w-full border-0 border-gray-500 object-fill transition duration-300 hover:scale-110" +
                  (background ? " rounded-full bg-white" : "")
                }
                src={urlFor(skill?.image).url()}
                alt={"Logo"}
                width={1920}
                height={1080}
              />
            </motion.div>
          </motion.div>
        </Link>
      ) : (
        <motion.div
          initial={{
            x: fromLeft ? -100 : 100,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="group relative flex cursor-pointer"
        >
          <motion.div className="h-12 w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110 hover:animate-pulse">
            <Image
              className={
                "h-full w-full border-0 border-gray-500 object-fill transition duration-300 hover:scale-110" +
                (background ? " rounded-full bg-white" : "")
              }
              src={urlFor(skill?.image).url()}
              alt={"Logo"}
              width={1920}
              height={1080}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Skill;
