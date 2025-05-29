import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <Link href={`/blogs/${blog.slug}`}>
                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                {blog.excerpt}
              </p>
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-6 mt-auto">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {blog.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          href="/blogs"
          className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/80 transition-colors duration-300"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
