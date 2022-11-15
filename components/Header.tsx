import React from "react";
import { SocialIcon } from "react-social-icons";
import CV from "../public/curriculum-vitae-svgrepo-com.svg";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-rox justify-between items-start max-w-7xl mx-auto z-20">
      <div className="flex items-center">
        <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="linkedin" fgColor="gray" bgColor="transparent" />

		{ /* CV Icon in progress */ }

        {/*<SocialIcon
          network="cv"
  />*/}

      </div>
      <div className="flex items-center text-gray-400 cursor-pointer group">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <span className="uppercase text-gray-400 text-sm hidden md:inline-flex transition-colors duration-300 ease-in-out group-hover:underline group-hover:decoration-[#B3192B] group-hover:decoration-4 underline-offset-4">
          Get in touch
        </span>
      </div>
    </header>
  );
}

export default Header;
