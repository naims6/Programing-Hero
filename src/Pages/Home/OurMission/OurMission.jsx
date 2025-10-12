import React from "react";
import Title from "../../../Components/Home/Title";
import Banner from "./Banner";

const OurMission = () => {
  return (
    <div className="bg-primary py-16 md:py-20 relative">
      <div className="lg:pt-36">
        <Title>Our Mission_</Title>
      </div>
      <Banner />
      {/* our mission sub background */}
      <img
        className="hidden lg:block absolute top-0 left-[4%] size-44"
        src="/assets/bg_image/triangle-bg.svg"
        alt=""
      />
      <img
        className="hidden lg:block absolute top-20 right-[4%] size-40"
        src="/assets/bg_image/squre-bg.svg"
        alt=""
      />
    </div>
  );
};

export default OurMission;
