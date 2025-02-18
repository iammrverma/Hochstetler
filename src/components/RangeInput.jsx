import React, {useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";


const RangeInput = ({ min, max, lable }) => {
  const [value, setValue] = useState([min, max]); // updated with user interaction

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 350, p: 2 }}>
      {/* Labels */}
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">
          {value[0]} {lable}
        </Typography>
        <Typography variant="body1">
          {value[1]} {lable}
        </Typography>
      </Box>

      {/* Range Slider */}
      <Slider
        value={value}
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
    </Box>
  );
};

export default RangeInput;
