import React, { useEffect } from "react";
import AboutHeader from "../../components/about/AboutHeader";
import MissionSection from "../../components/about/MissionSection";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHeader />
      <MissionSection />
    </div>
  );
}
