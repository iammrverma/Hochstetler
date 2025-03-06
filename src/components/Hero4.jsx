import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import hero2img from "../assets/hero2.jpg";
import image from "../assets/houseOnly.png";
const Hero4 = ({ heading, description }) => {
  return (
    <div className="grid-2-1 min-h-full" style={{ padding: "0" }}>
      <div className="flex-center">
        <img src={hero2img} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        className="flex-column"
        style={{
          padding: "2rem",
          backgroundColor: `var(--base-color-hochstetler-brand--hlh-green)`,
          gap: "1.5rem",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "5rem 4rem",
          minWidth: "50%",
        }}
      >
        <img
          src={image}
          alt={image}
          style={{ display: "inline-block", width: "180px" }}
        />
        <h1 className="text-white heading-style-displayh1">
          {heading?.main}
          <span className="text-green-accent">{" "}{heading?.span}</span>
        </h1>
        <p className="text-white text-size-med">{description}</p>
        <ButtonPrimary text={"View Log Home Floor Plans"} />
      </div>
    </div>
  );
};

export default Hero4;
