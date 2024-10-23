import React from "react";
import { handleChatClick } from "../../utils/whatsApp";
import { motion } from "framer-motion";

export default function JoinNowSection() {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 bg-[#FDF8FF] flex justify-center">
      <div className="flex md:flex-row flex-col justify-center gap-5 bg-white rounded-lg md:px-10 px-3 py-3">
        <p className="max-w-[500px] inter-font md:text-lg text-base font-medium">
          So why wait? Start one of our high quality courses from the world's
          leading experts today!
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#CA90F2",
          }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          onClick={() => handleChatClick("join Tron Academy")}
          className="px-4 py-2 md:text-base text-sm bg-black rounded-lg text-white"
        >
          Join Now
        </motion.button>
      </div>
    </div>
  );
}
