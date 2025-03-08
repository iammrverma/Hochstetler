import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFloorPlans } from "../contexts/FloorPlanContext";
import { useWindowSize } from "../contexts/WindowSizeContext";
import House from "../components/svgs/House";
import Bed from "../components/svgs/Bed";
import Bathtub from "../components/svgs/Bathtub";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Hero2 from "../components/Hero2";
import ProjectGalleryCard from "../components/ProjectGalleryCard";
import LogHouse from "../components/svgs/LogHouse";
import PDF from "../components/svgs/PDF";
import { capitalize, scrollTo } from "../util";
import Form from "../components/Form";

const Card = ({ icon: Icon, title, paras, to, text }) => {
  return (
    <div
      className="flex-column text-center"
      style={{
        borderRadius: "var(--radius--radius-med)",
        backgroundColor: "var(--base-color-hochstetler-brand--hlh-beige-med)",
        padding: "2.5rem",
        gap: "1.25rem",
        alignItems: "center",
      }}
    >
      <div className="text-green">
        <Icon />
      </div>
      <h4>{title}</h4>
      {paras?.split("\n").map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <ButtonPrimary text={text} to={to} varient={"green"} />
    </div>
  );
};

const Suggestions = ({ suggestions, title, src, to }) => {
  return (
    <>
      <Hero2
        heading={{ main: "Projects built using the  ", span: title }}
        description={
          "See our showcase of completed models that were built starting from this floor plan."
        }
        style={{ padding: "0" }}
      />

      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
      >
        {suggestions.map((s, index) => (
          <ProjectGalleryCard src={src} title={s} key={index} to={to} />
        ))}
      </div>
    </>
  );
};
const FloorPlanDetail = () => {
  const { floorPlans, setSelectedFloorPlan, selectedFloorPlan } =
    useFloorPlans();
  const { name } = useParams(); // Get the floor plan name from the URL
  const { width } = useWindowSize();
  const large = width > 1080;
  console.log("floorplan name:", name);
  useEffect(() => {
    if (!selectedFloorPlan) {
      const foundPlan = floorPlans.find(
        (plan) => plan.title.replace(/ /g, "_") === name
      );
      setSelectedFloorPlan(foundPlan || null);
    }
  }, [name, floorPlans, selectedFloorPlan, setSelectedFloorPlan]);

  if (!selectedFloorPlan) return <p>Loading . . .</p>;

  const { title, about, bedrooms, bathrooms, area, suggestions } =
    selectedFloorPlan;

  const src = `/Hochstetler/floorPlansImages/${title.replace(/ /g, "_")}.jpg`;
  const to = `/gallery/project-gallery/${title.replace(/ /g, "_")}`;
  const floorMap = `/Hochstetler/floorMaps/${title.replace(/ /g, "_")}.jpg`;

  const capTitle = capitalize(title);
  return (
    <>
      <div
        className="flex background-beige-light"
        style={{
          ...(large
            ? {
                overflow: "hidden",
                flexDirection: "row-reverse",
                gap: "2rem",
                padding: "2rem",
              }
            : {
                flexDirection: "column",
              }),
        }}
      >
        <div className="flex" style={{ flex: "1" }}>
          <img
            src={src}
            alt={src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: large ? "var(--radius--radius-large)" : "",
            }}
          />
        </div>

        <div className="flex-center" style={{ flex: "1" }}>
          <div
            className="flex-column"
            style={{
              gap: "2rem",
              width: "100%",
              padding: large ? "2rem" : "2rem 1rem",
            }}
          >
            <div className="flex">
              <p className="text-green">Floor Plans</p>{" "}
              <p className="text-neutral-light">{` > ${capTitle}`}</p>{" "}
            </div>
            <h2 className="text-green heading-style-h1">{capTitle}</h2>
            <div
              className={large ? "flex" : "flex-column"}
              style={{
                gap: "2rem",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                className="area flex text-green"
                style={{
                  gap: ".5rem",
                  justifyContent: "center",
                  alignItems: "center  ",
                  flexDirection: large ? "column" : "row",
                }}
              >
                <House />
                <div className="flex" style={{ gap: ".5rem" }}>
                  <div>{area}</div> Sq Ft
                </div>
              </div>

              <div
                className="bedrooms flex text-green"
                style={{
                  gap: ".5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: large ? "column" : "row",
                }}
              >
                <Bed />
                <div className="flex" style={{ gap: ".5rem" }}>
                  <div>{bedrooms}</div> Bedrooms
                </div>
              </div>

              <div
                className="bathrooms flex-column text-green"
                style={{
                  gap: ".5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: large ? "column" : "row",
                }}
              >
                <Bathtub />
                <div className="flex " style={{ gap: ".5rem" }}>
                  <div>{bathrooms}</div> Bathrooms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid-2-1 noscrollbar"
        style={{
          alignItems: "flex-start",
          padding: "0",
        }}
      >
        <div>
          <img
            src={floorMap}
            alt=""
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          />
        </div>
        <div
          className="flex-column background-beige-light "
          style={{
            padding: large ? "4rem" : "2rem",
            gap: "1rem",

            alignItems: "flex-start",
          }}
        >
          <Hero2
            heading={{ main: "About The", span: capTitle }}
            description={about}
            style={{ padding: "0" }}
            headingWrap={!large}
          />
          <ButtonPrimary
            text={"Ask About this plan"}
            to={"./#form"}
            onClick={() => scrollTo("form")}
          />
          <Suggestions
            suggestions={suggestions}
            title={capTitle}
            src={src}
            to={to}
          />
          <div
            className="flex-column"
            style={{ alignItems: "center", gap: "1rem", width: "100%" }}
          >
            <Card
              icon={LogHouse}
              title={"How much does a log home cost?"}
              paras={
                "A new log home will typically cost the same as a high quality custom home in your area, depending on your choice of materials, finishes and labor costs. Please contact us for details on this specific model.\nLearn more about how our comprehensive log home packages provide you with a better building experience and greater long-term value."
              }
              text={"View Log Home Packages"}
              to="#"
            />
            <Card
              icon={PDF}
              title={"Download the PDF Flyer"}
              paras={
                "Download a PDF flyer with all the details about this floor plan for easy offline reference."
              }
              text={"Download the PDF Flyer"}
              to="#"
            />
          </div>
        </div>
      </div>
      <div
        className="grid-2-1 background-beige-light"
        style={{
          gap: "2rem",
          alignItems: "flex-start",
          ...(!large ? { padding: "0" } : {}),
        }}
      >
        <div
          className="flex-column"
          style={{
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <h3 className="text-green">
            Ready to learn more about this floor plan?
          </h3>
          <div
            className="flex-center"
            style={{
              borderRadius: "var(--radius--radius-med)",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={src}
              alt={src}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <Form title={`Get ${capTitle} details and pricing!`} />
      </div>
    </>
  );
};

export default FloorPlanDetail;
