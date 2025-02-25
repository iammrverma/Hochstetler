import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./buttons/ButtonPrimary";
import Bed from "./svgs/Bed";
import Bathtub from "./svgs/Bathtub";
import House from "./svgs/House";
import defaultImg from "/floorPlansImages/acadia_log_home.jpg";
import { useFloorPlans } from "../contexts/FloorPlanContext";
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
const FloorPlanCard = ({ plan }) => {
  const navigate = useNavigate();
  const { setSelectedFloorPlan } = useFloorPlans();
  const { title, area, bedrooms, bathrooms } = plan;
  const src = `/Hochstetler/floorPlansImages/${title.replace(/ /g, "_")}.jpg`; // adding hochstetler here is important
  const to = `./${title.replace(/ /g, "_")}`;
  

  const handleClick = (e) => {
    setSelectedFloorPlan(plan);
    navigate(to);
  };
  const handleImageError = (e) => {
    console.log("Image failed to load:", e.target.src);
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = defaultImg;
  };

  return (
    <div className="fp" onClick={handleClick}>
      <div className="fp-img-box">
        <img
          src={src}
          onError={handleImageError}
          alt={src}
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
        <h4 className="text-green">
          {title.replace(/\b\w/g, (char) => char.toUpperCase())}
        </h4>

        <div
          className="area flex-center text-red-accent"
          style={{ gap: ".5rem" }}
        >
          <House />
          <div className="flex text-green" style={{ gap: ".5rem" }}>
            <div>{area}</div>Sq Ft
          </div>
        </div>
        <div
          className="bedrooms flex-center text-red-accent"
          style={{ gap: ".5rem" }}
        >
          <Bed />
          <div className="flex text-green" style={{ gap: ".5rem" }}>
            <div>{bedrooms}</div> Bedrooms
          </div>
        </div>
        <div
          className="bathrooms flex-center text-red-accent"
          style={{ gap: ".5rem" }}
        >
          <Bathtub />
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
