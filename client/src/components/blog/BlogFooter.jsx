import React from "react";

export default function BlogFooter() {
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
        <span className="text-[#B277F3]">Get</span> Something to share? Prove it
        !
      </h4>
      <div className="inter-font text-lg max-w-[580px] text-center">
        <p>
          If your blog catches our eyes, we’ll give it the spotlight. Show us
          what you’ve got send it to
        </p>
        <p className="text-[#A23CC6] underline">blogs@tronmiddleeast.com</p>
      </div>
    </div>
  );
}
