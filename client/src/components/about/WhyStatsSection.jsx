import React from "react";

const stats = [
  { img: "/about/icon-3.png", num: "1000+", name: "Google Reviews" },
  { img: "/about/icon-4.png", num: "30+", name: "Technologies" },
  { img: "/about/icon-5.png", num: "100+", name: "Placement" },
  { img: "/about/icon-6.png", num: "250+", name: "Companies" },
];

export default function WhyStatsSection() {
  return (
    <div className="px-[120px] py-20 inter-font flex flex-col gap-7 items-center relative">
      <div className="flex flex-col gap-3 items-center">
        <h4 className="roboto-font text-4xl font-black">
          <span className="text-[#A157DC]">Why</span> Should you prefer us
        </h4>
        <p>Because we’re the best- there’s simply no comparison.</p>
      </div>
      <p className="max-w-[800px] text-center">
         Our courses in Coding, Multimedia, and Digital Marketing aren’t just
        classes; they’re your ticket to the top. Whether you’re starting out or
        aiming high, We prepare you to conquer the competition. Don’t just
        learn-dominate. Choose us and watch your future soar.
      </p>
      <div className="flex justify-between w-full my-5">
        {stats.map((x, index) => (
          <div key={index} className="flex flex-col gap-5 items-start">
            <img src={x.img}></img>
            <p className="text-5xl font-bold">{x.num}</p>
            <p className="text-2xl">{x.name}</p>
          </div>
        ))}
      </div>
      <p className="text-[#A157DC] text-[15px] font-medium">
        So why wait? Start your journey with the world's leading experts today!
      </p>
      <img src="/about/robot-2.png" className="absolute top-10 right-10"></img>
    </div>
  );
}
