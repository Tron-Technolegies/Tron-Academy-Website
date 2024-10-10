import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function FooterLogoSection() {
  return (
    <div className="flex flex-col gap-10">
      <img
        src="/footerlogo.png"
        className="w-[73px] h-[121px] overflow-hidden"
      ></img>
      <div className="flex gap-5 text-2xl">
        <p className="text-[#e1306c]">
          <FaInstagram />
        </p>
        <p className="text-[#3C5A99]">
          <FaFacebookSquare />
        </p>
        <p className="text-[#156BC1]">
          <FaLinkedin />
        </p>
        <p className="text-[#EC1515]">
          <FaYoutube />
        </p>
      </div>
    </div>
  );
}
