import React from "react";
import FooterContactElt from "./FooterContactElt";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function FooterContactSection() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold">CONTACT US</h1>
      <div className="flex flex-col gap-2">
        <a
          className="cursor-pointer"
          href="https://maps.app.goo.gl/5ZbE7jT7BmYdPzPH7"
          target="_blank"
        >
          <FooterContactElt
            icon={<CiLocationOn />}
            content={"Based in Chavakkad, Thrissur"}
          />
        </a>
        <FooterContactElt
          icon={<CiMail />}
          content={"tronacademyckd@gmail.com"}
        />
        <FooterContactElt icon={<CiPhone />} content={"+91 8330077882"} />
      </div>
    </div>
  );
}

export default FooterContactSection;
