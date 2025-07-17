import React from "react";
import PlacementIages from "./PlacementIages";

export default function PlacementSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 flex flex-col gap-10 from-5%">
      <div className="flex flex-col gap-5 items-center max-w-[800px] mx-auto text-justify">
        <h4 className="md:text-4xl text-2xl comic-font font-bold text-[#ffffff] text-center">
          <span className="text-hoverPrimary">Our Placements</span> 
        </h4>
        <p className="text-[#000000] md:text-base text-center text-sm inter-font">
          Our students are placed in the top digital agencies and companies
          mostly in the UAE. When you choose Tron Academy, you're choosing to
          stand out and make your mark in the industry. Here you're not just
          chasing dreams; you're destined to achieve them.
        </p>
      </div>

      {/* Grid layout with 3 images per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4">
        <PlacementIages img="/placements/01.jpg" />
        <PlacementIages img="/placements/02.jpg" />
        <PlacementIages img="/placements/03.jpg" />
        <PlacementIages img="/placements/04.jpg" />
        <PlacementIages img="/placements/05.jpg" />
        <PlacementIages img="/placements/06.jpg" />
        <PlacementIages img="/placements/07.jpg" />
        <PlacementIages img="/placements/08.jpg" />
        <PlacementIages img="/placements/09.jpg" />
        <PlacementIages img="/placements/10.jpg" />
      </div>
    </div>
  );
}