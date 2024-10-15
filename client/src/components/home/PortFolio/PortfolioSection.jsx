import React from "react";
import PortfolioDetailCard from "./PortfolioDetailCard";

export default function PortfolioSection() {
  return (
    <div className="px-[120px] py-20 bg-gradient-to-tl from-[#F4E3FA] from-5% flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div className="max-w-[810px] flex flex-col gap-5 inter-font">
          <h4 className="text-5xl font-semibold">
            Portfolio & Work experience certificate
          </h4>
          <p>
            At Tron Academy, we believe in equipping students with not just
            knowledge but also the support they need to effectively showcase
            their skills.
          </p>
        </div>
        <img
          src="/portfolioRobot.png"
          className="w-[81.38px] h-[92.37px]"
        ></img>
      </div>
      <div className="flex items-center">
        <div className="w-[60px] h-[60px] flex justify-center items-center text-xl font-bold rounded-full bg-black text-white">
          1
        </div>
        <div className="h-[2px] bg-black grow"></div>
        <div className="w-[60px] h-[60px] flex justify-center items-center text-xl font-bold rounded-full bg-black text-white">
          2
        </div>
        <div className="h-[2px] bg-black grow"></div>
      </div>
      <div className="flex justify-between gap-4">
        <PortfolioDetailCard
          title={"Why Portfolio"}
          content={
            "You’ll leave with more than just a certificate; you’ll have a portfolio that clearly displays your strengths. It helps you shine and make an impact on any employer or client."
          }
        />
        <PortfolioDetailCard
          title={"Why Experience Certificate"}
          content={
            "Get a UAE-based work experience certificate upon course completion. This isn’t just a piece of paper; it proves your expertise and sets you apart as a top candidate."
          }
        />
      </div>
    </div>
  );
}
