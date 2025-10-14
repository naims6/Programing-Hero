import React from "react";
import useScrollAnimation from "../../Animation/ScrollAnimation";

const Title = ({ children }) => {
  useScrollAnimation();
  return (
    <div className="animation-bottom">
      <h1 className="text-3xl md:text-6xl font-grotesk text-center font-bold gradient-text bg-[linear-gradient(97.64deg,_#D8AAFF_15.56%,_#ACB5FF_92.85%)] text-[#FCE6FA] relative px-4">
        {children}
        <span className="absolute left-1/2 -translate-x-1/2 top-[140%] block h-2.5 md:h-3 w-18 md:w-22 bg-[linear-gradient(90deg,_#E855DE_0.01%,_#5400EE_100%)]"></span>
      </h1>
    </div>
  );
};

export default Title;
