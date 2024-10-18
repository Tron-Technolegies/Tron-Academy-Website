import React from "react";
import NextBatchCarousel from "./NextBatchCarousel";

export default function NextBatchSection() {
  return (
    <div className="px-[120px] py-10 bg-[#FAEFFF]">
      <div className="flex justify-between">
        <img src="/course/icon-4.png" className="w-[33.13px] h-[33.13px]"></img>
        <img src="/course/icon-5.png" className="w-[53.26px] h-[53.26px]"></img>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-4xl font-black roboto-font">
          <span className="text-[#B277F3]">Our</span> Next Batch
        </h3>
        <div className="inter-font flex flex-col gap-1 items-center">
          <p className="font-medium">
            Don’t miss your chance to advance-our next batch kicks off soon.
          </p>
          <p className="font-semibold">Register now!</p>
        </div>
      </div>
      <NextBatchCarousel />
    </div>
  );
}
