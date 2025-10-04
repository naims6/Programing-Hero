import React from "react";
import ImageContent from "./ImageContent";
import Content from "./Content";
const CourseDetails = () => {
  return (
    <div className="pt-20 lg:pt-26">
      <div className="w-full xl:max-w-9/10 mx-auto flex flex-col gap-28">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          <ImageContent />
          <Content />
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-16">
          <Content />
          <ImageContent />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
