/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import css from "./HeroSection.module.scss";

const HeroSection = ({heroData}) => {
  return (
    <section>
      <div className={css.container}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={css.h1}
        >
          <span className={css.subTitle}>
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
        <p className={css.desc}>
          {heroData.data.desc}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
