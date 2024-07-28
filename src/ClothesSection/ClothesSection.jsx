import "./ClothesSection.css";
import React from "react";
import ItemCard from "../components/ItemCard/ItemCard";
function ClothesSection({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__items-title">Your Items</p>
        <button
          type="button"
          className="clothes-section__add-card-button"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
