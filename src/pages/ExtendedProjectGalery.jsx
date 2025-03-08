import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertToTitle } from "../util";
import Header from "../components/Header";
import headerBg from "../assets/header-bg.png";
import Hero2 from "../components/Hero2";
import { projects } from "../../public/data";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { ProjectGalleryRow } from "./ProjectGallery";
import { useWindowSize } from "../contexts/WindowSizeContext";
import ProjectGalleryCard from "../components/ProjectGalleryCard";
import FloorPlanPitch from "../components/FloorPlanPitch";
import Breadcrumbs from "../components/BreadCrumbs";

const ExtendedProjectGalery = () => {
  const { name } = useParams();
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const title = convertToTitle(name);

  const src = `/Hochstetler/projects/${name}/0.jpg`; // adding hochstetler here is important
  const project = projects.find(
    (project) => project.title === title.toLowerCase()
  );
  const images = [];
  for (let index = 1; index < project.images; index++) {
    images.push(`/Hochstetler/projects/${name}/${index}.jpg`);
  }
  const large = width > 1080 ? 3 : 2; // Define number of projects per row

  const projectChunks = [];
  for (let i = 0; i < projects.suggetions?.length; i += projectsPerRow) {
    projectChunks.push(
      projects.suggetions
        .slice(i, i + projectsPerRow)
        .map((title) => ({ title }))
    );
    console.log(
      projects.suggetions
        .slice(i, i + projectsPerRow)
        .map((title) => ({ title }))
    );
  }

  return (
    <div className="flex-column" style={{ gap: "4rem" }}>
      <Header
        backgroundImage={headerBg}
        image={src}
        styles={{ paddingTop: "1rem" }}
      >
        <Breadcrumbs />

        <div className="project-template-header flex-column">
          <div className="post-heading-wrapper ">
            <Hero2
              smallheading={project.location}
              heading={{ main: title }}
              description={project.description}
              headingClass="text-dark"
              style={{ padding: "3rem 0" }}
            />
          </div>
        </div>
      </Header>
      <div
        className="project-template-header grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {images.map((img) => (
          <div
            key={img}
            className="flex-center"
            style={{
              borderRadius: "var(--radius--radius-small)",
              overflow: "hidden",
            }}
          >
            <img
              src={img}
              alt={img}
              key={img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: "1",
              }}
            />
          </div>
        ))}
      </div>
      {project.suggetions && (
        <div
          className="flex-column project-template-header"
          style={{ alignItems: "center", gap: "2rem" }}
        >
          <div className="heading-style-h2 text-green">Related Projects</div>
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${large}, 1fr)`,
              gap: "1rem",
            }}
          >
            {project.suggetions.map((suggetions) => (
              <ProjectGalleryCard title={suggetions} />
            ))}
          </div>
          <ButtonPrimary text={"More Projects"} to="/project-gallery" />
        </div>
      )}

      <FloorPlanPitch />
    </div>
  );
};

export default ExtendedProjectGalery;
