import React from "react";

const Content = () => {
  return (
    <div className="py-18 lg:py-40 container2 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:w-8/10 lg:mx-auto">
        <div className="w-4/7 lg:2/7">
          <img className="w-[320px]" src="/assets/bg_image/app.png" />
        </div>
        <div className="w-full lg:w-5/7">
          <h1 className="hidden lg:block text-2xl lg:text-4xl font-bold">
            Our Mobile App
          </h1>
          <div className="flex justify-between gap-2 lg:gap-5 bg-[linear-gradient(149deg,_#DC02CE_0%,_#7C3FF2_70.83%,_#5C53FE_100%)] px-4 py-3 lg:p-8 rounded-xl text-center font-grotesk mt-7 mb-5">
            <div className="border-r border-gray-400 p-2 lg:p-5 flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
                1.5M+
              </h1>
              <span className="font-medium font-sm">Worldwide Learners!</span>
            </div>
            <div className="border-r border-gray-400 p-2 lg:p-5 flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
                4.7+
              </h1>
              <span className="font-medium font-sm">Positive Reviews</span>
            </div>
            <div className="p-2 lg:p-5 flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
                12+
              </h1>
              <span className="font-medium font-sm flex flex-col">
                {" "}
                <span>Skill based</span> <span>Courses</span>
              </span>
            </div>
          </div>
          <p className="text-center lg:text-left mb-8 font-semibold">
            Learn programming the fun way with the Programming Hero app!
            Download now on the App Store or Google Play.
          </p>
          <div className="flex gap-3.5 md:gap-5 items-center justify-center">
            <img
              className="w-[9rem] lg:w-[12rem] cursor-pointer"
              src="/assets/bg_image/appStore.svg"
              alt=""
            />
            <img
              className="w-[9rem] lg:w-[12rem] cursor-pointer"
              src="/assets/bg_image/googlePlay.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
