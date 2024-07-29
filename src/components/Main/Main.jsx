import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const convertTemperature = (tempF, unit) => {
    return unit === "C" ? ((tempF - 32) * 5) / 9 : tempF;
  };

  const temperature = convertTemperature(
    weatherData.temp.F,
    CurrentTemperatureUnit
  ).toFixed(1);

  return (
    <main className="main">
      {" "}
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {temperature} &deg; {CurrentTemperatureUnit} / You may want
          to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
