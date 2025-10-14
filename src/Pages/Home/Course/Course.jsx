import React from "react";
import Title from "../../../Components/Home/Title";
import CourseDetails from "./CourseDetails";
import useScrollAnimation from "../../../Animation/ScrollAnimation";

const Course = () => {
  useScrollAnimation("animation-left");
  return (
    <div className="bg-primary">
      <div className="px-3 py-16 md:py-32 relative">
        <Title>Our Courses_</Title>
        <CourseDetails />
        {/* background image */}
        <div className="">
          <img
            className="animation-left hidden lg:block absolute right-0 top-16 size-48"
            src="/assets/bg_image/triangle-bg.svg"
            alt="triangle-bg"
          />
          <img
            className="animation-left hidden lg:block absolute left-0 bottom-12 size-48"
            src="/assets/bg_image/squre-bg.svg"
            alt="triangle-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
