"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { instructors } from "@/data/instructor";
import { SparklesCore } from "../ui/sparkles";
// import { Meteors } from "../ui/meteors";
// import { Boxes } from "../ui/background-boxes";
// import { WavyBackground } from "../ui/wavy-background";

const Instructor = () => {
  return (
    <div className="relative w-full flex-col place-items-center h-[30rem] overflow-hidden">
      <div className="absolute inset-0">{/* <Meteors number={30} /> */}</div>
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* <Boxes /> */}

      <div className="relative z-10 w-full flex flex-col gap-8 justify-center items-center place-content-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center">
          Meet Our Excellent Instructors
        </h2>
        <p className="text-white text-base">
          Discover the professionals who guide your musical journey
        </p>
        <div className="flex justify-center items-center w-full">
          <AnimatedTooltip items={instructors} />
        </div>

        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
