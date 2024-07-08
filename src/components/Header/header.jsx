import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";

// Header component for handling add click and weather data
function Header({ handleAddClick, weatherData }) {
  // Get current date
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      {}
      <img className="header__logo" src={logo} />

      {/* Display current date and city name */}
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      {/* Button to trigger add clothes modal */}
      <button
        className="header__add-clothes-btn"
        onClick={handleAddClick}
        type="button"
      >
        + Add Clothes
      </button>

      {/* User information section */}
      <div className="header__user-container">
        <p className="header__userName">Terrence Tegegne</p> {}
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        />{" "}
        {}
      </div>
    </header>
  );
}

export default Header; // Export Header component
