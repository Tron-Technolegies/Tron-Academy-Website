import React from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function FaqCard({ question, answer, active, id, setActive }) {
  function handleEvent() {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  }
  return (
    <div onClick={handleEvent}>
      <div className="flex justify-between items-center bg-[#F8F8F8] px-3 py-5 rounded-md">
        <p className="md:text-xl text-base font-bold">{question}</p>
        <button className="md:text-3xl text-xl">
          {active === id ? <FaCircleMinus /> : <FaCirclePlus />}
        </button>
      </div>
      {active === id && (
        <p className="px-3 py-5 md:text-base text-sm shadow-md animate-slideInTop">
          {answer}
        </p>
      )}
    </div>
  );
}
