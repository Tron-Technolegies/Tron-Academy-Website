import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function DetailCard({ icon, no, content }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      className="flex flex-col gap-3 items-center bg-[#FDCCFB] rounded-lg p-5 w-60 text-center"
      ref={ref}
    >
      <p className={`text-primary text-4xl`}>{icon}</p>
      <p className="text-4xl font-bold flex items-center gap-1">
        {inView ? <CountUp end={no} duration={1} /> : `${no}`}
        <span>+</span>
      </p>
      <p className="text-xl">{content}</p>
    </div>
  );
}
