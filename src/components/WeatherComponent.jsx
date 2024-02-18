import React from "react";
import useWeatherApi from "../hook/useWeatherApi";
import Header from "./Header";
import Loading from "./Loading";

const WeatherComponent = () => {
  const { weatherData, loading, error } = useWeatherApi("Bogota");

  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  // Lógica para determinar qué imagen mostrar según el clima
  const weatherCondition = weatherData.weather[0].main;
  let imageToShow;

  switch (weatherCondition) {
    case "Clear":
      imageToShow = "https://cdn-icons-png.flaticon.com/512/3845/3845731.png";
      break;
    case "Clouds":
      imageToShow = "https://cdn-icons-png.flaticon.com/512/2272/2272194.png";
      break;
    case "Rain":
      imageToShow = "https://cdn-icons-png.flaticon.com/256/2583/2583520.png";
      break;
    // Otros casos según las condiciones climáticas que desees manejar
    default:
      imageToShow = "https://cdn-icons-png.flaticon.com/512/3845/3845731.png";
  }

  return (
    <div className="text-center mt-4">
      <Header category="" title="Weather Information" />
      <p className="text-lg">City: {weatherData.name}</p>
      <p className="text-lg">Temperature: {weatherData.main.temp} K</p>
      <p className="text-lg">
        {" "}
        description: {weatherData.weather[0].description}
      </p>
      <img
        src={imageToShow}
        alt="Weather"
        className="mx-auto mt-4 rounded-lg shadow-md"
      />
    </div>
  );
};

export default WeatherComponent;
