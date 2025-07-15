import React from "react";
import MultimediaHeader from "../../components/multimedia/MultimediaHeader";
import WhyChooseMultimedia from "../../components/multimedia/WhyChooseMultimedia";
import MultimediaCards from "../../components/multimedia/MultimediaCards";
import MultimediaCourseSchedule from "../../components/multimedia/MultimediaCourseSchedule";
import Mentors from "../../components/digitalmarketing/Mentors";
import Testimonials from "../../components/digitalmarketing/Testimonials";
import BlogSection from "../../components/blog/BlogSection";
import NextBatchSection from "../../components/course/nextbatch/NextBatchSection";
import DMfaq from "../../components/digitalmarketing/DMfaq";
import MultimediaStudentsProjects from "../../components/multimedia/MultimediaStudentsProjects";
import mentorsData from "../../utils/mentors";
import testimonialsData from "../../utils/testimonials";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import MultimediaFaq from "../../components/multimedia/MultimediaFaq";
import CourseOutcomes from "../../components/multimedia/CourseOutcomes";
import MultimediaTools from "../../components/multimedia/MultimediaTools";

const MultimediaPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Helmet>
        <title>
          Graphic design Course in Kerala | Become an expert in 6 months
        </title>
        <meta
          name="description"
          content="Join the best graphic design Course in Kerala. Learn Graphic Design, UI/UX, VFX with GCC certification and live projects. Transform your career today."
        />
      </Helmet>
      <MultimediaHeader />
      <WhyChooseMultimedia />
      
      <MultimediaCards />
      <CourseOutcomes/>
      <MultimediaTools/>
      <MultimediaCourseSchedule />
      {/* <Mentors
        mentors={mentorsData.multimediaMentors}
        title="Mentorship from Industry Experts"
      /> */}
      <MultimediaStudentsProjects />
      {/* <Testimonials
        testimonials={testimonialsData.multimedia}
        title="What Our Creative Students Say About Us!"
      /> */}
      <BlogSection />
      <NextBatchSection />
      <MultimediaFaq/>
    </div>
  );
};

export default MultimediaPage;
