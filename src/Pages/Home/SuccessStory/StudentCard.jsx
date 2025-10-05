import React from "react";

const StudentCard = ({ studentReview }) => {
  const { review, batch, name, jobCategory, companyName, image } =
    studentReview;
  return (
    <div className="card bg-base-100 shadow-sm p-6 rounded-2xl overflow-hidden">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 px-6 w-full flex justify-between items-center">
        <span className="text-8xl font-grotesk">“</span>
        <span className="size-6 flex items-center justify-center text-center font-grotesk bg-purple-500 rounded-sm p-1 -translate-y-[22px]">
          {batch}
        </span>
      </div>
      <p className="text-sm mt-16">{review}</p>
      <div className="flex gap-2.5 mt-8">
        <img src={image} className="size-16 rounded-full object-cover" alt="" />
        <div className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <h1 className="font-medium text-sm text-gray-300">{jobCategory}</h1>
          <h1 className="font-medium text-[12px]">{companyName}</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
<h1>Student</h1>;
