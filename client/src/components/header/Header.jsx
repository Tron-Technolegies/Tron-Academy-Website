import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SmallHeader from "./SmallHeader";

export default function Header() {
  const [showSmallBar, setShowSmallBar] = useState(false);
  return (
    <header className="lg:px-[120px] px-10 py-5 h-[100px] shadow-sm lg:py-10 flex justify-between items-center bg-white z-50">
      <Link to={"/"} className="flex gap-3 items-center">
        <img src="/logo.png" className="w-[52px] h-[63px]"></img>
        <img src="/logotext.png" className="w-[86px] h-[39px]"></img>
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
        <NavLink
          to={"/blog"}
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Blog
        </NavLink>
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
      <button className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px] hidden lg:block">
        Contact Us
      </button>
      <button
        className="text-4xl lg:hidden text-primary"
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
