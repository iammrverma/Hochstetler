import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonPrimary = ({
  text,
  styles = {},
  to,
  varient = "primary",
  rightArrow = false,
  icon,
  onClick,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();
    else if (to) navigate(to);
  };

  return (
    <button
      className={`${
        varient === "green"
          ? "green-btn"
          : varient === "grey"
          ? "grey-btn"
          : "primary-btn"
      }`}
      onClick={handleClick}
      style={styles}
    >
      <div
        className="flex"
        style={{
          gap: "1rem",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {text}
        {rightArrow && <i className="fa-solid fa-arrow-right"></i>}
        {icon && icon}
      </div>
    </button>
  );
};

export default ButtonPrimary;
