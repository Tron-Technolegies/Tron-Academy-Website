import React from "react";

export default function BlogFooter() {
  return (
    <div
      className="lg:px-[120px] lg:py-20 px-10 py-5 flex flex-col gap-5 items-center"
      style={{
        backgroundColor: "#f0ebf4",
        backgroundImage: `url('/blog/footer-bg.png')`, // Add your background image
        backgroundPosition: "center", // Center the background image
      }}
    >
      <h4 className="comic-font font-black md:text-4xl text-2xl text-center">
        <span className="text-[#B277F3]">Get</span> Something to share? Prove it
        !
      </h4>
      <div className="inter-font md:text-lg text-base max-w-[580px] text-center">
        <p>
          If your blog catches our eyes, we’ll give it the spotlight. Show us
          what you’ve got send it to
        </p>
        <p className="text-[#A23CC6] underline">blogs@tronmiddleeast.com</p>
      </div>
    </div>
  );
}
