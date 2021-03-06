import React from "react";
import "./NutrientInfo.css";
import FoodList from "../foodList/FoodList";
import DietDetails from "../dietDetails/DietDetails";

const NutrientInfo = () => {
  return (
    <ul className="collection nutrient-info-food-list-container">
      <li className="diet-details-container">
        <DietDetails />
      </li>
      <FoodList />
    </ul>
  );
};
export default NutrientInfo;
