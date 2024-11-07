"use client"
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React, { useRef } from "react";
import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { useScroll } from "framer-motion";


function Home() {
  const container = useRef(null);
  const {} = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={container} className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
