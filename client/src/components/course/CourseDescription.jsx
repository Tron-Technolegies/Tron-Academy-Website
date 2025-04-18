import { motion } from "framer-motion";
import React from "react";

export default function CourseDescription({
  title,
  img,
  imgtitle,
  desc,
  points,
}) {
  return (
    <div className="flex flex-col gap-5 items-center animate-slideInLeft">
      <h4 className="comic-font md:text-5xl text-3xl text-[#B277F3] font-bold ">
        {title}
      </h4>
      <div className="flex gap-3 items-center ">
        <motion.img
          animate={{
            rotateY: [0, 180], // Rotate forward 360 degrees, then reverse
          }}
          transition={{
            rotateY: {
              repeat: Infinity, // Repeat indefinitely
              repeatType: "reverse", // Alternate between forward and backward rotation
              duration: 2, // Duration for one full forward and backward rotation cycle
              ease: "easeInOut", // Smooth ease in and out for the rotation
            },
          }}
          src={img}
        ></motion.img>
        <p className="font-medium">
          The{" "}
          <span
            className={`${imgtitle === "Red" && "text-red-600"} ${
              imgtitle === "Blue" && "text-blue-600"
            } ${imgtitle === "Purple" && "text-purple-600"}`}
          >
            {imgtitle}
          </span>{" "}
          Pill
        </p>
      </div>
      <p className="max-w-[800px] text-center md:text-base text-sm inter-font text-[#081330]">
        {desc}
      </p>
      <div className="bg-[#FAEFFF] w-screen py-3 lg:px-[120px] px-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
          {points?.map((x, index) => (
            <p
              key={index}
              className=" bg-[#e5ccf1] px-3 py-1 rounded-md w-[360px]inter-font text-[#33009E] text-center md:text-base text-sm font-semibold"
            >
              {x}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
