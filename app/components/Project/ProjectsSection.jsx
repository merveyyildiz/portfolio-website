"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import css from "./ProjectSection.module.scss";

const ProjectSection = ({projectsData}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className={css.title}>
        My Projects
      </h2>
      <ul ref={ref} className={css.list}>
        {projectsData.projects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{duration: 0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              tags={project.tags}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
