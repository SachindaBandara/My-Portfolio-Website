import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full pb-5 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate  <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 my-5 text-center">
          Connect with me today, and let's explore how I can help turn your goals into reality.
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
        <p className="text-xs font-normal font-ligh mt-20 z-10">
          Copyright © 2024 All Rights Reserved
        </p>

        <div className="flex items-center -mt-20 gap-6 md:gap-3 sm:mt-20">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition">
              <a href={profile.link}>
                <img src={profile.img} alt={profile.img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
