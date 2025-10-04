import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url(/assets/bg_image/bg-left.png),url(/assets/bg_image/bg-center.png),url(/assets/bg_image/bg-right.png)] bg-no-repeat bg-[position:left_center,center_center,right_center] bg-[length:contain,contain,contain] min-h-[calc(100dvh-15rem)] h-[88vh] md:h-[600px] lg:h-[720px] xl:h-[920px] relative bg-black">
      <div className="container2 flex justify-center">
        {/* content */}
        <div className="text-center mt-[14rem] md:mt-[8.5rem] lg:mt-[13rem] flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-grotesk font-semibold mb-5">
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
            className="hidden xl:block w-full"
            src="/assets/bg_image/pattern.png"
            alt=""
          />
          <div className="relative">
            <img
              className="w-full h-[220px] object-cover"
              src="/assets/bg_image/bg-bottom.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
