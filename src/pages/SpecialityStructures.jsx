import React from "react";
import Header from "../components/Header";
import PlaceCard from "../components/PlaceCard";
import hero1img from "../assets/hero1.webp";
import hero2img from "../assets/hero2.jpg";
import Footer from "../components/Footer";

const SpecialityStructures = () => {
  return (
    <>
      <Header
        title={"Speciality Timber Structures"}
        className={"background-light"}
      />
      <div
        className="container-large-2 flex-column"
        style={{ gap: "5rem", padding: "3rem 0" }}
      >
        <h2 className="text-green">Post and Beam Perfection</h2>
        <p>
          From horse barns to timber frame pavilions, our specialty timber
          structures combine expert design, premium materials, and timeless
          craftsmanship—just like our signature log homes. Explore some of our
          recent projects and see how we can elevate your property to the next
          level.
        </p>
        <div className="flex-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <PlaceCard src={hero1img} title={"title"} />
            <PlaceCard src={hero2img} title={"title"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecialityStructures;
