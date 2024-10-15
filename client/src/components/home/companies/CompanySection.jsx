import React from "react";

export default function CompanySection() {
  return (
    <div className="px-[120px] py-10 bg-gradient-to-b from-[#F4E3FA]">
      <div className="max-w-[900px] flex flex-col gap-5 items-center mx-auto">
        <h4 className="text-4xl font-black roboto-font">
          <span className="text-hoverPrimary">Where</span> our students works by
          learning
        </h4>
        <p className="text-base inter-font max-w-[900px] text-center">
          Our students are chosen by top digital agencies for their exceptional
          talent and skills, ready to make a powerful impact in the industry.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-y-8 my-20 max-w-[960px] mx-auto">
        <img src="/Google.png" className="-translate-y-16"></img>
        <img src="/Meta.png" className="translate-y-16"></img>
        <img src="/Microsoft.png" className="-translate-y-16"></img>
        <img src="/Amazon.png" className="translate-y-16"></img>
        <img src="/Walmart.png" className="-translate-y-16"></img>
      </div>
    </div>
  );
}
