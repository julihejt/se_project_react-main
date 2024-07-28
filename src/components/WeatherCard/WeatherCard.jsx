import "../WeatherCard/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

// Defining the WeatherCard functional component, which takes weatherData as a prop
function WeatherCard({ weatherData }) {
  // Finding the matching weather option based on day and condition from the weatherOptions array
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  // Determining the weather option to use; defaulting if no match is found
  let thisWeatherOption;
  if (!weatherOption) {
    thisWeatherOption =
      defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    thisWeatherOption = weatherOption;
  }

  // Returning the JSX for the WeatherCard component
  return (
    <section className="weather-card">
      {/* Displaying the temperature in Fahrenheit */}
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>

      {/* Displaying the weather icon */}
      <img
        src={thisWeatherOption?.url}
        alt={thisWeatherOption?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

// Exporting the WeatherCard component as the default export
export default WeatherCard;
