import React from "react";

export default function InstructorCard({ img, name, position }) {
  return (
    <div className="flex flex-col p-2 rounded-lg bg-[#FAFAFA] w-fit">
      <img
        className="w-[212px] h-[161px] object-cover object-top rounded-lg"
        src={img}
      ></img>
      <div className="flex justify-between items-center px-2 pt-3 pb-1">
        <p className="text-[#3E3232] roboto-font text-[13px]">{name}</p>
        <p className="text-[#3E3232BF] roboto-font text-xs">{position}</p>
      </div>
    </div>
  );
}
