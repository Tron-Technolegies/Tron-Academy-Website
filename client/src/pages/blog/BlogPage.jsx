import React, { useEffect } from "react";

import BlogFooter from "../../components/blog/BlogFooter";
import BlogSection from "../../components/blog/BlogSection";
import { Helmet } from "react-helmet";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
         <link rel="canonical" href=" 
 	
https://tronacademy.in/blog" />
      </Helmet>
      <BlogSection />
      <BlogFooter />
    </div>
  );
}
