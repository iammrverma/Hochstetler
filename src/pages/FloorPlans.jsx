import React, { useMemo, useState } from "react";
import FloorPlanCard from "../components/FloorPlanCard";
import RangeInput from "../components/RangeInput";
import SearchInput from "../components/SearchInput";
import { useFloorPlans } from "../contexts/FloorPlanContext";
import { Link } from "react-router-dom";
import { useWindowSize } from "../contexts/WindowSizeContext";
import ButtonPrimary from "../components/buttons/ButtonPrimary";


const Filter = ({ title, onClear, children }) => (
  <div
    className="filter"
    style={{ borderBottom: "1px solid grey", padding: "1rem" }}
  >
    <div className="flex" style={{ justifyContent: "space-between" }}>
      <h4 className="uui-heading-xxsmall-2 text-dark">{title}</h4>
      <p className="link" onClick={onClear}>
        Clear
      </p>
    </div>
    <div className="flex-column" style={{ gap: ".5rem" }}>
      {children}
    </div>
  </div>
);

const FilterCheckbox = ({ value, label, checked, onChange }) => (
  <li className="flex" style={{ alignItems: "center", gap: ".25rem" }}>
    <input
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {value} {label}
  </li>
);

const Filters = ({
  search,
  setSearch,
  inputArea,
  setInputArea,
  selectedBeds,
  setSelectedBeds,
  selectedBaths,
  setSelectedBaths,
  clearArea,
  clearBeds,
  clearBaths,
  totalFloorPlans,
  filteredCount,
}) => (
  <div className="div" style={{ maxWidth: "500%" }}>
    <div
      className="filtersSection flex-column"
      style={{
        border: "1px solid var(--base-color-neutral--neutral-lighter)",
        borderRadius: "var(--radius--radius-med)",
        backgroundColor: "var(--base-color-neutral--white)",
        minHeight: "500px",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <h3 className="heading-style-h3 text-green">Filters</h3>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <div className="resultSummary" style={{ textWrap: "wrap" }}>
          Showing {filteredCount} of {totalFloorPlans} items
        </div>
        <p
          className="link"
          onClick={() => {
            clearArea();
            clearBeds();
            clearBaths();
            setSearch("");
          }}
        >
          Reset All
        </p>
      </div>

      <SearchInput title="Search Here" value={search} setValue={setSearch} />

      <Filter title="Square Footage" onClear={clearArea}>
        <RangeInput
          min={500}
          max={5000}
          inputArea={inputArea}
          setInputArea={setInputArea}
          label="sqft"
        />
      </Filter>

      <Filter title="Bedrooms" onClear={clearBeds}>
        {["1", "2", "3", "4", "5"].map((bed) => (
          <FilterCheckbox
            key={bed}
            value={bed}
            label="Bedroom"
            checked={selectedBeds.includes(bed)}
            onChange={() =>
              setSelectedBeds((prev) =>
                prev.includes(bed)
                  ? prev.filter((item) => item !== bed)
                  : [...prev, bed]
              )
            }
          />
        ))}
      </Filter>

      <Filter title="Bathrooms" onClear={clearBaths}>
        {["1", "1.5", "2", "2.5", "3", "3.5"].map((bath) => (
          <FilterCheckbox
            key={bath}
            value={bath}
            label="Bath"
            checked={selectedBaths.includes(bath)}
            onChange={() =>
              setSelectedBaths((prev) =>
                prev.includes(bath)
                  ? prev.filter((item) => item !== bath)
                  : [...prev, bath]
              )
            }
          />
        ))}
      </Filter>
    </div>
  </div>
);

const FloorPlans = () => {
  const { width } = useWindowSize();
  const large = width > 1080;

  const [showFilters, setShowFilters] = useState(large);
  const { floorPlans } = useFloorPlans();
  const totalFloorPlans = floorPlans.length;
  const [search, setSearch] = useState("");
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedBaths, setSelectedBaths] = useState([]);
  const [inputArea, setInputArea] = useState([500, 5000]);

  // Filtering logic
  const filteredFloorPlans = useMemo(() => {
    return floorPlans.filter((fp) => {
      const matchesSearch = fp.title
        .toLowerCase()
        .includes(search.toString());
      const matchesArea = fp.area >= inputArea[0] && fp.area <= inputArea[1];
      const matchesBeds =
        selectedBeds.length === 0 || selectedBeds.includes(fp.bedrooms);
      const matchesBaths =
        selectedBaths.length === 0 || selectedBaths.includes(fp.bathrooms);
      return matchesSearch && matchesBeds && matchesArea && matchesBaths;
    });
  }, [floorPlans, search, inputArea, selectedBeds, selectedBaths]);

  const clearArea = () => setInputArea([500, 5000]);
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
    <div className="background-light" style={{ padding: "2rem" }}>
      <div className="flex-column" style={{ gap: "2rem", padding: "2rem" }}>
        <h2 className="text-green">Log Home Floor Plans</h2>
        <p className="w-full">
          From cozy cabins to spacious family retreats, find the log home floor
          plan to inspire your vision of home. With our flexible designs, you
          can customize any plan to create a space that's uniquely yours. Go
          beyond the log home blueprints and{" "}
          <Link className="link" to="/difference">
            see what makes our building packages a better value.
          </Link>
        </p>
        <p>
          Already have a custom log home design?{" "}
          <Link className="link" to="/contact">
            Contact us,
          </Link>{" "}
          and our designers will help make your vision a reality.
        </p>
        {!large && (
          <ButtonPrimary
            varient="grey"
            text={"Filter Results"}
            styles={{border:"2px solid var(--base-color-hochstetler-brand--hlh-green)"}}
            onClick={() => setShowFilters((prev) => !prev)}
            icon={
              showFilters ? (
                <i class="fa-solid fa-minus"></i>
              ) : (
                <i class="fa-solid fa-plus"></i>
              )
            }
          />
        )}
      </div>
      <div
        className="grid-2-4-1"
        style={{ gap: "2rem", alignItems: "flex-start" }}
      >
        {(large || showFilters) && (
          <Filters
            search={search}
            setSearch={(e)=>setSearch(e.target.value)}
            inputArea={inputArea}
            setInputArea={setInputArea}
            selectedBeds={selectedBeds}
            setSelectedBeds={setSelectedBeds}
            selectedBaths={selectedBaths}
            setSelectedBaths={setSelectedBaths}
            clearArea={clearArea}
            clearBeds={clearBeds}
            clearBaths={clearBaths}
            totalFloorPlans={totalFloorPlans}
            filteredCount={filteredFloorPlans.length}
          />
        )}

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
  );
};

export default FloorPlans;
