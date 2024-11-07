import React from "react";
import { handleChatClick } from "../../utils/whatsApp";
import { motion } from "framer-motion";

export default function TeamFooter() {
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
        <span className="text-[#B277F3]">Get</span> Started with Tron Academy
      </h4>
      <div className="inter-font md:text-lg text-base max-w-[580px] text-center">
        <p>
          Don’t just learn-master it! Start your journey with Tron Academy
          today!
        </p>
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "black" }} // Change color on hover
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        onClick={() => handleChatClick("enroll for a course")}
        className="px-5 py-2 bg-[#A157DC] text-white rounded-s-full rounded-e-full"
      >
        Enroll Now
      </motion.button>
    </div>
  );
}
