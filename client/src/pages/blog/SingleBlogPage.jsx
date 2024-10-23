import React, { useEffect } from "react";
import SingleBlogHeader from "../../components/blog/singleblog/SingleBlogHeader";
import SingleBlogContent from "../../components/blog/singleblog/SingleBlogContent";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
import BlogFooter from "../../components/blog/BlogFooter";
import { motion } from "framer-motion";

export default function SingleBlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SingleBlogHeader />
      <SingleBlogContent />
      <div className="lg:px-[120px] lg:py-10 px-10 py-5">
        <div className="flex justify-between">
          <h4 className="md:text-3xl text-lg font-medium">Related Blogs</h4>
          <Link
            className="md:px-4 px-2 py-2 rounded-lg border hover:scale-110 hover:bg-black hover:text-white hover-animation"
            to={"/blog"}
          >
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <BlogFooter />
    </div>
  );
}
