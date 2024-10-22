import React from "react";

export default function CompanySection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-b from-[#F4E3FA]">
      <div className="max-w-[900px] flex flex-col gap-5 items-center mx-auto">
        <h4 className="md:text-4xl text-2xl font-black roboto-font text-center">
          <span className="text-hoverPrimary">Where</span> our students works by
          learning
        </h4>
        <p className="md:text-base text-sm inter-font max-w-[900px] text-center">
          Our students are chosen by top digital agencies for their exceptional
          talent and skills, ready to make a powerful impact in the industry.
        </p>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-y-8 gap-y-20 md:my-20 gap-20 md:gap-2 pt-10 max-w-[960px] mx-auto">
        <img src="/Google.png" className="md:-translate-y-16"></img>
        <img src="/Meta.png" className="md:translate-y-16"></img>
        <img src="/Microsoft.png" className="md:-translate-y-16"></img>
        <img src="/Amazon.png" className="md:translate-y-16"></img>
        <img src="/Walmart.png" className="md:-translate-y-16"></img>
      </div>
    </div>
  );
}
