"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const ProjectPage = () => {
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
        My Projects
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto leading-relaxed mb-16"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Explore a few of my recent works. Click below to view the source code or try the live demos.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col group"
            variants={fadeInUp}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-gray-200 dark:border-gray-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4 text-sm">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-primary transition"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-primary transition"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectPage;
