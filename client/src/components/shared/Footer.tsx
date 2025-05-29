import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding and Copy */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-primary">
              Devpolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              &copy; {new Date().getFullYear()} My Devpolio. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
