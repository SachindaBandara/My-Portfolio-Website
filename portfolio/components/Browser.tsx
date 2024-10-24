import Image from 'next/image'
import GitHubImage from "../public/githubProfile.png"
import { motion, useTransform } from "framer-motion";

const Browser = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="hidden sm:block items-center justify-center py-10 mt-20 md:py-20 w-full">
      <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
      <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
        <Image
          src={GitHubImage}
          alt="banner image"
          quality={100}
          className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
        />
      </div>
    </motion.div>
  )
}

export default Browser
