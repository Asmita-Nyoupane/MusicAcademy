import React from "react";
import AllCourses from "@/components/Courses/AllCourses";
const CoursePage = () => {
  return (
    <div className=" flex flex-col place-items-center  min-h-screen bg-black/10 antialiased bg-grid-white/[0.02]">
      <AllCourses />
    </div>
  );
};

export default CoursePage;
