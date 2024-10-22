import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { handleChatClick } from "../../../utils/whatsApp";

export default function LandingSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 flex lg:flex-row flex-col gap-5 justify-between items-center bg-gradient-to-br from-[#F4E3FA] from-5% ...">
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-primary comic-font font-bold flex flex-col gap-3">
          OWN YOUR PATH AND DEFINE{" "}
          <span className="bg-[#FDCCFB] px-1 w-fit">SUCCESS</span>
        </h1>
        <p className="text-[#5E5E5E] text-sm lg:text-base max-w-[500px] text-justify roboto-font">
          Change your life in just few months... if you're ready to Focus on
          mastering the right skills with the best guidance at TRON Academy
        </p>

        <div className="flex gap-5 items-center">
          <button
            onClick={() => handleChatClick("enroll in one of your courses.")}
            className="flex gap-2 items-center bg-black hover:bg-hoverPrimary hover-animation w-fit h-fit text-white md:p-4 p-2 rounded-lg"
          >
            <span className="text-sm">Enroll Now</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
          <img
            className="md:max-w-[210px] md:max-h-[113px] max-w-[150px] max-h-[81px]"
            src="/bookingPercent.png"
          ></img>
        </div>
      </div>
      <img
        className="md:max-w-[603px] md:h-[531px] max-w-[350px] h-[308px]"
        src="/home1.png"
      ></img>
    </div>
  );
}
