import React, { useEffect } from "react";
import SingleBlogHeader from "../../components/blog/singleblog/SingleBlogHeader";
import SingleBlogContent from "../../components/blog/singleblog/SingleBlogContent";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
import BlogFooter from "../../components/blog/BlogFooter";

export default function SingleBlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SingleBlogHeader />
      <SingleBlogContent />
      <div className="px-[120px] py-10">
        <div className="flex justify-between">
          <h4 className="text-3xl font-medium">Related Blogs</h4>
          <Link
            className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white hover-animation"
            to={"/blog"}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 py-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <BlogFooter />
    </div>
  );
}
