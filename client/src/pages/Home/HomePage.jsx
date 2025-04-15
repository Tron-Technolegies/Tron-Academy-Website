import React, { useEffect } from "react";
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
import ReviewSection from "../../components/home/review/ReviewSection";
import GetInTouchSection from "../../components/home/getInTouch/GetInTouchSection";
import FaqSection from "../../components/home/faq/FaqSection";
import Helmet from "react-helmet";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
        Digital Marketing, Multi-Media & Full-Stack Training in Kerala
        </title>
        <meta
          name="description"
          content="Join top digital marketing training in Kerala, the best multi-media course, and expert
full-stack developer training in Thrissur for a bright career ahead"
        />
        <meta
          name="keywords"
          content="digital marketing academy, online digital marketing course, best online marketing courses, digital marketing course"
        />
      </Helmet>
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
      <ReviewSection />
      <GetInTouchSection />
      <FaqSection />
    </div>
  );
}
