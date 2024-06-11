"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import courseData from "@/data/music_course.json";

const AllCourses = () => {
  return (
    <div className="flex flex-col gap-8 mt-36 px-12">
      <h1 className="text-white text-center font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-white">
        All Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {courseData.courses.map((data) => (
          <CardContainer className="inter-var" key={data.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {data.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                RS {data.price}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={data.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
