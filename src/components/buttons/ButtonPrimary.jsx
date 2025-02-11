import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonPrimary = ({ text, styles, to, varient, rightArrow }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${
        varient === "green"
          ? "green-btn"
          : varient === "grey"
          ? "grey-btn"
          : "primary-btn"
      }`}
      onClick={() => navigate(to)}
      style={styles}
    >
      <div className="flex" style={{ gap: "1rem", alignItems: "baseline", width:"100%", justifyContent:"center" }}>
        {text}
        {rightArrow && <i className="fa-solid fa-arrow-right"></i>}
      </div>
    </button>
  );
};

export default ButtonPrimary;
