import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import hero2img from "../assets/hero2.jpg";
const Hero4 = () => {
  return (
    <div className="grid-2-1 min-h-full" style={{padding:"0"}}>
      <div className="flex-center">
        <img src={hero2img} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        className="flex-column"
        style={{
          maxWidth: "80rem",
          padding: "2rem",
          backgroundColor: `var(--base-color-hochstetler-brand--hlh-green)`,
          gap: "1.5rem",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "5rem 2rem",
        }}
      >
        <h1 className="text-white">
          <span style={{ whiteSpace: "nowrap" }}>Come Home to </span> <br />
          <span className="text-green-accent">craftmanship.</span>
        </h1>
        <p className="text-white">
          Amerish classic log home for rich and woody Aesthetic
        </p>
        <ButtonPrimary text={"View Log Home Floor Plans"} />
      </div>
    </div>
  );
};

export default Hero4;
