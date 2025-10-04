import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url(/assets/bg_image/bg-left.png),url(/assets/bg_image/bg-center.png),url(/assets/bg_image/bg-right.png)] bg-no-repeat bg-[position:left_center,center_center,right_center] bg-[length:cover,170px,cover] min-h-[calc(100vh-15rem)] h-[750px] lg:h-[900px] relative">
      <div className="container2 flex justify-center">
        {/* content */}
        <div className="text-center mt-[11rem] flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-grotesk font-semibold mb-5">
            Let's Code_Your Career
          </h1>
          <p className="w-full text-sm md:text-base text-gray-200 md:w-[32rem] text-center py-4">
            We're on a mission to provide personalized learning and empower
            individuals to kick-start their careers.
          </p>
          <button className="cursor-pointer bg-[url('https://www.programming-hero.com/banner/explore-btn.svg')] bg-contain bg-no-repeat w-[250px] py-5 font-medium text-base mt-5">
            <span className="-translate-y-2 block">Explore</span>
          </button>
        </div>
        {/* bg image 1 */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            className="hidden md:block w-full"
            src="/assets/bg_image/pattern.png"
            alt=""
          />
          <img className="w-full" src="/assets/bg_image/bg-bottom.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
