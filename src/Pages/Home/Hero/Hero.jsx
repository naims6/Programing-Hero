import React from "react";
import "./Hero.css";
import BgImage from "./BgImage";
import HeroContent from "./HeroContent";
const Hero = () => {
  const handleExplore = () => {
    alert("go to home and explore");
  };
  return (
    <div className="bg-[url(/assets/bg_image/bg-left.png),url(/assets/bg_image/bg-center.png),url(/assets/bg_image/bg-right.png)] bg-no-repeat bg-[position:left_center,center_-150px,right_center] bg-[length:850px,contain,850px] min-h-[calc(100dvh-15rem)] h-[88vh] md:h-[600px] lg:h-[720px] xl:h-[920px] relative bg-primary">
      <div className="container2 flex justify-center">
        {/* content */}
        <HeroContent handleExplore={handleExplore} />
        <BgImage />
      </div>
    </div>
  );
};

export default Hero;
