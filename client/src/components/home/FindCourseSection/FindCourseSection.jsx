import React, { useContext, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import DetailCard from "./DetailCard";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../../CourseContext";
import {
  codingArray,
  digialArray,
  multimediaArray,
} from "../../../utils/course";

export default function FindCourseSection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { setActive } = useContext(CourseContext);

  function handleClick() {
    const isCoding = codingArray.some((x) =>
      x.toLowerCase().includes(search.replace(/\s+/g, ""))
    );
    const isMulti = multimediaArray.some((x) =>
      x.toLowerCase().includes(search.replace(/\s+/g, ""))
    );
    const isDigital = digialArray.some((x) =>
      x.toLowerCase().includes(search.replace(/\s+/g, ""))
    );
    if (isCoding) {
      navigate("/course");
      setActive("Coding");
      return;
    }
    if (isMulti) {
      navigate("/course");
      setActive("Multimedia");
      return;
    }
    if (isDigital) {
      navigate("/course");
      setActive("Digital Marketing");
      return;
    }
  }
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-tl from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center my-10">
        <div className="relative">
          <h4 className="comic-font md:text-4xl text-2xl font-black">
            Find Your ideal Course
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
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="bg-[#f8ddf7] px-4 py-3 rounded-lg lg:w-1/3 sm:w-1/2 w-4/5 placeholder-[#dba9ed]"
          ></input>
          <button
            onClick={handleClick}
            className="text-3xl p-2 bg-[#f8ddf7] rounded-lg"
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
