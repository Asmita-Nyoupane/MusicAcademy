"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonialData } from "@/data/testimonialData";
const Testimonial = () => {
  return (
    <div className=" ">
      <div className="h-[30rem]  rounded-md flex flex-col gap-8 antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center ">
          Hear from our Achievers
        </h2>
        <InfiniteMovingCards
          items={testimonialData}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonial;
