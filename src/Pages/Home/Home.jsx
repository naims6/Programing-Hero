import React from "react";
import Hero from "./Hero/Hero";
import Course from "./Course/Course";
import MobileAppSection from "./MobileAppSection/MobileAppSection";
import SuccessStory from "./SuccessStory/SuccessStory";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <>
      <Hero />
      <Course />
      <MobileAppSection />
      <SuccessStory />
      <OurMission />
    </>
  );
};

export default Home;
