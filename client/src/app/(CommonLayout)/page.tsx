import Blogs from "@/components/modules/blogs/Blogs";
import Hero from "@/components/modules/home/Hero";
import NewsLetter from "@/components/modules/newsLetter/NewsLetter";
import Projects from "@/components/modules/projects/Projects";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
