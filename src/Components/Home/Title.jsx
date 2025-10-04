import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-grotesk text-center font-bold text-[#FCE6FA] relative">
        {children}
        <span className="absolute left-1/2 -translate-x-1/2 top-[140%] block h-2.5 md:h-3 w-18 md:w-22 bg-[linear-gradient(90deg,_#E855DE_0.01%,_#5400EE_100%)]"></span>
      </h1>
    </div>
  );
};

export default Title;
