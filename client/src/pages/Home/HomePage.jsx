import React from "react";
import LandingSection from "../../components/home/Landing/LandingSection";
import FindCourseSection from "../../components/home/FindCourseSection/FindCourseSection";
import WhySection from "../../components/home/whySection/WhySection";
import ExploreCourseSection from "../../components/home/exploreCourses/ExploreCourseSection";
import InstructorsSection from "../../components/home/Instructors/InstructorsSection";
import PortfolioSection from "../../components/home/PortFolio/PortfolioSection";
import PlacementSection from "../../components/home/placements/PlacementSection";
import SisterSection from "../../components/home/sisters/SisterSection";
import CompanySection from "../../components/home/companies/CompanySection";
import CelebrationSection from "../../components/home/celebrations/CelebrationSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <FindCourseSection />
      <WhySection />
      <ExploreCourseSection />
      <InstructorsSection />
      <PortfolioSection />
      <PlacementSection />
      <SisterSection />
      <CompanySection />
      <CelebrationSection />
    </div>
  );
}
