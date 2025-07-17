import React from 'react';
import "../../components/digitalmarketing/CourseComparison.css";

const CourseComparison = () => {
  return (
    <div className='course_comparison_container course_comparison_centered'>
      <div className="course_comparison_header course_comparison_header_centered">
        <h2>Why Most Digital Marketing Courses Fail Your Career <br /><span id='dm_course_comparison'>(And How Tron Guarantees Success)</span></h2>
      </div>
      <div className="course_comparisons course_comparisons_centered">
        <div className="ordinary_courses">
          <div className="course_comparison_title">
            <h3>The Harsh Reality for Ordinary Course Graduates (Only Course Certificate - No Internship/Portfolio)</h3>
          </div>
          <div className="course_content">
            <ul>
              <li>Starting Salary: ₹1.8-2.5 LPA (Often unpaid internships initially)</li>
              <li>Job Search Duration: 4-9 months average</li>
            </ul>
            <p className="section_label">Rejected Because:</p>
            <ul>
              <li>No practical experience (87% employers demand it)</li>
              <li>Empty portfolio with dummy projects</li>
              <li>No proof of handling real clients/budgets</li>
            </ul>
            <p className="section_label career_limitations">Career Limitations:</p>
            <ul className="limitation_list">
              <li>Stuck in assistant/executive roles for 2-3 years</li>
              <li>Rarely considered for international/GCC opportunities</li>
              <li>60% switch careers within 1 year due to low earnings</li>
            </ul>
          </div>
        </div>
        <div className="tron_dm">
          <div className="course_comparison_title">
            <h3>Advantage of Tron academy's digital marketing course in Thrissur : (With GCC Work Certificate + Internship + Client Portfolio)</h3>
          </div>
          <div className="course_content">
            <ul>
              <li>Starting Salary: ₹4-6.5 LPA (Verified placement data)</li>
              <li>Job Placement: 89% within 3 months</li>
            </ul>
            <p className="section_label">Employer Priority:</p>
            <ul>
              <li>GCC certificate = Interview shortlist guarantee</li>
              <li>real client's campaigns in portfolio</li>
              <li>Certified hands-on experience with Meta/Google Ads</li>
            </ul>
            <p className="section_label exclusive_opportunities">Exclusive Opportunities:</p>
            <ul className="opportunity_list">
              <li>Direct entry to mid-level roles (Skip "Fresher" tag)</li>
              <li>Eligible for international remote jobs (30% Tron grads work for GCC/US companies)</li>
              <li>Fast-track promotions (Average salary hike of 120% in 2 years)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComparison;