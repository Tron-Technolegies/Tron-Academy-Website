import React, { useEffect, useState } from "react";
import SingleBlogHeader from "../../components/blog/singleblog/SingleBlogHeader";
import SingleBlogContent from "../../components/blog/singleblog/SingleBlogContent";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
import BlogFooter from "../../components/blog/BlogFooter";
import { motion } from "framer-motion";
import { allBlogs } from "../../utils/blogs";
import Loading from "../../components/Loading";

export default function SingleBlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const newBlog = allBlogs.find((x) => x.id == id);
      setBlog(newBlog);
      const related = allBlogs.filter((x) => x.id.toString() !== id.toString());
      setRelatedBlogs(related);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <SingleBlogHeader data={blog && blog} />
      <SingleBlogContent data={blog && blog} />
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
          {relatedBlogs.slice(0, 3).map((x) => (
            <BlogCard
              key={x.id}
              heading={x.title}
              image={x.image}
              date={x.date}
              id={x.id}
            />
          ))}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
}
