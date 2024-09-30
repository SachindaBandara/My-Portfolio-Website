import Hero from "@/components/Hero";
import React from "react";

function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-1 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}

export default Home;
