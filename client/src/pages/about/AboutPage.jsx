import React, { useEffect } from "react";
import AboutHeader from "../../components/about/AboutHeader";
import MissionSection from "../../components/about/MissionSection";
import DifferentSection from "../../components/about/DifferentSection";
import WhyStatsSection from "../../components/about/WhyStatsSection";
import JoinNowSection from "../../components/about/JoinNowSection";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHeader />
      <MissionSection />
      <DifferentSection />
      <WhyStatsSection />
      <JoinNowSection />
    </div>
  );
}
