import React, { useEffect } from "react";
import TeamSection from "../../components/team/TeamSection";
import TeamFooter from "../../components/team/TeamFooter";
import { Helmet } from "react-helmet";

export default function TeamPage() {
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
          content="Enroll in the best multi-media course in Kerala and master animation and graphic design.
Top-rated courses in India for creative professionals"
        />
        <meta
          name="keywords"
          content="Best multi-media course in Kerala, Animation course India, Graphic course Thrissur"
        />
      </Helmet>
      <TeamSection />
      <TeamFooter />
    </div>
  );
}
