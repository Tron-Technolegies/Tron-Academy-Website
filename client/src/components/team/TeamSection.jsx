import React from "react";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <div className="px-[120px] py-10 bg-[#FDFAFE] flex flex-col gap-5 items-center relative">
      <h4 className="roboto-font font-black text-4xl">
        <span className="text-[#B277F3]">Our</span> Team
      </h4>
      <p className="inter-font font-medium max-w-[720px] text-center">
        Our team is not only seasoned but the top in the industry. We not only
        talk about success; we actually reach it every day. Our coaches are
        well-versed in effective methods and technologies to dominate the
        competition. When it comes to making progress, we don't imitate
        trends-we set them.
      </p>
      <div className="grid grid-cols-3 gap-5 my-5">
        <TeamCard img={"/team/profile-1.jpg"} />
        <TeamCard img={"/team/profile-2.jpg"} />
        <TeamCard img={"/team/profile-3.jpg"} />
        <TeamCard img={"/team/profile-1.jpg"} />
        <TeamCard img={"/team/profile-2.jpg"} />
        <TeamCard img={"/team/profile-3.jpg"} />
        <TeamCard img={"/team/profile-1.jpg"} />
        <TeamCard img={"/team/profile-2.jpg"} />
        <TeamCard img={"/team/profile-3.jpg"} />
        <TeamCard img={"/team/profile-1.jpg"} />
        <TeamCard img={"/team/profile-2.jpg"} />
        <TeamCard img={"/team/profile-3.jpg"} />
      </div>
      <img
        src="/team/icon-1.png"
        className="absolute w-[150px] h-[150px] top-5 right-0"
      ></img>
      <img
        src="/team/icon-2.png"
        className="absolute w-[150px] h-[150px] bottom-0 left-0"
      ></img>
      <img src="/team/icon-3.png" className="absolute -bottom-10"></img>
    </div>
  );
}
