import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods } = foodContext;

  const displayFoodItems = () =>
    addedFoods.map((item, index) => {
      return <FoodItem icon={item.photo.thumb} />;
    });

  return <ul className="food-list-container">{displayFoodItems}</ul>;
};

export default FoodList;
