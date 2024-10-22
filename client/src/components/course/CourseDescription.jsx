import React from "react";

export default function CourseDescription({
  title,
  img,
  imgtitle,
  desc,
  points,
}) {
  return (
    <div className="flex flex-col gap-5 items-center animate-slideInLeft">
      <h4 className="comic-font md:text-5xl text-3xl text-[#B277F3] font-bold ">
        {title}
      </h4>
      <div className="flex gap-3 items-center ">
        <img src={img}></img>
        <p className="font-medium">
          The{" "}
          <span
            className={`${imgtitle === "Red" && "text-red-600"} ${
              imgtitle === "Blue" && "text-blue-600"
            } ${imgtitle === "Purple" && "text-purple-600"}`}
          >
            {imgtitle}
          </span>{" "}
          Pill
        </p>
      </div>
      <p className="max-w-[800px] text-center md:text-base text-sm inter-font text-[#081330]">
        {desc}
      </p>
      <div className="bg-[#FAEFFF] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-3 w-screen justify-items-center p-3 ">
        {points.map((x, index) => (
          <p
            className="inter-font text-[#33009E] md:text-base text-sm font-semibold"
            key={index}
          >
            {x}
          </p>
        ))}
      </div>
    </div>
  );
}
