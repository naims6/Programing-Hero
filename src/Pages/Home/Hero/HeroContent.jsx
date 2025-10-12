import React from "react";

const Content = ({ handleExplore }) => {
  return (
    <div className="text-center mt-[12rem] md:mt-[8.5rem] lg:mt-[14rem] flex flex-col items-center">
      <h1 className="block md:flex text-5xl lg:text-6xl xl:text-7xl font-grotesk font-semibold mb-4 md:mb-5  g-[linear-gradient(90deg,_rgba(242,_54,_255,_0.00)_0%,_rgba(241,_32,_255,_0.08)_23.73%,_rgba(239,_11,_255,_0.56)_49.67%,_rgba(241,_34,_255,_0.04)_74.41%,_rgba(242,_54,_255,_0.00)_100%)]">
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
