import React from "react";
import Title from "../../../Components/Home/Title";
import Content from "./Content";
import useScrollAnimation from "../../../Animation/ScrollAnimation";

const MobileAppSection = () => {
  useScrollAnimation("animation-left");
  return (
    <div className="bg-primary relative z-10 min-[2140px]:pb-[500px] pt-10">
      <Title>Are you absolute_ Beginner?</Title>
      <Content />
      {/* background helper image  */}
      <div>
        <img
          className="animation-left hidden lg:block absolute top-10 left-[4%] size-24"
          src="/assets/bg_image/planet-bg.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute top-0 right-[5%] size-28"
          src="/assets/bg_image/rocket-bg.png"
          alt=""
        />
        <img
          className="animation-left hidden lg:block absolute top-48 right-[5%] size-44"
          src="/assets/bg_image/triangle-bg.svg"
          alt=""
        />
      </div>
      {/* background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full ">
        <img
          className="lg:w-full h-[650px] lg:h-[800px] min-[2140px]:h-[1400px] object-none lg:object-cover"
          src="/assets/bg_image/mobile-app-section-bg.png"
        />
      </div>
    </div>
  );
};

export default MobileAppSection;
