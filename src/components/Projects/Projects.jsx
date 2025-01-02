import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../utils/projectData";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:px-24 md:py-14 text-white bg-black/30"
    >
      <h1 className="text-2xl md:text-4xl text-white uppercase font-extrabold text-center">
        Projects
      </h1>
      <div className="py-12 md:px-8 flex items-center justify-center flex-wrap gap-10 md:gap-16">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            ImageSrc={project.imageSrc}
            cardTitle={project.title}
            cardBody={project.description}
            cardLink={project.link}
            cardSourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};
