import React from "react";
import WhyDetailElt from "./WhyDetailElt";

export default function WhySection() {
  return (
    <div className="px-[120px] py-10 bg-gradient-to-tr from-[#F4E3FA] from-5%">
      <div className="flex flex-col gap-5 items-center text-center relative">
        <h4 className="roboto-font text-4xl font-black">
          <span className="text-hoverPrimary">Why</span> Tron Academy
        </h4>
        <p className="text-[#5E5E5E] font-normal text-base leading-[22px] max-w-[524px]">
          At Tron Academy, we focus on providing personalized, practical, and
          results-driven learning experiences. Here’s why you should choose us:
        </p>
        <img src="/robot.png" className="absolute left-10"></img>
      </div>
      <div className="flex justify-around items-center my-14">
        <div className="flex flex-col gap-10">
          <WhyDetailElt
            title={"Personalized learning"}
            content={
              "Learn at your own pace with methods tailored to your learning style. Every student receives individual attention to maximize their potential."
            }
          />
          <WhyDetailElt
            title={"Certified Courses"}
            content={
              "Receive certificates from internationally recognized bodies such as Google, SEMrush, and HubSpot Academy. These certificates will validate your skills and boost your employability."
            }
          />
        </div>
        <div className="border border-[#E671E5] border-dashed h-[200px]"></div>

        <div className="flex flex-col gap-10">
          <WhyDetailElt
            title={"100% Job Support"}
            content={
              "We offer complete job placement assistance, from interview preparation to resume-building. Our strong industry connections ensure you get the support you need to succeed."
            }
          />
          <WhyDetailElt
            title={"Hands-on Projects"}
            content={
              "Gain real-world experience through live projects under the guidance of industry experts. Your practical skills will give you an edge in the job market."
            }
          />
        </div>
      </div>
    </div>
  );
}
