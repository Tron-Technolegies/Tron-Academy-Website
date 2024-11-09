import React from "react";
import SisterElt from "./SisterElt";

export default function SisterSection() {
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5">
      <div className="comic-font max-w-[816px] flex flex-col gap-5 mx-auto items-center">
        <h4 className="md:text-4xl text-2xl font-semibold text-center">{`“Tron : Your Success Partners’’`}</h4>
        <p className="md:text-base text-sm text-center inter-font">
          Tron isn’t just a place to learn; it’s where ambition meets
          opportunity across all digital fields. With branches like Tron
          Digital, Tron Technology, Tron Marketing, and Tron Studio, we partner
          with top professionals to provide insights and hands-on experiences
          that are crucial for success.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14 justify-center mb-10 mt-20">
        <SisterElt img={"/sister-4.png"} />
        <SisterElt img={"/sister-3.png"} />
        <SisterElt img={"/sister-2.png"} />
        <SisterElt img={"/sister-1.png"} />
      </div>
    </div>
  );
}
