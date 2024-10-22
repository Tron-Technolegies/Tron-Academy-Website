import React from "react";

export default function NextBatchCard({ month, date, course }) {
  return (
    <div className="bg-white py-3 px-5 rounded-md flex gap-5 items-center justify-between inter-font h-[120px]">
      <div className="text-[#B277F3] flex items-center flex-col gap-1 font-extrabold md:text-3xl text-xl">
        <p>{month}</p>
        <p>{date}</p>
      </div>
      <p className="font-semibold md:text-base text-sm text-end">
        {course?.toUpperCase()}
      </p>
    </div>
  );
}
