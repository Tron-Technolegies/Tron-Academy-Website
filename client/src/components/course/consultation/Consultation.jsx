import React from "react";

export default function Consultation() {
  return (
    <div
      className="px-[120px] py-20 flex flex-col justify-center items-center gap-5 h-[400px]"
      style={{
        backgroundColor: "#A157DC", // Existing background color
        backgroundImage: `url('/course/consultation-bg.png')`, // Add your background image
        backgroundSize: "", // Ensures the background covers the entire area
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Ensure the image does not repeat
      }}
    >
      <div>
        <h4 className="roboto-font text-4xl font-black text-white">
          Free Consultation
        </h4>
        <p className="inter-font text-[#E0BEFC] font-medium text-lg">
          Feel free to get in touch with us!
        </p>
      </div>
      <button className="inter-font bg-white px-5 py-3 rounded-s-full w-fit rounded-e-full font-semibold text-[#9A49DB] hover:bg-black hover:text-white hover-animation">
        Call Now
      </button>
    </div>
  );
}
