"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Computer Engineer / Karabuk University</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Angular</li>
        <li>HTML5</li>
        <li>SCSS</li>
        <li>Handlebars.js</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Database Design and Programming with SQL / Oracle</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
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
            to expand my knowledge and skill set. I am a team player.
          </p>

          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((data, index) => (
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
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
