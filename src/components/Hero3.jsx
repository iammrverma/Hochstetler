import React from "react";

import hero2img from "../assets/hero2.jpg";
import hero1img from "../assets/hero1.webp";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ProjectGalleryCard from "./ProjectGalleryCard";

const Hero3 = () => {
  return (
    <div
      className="flex-column"
      style={{ padding: "6rem 3rem", alignItems: "center", gap: "3rem" }}
    >
      <div className="grid-4-1">
        <ProjectGalleryCard src={hero1img} title="Place name" location={"location"} />
        <ProjectGalleryCard src={hero2img} title="Place name" location={"location"} />
        <ProjectGalleryCard src={hero1img} title="Place name" location={"location"} />
        <ProjectGalleryCard src={hero2img} title="Place name" location={"location"} />
      </div>
      <ButtonPrimary text={"View Our projects"} />
    </div>
  );
};

export default Hero3;
