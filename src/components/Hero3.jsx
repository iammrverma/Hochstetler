import React from "react";

import hero2img from "../assets/hero2.jpg";
import hero1img from "../assets/hero1.webp";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ProjectGalleryCard from "./ProjectGalleryCard";
import { projects } from "../../public/data";
const Hero3 = () => {
  return (
    <div
      className="flex-column"
      style={{ padding: "6rem 3rem", alignItems: "center", gap: "3rem" }}
    >
      <div className="grid-4-1">
        {projects.map((project) => (
          <ProjectGalleryCard
            title={project.title}
            location={project.location}
          />
        ))}
      </div>
      <ButtonPrimary text={"View Our projects"} />
    </div>
  );
};

export default Hero3;
