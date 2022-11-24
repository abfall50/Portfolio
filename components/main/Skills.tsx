import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../utils/typings/sanity";
import { useCountry } from "../../utils/context/country";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const { language } = useCountry();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[99%] relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 mx-auto justify-center xl:space-y-0 items-center"
    >
      <h3 className="absolute top-20 pl-5 uppercase text-violet11/70 tracking-[20px] font-semibold text-base ">
        {language === "us" ? "Skills" : "Compétences"}
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills
          ?.slice(0, Math.round(skills?.length / 2))
          .map((skill, index) => {
            if (
              skill?.title === "Solidity" ||
              skill?.title === "Next Js" ||
              skill?.title === "MongoDB"
            ) {
              return (
                <Skill
                  key={skill?._id}
                  background={true}
                  skill={skill}
                />
              );
            } else {
              return (
                <Skill
                  key={skill?._id}
                  background={false}
                  skill={skill}
                />
              );
            }
          })}

        {skills
          .slice(Math.round(skills?.length / 2), skills?.length)
          .map((skill, index) => {
            if (
              skill.title === "Solidity" ||
              skill.title === "Next Js" ||
              skill.title === "MongoDB"
            ) {
              return (
                <Skill
                  key={skill?._id}
                  background={true}
                  skill={skill}
                  fromLeft={true}
                />
              );
            } else {
              return (
                <Skill
                  key={skill?._id}
                  background={false}
                  skill={skill}
                  fromLeft={true}
                />
              );
            }
          })}
      </div>
    </motion.div>
  );
}

export default Skills;
