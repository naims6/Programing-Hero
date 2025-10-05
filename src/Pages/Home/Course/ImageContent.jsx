import React from "react";

const ImageContent = () => {
  return (
    <div className="flex-1 w-full">
      <div
        style={{
          background:
            "linear-gradient(31deg, #251360 0%, #7A29A3 64.86%, #CE1AEB 100%)",
        }}
        className="p-4 md:p-5 rounded-2xl"
      >
        <figure className="relative">
          <img src="/assets/bg_image/ph-course-bg.png" alt="" />
          <img
            src="/assets/bg_image/video-play.svg"
            className="absolute left-1/2 top-1/2 -translate-1/2 size-28"
            alt=""
          />
        </figure>
        <h1 className="text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-semibold py-5">
          Complete Web Development
        </h1>
        <button
          style={{
            background: "linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)",
          }}
          className="px-5 md:px-7 py-2 md:py-3 rounded-md font-medium text-xl cursor-pointer"
        >
          Let's Code
        </button>
      </div>
    </div>
  );
};

export default ImageContent;
