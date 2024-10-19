import React from "react";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <div className="px-[120px] py-10 bg-[#FDFAFE] flex flex-col gap-5 items-center relative">
      <h4 className="roboto-font font-black text-4xl">
        <span className="text-[#B277F3]">Our</span> Team
      </h4>
      <p className="inter-font font-medium max-w-[720px] text-center">
        Our team isn't just experienced; we're the best in the business. We
        don’t just preach success; we make it happen every day. Our experts know
        what works and what doesn’t, using the latest tools and strategies to
        crush the competition. When it comes to getting ahead, we don’t follow
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
