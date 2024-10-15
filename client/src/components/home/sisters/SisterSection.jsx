import React from "react";
import SisterElt from "./SisterElt";

export default function SisterSection() {
  return (
    <div className="px-[120px] py-20">
      <div className="inter-font max-w-[816px] flex flex-col gap-5 mx-auto items-center">
        <h4 className="text-4xl font-semibold">{`“Our sister companies,
Our Digital Partners’’`}</h4>
        <p className="text-base text-center">
          Tron isn’t just a place to learn; it’s where ambition meets
          opportunity across all digital fields. With branches like Tron
          Digital, Tron Technology, Tron Marketing, and Tron Studio, we partner
          with top professionals to provide insights and hands-on experiences
          that are crucial for success.
        </p>
      </div>
      <div className="flex gap-14 justify-center mb-10 mt-20">
        <SisterElt img={"/sister-4.png"} />
        <SisterElt img={"/sister-3.png"} />
        <SisterElt img={"/sister-2.png"} />
        <SisterElt img={"/sister-1.png"} />
      </div>
    </div>
  );
}
