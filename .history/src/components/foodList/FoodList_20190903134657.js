import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFood } = foodContext;

  addedFoods.map((item, index) => {
    <FoodItem />;
  });

  return <div className="food-list-container">foodlist</div>;
};

export default FoodList;
