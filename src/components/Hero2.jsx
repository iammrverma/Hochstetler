import React from "react";

const Hero2 = ({
  extended,
  heading,
  subheading,
  smallheading,
  description,
  headingWrap,
  headingClass = "text-green",
  style,
}) => {
  return (
    <div
      className="hero2"
      style={{
        padding: "2rem 4rem",
        ...style,
      }}
    >
      <div
        className={`${extended ? "grid-2-1" : "grid"}`}
        style={{ gap: "1rem" }}
      >
        <div>
          {smallheading && (
            <div className="text-green-light uppercase">{smallheading}</div>
          )}
          <div className={`${headingWrap ? "flex" : ""}`}>
            <h2  className={`heading-style-h1 ${headingClass}`}>
              {heading?.main}
              <span className="text-green-accent"> {heading?.span}</span>
            </h2>
          </div>
        </div>

        <div>
          {subheading && (
            <h3
              className={`heading-style-h4`}
              style={{ paddingBottom: "1rem" }}
            >
              {subheading}
            </h3>
          )}
          <p className="text-size-medium text-dark">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
