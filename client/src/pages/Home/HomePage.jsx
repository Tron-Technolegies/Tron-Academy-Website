import React from "react";
import LandingSection from "../../components/home/Landing/LandingSection";
import FindCourseSection from "../../components/home/FindCourseSection/FindCourseSection";
import WhySection from "../../components/home/whySection/WhySection";
import ExploreCourseSection from "../../components/home/exploreCourses/ExploreCourseSection";
import InstructorsSection from "../../components/home/Instructors/InstructorsSection";
import PortfolioSection from "../../components/home/PortFolio/PortfolioSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <FindCourseSection />
      <WhySection />
      <ExploreCourseSection />
      <InstructorsSection />
      <PortfolioSection />
    </div>
  );
}
