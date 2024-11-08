import React from "react";
import PlacementIages from "./PlacementIages";

export default function PlacementSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-bl from-[#F4E3FA] flex flex-col gap-10 from-5%">
      <div className="flex flex-col gap-5 items-center max-w-[800px] mx-auto text-justify">
        <h4 className="md:text-4xl text-2xl comic-font font-black">
          <span className="text-hoverPrimary">Our</span> Students
        </h4>
        <p className="text-[#7C7C7C] md:text-base text-center text-sm inter-font">
          The students at Tron Academy are always moving forward—whether it’s in
          their studies, their careers, or their personal development. They have
          one goal: to be the best. They don’t just aspire to succeed—they aim
          to lead. If you're ready to take on the challenge, you'll find your
          place here.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 md:my-20">
        <PlacementIages img={"/ajith.jpg"} style={"md:-translate-y-16"} />
        <PlacementIages img={"/rishi.jpg"} style={"md:translate-y-16"} />
        <PlacementIages img={"/thaara.jpg"} style={"md:-translate-y-16"} />
        <PlacementIages img={"/fayis.jpg"} style={"md:translate-y-16"} />
        <PlacementIages img={"/jabir.jpg"} style={"md:-translate-y-16"} />
      </div>
    </div>
  );
}
