import React from "react";
import ImageContent from "./ImageContent";
import Content from "./Content";
const CourseDetails = () => {
  return (
    <div className="pt-10 lg:pt-16 bg-[url('/assets/bg_image/course-bg.png')] bg-no-repeat bg-contain mt-24">
      <div className="flex flex-col gap-24 container2">
        {/* wev development course */}
        <div className="flex w-full xl:max-w-9/10 mx-auto flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
          <ImageContent />
          <Content />
        </div>
        {/* phitron course */}
        <div className="flex w-full xl:max-w-8/10 mx-auto flex-col-reverse lg:flex-row justify-between items-center gap-10 md:gap-16">
          {/* Content part */}
          <div className="flex-1 text-left lg:text-right">
            <h1 className="text-3xl md:text-4xl gradient-text  bg-[linear-gradient(70deg,_#4B75F1_9.27%,_#3065FF_92.91%)]">
              Start your programming journey in CSE Fundamental
            </h1>
            <p className="font-grotesk text-base py-7">
              Welcome to Phitron! This comprehensive program is designed to lay
              the foundation for your Computer Science and Engineering journey.
              Explore core concepts, problem solving, algorithms, data
              structures, cloud computing, and more. Get ready to build a solid
              understanding of CSE essentials with our expert-led instruction.
            </p>
            <div className="flex items-center gap-5 justify-start lg:justify-end">
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #6892FF 0.01%, #1555B5 100%)",
                }}
                className="px-5 md:px-7 py-2 md:py-3 rounded-md font-medium text-xl cursor-pointer"
              >
                Explore
              </button>
              <button className="px-5 py-2 rounded-md font-semibold text-xl cursor-pointer border-2 border-blue-800 text-blue-500">
                Curriculam
              </button>
            </div>
          </div>
          {/* image content  */}
          <div className="flex-1 w-full">
            <div
              style={{
                background:
                  "linear-gradient(33deg, #081848 0%, #081848 0%, #081848 0.01%, #2E5CDF 100%)",
              }}
              className="p-4 md:p-5 rounded-2xl"
            >
              <figure className="relative">
                <img src="/assets/bg_image/phitron-course-bg.png" alt="" />
                <img
                  src="/assets/bg_image/video-play.svg"
                  className="absolute left-1/2 top-1/2 -translate-1/2 size-28"
                  alt=""
                />
              </figure>
              <h1 className="text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-semibold py-5">
                CSE Fundamental With Phitron
              </h1>
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #6892FF 0.01%, #1555B5 100%)",
                }}
                className="px-7 py-3 rounded-md font-medium text-xl cursor-pointer"
              >
                Let's Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
