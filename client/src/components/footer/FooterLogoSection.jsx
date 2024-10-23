import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FooterLogoSection() {
  return (
    <div className="flex flex-col gap-10">
      <img
        src="/footerlogo.png"
        className="w-[73px] h-[121px] overflow-hidden"
      ></img>
      <div className="flex gap-5 text-2xl">
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          href="https://www.instagram.com/tronacademysocial?igsh=MWl2dXEzdGJjenJsdA=="
          target="_blank"
          className="text-[#e1306c]"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          href="https://www.facebook.com/share/WuDt2U6zJaBdSrbX/"
          target="_blank"
          className="text-[#3C5A99]"
        >
          <FaFacebookSquare />
        </motion.a>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          href="https://www.linkedin.com/company/tron-academy/"
          target="_blank"
          className="text-[#156BC1]"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          href="https://youtube.com/@tronacademy?si=K5JpNKy1LdY4fGUn"
          target="_blank"
          className="text-[#EC1515]"
        >
          <FaYoutube />
        </motion.a>
      </div>
    </div>
  );
}
