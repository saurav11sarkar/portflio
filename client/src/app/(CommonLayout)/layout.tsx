import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
