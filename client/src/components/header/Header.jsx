import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { handleChatClick } from "../../utils/whatsApp";
import SmallHeader from "./SmallHeader";

export default function Header() {
  const [showSmallBar, setShowSmallBar] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourseDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative lg:px-[120px] px-10 sm:py-5 py-2 sm:h-[100px] h-[70px] shadow-sm lg:py-10 flex justify-between items-center bg-white z-50">
      <Link to={"/"} className="flex gap-3 items-center">
        <img src="/logo.png" className="sm:w-[52px] sm:h-[63px] w-[30px]" />
        <img
          src="/logotext.png"
          className="sm:w-[86px] sm:h-[39px] w-[74px] h-[34px]"
        />
      </Link>

      <div className="lg:flex gap-5 items-center text-xl hidden">
        <NavLink
          to="/"
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Home
        </NavLink>

        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer hover-navlink hover-animation hover:drop-shadow-navlink"
            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
          >
            <span>Course</span>
            <IoIosArrowDown
              className={`transition-transform ${
                showCourseDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {showCourseDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40 z-50">
              <NavLink
                to="/coding-course-in-kerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base"
                onClick={() => setShowCourseDropdown(false)}
              >
                Coding
              </NavLink>
              <NavLink
                to="/Best-Digital-Marketing-Course-In-Kerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base"
                onClick={() => setShowCourseDropdown(false)}
              >
                Digital Marketing
              </NavLink>
              <NavLink
                to="/Graphic-design-Course-in-Kerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base"
                onClick={() => setShowCourseDropdown(false)}
              >
                Multimedia
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/blog"
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Blog
        </NavLink>
        {/* <NavLink
          to="/team"
          className="hover-navlink hover-animation hover:drop-shadow-navlink"
        >
          Our Team
        </NavLink> */}
        <NavLink
          to="/about"
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
        <div className="absolute w-full top-[100%] left-0 z-50 bg-white shadow-lg animate-slideInTop">
          <SmallHeader setSmallBar={setShowSmallBar} />
        </div>
      )}
    </header>
  );
}
