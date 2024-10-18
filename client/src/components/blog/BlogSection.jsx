import React from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <div className="px-[120px] py-10 bg-gradient-to-br from-[#F4E3FA]">
      <div className="relative flex flex-col items-center gap-3">
        <h4 className="roboto-font text-4xl font-black">
          <span className="text-[#B277F3]">Explore</span> Our Blogs
        </h4>
        <div className="inter-font max-w-[550px] text-center font-medium">
          <p> Curious minds welcome! </p>
          <p>
            Check out our blog for a treasure trove of ideas, stories, and
            insights that can inspire your learning journey.
          </p>
        </div>
        <img
          src="/blog/icon-1.png"
          className="w-[56.35px] h-[58px] absolute right-5"
        ></img>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 gap-5 my-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <img
          src="/blog/bottom-bg.png"
          className="absolute -bottom-[100px] -z-10 object-contain"
        ></img>
      </div>
    </div>
  );
}
