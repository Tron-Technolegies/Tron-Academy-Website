import React, { useEffect } from "react";

import BlogFooter from "../../components/blog/BlogFooter";
import BlogSection from "../../components/blog/BlogSection";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BlogSection />
      <BlogFooter />
    </div>
  );
}
