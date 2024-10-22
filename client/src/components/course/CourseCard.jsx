import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CourseCard({ name, months, file }) {
  return (
    <div className="bg-[#B277F3] w-[280px] px-4 py-2 rounded-lg shadow-md shadow-[#B277F3] inter-font text-white flex flex-col justify-between h-[120px] animate-slideInTop">
      <h4 className="font-semibold">{name?.toUpperCase()}</h4>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{months}</p>
        <a
          href={file}
          download
          className="flex gap-2 items-center p-2 rounded-md bg-white text-black text-xs font-semibold hover:bg-black hover:text-white hover-animation"
        >
          <span>View</span>
          <span>
            <IoIosArrowRoundForward />
          </span>
        </a>
      </div>
    </div>
  );
}
