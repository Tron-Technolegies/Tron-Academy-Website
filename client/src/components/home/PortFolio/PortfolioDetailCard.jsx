import React from "react";

export default function PortfolioDetailCard({ title, content }) {
  return (
    <div className="inter-font bg-[#F4E3FA] rounded-lg p-3 flex flex-col gap-3">
      <h4 className="md:text-[40px] text-xl md:leading-10">{title}</h4>
      <p className="md:text-base text-sm">{content}</p>
    </div>
  );
}
