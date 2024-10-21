import React from "react";
import { NavLink } from "react-router-dom";

export default function SmallHeader({ setSmallBar }) {
  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
        <NavLink
          to={"/"}
          className={"border-b w-full py-2 border-hoverPrimary"}
          onClick={() => setSmallBar(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/course"}
          className={"border-b w-full py-2 border-hoverPrimary"}
          onClick={() => setSmallBar(false)}
        >
          Course
        </NavLink>
        <NavLink
          to={"/blog"}
          className={"border-b w-full py-2 border-hoverPrimary"}
          onClick={() => setSmallBar(false)}
        >
          Blog
        </NavLink>
        <NavLink
          to={"/team"}
          className={"border-b w-full py-2 border-hoverPrimary"}
          onClick={() => setSmallBar(false)}
        >
          Our Team
        </NavLink>
        <NavLink
          to={"/about"}
          className={"border-b w-full py-2 border-hoverPrimary"}
          onClick={() => setSmallBar(false)}
        >
          About
        </NavLink>
        <button className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px]">
          Contact us
        </button>
      </div>
    </div>
  );
}
