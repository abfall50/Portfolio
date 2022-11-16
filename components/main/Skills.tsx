import React from "react";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-[99%] relative flex flex-col text-center md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-20 uppercase text-tertiary/40 tracking-[20px] font-semibold text-xl">
        Skills
      </h3>
    </div>
  );
}

export default Skills;
