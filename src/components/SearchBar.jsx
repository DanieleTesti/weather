import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = ({ cityName, setCityName, getWeatherData }) => {
  return (
    <Box component="form" onSubmit={getWeatherData}>
      <TextField
        label="Enter City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
