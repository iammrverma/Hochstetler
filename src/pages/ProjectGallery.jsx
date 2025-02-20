import React from "react";
import Hero2 from "../components/Hero2";
import Header from "../components/Header";
import Cluster from "../components/Cluster";
import headerBg from "../assets/header-bg.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
import PlaceCard from "../components/PlaceCard";

import hero2img from "../assets/hero2.jpg";
import hero1img from "../assets/hero1.webp";
const ProjectGalleryRow = ({ card1, card2, card3, large }) => {
  const repeat = large ? 3 : 2;
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${repeat}, 1fr)`, gap: "1rem" }}
    >
      <PlaceCard
        src={card1.src}
        title={card1.title}
        location={card1.location}
      />
      <PlaceCard
        src={card2.src}
        title={card2.title}
        location={card2.location}
      />

      {large && (
        <PlaceCard
          src={card3.src}
          title={card3.title}
          location={card3.location}
        />
      )}
    </div>
  );
};
const ProjectGallery = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
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
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
        <ProjectGalleryRow
          large={large}
          card1={{ src: hero1img, title: "title", location: "location" }}
          card2={{ src: hero2img, title: "title", location: "location" }}
          card3={{ src: hero1img, title: "title", location: "location" }}
        />
      </div>
    </div>
  );
};

export default ProjectGallery;
