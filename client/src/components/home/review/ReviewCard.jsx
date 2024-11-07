import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

export default function ReviewCard({ review, img, star, name, position }) {
  return (
    <div className="review-card p-5 rounded-lg h-[455px] flex flex-col justify-between gap-5 items-center source-font">
      <p className="max-w-[350px] text-center text-[#FFFFFF] md:text-base text-sm">
        {review}
      </p>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-1">
          {Array(star)
            .fill()
            .map((_, index) => (
              <FaStar color="#FFB800" key={index} />
            ))}
          {Array(5 - star)
            .fill()
            .map((_, index) => (
              <CiStar color="#FFB800" key={index} />
            ))}
        </div>
        <img
          src={img}
          className="w-[50px] h-[50px] rounded-full object-cover"
        ></img>
        <p className="text-[#FFFFFF] text-lg">{name}</p>
        <p className="text-[#FFFFFF99] text-sm">{position}</p>
      </div>
    </div>
  );
}
