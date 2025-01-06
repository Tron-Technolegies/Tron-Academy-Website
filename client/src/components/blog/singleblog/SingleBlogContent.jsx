import React from "react";

export default function SingleBlogContent({ data }) {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 inter-font bg-gradient-to-tl from-[#F4E3FA]">
      <h3 className="md:text-3xl text-lg text-center">{data.title}</h3>
      <div
        className="flex flex-col gap-7 my-5 "
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
}
