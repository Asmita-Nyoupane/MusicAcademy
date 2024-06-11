import { Spotlight } from "../ui/Spotlight";
import Link from "next/link";
import { Button } from "../ui/moving-border";
const HeroSection = () => {
  return (
    <div className="flex flex-col place-items-center gap-6 mt-60 mx-auto h-auto min-h-[80dvh]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className=" text-white text-center   font-extrabold  text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-white">
        Harmony Heights Music Academy
      </h1>
      <p className="text-lg font-medium text-white flex justify-end">
        Transforming Passion into Performance
      </p>

      <div className=" flex place-items-center">
        <Link href={"/courses"}>
          <Button
            className=" px-4 py-2 cursor-pointer outline-none border border-gray-100 rounded-full  text-base text-medium"
            borderRadius="1.75rem"
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
