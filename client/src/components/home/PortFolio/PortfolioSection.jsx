import React from "react";
import PortfolioDetailCard from "./PortfolioDetailCard";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 bg-gradient-to-tl from-[#F4E3FA] from-5% flex flex-col gap-10">
      <div className="flex justify-between md:items-end items-start">
        <div className="max-w-[810px] flex flex-col gap-5 comic-font">
          <h4 className="md:text-5xl text-3xl font-semibold">
            Portfolio & Work experience certificate
          </h4>
          <p className="md:text-base inter-font text-sm">
            At Tron Academy, we believe in equipping students with not just
            knowledge but also the support they need to effectively showcase
            their skills.
          </p>
        </div>
        <motion.img
          src="/portfolioRobot.png"
          className="w-[81.38px] h-[92.37px]"
          animate={{
            rotate: [-15, 15], // Swing between -15 to 15 degrees
            x: [0, 5, 0], // Translate 20px left and right
          }}
          transition={{
            rotate: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Back and forth motion
              duration: 1, // Duration of each swing
              ease: "easeInOut", // Smooth pendulum effect
            },
            x: {
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Moves back and forth
              duration: 1, // Sync with the swing duration
              ease: "easeInOut", // Smooth easing
            },
          }}
        ></motion.img>
      </div>
      <div className="flex sm:flex-col flex-row sm:gap-10 gap-5">
        <div className="flex sm:flex-row flex-col items-center">
          <div className="md:w-[60px] md:h-[60px] w-[35px] h-[35px] flex justify-center items-center text-xl font-bold rounded-full bg-black text-white">
            1
          </div>
          <div className="h-[2px] hidden sm:block bg-black grow"></div>
          <div className="sm:hidden w-[2px] bg-black grow"></div>
          <div className="md:w-[60px] md:h-[60px] w-[35px] h-[35px] flex justify-center items-center text-xl font-bold rounded-full bg-black text-white">
            2
          </div>
          <div className="h-[2px] hidden sm:block bg-black grow"></div>
          <div className="sm:hidden w-[2px] bg-black grow"></div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between gap-4">
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
    </div>
  );
}
