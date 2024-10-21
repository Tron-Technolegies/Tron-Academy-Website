import React from "react";

export default function TeamFooter() {
  return (
    <div
      className="px-[120px] py-20 flex flex-col gap-5 items-center"
      style={{
        backgroundColor: "#f0ebf4",
        backgroundImage: `url('/blog/footer-bg.png')`, // Add your background image
        backgroundPosition: "center", // Center the background image
      }}
    >
      <h4 className="roboto-font font-black text-4xl">
        <span className="text-[#B277F3]">Get</span> Started with Tron Academy
      </h4>
      <div className="inter-font text-lg max-w-[580px] text-center">
        <p>
          Don’t just learn-master it! Start your journey with Tron Academy
          today!
        </p>
      </div>
      <button className="px-5 py-2 bg-[#A157DC] text-white rounded-s-full rounded-e-full hover:bg-black hover-animation">
        Enroll Now
      </button>
    </div>
  );
}
