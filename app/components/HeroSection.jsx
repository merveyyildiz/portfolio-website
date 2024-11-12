/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = ({heroData}) => {
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
            sequence={heroData.data.title}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block title"
          />
        </motion.h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
          {heroData.data.desc}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
