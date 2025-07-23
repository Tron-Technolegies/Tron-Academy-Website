import React from "react";
import { Link } from "react-router-dom";

export default function FooterCompanySection() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold">COMPANY</h1>
      <div className="flex flex-col gap-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/Best-Digital-Marketing-Course-In-Kerala"}>Course</Link>
        <Link to={"/blog"}>Blog</Link>
        {/* <Link to={"/team"}>Our Team</Link> */}
        <Link to={"/about"}>About</Link>
        <Link to={"/privacy"}>Privacy Policy</Link>
      </div>
    </div>
  );
}
