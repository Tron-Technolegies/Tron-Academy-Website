import React from "react";

const items = [
  "Professional Training",
  "Interactive Sessions",
  "On-job Experience",
  "International Client Exposure",
  "Internship",
  "Interview Training",
  "Soft Skill Development",
  "Job Assistance",
];

export default function DifferentSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-[#FDF8FF] flex flex-col gap-5 items-center">
      <h4 className="roboto-font md:text-4xl text-2xl font-black">
        <span className="text-[#A157DC]">What</span> Makes Us Different
      </h4>
      <p className="inter-font md:text-base text-sm max-w-[700px]">
        We don’t just prepare you for the job market; we launch you into it with
        an undeniable edge. Our academy is a powerhouse of excellence, designed
        for those who refuse to settle. With direct access to international
        clients, you’ll gain experience that others only dream of.
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-5">
        {items.map((x, index) => (
          <p
            key={index}
            className="px-2 py-2 w-[245px] md:text-[15px] text-sm font-bold bg-[#F0EBF4] text-center rounded-s-full rounded-e-full"
          >
            {x}
          </p>
        ))}
      </div>
    </div>
  );
}
