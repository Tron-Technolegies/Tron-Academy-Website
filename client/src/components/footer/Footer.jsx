import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterCompanySection from "./FooterCompanySection";
import FooterContactSection from "./FooterContactSection";
import FooterDescription from "./FooterDescription";

export default function Footer() {
  return (
    <footer className="bg-[#F4E3FA] xl:px-[120px] xl:py-10 px-10 py-5 md:text-base text-sm flex flex-col gap-5">
      <div className="flex lg:flex-row flex-col gap-5 justify-between items-start">
        <FooterLogoSection />
        <FooterCompanySection />
        <FooterContactSection />
        <FooterDescription />
      </div>
      <div className="h-[1px] bg-primary"></div>
      <p className="text-center md:text-base text-sm text-primary">
        © 2024 Tron Academy. All Rights Reserved
      </p>
    </footer>
  );
}
