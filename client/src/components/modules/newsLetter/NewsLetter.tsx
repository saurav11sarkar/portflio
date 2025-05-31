"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, cardHoverSmall } from "@/utils/animations";

const NewsLetter = () => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="w-full py-20 px-4 md:px-8"
    >
      <div className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Text Block */}
            <div>
              <h2 className="text-3xl font-extrabold mb-4">
                Subscribe to Newsletter
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Get the latest updates on my projects, blog posts, and tech
                insights delivered straight to your inbox.
              </p>
            </div>

            {/* Right Form Block */}
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:text-white border-gray-300 dark:border-gray-600"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/80 transition-colors duration-300"
                whileHover={cardHoverSmall.whileHover}
                transition={cardHoverSmall.transition}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsLetter;
