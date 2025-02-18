import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./buttons/ButtonPrimary";
export const FloorPlanCardMinimal = ({ src, to, title }) => {
  const navigate = useNavigate();
  return (
    <div className="fp-minimal" onClick={() => navigate(to)}>
      <div>
        <img
          src={src}
          alt="src "
          style={{
            width: "100%",
            maxHeight: "220px",
            maxWidth: "270px",
            objectFit: "cover",
            display: "inline-block",
            verticalAlign: "middle",
            borderRadius: "var(--radius--radius-small)",
          }}
        />
      </div>
      <p className="text-green" style={{ padding: "1rem" }}>
        {title}
      </p>
    </div>
  );
};
const FloorPlanCard = ({ src, to, title, area, bedrooms, bathrooms }) => {
  const navigate = useNavigate();
  return (
    <div className="fp" onClick={() => navigate(to)}>
      <div className="fp-img-box">
        <img
          src={src}
          alt="src "
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="flex-column"
        style={{ alignItems: "flex-start", padding: "1rem", gap: "1.5rem" }}
      >
        <h4 className="text-green">{title}</h4>
        
          <div className="area flex-center" style={{ gap: ".5rem" }}>
            <i className="fa-solid fa-house text-red-accent"></i>
            <div className="flex text-green" style={{ gap: ".5rem" }}>
              <div>{area}</div>Sq Ft
            </div>
          </div>
          <div className="bedrooms flex-center" style={{ gap: ".5rem" }}>
            <i className="fa-solid fa-bed text-red-accent"></i>
            <div className="flex text-green" style={{ gap: ".5rem" }}>
              <div>{bedrooms}</div> Bedrooms
            </div>
          </div>
          <div className="bathrooms flex-center" style={{ gap: ".5rem" }}>
            <i className="fa-solid fa-sink text-red-accent"></i>
            <div className="flex text-green" style={{ gap: ".5rem" }}>
              <div>{bathrooms}</div> Bathrooms
            </div>
          </div>
        
      </div>

      <ButtonPrimary
        text={"View Floor Plan"}
        rightArrow
        varient={"grey"}
        styles={{ width: "95%", margin: "auto" }}
      />
    </div>
  );
};

export default FloorPlanCard;
