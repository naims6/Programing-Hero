import React from "react";

const Content = () => {
  return (
    <div className="flex-1">
      <h1
        className="text-4xl gradient-text bg-gradient-to-r from-[#e855de] to-[#5400ee]
"
      >
        Kickstart your journey in Web Development
      </h1>
      <p className="font-grotesk text-base py-7">
        Welcome to Programming Hero! Dive into the world of modern web
        development with a focus on MERN stack - MongoDB, Express.js, React, and
        Node.js course from the beginning of your journey until you get an
        internship or a full-time job.
      </p>
      <div className="flex items-center gap-5">
        <button
          style={{
            background: "linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)",
          }}
          className="px-7 py-2 rounded-md font-medium text-xl cursor-pointer"
        >
          Explore
        </button>
        <button className="px-6 py-2 rounded-md font-semibold text-xl cursor-pointer border-2 border-purple-800 text-purple-500">
          Success
        </button>
      </div>
    </div>
  );
};

export default Content;
