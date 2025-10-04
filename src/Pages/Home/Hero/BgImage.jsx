import React from "react";

const BgImage = () => {
  return (
    <>
      {/* bg image  */}
      <div className="hidden lg:flex absolute left-0 top-[4rem] lg:px-48 xl:px-60 w-full justify-between">
        <div className="flex gap-10 flex-col">
          <img
            className="size-48 bounce"
            src="/assets/bg_image/css3.svg"
            alt=""
          />
          <img
            className="size-56 -translate-x-16 rotate15"
            src="/assets/bg_image/tailwind.svg"
            alt=""
          />
        </div>
        <div className=" flex gap-10 flex-col">
          <img
            className="size-48 spin"
            src="/assets/bg_image/react.svg"
            alt=""
          />
          <img
            className="size-56 translate-x-20 pulse"
            src="/assets/bg_image/js.svg"
            alt=""
          />
        </div>
      </div>
      {/* bg image 1 */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          className="hidden xl:block w-full"
          src="/assets/bg_image/pattern.png"
          alt=""
        />
        <div className="relative">
          <img
            className="w-full h-[220px] object-cover"
            src="/assets/bg_image/bg-bottom.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default BgImage;
