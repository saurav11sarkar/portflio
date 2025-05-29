import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full py-20 px-4 md:px-0 ">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/profile.avif"
            alt="Saurav Sarkar"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 object-cover ring-4 ring-primary shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black dark:text-white">
          Hi, I'm <span className="text-primary">Saurav Sarkar</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          I am a software engineer with a passion for building web applications.
        </p>

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
