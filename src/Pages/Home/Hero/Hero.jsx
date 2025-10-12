import React from "react";
import "./Hero.css";
import BgImage from "./BgImage";
import HeroContent from "./HeroContent";
const Hero = () => {
  const handleExplore = () => {
    console.log("go to home and explore");
  };
  return (
    <div className="bg-[url(/assets/bg_image/bg-left.png),url(/assets/bg_image/bg-center.png),url(/assets/bg_image/bg-right.png)] bg-no-repeat bg-[position:left_center,center_-150px,right_center] bg-[length:800px,contain,800px] min-h-[calc(100dvh-15rem)] h-[88vh] md:h-[600px] lg:h-[720px] xl:h-[920px] relative bg-[#000]">
      <div className="container2 flex justify-center overflow-hidden">
        {/* content */}
        <HeroContent handleExplore={handleExplore} />
        <BgImage />
      </div>
    </div>
  );
};

export default Hero;
