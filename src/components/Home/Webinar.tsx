"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { webinars } from "@/data/webinar";
import { title } from "process";
const Webinar = () => {
  return (
    <div className=" flex flex-col gap-4  py-4  place-items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-green-400 font-semibold text-center">
          Our Popular Webinars
        </h2>
        <p className=" text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Learn and grow together
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect
          items={webinars?.map((data: any) => ({
            title: data.title,
            description: data.description,
            link: data.link,
          }))}
        />
      </div>
      <div>
        <button
          type="button"
          className="border-2 border-gray-200 shadow-md bg-neutral-200 dark:bg-slate-700/[0.8]  font-semibold rounded-full px-8 py-2 min-w-fit"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Webinar;
