import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExploreCourseCard from "./ExploreCourseCard";
import { useNavigate } from "react-router-dom";

export default function ExploreCourseSection() {
  const navigate = useNavigate();
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-br from-[#F4E3FA] from-5% flex xl:flex-row flex-col justify-between item-center pb-20">
      <div className="xl:max-w-[300px] flex flex-col items-center xl:items-start justify-center gap-5">
        <h4 className="md:text-4xl text-2xl text-center font-black roboto-font">
          <span className="text-hoverPrimary">Explore</span> Our Trending Course
        </h4>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => navigate("/course")}
            className="flex gap-2 items-center bg-black rounded-lg px-3 py-2 text-white hover:bg-hoverPrimary hover-animation text-sm roboto-font"
          >
            <span>View All</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
          <img src="/exploreArrow.png" className="hidden xl:block"></img>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-3 justify-center xl:mt-0 mt-10">
        <ExploreCourseCard icon={"/digital.jpg"} name={"Digital Marketing"} />
        <ExploreCourseCard icon={"/coding.jpg"} name={"Coding"} />
        <ExploreCourseCard icon={"/multimedia.jpg"} name={"Multimedia"} />
      </div>
    </div>
  );
}
