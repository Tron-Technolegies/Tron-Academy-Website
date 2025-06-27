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
import FoundersNote from "../../components/home/foundersNote/FoundersNote";
import RewindMoments from "../../components/home/rewindmoments/RewindMoments";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Best Multi-Media Course| Animation & Graphic Courses in India | in
          Kerala
        </title>
        <meta
          name="description"
          content="Enroll in the best multi-media course in Kerala and master animation and graphic design. Top-rated courses in India for creative professionals
"
        />
        <meta
          name="keywords"
          content="digital marketing academy, online digital marketing course, best online marketing courses, digital marketing course"
        />
      </Helmet>
      <LandingSection />
      <FindCourseSection />
      <ExploreCourseSection />
      <PlacementSection />
      <CompanySection />
      <RewindMoments />
      <WhySection />
      <PortfolioSection />
      <FoundersNote />
      <InstructorsSection />
      <SisterSection />
      <CelebrationSection />
      <ReviewSection />
      <GetInTouchSection />
      <FaqSection />
    </div>
  );
}
