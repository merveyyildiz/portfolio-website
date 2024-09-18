/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-center flex-col text-center">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700 inline-block mb-2">
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
        </h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse a
          officiis error iusto. Consectetur, qui.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
