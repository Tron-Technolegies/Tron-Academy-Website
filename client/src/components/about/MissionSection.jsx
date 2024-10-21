import React from "react";

export default function MissionSection() {
  return (
    <div className="px-[120px] py-20 flex justify-between items-center relative">
      <div className="flex flex-col gap-3 items-start">
        <h5 className="roboto-font text-4xl font-black">
          <span className="text-[#A157DC] ">Our</span> Mission
        </h5>
        <p className="max-w-[600px] inter-font">
          Our goal is to redefine the rules of education. We prepare you to
          thrive in the real world, not just survive in the classroom. We remove
          hurdles rather than merely connecting theory to practise. If you’re
          not here to be extraordinary, you’re wasting your time.
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center inter-font font-semibold text-lg">
        <img
          src="/about/img-1.jpg"
          className="max-w-[361px] max-h-[418px] rounded-xl"
        ></img>
        <p>Our Founders</p>
      </div>
      <img
        src="/about/icon-1.png"
        className="w-[150px] h-[150px] absolute -top-10 -z-10 left-20"
      ></img>
      <img
        src="/about/icon-2.png"
        className="w-[150px] h-[150px] absolute -bottom-10 -z-10 left-0"
      ></img>
    </div>
  );
}
