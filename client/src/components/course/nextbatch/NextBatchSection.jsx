import React from "react";
import NextBatchCarousel from "./NextBatchCarousel";
import { motion } from "framer-motion";

export default function NextBatchSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-[#FAEFFF]">
      <div className="flex justify-between">
        <motion.img
          src="/course/icon-4.png"
          className="w-[33.13px] h-[33.13px]"
          animate={{
            rotate: [-50, 50], // Swing between -15 degrees to 15 degrees
          }}
          transition={{
            rotate: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Go back and forth
              duration: 2, // Duration for one full swing cycle (back and forth)
              ease: "easeInOut", // Smooth easing for pendulum-like motion
            },
          }}
        ></motion.img>
        <img src="/course/icon-5.png" className="w-[53.26px] h-[53.26px]"></img>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="md:text-4xl text-2xl font-black comic-font">
          <span className="text-[#B277F3]">Our</span> Next Batch
        </h3>
        <div className="inter-font flex flex-col gap-1 items-center md:text-base text-center text-sm">
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
