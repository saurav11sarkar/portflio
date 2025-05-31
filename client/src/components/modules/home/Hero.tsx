// /components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="w-full py-20 px-4 md:px-0 ">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/profile.avif"
            alt="Saurav Sarkar"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 object-cover ring-4 ring-primary shadow-lg"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-black dark:text-white"
        >
          Hi, I&apos;m{" "}
          <motion.span
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
            className="text-primary"
          >
            Saurav Sarkar
          </motion.span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
        >
          I am a software engineer with a passion for building web applications.
        </motion.p>

        <div className="flex justify-center space-x-6 mb-10">
          <Link
            href="https://github.com/saurav11sarkar"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black dark:text-white text-2xl hover:text-primary transition-colors duration-300" />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#0A66C2] text-2xl hover:text-primary transition-colors duration-300" />
          </Link>
          <Link
            href="https://wa.me/8801518643073"
            aria-label="WhatsApp Chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[#25D366] text-2xl hover:text-primary transition-colors duration-300" />
          </Link>
        </div>

        <Link href="/SAURAV SARKAR CV.pdf" download>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-primary/80 transition">
            Hire Me <Download size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
