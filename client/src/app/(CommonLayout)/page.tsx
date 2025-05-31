"use client";

import React from "react";
import { motion } from "framer-motion";

import Hero from "@/components/modules/home/Hero";
import Projects from "@/components/modules/projects/Projects";
import Blogs from "@/components/modules/blogs/Blogs";
import NewsLetter from "@/components/modules/newsLetter/NewsLetter";

import { pageTransition } from "@/utils/animations";

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <Projects />
      <Blogs />
      <NewsLetter />
    </motion.div>
  );
};

export default HomePage;
