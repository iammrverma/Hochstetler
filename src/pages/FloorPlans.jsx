import React, { useState } from "react";
import FloorPlanCard from "../components/FloorPlanCard";
import RangeInput from "../components/RangeInput";
import SearchInput from "../components/SearchInput";
import { useFloorPlans } from "../contexts/FloorPlanContext";

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
const FilterCheckbox = ({ value, lable, checked, onChange }) => {
  return (
    <li className="flex" style={{ alignItems: "center", gap: ".25rem" }}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {value} {lable}
    </li>
  );
};

const FloorPlans = () => {
  const { floorPlans } = useFloorPlans();
  const totalFloorPlans = floorPlans.length;
  const [search, setSearch] = useState("");
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedBaths, setSelectedBaths] = useState([]);
  const [inputArea, setInputArea] = useState([100, 5000]);

  const minArea = inputArea[0];
  const maxArea = inputArea[1];

  // console.log(value, inputArea, inputBed, inputBath);

  // Filtering logic
  const filteredFloorPlans = floorPlans.filter((fp) => {
    // Search filter
    const matchesSearch = fp.title.toLowerCase().includes(search.toLowerCase());

    // Area filter
    const matchesArea = fp.area >= minArea && fp.area <= maxArea;

    // Bedroom filter
    const matchesBeds =
      selectedBeds.length === 0 || selectedBeds.includes(fp.bedrooms);

    // Bathroom filter
    const matchesBaths =
      selectedBaths.length === 0 || selectedBaths.includes(fp.bathrooms);

    return matchesSearch && matchesBeds && matchesArea && matchesBaths;
  });

  const clearArea = () => setInputArea([100, 5000]);
  const clearBeds = () => setSelectedBeds([]);
  const clearBaths = () => setSelectedBaths([]);
  const handleCheckboxChange = (setState, value) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
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
        <div
          className="grid-2-4-1"
          style={{ gap: "2rem", alignItems: "flex-start" }}
        >
          <div className="div" style={{ maxWidth: "100%" }}>
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
                  Showing {filteredFloorPlans.length} of {totalFloorPlans} items{" "}
                </div>
                <div
                  onClick={() => {
                    clearArea();
                    clearBeds();
                    clearBaths();
                    setSearch("");
                  }}
                  className="link"
                >
                  Reset All
                </div>
              </div>
              <SearchInput
                title={"Search Here"}
                value={search}
                setValue={(e) => setSearch(e.target.value)}
              />
              {/* Square footage Area */}
              <Filter title={"Square Footage"} onClear={clearArea}>
                <RangeInput
                  min={100}
                  max={5000}
                  inputArea={inputArea}
                  setInputArea={setInputArea}
                />
              </Filter>

              {/* Bedrooms Filter */}
              <Filter title="Bedrooms" onClear={clearBeds}>
                {["1", "2", "3", "4", "5"].map((bed) => (
                  <FilterCheckbox
                    key={bed}
                    value={bed}
                    label="Bedroom"
                    checked={selectedBeds.includes(bed)}
                    onChange={() => handleCheckboxChange(setSelectedBeds, bed)}
                  />
                ))}
              </Filter>
              {/* Bathrooms Filter */}
              <Filter title="Bathrooms" onClear={clearBaths}>
                {["1", "1.5", "2", "2.5", "3", "3.5"].map((bath) => (
                  <FilterCheckbox
                    key={bath}
                    value={bath}
                    label="Bath"
                    checked={selectedBaths.includes(bath)}
                    onChange={() =>
                      handleCheckboxChange(setSelectedBaths, bath)
                    }
                  />
                ))}
              </Filter>
            </div>
          </div>
          <div
            className="no-scrollbar grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              overflowY: "auto",
              gap: "2rem",
            }}
          >
            {filteredFloorPlans.map((plan, index) => (
              <FloorPlanCard plan={plan} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlans;
