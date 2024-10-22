import React from "react";
import PlacementIages from "./PlacementIages";

export default function PlacementSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-bl from-[#F4E3FA] flex flex-col gap-10 from-5%">
      <div className="flex flex-col gap-5 items-center max-w-[800px] mx-auto text-justify">
        <h4 className="md:text-4xl text-2xl roboto-font font-black">
          <span className="text-hoverPrimary">Our</span> Placements
        </h4>
        <p className="text-[#7C7C7C] md:text-base text-sm inter-font">
          Our students are placed in the top digital agencies and companies
          mostly in the UAE. When you choose Tron Academy, you’re choosing to
          stand out and make your mark in the industry. Here you’re not just
          chasing dreams; you’re destined to achieve them.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 md:my-20">
        <PlacementIages
          img={"/p-1.jpg"}
          name={"Dilshad"}
          style={"md:-translate-y-16"}
        />
        <PlacementIages
          img={"/p-2.jpg"}
          name={"Dilshad"}
          style={"md:translate-y-16"}
        />
        <PlacementIages
          img={"/p-3.jpg"}
          name={"Dilshad"}
          style={"md:-translate-y-16"}
        />
        <PlacementIages
          img={"/p-4.jpg"}
          name={"Dilshad"}
          style={"md:translate-y-16"}
        />
        <PlacementIages
          img={"/p-5.jpg"}
          name={"Dilshad"}
          style={"md:-translate-y-16"}
        />
      </div>
    </div>
  );
}
