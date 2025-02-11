import React from "react";

const Header = ({
  title,
  className,
  styles,
  children,
  backgroundImage,
  image,
}) => {
  return (
    <div
      className={"header text-green " + (className || "")}
      style={{
        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
        }),
        ...styles, 
      }}
    >
      {title ? <h1>{title}</h1> : children}
      <div
        style={{
          overflow: "hidden",
          marginInline: "auto",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            borderRadius: "var(--radius--radius-med)",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
