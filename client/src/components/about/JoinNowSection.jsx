import React from "react";

export default function JoinNowSection() {
  return (
    <div className="px-[120px] py-20 bg-[#FDF8FF] flex justify-center">
      <div className="flex justify-center gap-5 bg-white rounded-lg px-10 py-3">
        <p className="max-w-[500px] inter-font text-lg font-medium">
          So why wait? Start one of our high quality courses from the world's
          leading experts today!
        </p>
        <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-primary hover-animation">
          Join Now
        </button>
      </div>
    </div>
  );
}
