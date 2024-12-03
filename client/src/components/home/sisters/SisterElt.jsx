import { motion } from "framer-motion";
import React from "react";

export default function SisterElt({ img, href }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img
        src={img}
        className="w-[126px] h-[210px] object-cover rounded-lg"
      ></img>
      <motion.a
        href={href}
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }} // Change color on hover
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        className="bg-black rounded-lg px-4 py-2 text-white "
      >
        Visit Here
      </motion.a>
    </div>
  );
}
