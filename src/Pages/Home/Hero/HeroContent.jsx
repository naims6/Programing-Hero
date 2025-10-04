import React from "react";

const Content = ({ handleExplore }) => {
  return (
    <div className="text-center mt-[12rem] md:mt-[8.5rem] lg:mt-[14rem] flex flex-col items-center">
      <h1 className="block md:flex text-5xl lg:text-6xl xl:text-7xl font-grotesk font-semibold mb-4 md:mb-5">
        <span className="block md:inline">Let's Code_</span>
        <span className="block md:inline">Your Career</span>
      </h1>
      <p className="w-full text-sm md:text-base text-gray-200 sm:w-[28rem] text-center py-3 md:py-4">
        We're on a mission to provide personalized learning and empower
        individuals to kick-start their careers.
      </p>
      <button
        onClick={handleExplore}
        className="cursor-pointer bg-[url('https://www.programming-hero.com/banner/explore-btn.svg')] bg-contain bg-no-repeat w-[250px] py-5 text-base mt-4 md:mt-5"
      >
        <span className="-translate-y-2 block cursor-pointer font-semibold leading-6">
          Explore
        </span>
      </button>
    </div>
  );
};

export default Content;
