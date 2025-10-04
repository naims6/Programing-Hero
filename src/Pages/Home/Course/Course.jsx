import React from "react";
import Title from "../../../Components/Home/Title";
import CourseDetails from "./CourseDetails";

const Course = () => {
  return (
    <div className="bg-primary">
      <div className="container2 px-5 py-16 md:py-32">
        <Title>Our Courses_</Title>
        <CourseDetails />
      </div>
    </div>
  );
};

export default Course;
