import React from "react";
import Hero from "./Hero/Hero";
import Course from "./Course/Course";
import OurMission from "../OurMission/OurMission";
import MobileAppSection from "./MobileAppSection/MobileAppSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Course />
      <MobileAppSection />
      <OurMission />
    </>
  );
};

export default Home;
