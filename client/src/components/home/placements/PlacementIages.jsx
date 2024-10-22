import React from "react";

export default function PlacementIages({ img, name, style }) {
  return (
    <div className={`flex flex-col items-center gap-5 ${style}`}>
      <img
        src={img}
        className="xl:w-[201px] xl:h-[201px] lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full"
      ></img>
      <p>{name}</p>
    </div>
  );
}
