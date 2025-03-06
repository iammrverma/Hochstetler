import React from "react";

import headerBg from "../assets/header-bg.png";
import Hero2 from "../components/Hero2";

import Header from "../components/Header";
import ProjectGalleryCard from "../components/ProjectGalleryCard";
import hero1img from "../assets/hero1.webp";
import hero2img from "../assets/hero2.jpg";

const HomeTour360 = () => {
  return (
    <div>
      <Header backgroundImage={headerBg}>
        <Hero2
          heading={{ main: "Make Yourself ", span: "At Home" }}
          description={
            "Curious about life in a handcrafted log home? Take a 360° digital tour and explore every detail as if you're already there!"
          }
          headingWrap
        />
      </Header>
      <div
        className="container-large-2 flex-column"
        style={{ gap: "5rem", padding: "3rem 0" }}
      >
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
    </div>
  );
};

export default HomeTour360;
