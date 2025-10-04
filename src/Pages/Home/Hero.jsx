import React from "react";
import "./Hero.css";
import BgImage from "./BgImage";
const Hero = () => {
  return (
    <div className="bg-[url(/assets/bg_image/bg-left.png),url(/assets/bg_image/bg-center.png),url(/assets/bg_image/bg-right.png)] bg-no-repeat bg-[position:left_center,center_-150px,right_center] bg-[length:850px,contain,850px] min-h-[calc(100dvh-15rem)] h-[88vh] md:h-[600px] lg:h-[720px] xl:h-[920px] relative bg-[#0f0f0f]">
      <div className="container2 flex justify-center">
        {/* content */}
        <div className="text-center mt-[12rem] md:mt-[8.5rem] lg:mt-[14rem] flex flex-col items-center">
          <h1 className="block md:flex text-5xl lg:text-6xl xl:text-7xl font-grotesk font-semibold mb-4 md:mb-5">
            <span className="block md:inline">Let's Code_</span>
            <span className="block md:inline">Your Career</span>
          </h1>
          <p className="w-full text-sm md:text-base text-gray-200 sm:w-[28rem] text-center py-3 md:py-4">
            We're on a mission to provide personalized learning and empower
            individuals to kick-start their careers.
          </p>
          <button className="cursor-pointer bg-[url('https://www.programming-hero.com/banner/explore-btn.svg')] bg-contain bg-no-repeat w-[250px] py-5 font-medium text-base mt-4 md:mt-5">
            <span className="-translate-y-2 block cursor-pointer">Explore</span>
          </button>
        </div>
        <BgImage />
      </div>
    </div>
  );
};

export default Hero;
