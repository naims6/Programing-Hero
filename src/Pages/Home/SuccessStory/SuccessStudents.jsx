import React, { use } from "react";
import StudentCard from "./StudentCard";

const fetcher = fetch("/Data/StudentReview.json").then((res) => res.json());

const SuccessStudents = () => {
  const studentsReview = use(fetcher);

  return (
    <div className="px-[3%] pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {studentsReview.map((review, index) => (
          <StudentCard key={index} studentReview={review} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStudents;
