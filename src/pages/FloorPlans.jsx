import React, { useState } from "react";
import FloorPlanCard from "../components/FloorPlanCard";
import floorPlan1 from "../assets/floor-plan-1.jpg";
import floorPlan2 from "../assets/floor-plan-2.jpg";
import floorPlan3 from "../assets/floor-plan-3.jpg";
import Footer from "../components/Footer";
import RangeInput from "../components/RangeInput";
const Filter = ({ title, onClear, children }) => {
  return (
    <div
      className="filer"
      style={{ borderBottom: "1px solid grey", padding: "1rem" }}
    >
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <h4>{title}</h4>
        <p className="link" onClick={onClear}>
          Clear
        </p>
      </div>
      <div className="flex-column" style={{ gap: ".5rem" }}>
        {children}
      </div>
    </div>
  );
};
const FilterCheckbox = ({ value, lable }) => {
  return (
    <li className="flex" style={{ alignItems: "center", gap: ".25rem" }}>
      <input type="checkbox" value={value} />
      {value} {lable}
    </li>
  );
};

const FloorPlans = () => {
  const floorPlans = [
    {
      src: floorPlan1,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan2,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan3,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan1,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan2,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan3,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan1,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan2,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan3,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan1,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan2,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan3,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan1,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan2,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
    {
      src: floorPlan3,
      to: "#",
      title: "Eagle Point Log Home",
      area: "230",
      bedrooms: "3",
      bathrooms: "2",
      name: "title",
    },
  ]; //TODO lift the state up
  const totalFloorPlans = 67;
  const visibleFloorPlans = totalFloorPlans;

  const [inputArea, setInputArea] = useState(null);
  const [inputBed, setInputBed] = useState(null);
  const [inputBath, setInputBath] = useState(null);

  return (
    <>
      <div className="background-light" style={{ padding: "2rem" }}>
        <div
          className="flex-column"
          style={{ gap: "2rem", maxWidth: "48rem", padding: "2rem" }}
        >
          <h2 className="text-green">Log Home Floor Plans</h2>
          <p>
            From cozy cabins to spacious family retreats, find the log home
            floor plan to inspire your vision of home. With our flexible
            designs, you can customize any plan to create a space that's
            uniquely yours. Go beyond the log home blueprints and{" "}
            <span className="link">
              see what makes our building packages a better value.
            </span>
          </p>
          <p>
            Already have a custom log home design?{" "}
            <span className="link">Contact us,</span> and our designers will
            help make your vision a reality.
          </p>
        </div>
        <div className="grid-2-4-1" style={{ gap: "2rem" }}>
          <div>
            <div
              className="filtersSection flex-column"
              style={{
                border: "1px solid var(--base-color-neutral--neutral-lighter)",
                borderRadius: "var(--radius--radius-med)",
                backgroundColor: "var(--base-color-neutral--white)",
                minHeight: "100px",
                padding: "2rem",
                gap: "1rem",
              }}
            >
              <h3 className="text-green">Filters</h3>
              <div className="flex" style={{ justifyContent: "space-between" }}>
                <div className="resultSummary" style={{ textWrap: "wrap" }}>
                  Showing {visibleFloorPlans} of {totalFloorPlans} items{" "}
                </div>
                <div className="reset link">Reset All</div>
              </div>
              <div
                className="inputBox flex"
                style={{
                  alignItems: "center",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 3px",
                  borderColor:
                    "var(--base-color-neutral--neutral-lighter) var(--base-color-neutral--neutral-lighter) #dfdfdf",
                  borderRadius: "var(--radius--radius-small)",
                  minHeight: "3.5rem",
                  marginBottom: "0",
                  width: "100%",
                  padding: "1rem 1.5rem ",
                  backgroundColor: "var(--base-color-neutral--white)",
                  outline: "none",
                  fontSize: "1.125rem",
                }}
              >
                <div className="text-green">
                  <i
                    class="fa-solid fa-magnifying-glass"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <input
                  type="text"
                  placeholder="Search Here"
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "inherit",
                    flex: "1",
                    color: "black",
                    padding: ".5rem ",
                  }}
                />
              </div>
              <Filter title={"Square Footage"} onClear={() => setInputArea(0)}>
                {/* <FilterRange min={500} max={5000} /> */}
                <RangeInput min={500} max={5000} />
              </Filter>
              <Filter title={"Bedrooms"} onClear={() => setInputBed(0)}>
                <FilterCheckbox lable={"Bedroom"} value={1} />
                <FilterCheckbox lable={"Bedroom"} value={2} />
                <FilterCheckbox lable={"Bedroom"} value={3} />
                <FilterCheckbox lable={"Bedroom"} value={4} />
                <FilterCheckbox lable={"Bedroom"} value={5} />
              </Filter>
              <Filter title={"Bathrooms"} onClear={() => setInputBath(0)}>
                <FilterCheckbox lable={"Bath"} value={1} />
                <FilterCheckbox lable={"Bath"} value={1.5} />
                <FilterCheckbox lable={"Bath"} value={2} />
                <FilterCheckbox lable={"Bath"} value={2.5} />
                <FilterCheckbox lable={"Bath"} value={3} />
                <FilterCheckbox lable={"Bath"} value={3.5} />
              </Filter>
            </div>
          </div>
          <div
            className="no-scrollbar grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
              overflowY: "auto",

              gap: "2rem",
            }}
          >
            {floorPlans.map((data) => (
              <FloorPlanCard
                src={data.src}
                to={data.to}
                title={data.title}
                area={data.area}
                bedrooms={data.bedrooms}
                bathrooms={data.bathrooms}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FloorPlans;
