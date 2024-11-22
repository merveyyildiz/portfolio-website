"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../Tab/TabButton";
import tabData from "../../data/tabData.json";
import css from "./About.module.scss";
import cx from "classnames";

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
      <div className={css.about}>
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-img"
          className="rounded"
        />
        <div className={css.container}>
          <h2 className={css.title}>About Me</h2>
          <p className={css.description}>
            I am a frontend developer with passion for creating interactive and
            responsive web applications. I have experience working with
            Javascript, Typescript, React, Angular, Redux, HTML, SCSS,
            Handlebars.js, and Git. I am a quick learner an I am always looking
            to expand my knowledge and skill set. I am a good team player.
          </p>

          <div className={css.tab}>
            {tabData.data.map((data, index) => (
              <TabButton
                selecTab={() => handleTabChange(data.id)}
                isActive={tab === data.id}
                key={index}
              >
                {data.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul
              className={cx({
                [css.skills]: tab === "skills",
              })}
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
