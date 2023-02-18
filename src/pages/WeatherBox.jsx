import React, { useState } from "react";
import { Paper } from "@mui/material";
import { weatherBoxStyle } from "../theme/customStyles";
import {
  ErrorScreen,
  LoadingScreen,
  SearchBar,
  WeatherInfo,
  WelcomeScreen,
} from "../components";

const WeatherBox = () => {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IT&units=imperial&appid=29ae0f7b340de5c8beb1041133ac932d`;

  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setIsLoading(false);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherData = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCityName("");
  };

  return (
    <Paper sx={weatherBoxStyle}>
      <SearchBar
        cityName={cityName}
        setCityName={setCityName}
        getWeatherData={getWeatherData}
      />

      {isLoading ? (
        <LoadingScreen />
      ) : weatherData?.name ? (
        <WeatherInfo weatherData={weatherData} />
      ) : weatherData?.cod === "404" ? (
        <ErrorScreen weatherData={weatherData} />
      ) : (
        <WelcomeScreen />
      )}
    </Paper>
  );
};

export default WeatherBox;
