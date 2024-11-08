import React from "react";

export default function TeamCard({ img, role, name }) {
  return (
    <div className="inter-font flex flex-col gap-2 text-[#071332]">
      <img
        src={img}
        className="w-[280px] h-[280px] rounded-xl object-cover object-top"
      ></img>
      <p className="text-[15px] font-medium">{role}</p>
      <p className="md:text-xl text-base font-semibold">{name}</p>
    </div>
  );
}
