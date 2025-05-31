"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const BlogsPage = () => {
  return (
    <motion.div
      className="w-full py-20 px-4 md:px-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        Latest Blog Posts
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-secondary text-center max-w-2xl mx-auto mb-16"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Dive into insightful articles about web development, tools, and practices.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            variants={fadeInUp}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            <div>
              <Link href={`/blogs/${blog.slug}`}>
                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-200">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                {blog.excerpt}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogsPage;
