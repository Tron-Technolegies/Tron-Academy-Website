import React from "react";
import WhyDetailElt from "./WhyDetailElt";

export default function WhySection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-tr from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center text-center relative">
        <h4 className="roboto-font text-4xl font-black">
          <span className="text-hoverPrimary">Why</span> Tron Academy
        </h4>
        <p className="text-[#5E5E5E] roboto-font font-normal text-base leading-[22px] max-w-[524px]">
          At Tron Academy, we focus on providing personalized, practical, and
          results-driven learning experiences. Here’s why you should choose us:
        </p>
        <img src="/robot.png" className="absolute left-10"></img>
      </div>
      <div className="flex lg:flex-row flex-col justify-around items-center my-14">
        <div className="flex flex-col  gap-10">
          <WhyDetailElt
            title={"Portfolio Building"}
            content={
              "At Tron Academy, we help you achieve that. You’ll leave with not just    a certificate but a portfolio that shows exactly where your strength lies."
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
            title={"100% Job Support"}
            content={
              "We guarantee placement in our coding and digital marketing programs, ensuring you have the skills to land your ideal job, while our multimedia courses keep you on the fast track to success."
            }
          />
          <WhyDetailElt
            title={"Hands-on Projects"}
            content={
              "You'll learn by working directly with our GCC-based clients, applying your skills in a real-world setting to prepare you for industry challenges."
            }
          />
        </div>
      </div>
    </div>
  );
}
