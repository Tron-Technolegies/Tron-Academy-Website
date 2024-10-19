import React, { useEffect } from "react";
import TeamSection from "../../components/team/TeamSection";

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TeamSection />
    </div>
  );
}
