import React, { useState } from "react";

import hero2img from "../assets/hero2.jpg";
import hero1img from "../assets/hero1.webp";
import ButtonPrimary from "./buttons/ButtonPrimary";
const Card = ({ src, title, location }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-column "
      style={{
        boxShadow: hovered
          ? "0 0 20px 4px rgba(0,0,0,0.5)"
          : "0 0 0 0 rgba(0,0,0,0)",
        borderRadius: "2rem",
        alignItems: "center",
        overflow: "hidden",
        transition: "all 1s ease",
        paddingBottom:".5rem"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="img-box flex-center"
        style={{
          width: "100%",
          borderRadius: "inherit",
          overflow: "hidden",
          marginBottom: "1rem",
          minHeight: "250px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale: hovered ? "1" : "1.2",
            transition: "scale 1s ease",
          }}
          src={src}
          alt={src}
        />
      </div>

      <h3>{title}</h3>
      <div className="text-size-regular text-green-accent">{location}</div>
    </div>
  );
};
const Hero3 = () => {
  return (
    <div
      className="flex-column"
      style={{ padding: "6rem 3rem", alignItems: "center", gap: "3rem" }}
    >
      <div className="grid-4-1">
        <Card src={hero1img} title="Place name" location={"location"} />
        <Card src={hero2img} title="Place name" location={"location"} />
        <Card src={hero1img} title="Place name" location={"location"} />
        <Card src={hero2img} title="Place name" location={"location"} />
      </div>
      <ButtonPrimary text={"View Our projects"} />
    </div>
  );
};

export default Hero3;
