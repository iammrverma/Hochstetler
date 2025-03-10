import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const RangeInput = ({ min, max, lable, inputArea, setInputArea }) => {
  const handleChange = (event, newValue) => {
    setInputArea(newValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Labels */}
      

      {/* Range Slider */}
      <Slider
        value={inputArea}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min} // min range
        max={max} // max range
        step={50}
        sx={{
          color: "#4CAF50",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #4CAF50",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#4CAF50",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd",
          },
        }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">
          {inputArea[0]} {lable}
        </Typography>
        <Typography variant="body1">
          {inputArea[1]} {lable}
        </Typography>
      </Box>
    </Box>
    
  );
};

export default RangeInput;
