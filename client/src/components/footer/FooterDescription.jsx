import React from "react";
import { handleChatClick } from "../../utils/whatsApp";

export default function FooterDescription() {
  return (
    <div className="flex flex-col gap-3 max-w-[360px]">
      <h4 className="md:text-xl text-base text-primary">Empower Your Future</h4>
      <p>
        This is your chance to start a bright career in the ever-growing fields
        of Digital Marketing, Coding, and Multimedia. Do not miss out!
      </p>
      <button
        onClick={() => handleChatClick("know about Tron Academy")}
        className="px-4 py-2 bg-primary text-white hover:bg-hoverPrimary hover-animation w-fit rounded-l-full rounded-r-full"
      >
        Contact Us Now
      </button>
    </div>
  );
}
