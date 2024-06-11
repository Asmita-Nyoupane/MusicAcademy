"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum covers a wide range of musical genres and techniques, ensuring a well-rounded education for students of all levels.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Practice and perform in our modern, fully-equipped studios and performance spaces designed to enhance your learning experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white"></div>
    ),
  },

  {
    title: "Performance Opportunities",
    description:
      "Gain valuable experience by participating in recitals, concerts, and competitions organized by the academy.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "Community and Networking",
    description:
      "Join a vibrant community of musicians and take advantage of networking opportunities with peers and industry professionals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--pink-500))] flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "We offer flexible scheduling options to accommodate your busy lifestyle, making it easy to balance music education with other commitments.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--white-500))] flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "Supportive Environment",
    description:
      "Learn in a supportive and encouraging environment that fosters creativity, confidence, and a lifelong love of music.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--white-500))] flex items-center justify-center text-white"></div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className=" h-[30rem]">
      <StickyScroll content={content} />
    </div>
  );
}
