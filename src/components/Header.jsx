import React from "react";

const Header = ({ title, className, styles }) => {
  return (
    <div
      className={"header text-green " + className}
      styles={{
        ...styles,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
