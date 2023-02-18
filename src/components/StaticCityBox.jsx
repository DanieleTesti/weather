import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider } from "@mui/material";
import { weatherBoxStyle } from "../theme/customStyles";
import { time, day } from "../utils/helpers";

const WeatherBox = () => {
  const [cityName, setCityName] = useState([]);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rome,IT&units=imperial&appid=29ae0f7b340de5c8beb1041133ac932d`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCityName(data);
        // console.log(data);
        console.log(cityName.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, []);

  const weatherDetails = [
    {
      text: "Percepita",
      num: (((cityName.main?.feels_like - 32) * 5) / 9).toFixed(),
      unit: "°c",
    },
    {
      text: "Umidità",
      num: cityName.main?.humidity,
      unit: "%",
    },
    {
      text: "Velocità del vento",
      num: cityName.wind?.speed,
      unit: "m/s",
    },
    {
      text: "Pressione",
      num: cityName.main?.pressure,
      unit: "mbar",
    },
  ];

  return (
    <Paper sx={weatherBoxStyle}>
      <Typography variant="h4" mt={5}>
        {cityName.name}
        <Typography variant="h5" component="span">
          , {cityName.sys?.country}
        </Typography>
      </Typography>

      <Typography component="p">
        {time} | {day}
      </Typography>

      <Typography variant="h1" fontWeight="500" mt={5}>
        {(((cityName.main?.temp - 32) * 5) / 9).toFixed()}°c
      </Typography>

      <Typography component="p" mb={5}>
        Min: {(((cityName.main?.temp_min - 32) * 5) / 9).toFixed()}°c | Max:
        {(((cityName.main?.temp_max - 32) * 5) / 9).toFixed()}°c
      </Typography>

      {/* Utilizzato per creare la linea con il testo dentro */}
      <Divider>
        <Typography variant="h5">{cityName.weather?.[0]?.main}</Typography>
      </Divider>

      <div>
        {weatherDetails.map((item) => {
          const { text, num, unit } = item;
          return (
            <Typography component="p" my={2}>
              {text} : {num}
              {unit}
            </Typography>
          );
        })}
      </div>
    </Paper>
  );
};

export default WeatherBox;
