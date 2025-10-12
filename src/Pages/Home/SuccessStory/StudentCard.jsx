import { useEffect, useState } from "react";

const StudentCard = ({ studentReview }) => {
  const [background, setBackground] = useState("");
  const { review, batch, name, jobCategory, companyName, image, bg } =
    studentReview;

  useEffect(() => {
    if (bg === "a") {
      setBackground(
        "bg-[linear-gradient(161deg,_#E21CE2_0%,_rgba(77,_6,_55,_0.00)_100%)]"
      );
    } else if (bg === "b") {
      setBackground(
        "bg-[linear-gradient(161deg,_#1CE2BF_0%,_rgba(6,_68,_77,_0.00)_100%)]"
      );
    } else if (bg === "c") {
      setBackground(
        "bg-[linear-gradient(161deg,_#E2871C_0%,_rgba(77,_65,_6,_0.00)_100%)]"
      );
    } else if (bg === "d") {
      setBackground(
        "bg-[linear-gradient(161deg,_#371CE2_0%,_rgba(37,_6,_77,_0.00)_100%)]"
      );
    }
  }, [bg]);

  return (
    <div className="card shadow-sm p-5 rounded-2xl overflow-hidden z-10">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 px-6 w-full flex justify-between items-center">
        <span className="text-8xl font-grotesk">“</span>
        <span className="size-6 flex items-center justify-center text-center font-grotesk bg-purple-500 rounded-sm p-1 -translate-y-[22px]">
          {batch}
        </span>
      </div>

      <p className={`text-sm mt-16 `}>
        <span className="line-clamp-6">{review}</span>{" "}
        <span className="text-pink-600 text-base self-end flex-1 whitespace-nowrap cursor-pointer">
          see more
        </span>
      </p>
      <div className="flex gap-2.5 mt-8">
        <img src={image} className="size-16 rounded-full object-cover" alt="" />
        <div className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <h1 className="font-medium text-sm text-gray-300">{jobCategory}</h1>
          <h1 className="font-medium text-[12px]">{companyName}</h1>
        </div>
      </div>

      {/* background effect */}
      <div
        className={`absolute p-6 inset-0 w-full h-full ${background}  opacity-40 -z-10 backdrop-blur-md`}
      ></div>
    </div>
  );
};

export default StudentCard;
