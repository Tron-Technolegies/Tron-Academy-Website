import React from 'react'
import MultimediaHeader from '../../components/multimedia/MultimediaHeader'
import WhyChooseMultimedia from '../../components/multimedia/WhyChooseMultimedia'
import MultimediaCards from '../../components/multimedia/MultimediaCards'
import MultimediaCourseSchedule from '../../components/multimedia/MultimediaCourseSchedule'
import Mentors from '../../components/digitalmarketing/Mentors'
import Testimonials from '../../components/digitalmarketing/Testimonials'
import BlogSection from '../../components/blog/BlogSection'
import NextBatchSection from '../../components/course/nextbatch/NextBatchSection'
import DMfaq from '../../components/digitalmarketing/DMfaq'
import MultimediaStudentsProjects from '../../components/multimedia/MultimediaStudentsProjects'
import mentorsData from '../../utils/mentors'
import testimonialsData from '../../utils/testimonials'

const MultimediaPage = () => {
  return (
    <div>
      <MultimediaHeader/>
      <WhyChooseMultimedia/>
      <MultimediaCards/>
      <MultimediaCourseSchedule/>
      <Mentors
        mentors={mentorsData.multimediaMentors}
        title="Mentorship from Industry Experts"
      />
      <MultimediaStudentsProjects/>
      <Testimonials 
        testimonials={testimonialsData.multimedia}
        title="What Our Creative Students Say About Us!"
      />
      <BlogSection />
      <NextBatchSection />
      <DMfaq />
    </div>
  )
}

export default MultimediaPage