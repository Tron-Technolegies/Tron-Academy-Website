import React from "react";

export default function CelebrationSection() {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-5 items-center">
        <h5 className="comic-font md:text-4xl text-2xl font-black text-center">
          Events & Celebrations
        </h5>
        <p className="inter-font md:text-base text-sm max-w-[900px] text-center">
          At tron Digital we believe in celebrating life, not just living it.
          The Tron family celebrates all the festivals, birthdays of team
          members, and indulges in good natured frolic during team outings.
          After all, all work and no play makes Jack a dull boy!
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-y-8 gap-x-5 my-20 mx-auto">
        <div className="flex flex-col items-center gap-2 -translate-y-14">
          <img
            src="/1.1.jpg"
            className="w-[234px] h-[316.82px] object-cover"
          ></img>
          <img src="/event-2.jpg" className="w-[234px] h-[184.3px]"></img>
        </div>
        <img
          src="/event-3.jpg"
          className="w-[234px] h-[510.87px] object-cover translate-y-14"
        ></img>
        <div className="flex flex-col items-center gap-2 -translate-y-14">
          <img
            src="/1.3.jpg"
            className="w-[234px] h-[316.82px] object-cover"
          ></img>
          <img src="/event-5.jpg" className="w-[234px] h-[184.3px]"></img>
        </div>
        <div className="flex flex-col items-center gap-2 translate-y-14">
          <img
            src="/1.5.jpg"
            className="w-[234px] h-[186.05px] object-cover"
          ></img>
          <img
            src="/event-7.jpg"
            className="w-[234px] h-[316.82px] object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
}
