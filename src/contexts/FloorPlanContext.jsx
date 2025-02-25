import React, { createContext, useContext, useState } from "react";
import { floorPlans } from "../../public/data";

const FloorPlanContext = createContext();

export const FloorPlanProvider = ({ children }) => {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(null);

  return (
    <FloorPlanContext.Provider
      value={{ floorPlans, selectedFloorPlan, setSelectedFloorPlan }}
    >
      {children}
    </FloorPlanContext.Provider>
  );
};

export const useFloorPlans = () => useContext(FloorPlanContext);
