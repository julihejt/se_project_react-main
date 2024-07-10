import { useEffect, useState } from "react";

import "../App/App.css";
import { coordinates, APIKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIKey)
      .then((data) => {
        //data is the json response
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <Header handleCardClick={handleCardClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={setActiveModal} />
        <Footer />
      </div>
      <ModalWithForm
        title="new garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            placeholder="Name"
            id="name"
            type="text"
            className="modal__input"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            placeholder="Image URL"
            id="imageUrl"
            type="url"
            className="modal__input"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label_type_radio">
            {" "}
            <input
              name="radio"
              id="hot"
              type="radio"
              className="modal__radio-input"
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label_type_radio">
            <input
              name="radio"
              id="warm"
              type="radio"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label_type_radio">
            <input
              name="radio"
              id="cold"
              type="radio"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>{" "}
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
