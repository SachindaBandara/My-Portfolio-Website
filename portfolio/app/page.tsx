import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React from "react";
import { FaHome } from "react-icons/fa";
import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import BrowserSafari from "@/components/Browser";

function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <BrowserSafari />
        <Grid/>
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
