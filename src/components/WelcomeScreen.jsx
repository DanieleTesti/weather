import React from "react";
import { Box, Typography } from "@mui/material";

const WelcomeScreen = () => {
  return (
    <>
      <Box mt={8} mb={4}>
        <Typography variant="h4" color="primary.main" fontWeight={500}>
          Vedi le previsioni delle varie città
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          Per i tuoi spostamenti
        </Typography>
      </Box>
    </>
  );
};

export default WelcomeScreen;
