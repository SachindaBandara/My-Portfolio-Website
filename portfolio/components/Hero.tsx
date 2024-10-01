import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
//import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ContactButton from "./ui/ContactButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="lowercase tracking-widest text-sm text-center text-blue-100 max-w-80">
           @Sachinda Bandara
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
          />

          <p className="text-center md:tracking-wider mt-4 mb-10 sm:mb-2 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Sachinda Bandara, Frontend Developer & UI / UX Engineer
          </p>

          <a href="#about">
            <MagicButton
              title="Contact Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* <a href="#about">
            <ContactButton
              title="Contact Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
