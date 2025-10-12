import React from "react";
import Hero from "./Hero/Hero";
import Course from "./Course/Course";
import MobileAppSection from "./MobileAppSection/MobileAppSection";
import SuccessStory from "./SuccessStory/SuccessStory";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Course />
        <MobileAppSection />
        <SuccessStory />
        <OurMission />
      </div>
    </>
  );
};

export default Home;
