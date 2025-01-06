import React from "react";
import BlogCard from "./BlogCard";
import { allBlogs } from "../../utils/blogs";

export default function BlogSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-br from-[#F4E3FA]">
      <div className="relative flex flex-col items-center gap-3">
        <h4 className="comic-font md:text-4xl text-2xl font-black">
          <span className="text-[#B277F3]">Explore</span> Our Blogs
        </h4>
        <div className="inter-font max-w-[550px] text-center md:text-base text-sm font-medium">
          <p> Curious minds welcome! </p>
          <p>
            Check out our blog for a treasure trove of ideas, stories, and
            insights that can inspire your learning journey.
          </p>
        </div>
        <img
          src="/blog/icon-1.png"
          className="w-[56.35px] h-[58px] absolute sm:right-5 -right-5"
        ></img>
      </div>
      <div className="relative">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5">
          {allBlogs.map((x) => (
            <BlogCard
              key={x.id}
              id={x.id}
              image={x.image}
              heading={x.title}
              date={x.date}
            />
          ))}
        </div>
        <img
          src="/blog/bottom-bg.png"
          className="absolute -bottom-[100px] -z-10 object-contain"
        ></img>
      </div>
    </div>
  );
}
