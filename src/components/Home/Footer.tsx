import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="  flex  flex-col gap-8 px-12 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  text-white">
        <div className=" flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Useful Links</h2>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Links</h2>
          <Link href="/">Courses</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Popular Courses</h2>
          <Link href="/">Drumming for Beginners</Link>
          <Link href="/">Beginner Guitar Lessons</Link>
          <Link href="/">Classical Music Theory</Link>
        </div>

        <div className=" flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p> Email : harmony@gmail.com</p>
          <p>Facebook : harrmony.facebook.com</p>
          <p>Phone Number:988796897870</p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-white font-medium">
          All right reserved copyright@harmony
        </p>
      </div>
    </footer>
  );
};

export default Footer;
