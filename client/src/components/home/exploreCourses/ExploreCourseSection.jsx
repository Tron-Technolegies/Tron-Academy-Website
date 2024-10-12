import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExploreCourseCard from "./ExploreCourseCard";

export default function ExploreCourseSection() {
  return (
    <div className="px-[120px] py-10 bg-gradient-to-br from-[#F4E3FA] from-5% flex justify-between item-center pb-20">
      <div className="max-w-[300px] flex flex-col justify-center gap-5">
        <h4 className="text-4xl font-black roboto-font">
          <span className="text-hoverPrimary">Explore</span> Our Trending Course
        </h4>
        <div className="flex gap-3 items-center">
          <button className="flex gap-2 items-center bg-black rounded-lg px-3 py-2 text-white hover:bg-hoverPrimary hover-animation text-sm roboto-font">
            <span>View All</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
          <img src="/exploreArrow.png"></img>
        </div>
      </div>
      <div className="flex gap-3">
        <ExploreCourseCard icon={"/digital.jpg"} name={"Digital Marketing"} />
        <ExploreCourseCard icon={"/coding.jpg"} name={"Coding"} />
        <ExploreCourseCard icon={"/multimedia.jpg"} name={"Multimedia"} />
      </div>
    </div>
  );
}
