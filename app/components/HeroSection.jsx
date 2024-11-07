/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-center flex-col text-center h-dvh">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700 inline-block mb-3">
            Hello, I'm
          </span>
          <TypeAnimation
            sequence={[
              "Merve Sert",
              1000,
              "Computer Engineer",
              1000,
              "Frontend Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block"
          />
        </motion.h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
          A software developer who develops modern and user-friendly websites.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
