import { motion } from "framer-motion";
import React from "react";

export default function Consultation() {
  return (
    <div
      className="lg:px-[120px] lg:py-20 px-10 py-5 flex flex-col justify-center items-center gap-5 h-[400px] md:bg-center bg-left"
      style={{
        backgroundColor: "#A157DC", // Existing background color
        backgroundImage: `url('/course/consultation-bg.png')`, // Add your background image
        backgroundSize: "", // Ensures the background covers the entire area
        // Center the background image
        backgroundRepeat: "no-repeat", // Ensure the image does not repeat
      }}
    >
      <div>
        <h4 className="roboto-font md:text-4xl text-2xl text-center font-black text-white">
          Free Consultation
        </h4>
        <p className="inter-font text-[#E0BEFC] font-medium md:text-lg text-base text-center">
          Feel free to get in touch with us!
        </p>
      </div>
      <motion.button
        onClick={() => (window.location.href = "tel:+918330077882")}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }} // Change color on hover
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        className="inter-font bg-white px-5 py-3 rounded-s-full w-fit rounded-e-full font-semibold text-[#9A49DB] "
      >
        Call Now
      </motion.button>
    </div>
  );
}
