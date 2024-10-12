import React from "react";

export default function ExploreCourseCard({ icon, name }) {
  return (
    <div className="flex flex-col relative w-[300px] h-[552px] overflow-hidden">
      <img src={icon} className="w-[300px] h-[552px] rounded-lg"></img>
      <button className="absolute p-2 rounded-lg bg-black text-white hover:bg-opacity-100 hover-animation bg-opacity-60 w-[300px] bottom-0">
        {name}
      </button>
    </div>
  );
}
