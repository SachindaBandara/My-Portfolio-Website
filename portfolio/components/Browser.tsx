import Image from 'next/image'
import GitHubImage from "../public/Portfolio.png"
import { motion } from "framer-motion";

const Browser = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="hidden sm:block items-center justify-center py-10 mt-40 md:py-20 w-full">
      <Image
          src={GitHubImage}
          alt="banner image"
          quality={100}
          className=""
        />
    </motion.div>
  )
}

export default Browser
