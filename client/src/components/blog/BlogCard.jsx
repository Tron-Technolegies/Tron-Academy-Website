import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <Link
      to={"/blog/1"}
      className="bg-[#F0EBF4] p-5 rounded-xl inter-font font-medium lg:text-base text-sm flex flex-col gap-4"
    >
      <img src="/blog/blog-1.jpg" className="rounded-lg overflow-hidden"></img>
      <p className="text-[#5A5A5A]">
        Dive into the dynamic world of digital marketing with our comprehensive
        diploma program. Learn the fundamentals{" "}
      </p>
      <p className="text-[#242424]">Date : 01/12/2024</p>
    </Link>
  );
}
