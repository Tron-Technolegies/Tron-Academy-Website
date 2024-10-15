import React from "react";

export default function SisterElt({ img }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img src={img} className="w-[126px] h-[210px] rounded-lg"></img>
      <button className="bg-black rounded-lg px-4 py-2 text-white hover:bg-hoverPrimary hover-animation">
        Visit Here
      </button>
    </div>
  );
}
