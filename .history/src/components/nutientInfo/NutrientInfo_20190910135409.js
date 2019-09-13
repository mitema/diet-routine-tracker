import React from "react";
import "./NutrientInfo";
import FoodList from "../foodList/FoodList";
import DietDetails from "../dietDetails/DietDetails";

const NutrientInfo = () => {
  return (
    <ul className="collection" style={{ border: "none" }}>
      <li className="diet-details-container">
        <DietDetails />
      </li>
      <FoodList />
    </ul>
  );
};
export default NutrientInfo;
