import React from "react";
import Header from "../components/Header";
import ProjectGalleryCard from "../components/ProjectGalleryCard";

import hero1img from "../assets/hero1.webp";
import hero2img from "../assets/hero2.jpg";
const Commercials = () => {
  return (
    <>
      <Header
        title={"Commercial Timber Packages"}
        className={"background-light"}
      />
      <div
        className="container-large-2 flex-column"
        style={{ gap: "5rem", padding: "3rem 0" }}
      >
        <div className="flex-column" style={{ gap: "2rem" }}>
          <p className="text-green" style={{ fontSize: "1.8rem" }}>
            Green building components engineered for your architectural vision
          </p>
          <p>
            Wood timbers offer a sustainable, green alternative to steel,
            providing natural beauty and structural integrity without
            compromising on performance. At Hochstetler Log Homes,
            engineer-certified designs ensure that every component is built to
            meet your project's specific needs and performance standards.
          </p>
          <p>
            Whether you need a versatile event venue or a timber package for a
            commercial building, we have the production capacity and expertise
            to handle large-scale projects.
          </p>
          <p>
            We understand the challenges builders and architects face, such as
            coordinating intricate designs and meeting tight deadlines, and
            provide reliable solutions that align with your project vision.
            Explore our gallery of commercial timber projects to see how we
            bring expertise and attention to detail to every build.
          </p>
        </div>
        <div className="flex-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <ProjectGalleryCard src={hero1img} title={"title"} location={"location"} />
            <ProjectGalleryCard src={hero2img} title={"title"} location={"location"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commercials;
