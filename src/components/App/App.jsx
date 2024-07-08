import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIKey } from "../../utils/constants";

function App() {
  // hold weather data
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999 },
    city: "",
  });

  // active modal type
  const [activeModal, setActiveModal] = useState("");

  // selected card data
  const [selectedCard, setSelectedCard] = useState("");

  // Handler for card click event to show preview modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  // Handler to show add garment modal
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  // Handler to close the active modal
  const closeActiveModal = () => {
    setActiveModal("");
  };

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    getWeather(coordinates, APIKey)
      .then((data) => {
        const filteredData = filterWeatherData(data); // Filter the raw weather data
        setWeatherData(filteredData); // Update the weather data state
        console.log(filteredData); // Log the filtered data
      })
      .catch(console.error); // Handle errors
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} /> {}
        <Main weatherData={weatherData} handleCardClick={handleCardClick} /> {}
        <Footer /> {}
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        closeActiveModal={closeActiveModal}
      >
        {/* Form fields for adding a new garment */}
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="ImageUrl" className="modal__label">
          Image{" "}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          {/* Buttons for selecting weather type */}
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input id="warm" type="radio" className="modal__radio-input" />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input id="cold" type="radio" className="modal__radio-input" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        closeActiveModal={closeActiveModal}
      />{" "}
      {/* Render ItemModal with props */}
    </div>
  );
}

export default App; // Export App component
