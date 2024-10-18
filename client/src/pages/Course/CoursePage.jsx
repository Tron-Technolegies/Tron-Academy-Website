import React, { useEffect } from "react";
import CourseTopSection from "../../components/course/CourseTopSection";
import NextBatchSection from "../../components/course/nextbatch/NextBatchSection";
import Consultation from "../../components/course/consultation/Consultation";

export default function CoursePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CourseTopSection />
      <NextBatchSection />
      <Consultation />
    </div>
  );
}
