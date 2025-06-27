import React from "react";
import CodingHeader from "../../components/coding/CodingHeader";
import Mentors from "../../components/digitalmarketing/Mentors";
import Testimonials from "../../components/digitalmarketing/Testimonials";
import BlogSection from "../../components/blog/BlogSection";
import NextBatchSection from "../../components/course/nextbatch/NextBatchSection";
import WhyChooseCoding from "../../components/coding/WhyChooseCoding";
import ChooseUsCards from "../../components/digitalmarketing/ChooseUsCards";
import CodingStudentsProjects from "../../components/coding/CodingStudentsProjects";
import DMfaq from "../../components/digitalmarketing/DMfaq";
import CodingCourseSchedule from "../../components/coding/CodingCourseSchedule";
import mentorsData from "../../utils/mentors";
import testimonialsData from "../../utils/testimonials";
import { useEffect } from "react";
import CodingFaq from "../../components/coding/CodingFaq";
import CodingCards from "../../components/coding/CodingCards";

const CodingPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <CodingHeader />
      <WhyChooseCoding />
      <CodingCards/>
      <CodingCourseSchedule />
      <Mentors
        mentors={mentorsData.codingMentors}
        title="Mentorship from Industry Experts"
      />
      <CodingStudentsProjects />
      <Testimonials 
        testimonials={testimonialsData.coding}
        title="What our leaners have to say About us!"
      />
      <BlogSection />
      <NextBatchSection />
      <CodingFaq/>
    </div>
  );
};

export default CodingPage;