import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PlaceCard = ({ src, title, location, to }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className="flex-column "
      style={{
        boxShadow: hovered
          ? "0 0 20px 4px rgba(0,0,0,0.5)"
          : "0 0 0 0 rgba(0,0,0,0)",
        borderRadius: "var(--radius--radius-small)",
        alignItems: "center",
        overflow: "hidden",
        transition: "all 1s ease",
        paddingBottom: ".5rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex-center"
        style={{
          width: "100%",
          borderRadius: "inherit",
          overflow: "hidden",
          marginBottom: "1rem",
          minHeight: "250px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale: hovered ? "1" : "1.2",
            transition: "scale 1s ease",
          }}
          src={src}
          alt={src}
        />
      </div>

      <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
      {location && (
        <div className="text-size-regular text-green-accent">{location}</div>
      )}
    </div>
  );
};

export default PlaceCard;
