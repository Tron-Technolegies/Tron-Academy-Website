import { motion } from "framer-motion";
import React from "react";
import { handleChatClick } from "../../../utils/whatsApp";

export default function NextBatchCard({ month, date, course }) {
  return (
    <div className="bg-white py-3 px-5 rounded-md flex gap-5 items-center justify-between inter-font h-[170px]">
      <div className="text-[#B277F3] flex items-center flex-col gap-1 font-extrabold md:text-3xl text-xl">
        <p>{month}</p>
        <p>{date}</p>
      </div>
      <div className="flex flex-col items-end justify-between h-full gap-3">
        <p className="font-semibold md:text-sm text-sm text-end">
          {course?.toUpperCase()}
        </p>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "black",
          }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          onClick={() => handleChatClick(`join for ${course?.toUpperCase()}`)}
          className="bg-[#A157DC] w-fit px-3 py-1 md:text-sm text-xs rounded-s-full rounded-e-full text-white"
        >
          Join Now
        </motion.button>
      </div>
    </div>
  );
}
