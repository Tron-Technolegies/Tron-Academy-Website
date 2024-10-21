import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LandingSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 flex lg:flex-row flex-col gap-5 justify-between items-center bg-gradient-to-br from-[#F4E3FA] from-5% ...">
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-5xl text-4xl text-primary leading-[70px] comic-font font-bold">
          OWN YOUR PATH AND DEFINE{" "}
          <span className="bg-[#FDCCFB] px-1">SUCCESS</span>
        </h1>
        <p className="text-[#5E5E5E] text-sm lg:text-base max-w-[500px] text-justify roboto-font">
          Change your life in just few months... if you're ready to Focus on
          mastering the right skills with the best guidance at TRON Academy
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
