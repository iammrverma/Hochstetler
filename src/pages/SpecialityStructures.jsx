import React from "react";
import Header from "../components/Header";
import ProjectGalleryCard from "../components/ProjectGalleryCard";
import hero1img from "../assets/hero1.webp";
import hero2img from "../assets/hero2.jpg";

const SpecialityStructures = () => {
  return (
    <>
      <Header
        title={"Speciality Timber Structures"}
        className={"background-light"}
      />
      <div
        className="container-large-2 flex-column"
        style={{ gap: "5rem", padding: "3rem 0" }}
      >
        <p className="text-green" style={{ fontSize: "1.8rem" }}>
          Post and Beam Perfection
        </p>
        <p>
          From horse barns to timber frame pavilions, our specialty timber
          structures combine expert design, premium materials, and timeless
          craftsmanship—just like our signature log homes. Explore some of our
          recent projects and see how we can elevate your property to the next
          level.
        </p>
        <div className="flex-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <ProjectGalleryCard src={hero1img} title={"title"} />
            <ProjectGalleryCard src={hero2img} title={"title"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialityStructures;
