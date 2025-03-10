import React from "react";
import Hero2 from "../components/Hero2";
import Header from "../components/Header";
import FloorPlanPitch from "../components/FloorPlanPitch";
import Cluster from "../components/Cluster";
import headerBg from "../assets/header-bg.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
import ProjectGalleryCard from "../components/ProjectGalleryCard";
import { projects } from "../../public/data";

export const ProjectGalleryRow = ({ projects, projectsPerRow }) => {
  const repeat = projectsPerRow;
  console.log(projects, projectsPerRow);
  
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${repeat}, 1fr)`, gap: "1rem" }}
    >
      {projects.map((project) => (
        <ProjectGalleryCard title={project.title}  />
      ))}
    </div>
  );
};
const ProjectGallery = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  const projectsPerRow = large ? 3 : 2; // Define number of projects per row
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += projectsPerRow) {
    projectChunks.push(projects.slice(i, i + projectsPerRow));
  }
  return (
    <div className="flex-column" style={{ gap: "2rem" }}>
      <Header backgroundImage={headerBg} styles={{ padding: "0" }}>
        <div
          className="grid-2-1 min-h-full"
          style={{ padding: "6rem 2rem", gap: "1rem" }}
        >
          <Hero2
            heading={{ main: "Explore Our ", span: "Log Home Gallery" }}
            description={
              "Be inspired by the beautifully-crafted spaces that our clients call home. As your log home partner, we'll work with you to refine your ideas, explore styles, and identify the features that matter most."
            }
            headingWrap={!large}
            style={{ padding: "0", display: "flex", alignItems: "center" }}
          />

          {large && <Cluster styles={{ height: "100%" }} />}
        </div>
      </Header>
      <div className="flex-column" style={{ gap: "3rem", padding: "0 4rem" }}>
        {projectChunks.map((chunk, index) => (
          <ProjectGalleryRow
            key={index}
            projects={chunk}
            projectsPerRow={projectsPerRow}
          />
        ))}
      </div>
      <FloorPlanPitch />
    </div>
  );
};

export default ProjectGallery;
