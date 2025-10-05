import React from "react";
import Hero from "./Hero/Hero";
import Course from "./Course/Course";
import OurMission from "../OurMission/OurMission";
import MobileAppSection from "./MobileAppSection/MobileAppSection";
import SuccessStory from "./SuccessStory/SuccessStory";

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
