import React, { useEffect } from "react";
import CourseTopSection from "../../components/course/CourseTopSection";
import NextBatchSection from "../../components/course/nextbatch/NextBatchSection";
import Consultation from "../../components/course/consultation/Consultation";
import { Helmet } from "react-helmet";

export default function CoursePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Web Development Course | Full Stack & App Training | in Kerala
        </title>
        <meta
          name="description"
          content="Enroll in the best web development course in Kerala. Get expert full-stack developer
training in Thrissur and mobile app development courses in India"
        />
        <meta
          name="keywords"
          content="Web development course in Kerala, Full stack developer training Thrissur, Mobile app development course India"
        />
      </Helmet>
      <CourseTopSection />
      <NextBatchSection />
      <Consultation />
    </div>
  );
}
