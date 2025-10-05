import React from "react";

const Banner = () => {
  return (
    <div className="hero container2 mt-20">
      <div className="flex flex-col justify-between lg:flex-row gap-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl flex-1">
          <img
            className="w-full"
            src="/assets/bg_image/our-mission-banner.jpeg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-3">
          <p className="font-grotesk block text-sm xl:text-base">
            <span className="text-[#E855DE] font-bold text-sm xl:text-xl leading-8">
              Why:{" "}
            </span>{" "}
            We are passionate about empowering individuals to transform their
            lives through the power of coding. We believe that everyone should
            have access to high-quality, affordable coding education, regardless
            of their background or experience.
          </p>
          <p className="font-grotesk block text-sm xl:text-base">
            <span className="text-[#E855DE] font-bold text-sm xl:text-xl leading-8">
              What:{" "}
            </span>{" "}
            We provide a comprehensive range of online programming courses, from
            beginner-level Web Development to advanced CSE Fundamentals and
            Advanced Programming Courses. Our courses are designed to be
            engaging, effective, and tailored to the needs of today's learners.
          </p>
          <p className="font-grotesk block text-sm xl:text-base">
            <span className="text-[#E855DE] font-bold text-sm xl:text-xl leading-8">
              How:{" "}
            </span>
            We nurture our students in a personalized and supportive environment
            that fosters confidence and success. Our friendly and dedicated
            instructors are always available to guide and mentor our students,
            ensuring they receive the support they need to achieve their coding
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
