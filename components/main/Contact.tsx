import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PageInfo } from "../../utils/typings/sanity";

type Props = {
  pageInfo: PageInfo
};

type DataForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({ pageInfo }: Props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit(async (dataForm) => {
    window.location.href = `mailto:abdoulaye.fal5@gmail.com?subject=${dataForm.subject}&body=Hi, my name is ${dataForm.name}.%0D%0A%0D%0A${dataForm.message}%0D%0A%0D%0A(${dataForm.email})`;
    reset();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[99%] relative flex flex-col text-center md:text-left max-w-7xl px-0 md:px-10 mx-auto justify-evenly items-center md:flex-row"
    >'
    >
      <h3 className="absolute top-20 uppercase text-violet11/40 tracking-[20px] font-semibold text-base anima">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 text-violet12 md:space-y-10 pt-10 md:pt-0">
        <h4 className="font-semibold text-center text-xl">
          Want to get to know me a little better?{" "}
          <span className="underline decoration-violet8/60 underline-offset-8">Let's talk</span>
        </h4>

        <div className="space-y-8">
          <div className="flex justify-center items-center space-x-5">
            <FaPhoneAlt color="#5842c3" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaEnvelope color="#5842c3" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">{pageInfo.email}</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaMapMarkerAlt color="#5842c3" className="w-6 h-6 animate-pulse" />
            <p className="text-sm md:text-base">
              {pageInfo.address}
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-2 mx-auto w-fit"
        >
          <div className="flex ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact w-full mr-2"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact w-full"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact max-h-28"
            required
          />
          <button
            type="submit"
            className="bg-violet5 hover:bg-violet6 focus:bg-violet7 px-10 py-5 text-violet1 font-bold text-base rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
