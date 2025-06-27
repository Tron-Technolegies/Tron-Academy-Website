import React from "react";

export default function PlacementIages({ img }) {
  return (
    <div className="w-full h-48 md:h-56 lg:h-96 overflow-hidden rounded-lg shadow-lg">
      <img 
        src={img} 
        alt="Placement" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}