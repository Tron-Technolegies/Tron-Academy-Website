import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterCompanySection from "./FooterCompanySection";
import FooterContactSection from "./FooterContactSection";
import FooterDescription from "./FooterDescription";

export default function Footer() {
  return (
    <footer className="bg-[#F4E3FA] px-[120px] py-10 flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <FooterLogoSection />
        <FooterCompanySection />
        <FooterContactSection />
        <FooterDescription />
      </div>
      <div className="h-[1px] bg-primary"></div>
      <p className="text-center text-base text-primary">
        © 2024 Tron Academy. All Rights Reserved
      </p>
    </footer>
  );
}
