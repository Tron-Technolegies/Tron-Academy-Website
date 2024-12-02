import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CourseDescription from "./CourseDescription";

import CourseCard from "./CourseCard";
import {
  coding,
  codingCourses,
  digitalCourses,
  digitalMarketing,
  multiMedia,
  multimediaCourses,
} from "../../utils/course";
import { motion } from "framer-motion";

const buttonNames = ["Digital Marketing", "Coding", "Multimedia"];

export default function CourseTopSection() {
  const [active, setActive] = useState("Digital Marketing");
  return (
    <div className="bg-[#FDFAFE] lg:px-[120px] lg:py-10 px-10 py-5">
      <div className="flex flex-col gap-3 mx-auto items-center text-center max-w-[550px]">
        <h4 className="comic-font md:text-4xl text-2xl font-black">
          <span className="text-hoverPrimary">Explore</span> Course
        </h4>
        <p className="inter-font md:text-base text-sm">
          Build your skills in a dynamic learning space that blends creativity
          and practical knowledge for success in the digital world.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-10 justify-center my-10">
        {buttonNames.map((x, index) => (
          <button
            className={`px-4 py-2 flex gap-3 w-[280px] lg:text-base text-sm justify-center items-center inter-font font-semibold rounded-lg hover:bg-[#B277F3] hover:scale-110 hover:text-white hover-animation shadow-md ${
              active === x ? "bg-[#B277F3] text-white" : "bg-[#FAEFFF]"
            }`}
            onClick={() => setActive(x)}
            key={index}
          >
            {x?.toUpperCase()}
            <span>{active === x ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-between items-start">
        <motion.img
          src="/course/icon-2.png"
          className="w-[26.83px] h-[26.83px] hidden sm:block"
          animate={{
            rotate: [0, 360], // Continuous full rotation
            x: [0, 50, 100, 50, 0], // Simulating the arc movement on the X-axis
            y: [0, -30, 0, 30, 0], // Simulating the arc movement on the Y-axis
          }}
          transition={{
            rotate: {
              repeat: Infinity, // Infinite rotation
              duration: 4, // Total time to complete one rotation
              ease: "linear", // Smooth linear rotation
            },
            x: {
              repeat: Infinity, // Repeat the arc motion
              duration: 4, // Duration for one back-and-forth arc motion
              repeatType: "reverse", // Move back and forth along the arc
              ease: "easeInOut", // Smooth easing for arc motion
            },
            y: {
              repeat: Infinity, // Repeat the arc motion
              duration: 4, // Duration for one back-and-forth arc motion
              repeatType: "reverse", // Move back and forth along the arc
              ease: "easeInOut", // Smooth easing for arc motion
            },
          }}
        ></motion.img>
        <motion.img
          src="/course/icon-1.png"
          className="md:w-[116px] md:h-[58px] w-[80px] h-[40px]"
          animate={{
            rotateY: [-180, 180], // Rotate back and forth by 180 degrees
          }}
          transition={{
            rotateY: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Back and forth
              duration: 2, // Duration for one full rotation cycle (back and forth)
              ease: "easeInOut", // Smooth easing for the rotation
            },
          }}
        ></motion.img>
      </div>
      <div>
        {active === "Digital Marketing" && (
          <CourseDescription
            title={digitalMarketing.title}
            img={digitalMarketing.img}
            imgtitle={digitalMarketing.imgTitle}
            desc={digitalMarketing.desc}
            points={digitalMarketing.points}
          />
        )}
        {active === "Coding" && (
          <CourseDescription
            title={coding.title}
            img={coding.img}
            imgtitle={coding.imgTitle}
            desc={coding.desc}
            points={coding.points}
          />
        )}
        {active === "Multimedia" && (
          <CourseDescription
            title={multiMedia.title}
            img={multiMedia.img}
            imgtitle={multiMedia.imgTitle}
            desc={multiMedia.desc}
            points={multiMedia.points}
          />
        )}
      </div>
      <div className="max-w-[900px] flex justify-center mx-auto my-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-content-center mx-auto">
          {active === "Digital Marketing" &&
            digitalCourses.map((x) => (
              <CourseCard key={x.id} name={x.name} months={x.months} />
            ))}
          {active === "Coding" &&
            codingCourses.map((x) => (
              <CourseCard key={x.id} name={x.name} months={x.months} />
            ))}
          {active === "Multimedia" &&
            multimediaCourses.map((x) => (
              <CourseCard key={x.id} name={x.name} months={x.months} />
            ))}
        </div>
      </div>
      <motion.img
        src="/course/icon-3.png"
        className="w-[116px] h-[58px]"
        animate={{
          rotateY: [-180, 180], // Rotate back and forth by 180 degrees
        }}
        transition={{
          rotateY: {
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Back and forth
            duration: 2, // Duration for one full rotation cycle (back and forth)
            ease: "easeInOut", // Smooth easing for the rotation
          },
        }}
      ></motion.img>
    </div>
  );
}
