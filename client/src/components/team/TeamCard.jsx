import React from "react";

export default function TeamCard({ img }) {
  return (
    <div className="inter-font flex flex-col gap-2 text-[#071332]">
      <img
        src={img}
        className="w-[331px] h-[373px] rounded-xl object-cover object-top"
      ></img>
      <p className="text-[15px] font-medium">Developer</p>
      <p className="md:text-xl text-base font-semibold">Mr UnKnown</p>
    </div>
  );
}
