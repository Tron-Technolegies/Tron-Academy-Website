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

const buttonNames = ["Digital Marketing", "Coding", "Multimedia"];

export default function CourseTopSection() {
  const [active, setActive] = useState("Digital Marketing");
  return (
    <div className="bg-[#FDFAFE] px-[120px] py-10">
      <div className="flex flex-col gap-3 mx-auto items-center text-center max-w-[550px]">
        <h4 className="roboto-font text-4xl font-black">
          <span className="text-hoverPrimary">Explore</span> Course
        </h4>
        <p className="inter-font ">
          Build your skills in a dynamic learning space that blends creativity
          and practical knowledge for success in the digital world.
        </p>
      </div>
      <div className="flex justify-between items-start">
        <img src="/course/icon-2.png" className="w-[26.83px] h-[26.83px]"></img>
        <img src="/course/icon-1.png" className="w-[116px] h-[58px]"></img>
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
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center gap-10 justify-center my-10">
          {buttonNames.map((x, index) => (
            <button
              className={`px-4 py-2 flex gap-3 w-[280px] justify-center items-center inter-font font-semibold rounded-lg hover:bg-[#B277F3] hover:text-white hover-animation shadow-md ${
                active === x ? "bg-[#B277F3] text-white" : "bg-[#FAEFFF]"
              }`}
              onClick={() => setActive(x)}
              key={index}
            >
              {x?.toUpperCase()}
              <span>
                {active === x ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-10 justify-items-center">
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
      <img src="/course/icon-3.png" className="w-[116px] h-[58px]"></img>
    </div>
  );
}
