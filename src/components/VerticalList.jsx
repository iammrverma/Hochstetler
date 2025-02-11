import React from "react";

const VerticalList = ({ list, styles, children }) => {
  return (
    <ul
      className="flex-column"
      style={{
        gap: "2rem",
        alignItems: "flex-start",
        ...styles,
      }}
    >
      {list.map((obj, index) => (
        <div key={index}>{children(obj)}</div>
      ))}
    </ul>
  );
};

export default VerticalList;
