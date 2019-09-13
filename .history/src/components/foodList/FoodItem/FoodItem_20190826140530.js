import React from "react";
import "./FoodItem";

const FoodItem = () => {
  return (
    <li className="food-list">
      <div className="food-list-container">
        <div className="food-icon"></div>
        <div className="food-title"></div>
        <div className="food-details"></div>
      </div>
    </li>
  );
};

export default FoodItem;
