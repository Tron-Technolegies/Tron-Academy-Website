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
    <div className="px-[120px] py-10 bg-[#FDF8FF] flex flex-col gap-5 items-center">
      <h4 className="roboto-font text-4xl font-black">
        <span className="text-[#A157DC]">What</span> Makes Us Different
      </h4>
      <p className="inter-font max-w-[700px]">
        We don’t just prepare you for the job market; we launch you into it with
        an undeniable edge. Our academy is a powerhouse of excellence, designed
        for those who refuse to settle. With direct access to international
        clients, you’ll gain experience that others only dream of.
      </p>
      <div className="grid grid-cols-4 gap-3 my-5">
        {items.map((x, index) => (
          <p
            key={index}
            className="px-2 py-2 w-[256px] text-[15px] font-bold bg-[#F0EBF4] text-center rounded-s-full rounded-e-full"
          >
            {x}
          </p>
        ))}
      </div>
    </div>
  );
}
