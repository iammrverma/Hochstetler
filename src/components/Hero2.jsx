import React from "react";

const Hero2 = ({
  children,
  extended,
  heading,
  smallheading,
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
            <h2 className={`heading-style-h1 ${headingClass}`}>
              {heading?.main}
              <span className="text-green-accent"> {heading?.span}</span>
            </h2>
          </div>
        </div>

        <div className="content-block-01">{children}</div>
      </div>
    </div>
  );
};

export default Hero2;
