"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";

import { 
  AiOutlineDeploymentUnit 
} from "react-icons/ai";
import { FaAmazon } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";

const AboutPage = () => {
  return (
    <motion.div
      className="w-full py-20 px-4 md:px-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h1>

      {/* About Description */}
      <motion.section
        className="mb-16"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto leading-relaxed">
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. I specialize in both frontend and backend
          technologies to deliver seamless user experiences and scalable
          server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-20"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <SiReact className="text-[#61DAFB] text-3xl mr-2" />
              <SiNextdotjs className="text-black dark:text-white text-3xl mr-2" />
              <SiTypescript className="text-[#3178C6] text-3xl mr-2" />
              <SiTailwindcss className="text-[#38B2AC] text-3xl mr-2" />
              <SiHtml5 className="text-[#E34F26] text-3xl mr-2" />
              <SiCss3 className="text-[#1572B6] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Frontend</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <SiNodedotjs className="text-[#339933] text-3xl mr-2" />
              <SiExpress className="text-black dark:text-white text-3xl mr-2" />
              <SiMongodb className="text-[#47A248] text-3xl mr-2" />
              <SiTypescript className="text-[#3178C6] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Backend</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <SiGit className="text-[#F05032] text-3xl mr-2" />
              <SiDocker className="text-[#2496ED] text-3xl mr-2" />
              <FaAmazon className="text-[#FF9900] text-3xl mr-2" />
              <AiOutlineDeploymentUnit className="text-[#00BFFF] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Tools & DevOps</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-20"
        variants={fadeInUp}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Developer Internship
            </h3>
            <p className="text-primary font-medium mb-3">
              Programming Hero — 2024 to 2025
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Led development of multiple web apps using React and Node.js.
              </li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 50%.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-10"
        variants={fadeInUp}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6"
            variants={fadeInUp}
            transition={{ delay: 1 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              B.Sc. in Computer Science & Engineering (CSE)
            </h3>
            <p className="text-primary font-medium mb-3">
              Daffodil International University — 2021 to 2024
            </p>
            <p className="text-secondary">CGPA: 3.70 (Out of 4.00)</p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6"
            variants={fadeInUp}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Diploma in Computer Technology
            </h3>
            <p className="text-primary font-medium mb-3">
              Patuakhali Technical School and College — 2016 to 2020
            </p>
            <p className="text-secondary">CGPA: 3.59 (Out of 4.00)</p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
