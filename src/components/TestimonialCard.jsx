import React from "react";

const TestimonialCard = ({ rating, message, location, name }) => {
  return (
    <div
      style={{
        padding: "2rem",
        minWidth: "320px",
        border: "1px solid var(--untitled-ui--gray50)",
        backgroundColor: "var(--base-color-hochstetler-brand--hlh-beige-light)",
        borderRadius: " 1rem",
        flexDirection: "column",
        gap: ".5rem",
        padding: "2rem",
        display: "inline-block",
        display: "flex",
      }}
    >
      <div className="rating flex">
        {Array.from({ length: rating }).map((_, index) => (
          <div
            className="star"
            key={index}
            style={{
              color: "var(--base-color-hochstetler-brand--hlh-green-accent)",
              justifyContent: "center",
              alignItems: "center",
              width: "1.25rem",
              height: "1.25rem",
              marginRight: ".25rem",
              display: "flex",
            }}
          >
            <i className="fa-solid fa-star"></i>
          </div>
        ))}
      </div>
      <p className="text-size-medium">{message}</p>
      <div
        className="flex-column"
        style={{
          textAlign: "left",
          marginTop: "1.5rem",
        }}
      >
        <div
          className=""
          style={{
            color: "var(--base-color-hochstetler-brand--hlh-green)",
            letterSpacing: "normal",
            fontFamily: "quincy-cf, sans-serif",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          {name}
        </div>
        <div
          className=""
          style={{
            color: "var(--base-color-hochstetler-brand--hlh-green-light)",
            letterSpacing: "normal",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: ".875rem",
            lineHeight: "1.5",
          }}
        >
          {location}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
