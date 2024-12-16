import React, { useEffect } from "react";
import AboutHeader from "../../components/about/AboutHeader";
import MissionSection from "../../components/about/MissionSection";
import DifferentSection from "../../components/about/DifferentSection";
import WhyStatsSection from "../../components/about/WhyStatsSection";
import JoinNowSection from "../../components/about/JoinNowSection";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Advanced SEO & SMM Course in Kerala | Digital Marketing Training
        </title>
        <meta
          name="description"
          content="Join the best digital marketing institute in Thrissur, Kerala. Learn advanced SEO, SMM,
and digital marketing techniques with expert training programs."
        />
        <meta
          name="keywords"
          content="Advanced seo smm course kerala, Digital marketing institute in chavakkad, Digital marketing training in Kerala"
        />
      </Helmet>
      <AboutHeader />
      <MissionSection />
      <DifferentSection />
      <WhyStatsSection />
      <JoinNowSection />
    </div>
  );
}
