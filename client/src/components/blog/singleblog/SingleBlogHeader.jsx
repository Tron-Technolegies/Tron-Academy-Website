import React from "react";

export default function SingleBlogHeader() {
  return (
    <div className="px-[120px] py-20 flex flex-col gap-10 items-center bg-gradient-to-br from-[#F4E3FA]">
      <h4 className="inter-font text-4xl font-medium">
        Dive into the dynamic world of digital marketing
      </h4>
      {/* <p>with our comprehensive diploma program. Learn the fundamentals </p> */}
      <img
        src="/blog/blog-1.jpg"
        className="lg:w-[1020px] lg:h-[520px] rounded-xl"
      ></img>
    </div>
  );
}
