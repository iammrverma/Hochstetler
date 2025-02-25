import React from "react";

const Hero2 = ({
  extended,
  heading,
  subheading,
  smallheading,
  description,
  headingWrap,
  style,
}) => {
  return (
    <div
      className="hero2"
      style={{
        padding: "2rem 1rem",
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
            <h3 className="text-green">{heading?.main}</h3>
            {!extended && <span>&nbsp;</span>}
            <h3 className="text-green-accent">{heading?.span}</h3>
          </div>
        </div>

        <div>
          {subheading && (
            <h3 className={`text-dark `} style={{ paddingBottom: "1rem" }}>
              {subheading}
            </h3>
          )}
          <p className="text-size-regular">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
