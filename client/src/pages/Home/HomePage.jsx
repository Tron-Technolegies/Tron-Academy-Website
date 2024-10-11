import React from "react";
import LandingSection from "../../components/home/Landing/LandingSection";
import FindCourseSection from "../../components/home/FindCourseSection/FindCourseSection";
import WhySection from "../../components/home/whySection/WhySection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <FindCourseSection />
      <WhySection />
    </div>
  );
}
