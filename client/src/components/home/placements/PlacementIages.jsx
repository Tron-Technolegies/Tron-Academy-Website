import React from "react";

export default function PlacementIages({ img, name, style }) {
  return (
    <div className={`flex flex-col items-center gap-5 ${style}`}>
      <img src={img} className="w-[201px] h-[201px] rounded-full"></img>
      <p>{name}</p>
    </div>
  );
}
