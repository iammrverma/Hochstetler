import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { capitalize } from "../util";
import { projects } from "../../public/data";
const ProjectGalleryCard = ({ title }) => {
  const capTitle = capitalize(title);
  const project = projects.find(
    (project) => project.title === title.toLowerCase()
  );
  
  if (!project) return <p>data not set for {capTitle}</p>;

  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const src = `/Hochstetler/projects/${title.replace(/ /g, "_")}/0.jpg`; // adding hochstetler here is important
  const to = `/project-gallery/${title.replace(/ /g, "_")}`;

  return (
    <div
      onClick={() => navigate(to)}
      className="flex-column pointer"
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
          flex: "1",
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

      <h4 className="heading-style-h4" style={{ textTransform: "capitalize" }}>
        {capTitle}
      </h4>
      {project.location && (
        <div className="text-green-accent green-kicker ">{project.location}</div>
      )}
    </div>
  );
};

export default ProjectGalleryCard;
