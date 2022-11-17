import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type Props = {};

function Contact({}: Props) {
  return (
    <div
      className='h-[99%] relative flex flex-col text-center md:text-left max-w-7xl px-0 md:px-10 mx-auto justify-evenly items-center md:flex-row"
    >'
    >
      <h3 className="absolute top-20 uppercase text-tertiary/40 tracking-[20px] font-semibold text-base">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 text-secondary md:space-y-10 pt-10 md:pt-0">
        <h4 className="font-semibold text-center text-xl">
          Want to get to know me a little better?{" "}
          <span className="underline decoration-tertiary/40">Let's talk</span>
        </h4>

        <div className="space-y-8">
          <div className="flex justify-center items-center space-x-5">
            <FaPhoneAlt color="#5873C6" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">+33 6 74 27 31 43</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaEnvelope color="#5873C6" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">abdoulaye.fal5@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaMapMarkerAlt color="#5873C6" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">
              1, L'Orée du Parc, Le Plessis-Trévise
            </p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 mx-auto w-fit">
          <div className="flex ">
            <input placeholder="Name" className="contact w-full mr-2" type="text" />
            <input placeholder="Email" className="contact w-full" type="email" />
          </div>
          <input placeholder="Subject" className="contact" type="text" />
          <textarea placeholder="Message" className="contact max-h-28"></textarea>
          <button
            type="submit"
            className="bg-tertiary px-10 py-5 text-black font-bold text-base rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
