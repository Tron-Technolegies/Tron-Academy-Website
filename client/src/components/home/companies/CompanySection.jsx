import React from "react";
import CompanyCarousel from "./CompanyCarousel";

export default function CompanySection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-b from-[#F4E3FA]">
      <div className="max-w-[900px] flex flex-col gap-5 items-center mx-auto">
        <h4 className="md:text-4xl text-2xl font-black comic-font text-center">
          <span className="text-hoverPrimary">Where</span> our students work to
          learn and grow.
        </h4>
        <p className="md:text-base text-sm inter-font max-w-[900px] text-center">
          Our students are chosen by top digital agencies for their exceptional
          talent and skills, ready to make a powerful impact in the industry.
        </p>
      </div>
      <CompanyCarousel />
    </div>
  );
}
