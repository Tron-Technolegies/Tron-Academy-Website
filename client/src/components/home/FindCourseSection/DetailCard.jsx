import React from "react";

export default function DetailCard({ icon, no, content }) {
  return (
    <div className="flex flex-col gap-3 items-center bg-[#FDCCFB] rounded-lg p-5 w-40 text-center">
      <p className="text-primary text-4xl">{icon}</p>
      <p className="text-4xl font-bold">{no}</p>
      <p className="text-xl">{content}</p>
    </div>
  );
}
