import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.imgUrl}
            tags={project.tags}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
