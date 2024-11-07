import React from "react";
import { FaUsers } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import DetailCard from "./DetailCard";
import { useNavigate } from "react-router-dom";

export default function FindCourseSection() {
  const navigate = useNavigate();
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-tl from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center my-10">
        <div className="relative">
          <h4 className="comic-font md:text-4xl text-2xl font-black">
            Find Your Favourite Course
          </h4>
          <img
            src="/courseArrow.png"
            className="absolute top-1 sm:-right-24 -right-14"
          ></img>
        </div>

        <div className="flex gap-1 items-center w-full justify-center">
          <input
            type="text"
            placeholder="search your course.."
            className="bg-[#f7f4f4] px-4 py-3 rounded-lg lg:w-1/3 sm:w-1/2 w-4/5"
          ></input>
          <button
            onClick={() => navigate("/course")}
            className="text-3xl p-2 bg-[#f7f4f4] rounded-lg"
          >
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5 md:justify-around items-center my-10 mt-20">
        <DetailCard icon={<FaUsers />} no={1000} content={"Students"} />
        <DetailCard icon={<RiPresentationFill />} no={15} content={"Mentors"} />
        <DetailCard
          icon={<FaHandshakeSimple />}
          no={50}
          content={"Placement Partners"}
        />
      </div>
    </div>
  );
}
