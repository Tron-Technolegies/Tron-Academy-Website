import React from "react";
import { FaUsers } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import DetailCard from "./DetailCard";

export default function FindCourseSection() {
  return (
    <div className="px-[120px] py-10 bg-gradient-to-tl from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center my-10">
        <div className="relative">
          <h4 className="roboto-font text-4xl font-black">
            Find Your Favourite Course
          </h4>
          <img
            src="/courseArrow.png"
            className="absolute top-1 -right-24"
          ></img>
        </div>

        <div className="flex gap-1 items-center">
          <input
            type="text"
            placeholder="search your course.."
            className="bg-[#f0ebeb] px-4 py-3 rounded-lg"
          ></input>
          <button className="text-3xl p-2 bg-[#f0ebeb] rounded-lg">
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="flex justify-around my-10 mt-20">
        <DetailCard icon={<FaUsers />} no={"1000+"} content={"Students"} />
        <DetailCard
          icon={<RiPresentationFill />}
          no={"15+"}
          content={"Mentors"}
        />
        <DetailCard
          icon={<FaHandshakeSimple />}
          no={"50+"}
          content={"Placement Partners"}
        />
      </div>
    </div>
  );
}
