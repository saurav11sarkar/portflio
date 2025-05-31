"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormInputs>();

  const handleOnSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        reset();
      } else {
        console.error("Failed:", result.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <motion.div
      className="w-full px-4 md:px-8 py-20"
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="space-y-10 text-gray-700 dark:text-gray-300"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="max-w-md leading-relaxed">
              I’m always open to discussing new projects or opportunities to collaborate.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <Link href="mailto:sarkar15-4285@diu.edu.bd" className="text-blue-600 dark:text-blue-400 hover:underline">
                    sarkar15-4285@diu.edu.bd
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <Link href="tel:+8801518643073" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +880 1518-643073
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p>Mirpur-10, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-5">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                validation: { required: "Name is required" },
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                validation: {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                },
              },
            ].map(({ id, label, type, validation }, idx) => (
              <motion.div
                key={id}
                variants={fadeInUp}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <label htmlFor={id} className="block font-medium mb-1">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  {...register(id as keyof ContactFormInputs, validation)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors[id as keyof ContactFormInputs] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[id as keyof ContactFormInputs]?.message}
                  </p>
                )}
              </motion.div>
            ))}

            <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {isSubmitSuccessful && (
              <motion.p
                className="text-green-500 text-sm text-center mt-2"
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
