import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { motion } from "framer-motion";
import Image from 'next/image';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full pb-5 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate  <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 my-5 mb-10 sm:mb-0 text-center lg:mb-4">
          Connect with me today, and let&apos;s explore how I can help turn your goals into reality.
        </p>
        <a href="mailto:jmsachindabandara@gmail.com">
          <MagicButton
            title="Send Email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <hr className="z-15 mt-20 " />

      <div className="flex flex-col mt-1 sm:-mt-10 md:flex-row justify-between items-center">
        <p className="text-sm font-normal font-ligh mt-20 z-10">
          Copyright © 2024 All Rights Reserved
        </p>

        <div className="flex items-center -mt-20 gap-6 md:gap-3 sm:mt-20">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition duration-400">
              <a href={profile.link}>
                <Image src={profile.img} alt={profile.img} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
