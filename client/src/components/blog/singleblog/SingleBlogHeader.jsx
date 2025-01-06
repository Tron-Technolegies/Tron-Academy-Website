import React from "react";

export default function SingleBlogHeader({ data }) {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 flex flex-col gap-10 items-center bg-gradient-to-br from-[#F4E3FA]">
      <h4 className="inter-font md:text-4xl text-2xl text-center font-medium">
        {data?.title}
      </h4>
      {/* <p>with our comprehensive diploma program. Learn the fundamentals </p> */}
      <img
        src={data?.image}
        className="lg:w-[1020px] lg:h-[520px] rounded-xl"
      ></img>
    </div>
  );
}
