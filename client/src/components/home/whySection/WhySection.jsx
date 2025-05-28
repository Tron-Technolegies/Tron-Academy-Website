import React from "react";
import WhyDetailElt from "./WhyDetailElt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhySection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-tr from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center text-center relative">
        <h4 className="comic-font md:text-4xl text-2xl font-black">
          <span className="text-hoverPrimary">Why</span> Tron Academy
        </h4>
        <p className="text-[#5E5E5E] roboto-font font-normal text-sm lg:text-base leading-[22px] max-w-[524px]">
          At TRON Academy, we don’t just teach—you learn the skills that
          guarantee your job-ready from day one.If you want to stand out, this
          is where you belong.Here’s why you should choose us:
        </p>
        <motion.img
          src="/robot.png"
          className="absolute lg:left-10 md:left-2 -left-10 md:w-[103px] md:h-[86px] w-[70px] h-[58px]"
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
      <div className="flex lg:flex-row flex-col justify-around items-center my-14">
        <div className="flex flex-col gap-10">
          <WhyDetailElt
  title={"Portfolio Building"}
  content={
    <>
      At Tron Academy, we help you achieve that. You’ll leave with not just a certificate but a portfolio that shows exactly where your strength lies-whether you’re enrolled in our coding, multimedia or <Link to="/digitalmarketing">digital marketing courses</Link>.
    </>
  }
/>
          <WhyDetailElt
            title={"Learn from Experts"}
            content={
              "At TRON Academy, you don’t just learn; you’re mentored by the best industry leaders who’ve made their mark. With insights from our instructors, you’ll gain the edge you need."
            }
          />
        </div>
        <div className="border lg:block hidden border-[#E671E5] border-dashed h-[200px]"></div>

        <div className="flex flex-col gap-10 mt-10 lg:mt-0">
          <WhyDetailElt
            title={"Placement support"}
            content={
              "We guarantee placement in our coding and offline/online digital marketing courses, ensuring you have the skills to land your ideal job, while our multimedia courses keep you on the fast track to success. "
            }
          />
          <WhyDetailElt
  title={"Hands-on Projects"}
  content={
    <>
      You'll learn by working directly with our GCC-based clients, applying your skills in a real-world setting - perfect for those taking our <Link to="/digitalmarketing">online digital marketing course</Link> or coding programs - to prepare you for industry challenges.
    </>
  }
/>
        </div>
      </div>
    </div>
  );
}
