import React from "react";

const stats = [
  { img: "/about/icon-3.png", num: "1000+", name: "Google Reviews" },
  { img: "/about/icon-4.png", num: "30+", name: "Technologies" },
  { img: "/about/icon-5.png", num: "100+", name: "Placement" },
  { img: "/about/icon-6.png", num: "250+", name: "Companies" },
];

export default function WhyStatsSection() {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 inter-font flex flex-col gap-7 items-center relative">
      <div className="flex flex-col gap-3 items-center">
        <h4 className="roboto-font md:text-4xl text-2xl text-center font-black">
          <span className="text-[#A157DC]">Why</span> Should you prefer us
        </h4>
        <p className="text-center md:text-base text-sm">
          Because we’re the best- there’s simply no comparison.
        </p>
      </div>
      <p className="max-w-[800px] md:text-base text-sm text-center z-10">
         Our courses in Coding, Multimedia, and Digital Marketing aren’t just
        classes; they’re your ticket to the top. Whether you’re starting out or
        aiming high, We prepare you to conquer the competition. Don’t just
        learn-dominate. Choose us and watch your future soar.
      </p>
      <div className="flex sm:flex-row flex-col gap-10 items-center justify-between w-full my-5">
        {stats.map((x, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 sm:items-start items-center sm:border-0 border sm:p-0 p-3 rounded-lg sm:w-fit w-[300px] sm:shadow-none shadow-md"
          >
            <img src={x.img}></img>
            <p className="lg:text-5xl text-3xl font-bold">{x.num}</p>
            <p className="lg:text-2xl text-xl">{x.name}</p>
          </div>
        ))}
      </div>
      <p className="text-[#A157DC] md:text-[15px] text-sm text-center font-medium">
        So why wait? Start your journey with the world's leading experts today!
      </p>
      <img
        src="/about/robot-2.png"
        className="absolute md:w-[88px] md:h-[92px] w-[40px] h-[42px] sm:top-10 sm:right-10 right-0"
      ></img>
    </div>
  );
}
