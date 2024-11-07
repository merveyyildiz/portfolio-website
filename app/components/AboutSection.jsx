"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import tabData from "../data/tabData.json";

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-img"
          className="rounded"
        />
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with passion for creating interactive and
            responsive web applications. I have experience working with
            Javascript, Typescript, React, Angular, Redux, HTML, SCSS,
            Handlebars.js, and Git. I am a quick learner an I am always looking
            to expand my knowledge and skill set. I am a good team player.
          </p>

          <div className="flex flex-row justify-start mt-8">
            {tabData.data.map((data, index) => (
              <TabButton
                selecTab={() => handleTabChange(data.id)}
                active={tab === data.id}
                key={index}
              >
                {data.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul
              className={tab === "skills" ? "grid grid-cols-2 list-disc" : ""}
            >
              {tabData.data
                .find((data) => data.id === tab)
                .content.map((cntnt, index) => (
                  <li key={index}>{cntnt}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
