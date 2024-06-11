"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import coursesData from "@/data/music_course.json";
import Image from "next/image";

interface Course {
  id: number;
  name: string;
  slug: string;
  price: number;
  isFeatured: boolean;
  instructor: string;
  image: string;
}

const FeaturedSection = () => {
  const featuredCourse = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="flex flex-col place-items-center gap-6 py-4 bg-gray-900">
      <h2 className="text-green-400 font-semibold">Featured Courses</h2>
      <p className=" text-2xl lg:text-4xl font-bold text-white">
        Explore our top courses at afforable price
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  p-4 lg:grid-cols-3 gap-8">
        {featuredCourse.map((data: Course) => (
          <BackgroundGradient
            key={data.id}
            className="rounded-[22px] flex  flex-col gap-3 place-items-center  max-w-sm p-6 sm:p-8 bg-white dark:bg-zinc-900"
          >
            <div className="h-80 w-80 sm:h-64 sm:w-64 lg:h-60 lg:w-60 bg-red-900">
              <Image
                src={data.image}
                alt={data.name}
                height="500"
                width="500"
                quality={100}
                className=" rounded-md  object-fill w-full h-full"
              />
            </div>

            <h2 className="text-white text-center  font-semibold text-lg">
              {data.name}
            </h2>
            <button
              type="button"
              className="border-2 border-gray-200 shadow-md  font-semibold rounded-full px-8 py-2 min-w-fit"
            >
              View
            </button>
          </BackgroundGradient>
        ))}
      </div>
      <div>
        <button
          type="button"
          className="border-2 border-gray-200 shadow-md  font-semibold rounded-full px-8 py-2 min-w-fit"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
