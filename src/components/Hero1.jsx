import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import hero1img from "../assets/hero1.webp";
const Hero1 = () => {
  return (
    <div
      className="flex-center"
      style={{
        backgroundImage: `url(${hero1img})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
        position: "relative",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="text-center flex-column container-large-2"
        style={{
          padding: "2rem",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div className="hp-hero-spacer"></div>
        <div className="hp-hero-spacer"></div>
        <h1 className="text-white">Log Home Living At Its Finest</h1>
        <p className="text-white heading-style-h4">
          Amerish classic log home for rich and woody Aesthetic
        </p>
        <p></p>
        <ButtonPrimary text={"View Log Home Floor Plans"} to={"/floor-plans"} />
      </div>
    </div>
  );
};

export default Hero1;
