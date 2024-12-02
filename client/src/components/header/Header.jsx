import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SmallHeader from "./SmallHeader";
import { handleChatClick } from "../../utils/whatsApp";

export default function Header() {
  const [showSmallBar, setShowSmallBar] = useState(false);
  return (
    <header className="lg:px-[120px] px-10 sm:py-5 py-2 sm:h-[100px] h-[70px] shadow-sm lg:py-10 flex justify-between items-center bg-white z-50">
      <Link to={"/"} className="flex gap-3 items-center">
        <img src="/logo.png" className="sm:w-[52px] sm:h-[63px] w-[30px]"></img>
        <img
          src="/logotext.png"
          className="sm:w-[86px] sm:h-[39px] w-[74px] h-[34px]"
        ></img>
      </Link>
      <div className="lg:flex gap-5 items-center text-xl hidden ">
        <NavLink
          to={"/"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Home
        </NavLink>
        <NavLink
          to={"/course"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Course
        </NavLink>
        {/* <NavLink
          to={"/blog"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Blog
        </NavLink> */}
        <NavLink
          to={"/team"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Our Team
        </NavLink>
        <NavLink
          to={"/about"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          About
        </NavLink>
      </div>
      <button
        onClick={() => handleChatClick("know more about Tron Academy")}
        className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px] hidden lg:block"
      >
        Contact Us
      </button>
      <button
        className="md:text-4xl text-2xl lg:hidden text-primary"
        onClick={() => setShowSmallBar(!showSmallBar)}
      >
        <RxHamburgerMenu />
      </button>
      {showSmallBar && (
        <div className="absolute w-full top-20 left-0 z-20 animate-slideInTop">
          <SmallHeader setSmallBar={setShowSmallBar} />
        </div>
      )}
    </header>
  );
}
