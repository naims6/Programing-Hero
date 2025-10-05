import React from "react";
import Title from "../../../Components/Home/Title";
import Content from "./Content";

const MobileAppSection = () => {
  return (
    <div className="bg-primary relative z-10 min-[2140px]:pb-[500px]">
      <Title>Are you absolute_ Beginner?</Title>
      <Content />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full ">
        <img
          className="lg:w-full h-[800px] min-[2140px]:h-[1400px] object-none lg:object-cover"
          src="/assets/bg_image/mobile-app-section-bg.png"
        />
      </div>
    </div>
  );
};

export default MobileAppSection;
