import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Feature Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
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
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
