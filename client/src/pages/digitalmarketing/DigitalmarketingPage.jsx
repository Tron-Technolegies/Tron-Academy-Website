import React from "react";
import DigitalMarketingHeader from "../../components/digitalmarketing/DigitalMarketingHeader";
import WhyChooseUs from "../../components/digitalmarketing/WhyChooseUs";
import ChooseUsCards from "../../components/digitalmarketing/ChooseUsCards";
import DMcoursesHeader from "../../components/digitalmarketing/DMcoursesHeader";
import DMNextBatchCards from "../../components/digitalmarketing/DMNextBatchCards";
import DMsyllabusHeader from "../../components/digitalmarketing/DMsyllabusHeader";
import CourseComparison from "../../components/digitalmarketing/CourseComparison";
import Mentors from "../../components/digitalmarketing/Mentors";
import Testimonials from "../../components/digitalmarketing/Testimonials";
import BlogSection from "../../components/blog/BlogSection";
import NextBatchSection from "../../components/course/nextbatch/NextBatchSection";
import DMopportunities from "../../components/digitalmarketing/DMopportunities";
import DMsyllabus from "../../components/digitalmarketing/DMsyllabus";
import DMfaq from "../../components/digitalmarketing/DMfaq";
import mentorsData from "../../utils/mentors";
import testimonialsData from "../../utils/testimonials";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const DigitalmarketingPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Helmet>
        <title> Best Digital Marketing Course in Kerala | Tron Academy</title>
        <meta
          name="description"
          content="Join the Best Digital Marketing Course in Kerala at Tron Academy! Learn SEO, Social media, paid ads & more with 90% practical training & placement guarantee."
        />
      </Helmet>
      <DigitalMarketingHeader />
      <WhyChooseUs />
      <ChooseUsCards />
      <DMcoursesHeader />
      <DMNextBatchCards />
      <DMsyllabusHeader />
      <DMsyllabus />
      <DMopportunities />
      <CourseComparison />
      {/* <Mentors
        mentors={mentorsData.dmMentors}
        title="Digital Marketing Mentors"
      /> */}
      <Testimonials
        testimonials={testimonialsData.digitalMarketing}
        title="What our leaners have to say About us!"
      />
      <BlogSection />
      <NextBatchSection />
      <DMfaq />
    </div>
  );
};

export default DigitalmarketingPage;
