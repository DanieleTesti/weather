import React from "react";
import { Box, Divider, Typography } from "@mui/material";
//utilizzo questa libreria che ho scoperto essere la svolta 😂
import { time, day } from "../utils/helpers";

const WeatherInfo = ({ weatherData }) => {
  const { name, sys, main, weather, wind } = weatherData;

  const weatherDetails = [
    {
      text: "Percepita",
      num: (((main?.feels_like - 32) * 5) / 9).toFixed(),
      unit: "°c",
    },
    {
      text: "Umidità",
      num: main?.humidity,
      unit: "%",
    },
    {
      text: "Velocità del vento",
      num: wind?.speed,
      unit: "m/s",
    },
    {
      text: "Pressione",
      num: main?.pressure,
      unit: "mbar",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" mt={5}>
        {name}
        <Typography variant="h5" component="span">
          , {sys?.country}
        </Typography>
      </Typography>

      <Typography component="p">
        {time} | {day}
      </Typography>

      {/* NON CAPISCO PER QUALE MOTIVO QUI NON SERVE LA CONVERSIONE MENTRE NELLA PAGINA STATICA SI */}
      <Typography variant="h1" fontWeight="500" mt={5}>
        {(((main?.temp - 32) * 5) / 9).toFixed()}°c
      </Typography>

      <Typography component="p" mb={5}>
        Min: {(((main?.temp_min - 32) * 5) / 9).toFixed()}°c | Max:
        {(((main?.temp_max - 32) * 5) / 9).toFixed()}°c
      </Typography>

      {/* Utilizzato per creare la linea con il testo dentro */}
      <Divider>
        <Typography variant="h5">{weather?.[0]?.main}</Typography>
      </Divider>

      <div>
        {weatherDetails.map((item) => {
          const { text, num, unit } = item;
          return (
            <div>
              <p>
                {text} : {num}
                {unit}
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default WeatherInfo;
