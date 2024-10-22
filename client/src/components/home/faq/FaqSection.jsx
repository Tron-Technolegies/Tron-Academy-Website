import React, { useState } from "react";
import { faq } from "../../../utils/faq";
import FaqCard from "./FaqCard";

export default function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 inter-font">
      <div className="mb-5 flex flex-col gap-5">
        <h5 className="md:text-4xl text-2xl font-black">FAQ</h5>
        <p className="md:text-base text-sm text-[#757575]">
          FAQ: Answers frequently asked questions about the academy, its
          courses, and the enrollment process.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {faq.length > 0 &&
          faq.map((x) => (
            <FaqCard
              key={x.id}
              answer={x.answer}
              question={x.question}
              id={x.id}
              setActive={setActive}
              active={active}
            />
          ))}
      </div>
    </div>
  );
}
