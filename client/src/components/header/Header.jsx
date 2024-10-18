import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-[120px] h-[100px] shadow-sm py-10 flex justify-between items-center">
      <Link to={"/"} className="flex gap-3 items-center">
        <img src="/logo.png" className="w-[52px] h-[63px]"></img>
        <img src="/logotext.png" className="w-[86px] h-[39px]"></img>
      </Link>
      <div className="flex gap-5 items-center text-xl">
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
      <button className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px]">
        Contact Us
      </button>
    </header>
  );
}
