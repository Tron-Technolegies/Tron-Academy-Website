import React from "react";

export default function AboutHeader() {
  return (
    <div
      className="px-[120px] py-20 bg-center flex justify-between items-center relative"
      style={{ backgroundImage: `url('/about/about-bg.png')` }}
    >
      <div className="flex flex-col gap-40 max-w-[500px]">
        <div className="flex flex-col gap-5">
          <h3 className="roboto-font text-4xl font-black">
            <span className="text-[#B277F3]">About </span>Us
          </h3>
          <p className="inter-font text-lg">
            Tron Academy sfjnvdjhbvdfhv ffvdb dcxbc xhvcxhcb xdhbcxc dvdfv
            vfvxfvfvdfv
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="roboto-font text-3xl font-semibold">
            Impressive Stats and Achievements You Can Trust
          </h4>
          <div className="text-[#5A5A5A] inter-font flex gap-10">
            <div className="flex gap-2 items-center">
              <p className="text-[32px] font-semibold">5/5</p>
              <p className="text-[15px] max-w-[75px]">Client Happiness</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[32px] font-semibold">700+</p>
              <p className="text-[15px] max-w-[75px]">Projects Completed</p>
            </div>
          </div>
          <button className="bg-[#A157DC] w-fit px-5 py-3 rounded-s-full rounded-e-full text-white hover:bg-black hover-animation">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <img
          src="/about/logo.png"
          className="max-w-[397px] max-h-[168px]"
        ></img>
      </div>
      <img
        src="/about/robot.png"
        className="absolute w-[67.72px] h-[85.2px] right-20 bottom-10"
      ></img>
    </div>
  );
}
