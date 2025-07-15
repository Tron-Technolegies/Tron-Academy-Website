import React from "react";

export default function CelebrationSection() {
  const imageCount = 24;
  const images = Array.from({ length: imageCount }, (_, i) => `/event-${i + 1}.jpg`);

  return (
    <div className="lg:px-[120px] lg:py-20 px-6 py-10 flex flex-col gap-10 items-center bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h5 className="comic-font md:text-4xl text-2xl font-black mb-4">Events & Celebrations</h5>
        <p className="inter-font md:text-base text-sm text-gray-600">
          At Tron Digital we believe in celebrating life, not just living it.
          The Tron family celebrates all the festivals, birthdays of team
          members, and indulges in good natured frolic during team outings.
          After all, all work and no play makes Jack a dull boy!
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 w-full max-w-7xl space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            loading="lazy"
            alt={`Event ${index + 1}`}
            className="w-full rounded-xl shadow-md hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out cursor-pointer break-inside-avoid"
            onError={(e) => {
              e.target.style.display = "none";
              console.warn(`Image not found: ${src}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
