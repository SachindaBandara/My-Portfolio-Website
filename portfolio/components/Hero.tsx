"use client";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import Profile from "../public/profile pic.jpg";

const Hero = () => {
  const words = `Hi, I'm Sachinda Bandara`
  return (
    <div className="pb-20 pt-36">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Profile}
              alt="Sachinda Bandara"
              width="210"
              height="210"
              quality="100"
              priority={true}
              className="h-38 w-38 rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex justify-center relative my-5 z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.125,
        }}>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="lowercase tracking-widest text-sm text-center text-blue-100 max-w-80">
            @SachindaBandara
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            duration={2}
            filter={false}
            words={words}
          />

          <p className="text-center md:tracking-wider mt-4 mb-6 sm:mb-2 text-sm md:text-lg lg:text-2xl">
            Web Developer & UI / UX Designer
          </p>
          <p className="text-center md:tracking-wider sm:mt-4 mb-10 sm:mb-2 text-xs md:text-sm lg:text-base text-slate-400">
            I&apos;m passionate about building exceptional user experiences by
            weaving together the power of Web development
          </p>
          <a href="#contact">
            <MagicButton
              title="Contact Me"
              icon={<BsArrowRight />}
              position="right"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
