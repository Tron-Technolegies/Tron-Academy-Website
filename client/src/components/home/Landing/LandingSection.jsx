import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LandingSection() {
  return (
    <div className="px-[120px] py-10 flex justify-between items-center bg-gradient-to-br from-[#F4E3FA] from-5% ...">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl text-primary leading-[70px] comic-font font-bold">
          UNLOCK YOUR POTENTIAL WITH{" "}
          <span className="bg-[#FDCCFB] px-1">TRON ACADEMY</span>
        </h1>
        <p className="text-[#5E5E5E] text-2xl roboto-font">
          Master the skills you need to thrive in the digital world.
        </p>
        <p className="text-[#5E5E5E] text-2xl roboto-font font-bold max-w-[335px]">
          UNLOCK YOUR FUTURE WITH TRON ACADEMY!
        </p>
        <div className="flex gap-5 items-center">
          <button className="flex gap-2 items-center bg-black hover:bg-hoverPrimary hover-animation w-fit h-fit text-white p-4 rounded-lg">
            <span className="text-sm">Enroll Now</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
          <img
            className="max-w-[210px] max-h-[113px]"
            src="/bookingPercent.png"
          ></img>
        </div>
      </div>
      <img className="max-w-[603px] h-[531px]" src="/home1.png"></img>
    </div>
  );
}
