import React from "react";

const Hero2 = () => {
  return (
    <div
      className="hero2"
      style={{
        padding: "2rem 1rem",
      }}
    >
      <div className="grid-2-1" style={{ gap: "1rem" }}>
        <div>
          <h2 className="text-green">Inspired by nature.</h2>
          <h2 className="text-green-accent">Built for modern life.</h2>
        </div>
        <div>
          <h3 className="text-dark" style={{ paddingBottom: "1rem" }}>
            The home you've dreamed of starts here.
          </h3>
          <div className="text-size-regular">
            At Hochstetler, we've reimagined the log home experience to solve
            the challenges of the past, ensuring every detail meets your
            aspirations for beauty, comfort, and lasting value. Discover how you
            can embrace tradition while experiencing the innovation and ease of
            today's living.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
