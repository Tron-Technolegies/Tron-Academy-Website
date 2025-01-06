import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, heading, date, id }) {
  return (
    <Link
      to={`/blog/${id}`}
      className="bg-[#F0EBF4] p-5 rounded-xl inter-font font-medium lg:text-base text-sm flex flex-col gap-4"
    >
      <img src={image} className="rounded-lg overflow-hidden"></img>
      <p className="text-[#5A5A5A]">{heading?.slice(0, 80)}</p>
      <p className="text-[#242424]">{date}</p>
    </Link>
  );
}
